"use client";

import { useEffect, useState } from "react";
import { BarChart3, Users, CreditCard, Settings } from "lucide-react";
import Sidebar, { type Tab } from "./Sidebar";
import Navbar from "./Navbar";
import MetricCards from "./MetricCards";
import DataTable from "./DataTable";

// Title, subtitle and placeholder text for each screen
const screens = {
  Overview: {
    title: "Dashboard",
    subtitle: "Welcome back. Here is what is happening today.",
  },
  Analytics: {
    title: "Analytics",
    subtitle: "Track traffic, growth and performance over time.",
    heading: "Analytics Workspace Content",
    text: "Charts and detailed reports will appear here.",
    icon: BarChart3,
  },
  Customers: {
    title: "Customers",
    subtitle: "See and manage everyone who uses your product.",
    heading: "Customer Data Management Grid",
    text: "Your customer list, filters and profiles will appear here.",
    icon: Users,
  },
  Billing: {
    title: "Billing",
    subtitle: "Plans, invoices and payment methods.",
    heading: "Billing & Invoices Center",
    text: "Subscription plans and invoice history will appear here.",
    icon: CreditCard,
  },
  Settings: {
    title: "Settings",
    subtitle: "Control your account and preferences.",
    heading: "Account Settings Panel",
    text: "Profile, team and notification options will appear here.",
    icon: Settings,
  },
} as const;

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const screen = screens[activeTab];

  return (
    <div className="flex min-h-screen">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        onSelect={setActiveTab}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar
          dark={dark}
          onToggleTheme={() => setDark(!dark)}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">{screen.title}</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {screen.subtitle}
            </p>
          </div>

          {activeTab === "Overview" ? (
            <>
              <MetricCards />
              <DataTable />
            </>
          ) : (
            <PlaceholderView
              icon={screens[activeTab].icon}
              heading={screens[activeTab].heading}
              text={screens[activeTab].text}
            />
          )}
        </main>
      </div>
    </div>
  );
}

// A simple "coming soon" style screen used by the other tabs
function PlaceholderView({
  icon: Icon,
  heading,
  text,
}: {
  icon: React.ComponentType<{ size?: number }>;
  heading: string;
  text: string;
}) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-800">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-600 dark:text-cyan-400">
          <Icon size={28} />
        </span>
        <h2 className="mt-4 text-xl font-semibold">{heading}</h2>
        <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
          {text}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="h-28 animate-pulse rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
          />
        ))}
      </div>
    </section>
  );
}