"use client";

import { useState } from "react";

type Props = { email: string; copyLabel: string; copiedLabel: string };

export function CopyEmail({ email, copyLabel, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="self-start rounded-full border border-paper/30 px-5 py-2.5 text-sm font-medium transition-colors hover:border-paper sm:self-auto"
    >
      <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
    </button>
  );
}
