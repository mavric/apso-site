interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ children, language = "bash", filename }: CodeBlockProps) {
  return (
    <div className="rounded-lg border border-line-1 bg-navy overflow-hidden">
      {filename && (
        <div className="px-4 py-2 border-b border-white/10 text-fg-5 text-mono text-[13px]">
          {filename}
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-mono text-[14px] text-white/90" data-language={language}>
          {children}
        </code>
      </pre>
    </div>
  );
}
