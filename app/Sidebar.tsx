"use client";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  Settings,
  X,
} from "lucide-react";

export type Tab = "Overview" | "Analytics" | "Customers" | "Billing" | "Settings";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  activeTab: Tab;
  onSelect: (tab: Tab) => void;
};

const links = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Analytics", icon: BarChart3 },
  { label: "Customers", icon: Users },
  { label: "Billing", icon: CreditCard },
  { label: "Settings", icon: Settings },
] as const;

export default function Sidebar({ open, onClose, activeTab, onSelect }: SidebarProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-950/50 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
              <BarChart3 size={18} />
            </span>
            Pulse
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {links.map(({ label, icon: Icon }) => {
            const isActive = activeTab === label;
            return (
              <button
                key={label}
                onClick={() => {
                  onSelect(label);
                  onClose();
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-600 dark:text-cyan-400"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}