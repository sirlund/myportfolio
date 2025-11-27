"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--color-border-default)",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          background: "var(--color-bg-primary, #ffffff)",
          color: "var(--color-text-primary, #000000)",
          border: "1px solid var(--color-border-default, #e5e5e5)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          zIndex: 9999,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
