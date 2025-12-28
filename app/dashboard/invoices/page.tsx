// export default function Page() {
//   return <p>Invoices Page</p>;
// }

type Invoice = {
  id: string;
  customer: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
};

const invoices: Invoice[] = [
  { id: 'INV-001', customer: 'Acme Corp', amount: 1200, status: 'paid' },
  { id: 'INV-002', customer: 'Globex', amount: 850, status: 'pending' },
  { id: 'INV-003', customer: 'Soylent', amount: 420, status: 'overdue' },
  { id: 'INV-004', customer: 'Initech', amount: 950, status: 'paid' },
];

export default function InvoicesPage() {
  return (
    <main className="p-6">
      {/* Page Title */}
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">
        Invoices
      </h1>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Invoice
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t">
                <td className="px-6 py-4 text-sm">{invoice.id}</td>
                <td className="px-6 py-4 text-sm">{invoice.customer}</td>
                <td className="px-6 py-4 text-sm">${invoice.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <StatusBadge status={invoice.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function StatusBadge({
  status,
}: {
  status: 'paid' | 'pending' | 'overdue';
}) {
  const styles = {
    paid: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    overdue: 'bg-red-100 text-red-700',
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
