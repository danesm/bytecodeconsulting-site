"use client";

import { useEffect } from "react";
import { projectTypes } from "@/lib/site-content";

const DRAFT_STORAGE_KEY = "bytecode-webmcp-enquiry-draft";
const DRAFT_EVENT_NAME = "bytecode:webmcp-enquiry-draft";

type EnquiryDraft = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
  autoSubmit?: boolean;
  source?: string;
};

function storeDraft(draft: EnquiryDraft) {
  window.sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
  window.dispatchEvent(new CustomEvent(DRAFT_EVENT_NAME, { detail: draft }));
}

function openContactPage() {
  window.location.assign("/contact?webmcp=1");
}

export function WebMcpTools() {
  useEffect(() => {
    if (typeof window === "undefined" || !navigator.modelContext) {
      return;
    }

    const validProjectTypes = new Set(projectTypes);

    const tools: ModelContextTool[] = [
      {
        name: "open_contact_page",
        description: "Open the Bytecode Consulting contact page so the user can start an enquiry.",
        annotations: { readOnlyHint: false },
        execute: () => {
          openContactPage();

          return {
            status: "opened",
            url: "/contact",
          };
        },
      },
      {
        name: "choose_enquiry_type",
        description: "Set the enquiry type for the Bytecode Consulting contact form and open the contact page if needed.",
        inputSchema: {
          type: "object",
          properties: {
            projectType: {
              type: "string",
              enum: projectTypes,
              description: "The enquiry type to preselect on the contact form.",
            },
            message: {
              type: "string",
              description: "Optional context to prefill in the project details field.",
            },
          },
          required: ["projectType"],
        },
        annotations: { readOnlyHint: false },
        execute: (input) => {
          const projectType = typeof input.projectType === "string" ? input.projectType : "";

          if (!validProjectTypes.has(projectType)) {
            throw new Error("Unsupported enquiry type.");
          }

          const draft: EnquiryDraft = {
            projectType,
            message: typeof input.message === "string" ? input.message : undefined,
            source: "webmcp",
          };

          storeDraft(draft);

          if (window.location.pathname !== "/contact") {
            openContactPage();
          }

          return {
            status: "ready",
            projectType,
          };
        },
      },
      {
        name: "request_training",
        description: "Start a training enquiry with Bytecode Consulting and prefill the contact form for a workshop or training conversation.",
        inputSchema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Optional details about the team, student group, or training goal.",
            },
          },
        },
        annotations: { readOnlyHint: false },
        execute: (input) => {
          storeDraft({
            projectType: "Training/workshop",
            message:
              typeof input.message === "string" && input.message.trim().length > 0
                ? input.message
                : "I would like to discuss training options, workshop formats, and suitable outcomes for my team or group.",
            source: "webmcp",
          });

          openContactPage();

          return {
            status: "ready",
            projectType: "Training/workshop",
          };
        },
      },
      {
        name: "request_ai_consultation",
        description: "Start an AI consultation enquiry with Bytecode Consulting and prefill the contact form for AI advisory or delivery support.",
        inputSchema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Optional details about the AI challenge, use case, or goal.",
            },
          },
        },
        annotations: { readOnlyHint: false },
        execute: (input) => {
          storeDraft({
            projectType: "AI consulting",
            message:
              typeof input.message === "string" && input.message.trim().length > 0
                ? input.message
                : "I would like to discuss AI consulting, adoption opportunities, and practical next steps for my business.",
            source: "webmcp",
          });

          openContactPage();

          return {
            status: "ready",
            projectType: "AI consulting",
          };
        },
      },
      {
        name: "download_training_brochure",
        description: "Open the Bytecode Consulting training brochure page for workshop and training information.",
        annotations: { readOnlyHint: false },
        execute: () => {
          window.location.assign("/training-brochure");

          return {
            status: "opened",
            url: "/training-brochure",
          };
        },
      },
      {
        name: "send_enquiry",
        description: "Submit a Bytecode Consulting enquiry through the website contact form.",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The sender's name.",
            },
            email: {
              type: "string",
              description: "The sender's email address.",
            },
            company: {
              type: "string",
              description: "Optional company or organisation name.",
            },
            projectType: {
              type: "string",
              enum: projectTypes,
              description: "The enquiry type to use.",
            },
            message: {
              type: "string",
              description: "Project details or the enquiry message.",
            },
          },
          required: ["name", "email", "projectType", "message"],
        },
        annotations: { readOnlyHint: false },
        execute: async (input, client) => {
          const draft: EnquiryDraft = {
            name: typeof input.name === "string" ? input.name : "",
            email: typeof input.email === "string" ? input.email : "",
            company: typeof input.company === "string" ? input.company : "",
            projectType: typeof input.projectType === "string" ? input.projectType : "",
            message: typeof input.message === "string" ? input.message : "",
            autoSubmit: true,
            source: "webmcp",
          };

          if (!draft.name || !draft.email || !draft.projectType || !draft.message) {
            throw new Error("Name, email, enquiry type, and message are required.");
          }

          if (!validProjectTypes.has(draft.projectType)) {
            throw new Error("Unsupported enquiry type.");
          }

          const confirmSubmission = async () => {
            if (typeof window.confirm === "function") {
              return window.confirm("Submit this enquiry to Bytecode Consulting now?");
            }

            return true;
          };

          const confirmed = client.requestUserInteraction
            ? await client.requestUserInteraction(confirmSubmission)
            : await confirmSubmission();

          if (!confirmed) {
            return {
              status: "cancelled",
            };
          }

          storeDraft(draft);

          if (window.location.pathname !== "/contact") {
            openContactPage();
          }

          return {
            status: "submitting",
            projectType: draft.projectType,
          };
        },
      },
    ];

    for (const tool of tools) {
      navigator.modelContext.registerTool(tool);
    }

    return () => {
      if (!navigator.modelContext) {
        return;
      }

      for (const tool of tools) {
        navigator.modelContext.unregisterTool(tool.name);
      }
    };
  }, []);

  return null;
}

export { DRAFT_EVENT_NAME, DRAFT_STORAGE_KEY };
