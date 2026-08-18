import {
  BookOpen,
  Bot,
  Braces,
  Building2,
  Circle,
  CloudCog,
  ContactRound,
  Github,
  Layers3,
  LayoutTemplate,
  PanelsTopLeft,
  Rocket,
  ShoppingCart,
  Sparkles,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  bot: Bot,
  braces: Braces,
  "building-2": Building2,
  "cloud-cog": CloudCog,
  "contact-round": ContactRound,
  github: Github,
  "layers-3": Layers3,
  "layout-template": LayoutTemplate,
  "panels-top-left": PanelsTopLeft,
  rocket: Rocket,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  terminal: Terminal,
  wrench: Wrench,
};

export function NavItemIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Circle;
  return <Icon aria-hidden="true" className={className} strokeWidth={1.8} />;
}
