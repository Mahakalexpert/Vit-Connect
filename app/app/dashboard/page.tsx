import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
} from "@/components/ui/table";

const sampleAnnouncements = [
  {
    id: "DEV-001",
    category: "Academic",
    title: "Sample notice card for layout validation",
    status: "Draft",
  },
  {
    id: "DEV-002",
    category: "Campus",
    title: "Synthetic forum moderation placeholder",
    status: "Pending",
  },
];

export default function DashboardPage() {
  return (
    <main className="space-y-4 pb-4">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardTitle>Total users</CardTitle>
          <CardDescription>-- (planned data source)</CardDescription>
        </Card>
        <Card>
          <CardTitle>Active notices</CardTitle>
          <CardDescription>-- (planned data source)</CardDescription>
        </Card>
        <Card>
          <CardTitle>Pending reviews</CardTitle>
          <CardDescription>-- (planned data source)</CardDescription>
        </Card>
        <Card>
          <CardTitle>Integrations</CardTitle>
          <CardDescription>Not connected in Milestone 1</CardDescription>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <Card>
          <CardTitle>Announcement queue (synthetic)</CardTitle>
          <CardDescription>Development-only records to validate table, spacing, and badge patterns.</CardDescription>
          <div className="mt-4">
            <TableContainer>
              <Table>
                <TableHead>
                  <tr>
                    <TableHeaderCell>ID</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Title</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                  </tr>
                </TableHead>
                <tbody className="divide-y divide-border-subtle bg-white">
                  {sampleAnnouncements.map((item) => (
                    <tr key={item.id}>
                      <TableCell className="font-mono text-xs">{item.id}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>
                        <Badge>{item.status}</Badge>
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </div>
        </Card>

        <Card>
          <CardTitle>State patterns</CardTitle>
          <CardDescription>Reusable examples for empty, loading, and error experiences.</CardDescription>
          <ul className="mt-4 space-y-3 text-sm text-text-secondary">
            <li className="rounded-md border border-border-subtle bg-slate-50 px-3 py-2">
              <span className="font-medium text-text-primary">Loading</span>: Fetching module configuration...
            </li>
            <li className="rounded-md border border-border-subtle bg-slate-50 px-3 py-2">
              <span className="font-medium text-text-primary">Empty</span>: No live campus data connected yet.
            </li>
            <li className="rounded-md border border-border-subtle bg-amber-50 px-3 py-2 text-amber-800">
              <span className="font-medium text-amber-900">Error</span>: Adapter endpoint unavailable (prototype message).
            </li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
