"use client";

import { useState } from "react";

interface AnnouncementBarProps {
  message: string;
  href?: string;
  linkText?: string;
}

export function AnnouncementBar({ message, href, linkText }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-brand text-white text-sm text-center py-2.5 px-10">
      <p>
        {message}
        {href && linkText && (
          <>
            {" "}
            <a href={href} className="underline font-medium hover:opacity-80">
              {linkText}
            </a>
          </>
        )}
      </p>
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity cursor-pointer"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
    </div>
  );
}
