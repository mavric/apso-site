import { Check, type LucideIcon } from "lucide-react";

interface LedgerRow {
  label: string;
  value: string;
  icon?: LucideIcon;
}

interface HeroLedgerProps {
  label: string;
  status?: string;
  rows: LedgerRow[];
  footer?: string;
}

export function HeroLedger({ label, status = "READY", rows, footer }: HeroLedgerProps) {
  return (
    <div className="flex h-full flex-col justify-center py-2 lg:py-10">
      <div className="border-y border-white/10">
        <div className="flex items-center justify-between border-b border-white/10 py-4">
          <span className="font-mono text-[10px] uppercase text-white/42">{label}</span>
          <span className="rounded-sm border border-accent/25 bg-accent/10 px-2 py-1 font-mono text-[9px] text-accent">
            {status}
          </span>
        </div>
        <div className="divide-y divide-white/10">
          {rows.map((row, index) => {
            const Icon = row.icon;
            return (
              <div key={row.label} className="grid grid-cols-[34px_1fr] gap-3 py-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-accent">
                  {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : <Check aria-hidden="true" className="h-4 w-4" />}
                </span>
                <span>
                  <span className="block font-mono text-[9px] text-white/30">0{index + 1}</span>
                  <span className="mt-1 block font-display text-[15px] font-semibold text-white">{row.label}</span>
                  <span className="mt-0.5 block text-[12px] leading-5 text-white/48">{row.value}</span>
                </span>
              </div>
            );
          })}
        </div>
        {footer && <p className="border-t border-white/10 py-4 font-mono text-[10px] text-accent">{footer}</p>}
      </div>
    </div>
  );
}
