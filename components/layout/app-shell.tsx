import Link from "next/link";
import { Bell, LayoutDashboard, Menu, MessagesSquare, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppShellProps = {
  children: React.ReactNode;
  currentPath: "/app/dashboard";
};

const navItems = [
  { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "#", label: "Announcements", icon: Bell, disabled: true },
  { href: "#", label: "Forums", icon: MessagesSquare, disabled: true },
];

export function AppShell({ children, currentPath }: AppShellProps) {
  return (
    <div className="min-h-screen bg-page text-text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:px-6">
        <details className="rounded-xl border border-border-subtle bg-surface shadow-card md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35">
            Navigation
            <Menu aria-hidden size={16} />
          </summary>
          <nav aria-label="Mobile sidebar" className="border-t border-border-subtle px-2 py-2">
            <ul className="space-y-1">
              {navItems.map(({ href, label, icon: Icon, disabled }) => (
                <li key={label}>
                  <Link
                    href={disabled ? "#" : href}
                    aria-disabled={disabled}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35",
                      currentPath === href
                        ? "bg-accent-soft text-accent"
                        : "text-text-secondary hover:bg-slate-100 hover:text-text-primary",
                      disabled && "pointer-events-none opacity-60",
                    )}
                  >
                    <Icon aria-hidden size={16} />
                    {label}
                    {disabled ? <Badge className="ml-auto">Planned</Badge> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>

        <aside className="hidden w-64 shrink-0 rounded-xl border border-border-subtle bg-surface p-4 shadow-card md:block">
          <div className="mb-5">
            <p className="text-sm font-semibold text-text-primary">VIT Connect</p>
            <p className="text-xs text-text-secondary">Campus Hub Prototype</p>
          </div>
          <nav aria-label="Sidebar" className="space-y-1">
            {navItems.map(({ href, label, icon: Icon, disabled }) => (
              <Link
                key={label}
                href={disabled ? "#" : href}
                aria-disabled={disabled}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35",
                  currentPath === href
                    ? "bg-accent-soft text-accent"
                    : "text-text-secondary hover:bg-slate-100 hover:text-text-primary",
                  disabled && "pointer-events-none opacity-60",
                )}
              >
                <Icon aria-hidden size={16} />
                {label}
                {disabled ? <Badge className="ml-auto">Planned</Badge> : null}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1" id="main-content">
          <header className="mb-4 rounded-xl border border-border-subtle bg-surface px-4 py-3 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-lg font-semibold">Authenticated Shell (Development Prototype)</h1>
                <p className="text-sm text-text-secondary">Authentication is not wired to production identity yet.</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning">Dev-only session</Badge>
                <Button variant="secondary" className="gap-2" type="button">
                  <ShieldCheck size={14} aria-hidden />
                  Access Policy
                </Button>
              </div>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
