// export default function Page() {
//   return <p>Dashboard Page</p>;
// }
import CardWrapper from '@/app/ui/dashboard/cards';

const recentInvoices = [
  { id: 'INV-004', customer: 'Initech', amount: 950, status: 'Paid' },
  { id: 'INV-003', customer: 'Soylent', amount: 420, status: 'Overdue' },
  { id: 'INV-002', customer: 'Globex', amount: 850, status: 'Pending' },
];

const recentCustomers = [
  { name: 'Acme Corp', joined: '2 days ago' },
  { name: 'Globex', joined: '5 days ago' },
  { name: 'Initech', joined: '1 week ago' },
];

export default function DashboardPage() {
  return (
    <main className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your business performance
        </p>
      </div>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Invoices */}
        <div className="lg:col-span-2 rounded-xl border bg-white p-6">
          <h2 className="mb-4 text-lg font-medium">Recent Invoices</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="pb-2">Invoice</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b last:border-none">
                  <td className="py-3">{invoice.id}</td>
                  <td>{invoice.customer}</td>
                  <td>${invoice.amount}</td>
                  <td>
                    <StatusBadge status={invoice.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Customers */}
        <div className="rounded-xl border bg-white p-6">
          <h2 className="mb-4 text-lg font-medium">New Customers</h2>

          <ul className="space-y-4">
            {recentCustomers.map((customer) => (
              <li
                key={customer.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="font-medium">{customer.name}</span>
                <span className="text-gray-500">{customer.joined}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Paid: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Overdue: 'bg-red-100 text-red-700',
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
