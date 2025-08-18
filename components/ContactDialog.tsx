"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDialog({
  open,
  onOpenChange,
}: ContactDialogProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setSuccess("Thanks! I'll get back to you soon.");
      formRef.current?.reset();
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to send message.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-white/10">
        <DialogHeader>
          <DialogTitle>Contact me</DialogTitle>
          <DialogDescription>
            Fill in the form and I&apos;ll reach out.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs text-white/70">Name</label>
              <Input name="name" placeholder="Your name" required />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/70">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/70">Message</label>
            <Textarea name="message" placeholder="How can I help?" required />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <RainbowButton disabled={loading} type="submit">
              {loading ? "Sending…" : "Send"}
            </RainbowButton>
            {error && <span className="text-red-400 text-sm">{error}</span>}
            {success && (
              <span className="text-emerald-400 text-sm">{success}</span>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
