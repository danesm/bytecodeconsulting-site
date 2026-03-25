export {};

declare global {
  type ModelContextClient = {
    requestUserInteraction?: <T>(callback: () => Promise<T> | T) => Promise<T>;
  };

  type ModelContextTool = {
    name: string;
    description: string;
    inputSchema?: Record<string, unknown>;
    execute: (input: Record<string, unknown>, client: ModelContextClient) => Promise<unknown> | unknown;
    annotations?: {
      readOnlyHint?: boolean;
    };
  };

  interface ModelContext {
    registerTool(tool: ModelContextTool): void;
    unregisterTool(name: string): void;
  }

  interface Navigator {
    modelContext?: ModelContext;
  }
}
