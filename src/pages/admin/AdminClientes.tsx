import { Search, Phone } from "lucide-react";
import AdminLayout from "./AdminLayout";

const mockClients = [
  { id: 1, name: "Carolina M.", phone: "+573001234567", email: "carolina@email.com", visits: 12, lastVisit: "2026-02-20" },
  { id: 2, name: "Valentina R.", phone: "+573009876543", email: "val@email.com", visits: 5, lastVisit: "2026-02-18" },
  { id: 3, name: "Laura P.", phone: "+573005551234", email: "laura@email.com", visits: 8, lastVisit: "2026-02-22" },
  { id: 4, name: "María José S.", phone: "+573002223333", email: "mjs@email.com", visits: 3, lastVisit: "2026-02-15" },
  { id: 5, name: "Ana G.", phone: "+573004445555", email: "ana@email.com", visits: 20, lastVisit: "2026-02-24" },
];

const AdminClientes = () => (
  <AdminLayout>
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Clientes</h1>

      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar cliente..."
          className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 font-body text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-card">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Nombre</th>
              <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Teléfono</th>
              <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Visitas</th>
              <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Última Visita</th>
              <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Acción</th>
            </tr>
          </thead>
          <tbody>
            {mockClients.map(c => (
              <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                <td className="px-4 py-3 font-body text-sm font-medium text-foreground">{c.name}</td>
                <td className="px-4 py-3 font-body text-sm text-muted-foreground">{c.phone}</td>
                <td className="px-4 py-3 font-body text-sm text-muted-foreground">{c.email}</td>
                <td className="px-4 py-3 font-body text-sm text-foreground">{c.visits}</td>
                <td className="px-4 py-3 font-body text-sm text-muted-foreground">{c.lastVisit}</td>
                <td className="px-4 py-3">
                  <a
                    href={`https://wa.me/${c.phone.replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-green-100 px-2.5 py-1 font-body text-xs font-medium text-green-700 hover:bg-green-200"
                  >
                    <Phone size={12} /> WhatsApp
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
);

export default AdminClientes;
