"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40",
          "border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
          "disabled:cursor-not-allowed disabled:opacity-50 min-h-28",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
