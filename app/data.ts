// app/data.ts
export interface Invoice {
  id: number;
  customer: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
}

export const invoices: Invoice[] = [
  { id: 1, customer: "John Doe", amount: 250, status: "Paid" },
  { id: 2, customer: "Jane Smith", amount: 450, status: "Pending" },
  { id: 3, customer: "Acme Corp", amount: 1200, status: "Overdue" },
  { id: 4, customer: "Bob Builder", amount: 700, status: "Paid" },
  { id: 5, customer: "Alice Wonderland", amount: 300, status: "Pending" },
];
