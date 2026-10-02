const transactions = [
  { id: "#TX-1021", customer: "Acme Corp", plan: "Enterprise", amount: "$2,400.00", status: "Paid", date: "Oct 01, 2026" },
  { id: "#TX-1020", customer: "Globex Inc", plan: "Pro", amount: "$480.00", status: "Paid", date: "Sep 30, 2026" },
  { id: "#TX-1019", customer: "Initech", plan: "Starter", amount: "$99.00", status: "Pending", date: "Sep 29, 2026" },
  { id: "#TX-1018", customer: "Umbrella Ltd", plan: "Pro", amount: "$480.00", status: "Failed", date: "Sep 28, 2026" },
  { id: "#TX-1017", customer: "Hooli", plan: "Enterprise", amount: "$2,400.00", status: "Paid", date: "Sep 27, 2026" },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Failed: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
};

export default function DataTable() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="border-b border-slate-200 px-5 py-4 dark:border-slate-700">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-160 text-left text-sm">
          <thead className="text-xs uppercase text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">ID</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Plan</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/40">
                <td className="px-5 py-4 font-mono text-xs">{t.id}</td>
                <td className="px-5 py-4 font-medium">{t.customer}</td>
                <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{t.plan}</td>
                <td className="px-5 py-4">{t.amount}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[t.status]}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}