interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, id, ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-fg-2 mb-1.5">
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full rounded-md border bg-bg-0 px-4 py-2.5 text-fg-2 placeholder:text-fg-5 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors resize-y min-h-[120px] ${
          error ? "border-red-400" : "border-line-1"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
