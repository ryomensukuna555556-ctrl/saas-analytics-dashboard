import {
  DollarSign,
  Users,
  Activity,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const metrics = [
  { label: "Total Revenue", value: "$48,295", change: "+12.5%", up: true, icon: DollarSign },
  { label: "Active Users", value: "12,480", change: "+8.2%", up: true, icon: Users },
  { label: "Sessions", value: "93,210", change: "+3.1%", up: true, icon: Activity },
  { label: "Churn Rate", value: "2.4%", change: "-0.6%", up: false, icon: TrendingDown },
];

export default function MetricCards() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map(({ label, value, change, up, icon: Icon }) => (
        <div
          key={label}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {label}
            </p>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-600 dark:text-cyan-400">
              <Icon size={18} />
            </span>
          </div>
          <p className="mt-3 text-2xl font-bold sm:text-3xl">{value}</p>
          <p
            className={`mt-2 flex items-center gap-1 text-sm font-medium ${
              up ? "text-emerald-500" : "text-rose-500"
            }`}
          >
            {up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {change}
            <span className="font-normal text-slate-500 dark:text-slate-400">
              vs last month
            </span>
          </p>
        </div>
      ))}
    </section>
  );
}