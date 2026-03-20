"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const syncServiceWorkers = async () => {
      try {
        if (process.env.NODE_ENV !== "production") {
          const registrations = await navigator.serviceWorker.getRegistrations();
          await Promise.all(registrations.map((registration) => registration.unregister()));
          return;
        }

        await navigator.serviceWorker.register("/sw.js");
      } catch {
        // Non-blocking enhancement; ignore registration failures.
      }
    };

    void syncServiceWorkers();
  }, []);

  return null;
}
