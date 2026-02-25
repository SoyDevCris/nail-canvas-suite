import { useState } from "react";
import { Calendar, Search, Filter, MoreHorizontal } from "lucide-react";
import AdminLayout from "./AdminLayout";

type Status = "pendiente" | "confirmada" | "completada" | "cancelada" | "no_show";

interface Appointment {
  id: number;
  client: string;
  phone: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  status: Status;
  notes: string;
}

const mockAppointments: Appointment[] = [
  { id: 1, client: "Carolina M.", phone: "+573001234567", service: "Nail Art Premium", staff: "Ana López", date: "2026-02-25", time: "9:00 AM", status: "confirmada", notes: "" },
  { id: 2, client: "Valentina R.", phone: "+573009876543", service: "Semipermanente", staff: "María García", date: "2026-02-25", time: "10:30 AM", status: "pendiente", notes: "Primera vez" },
  { id: 3, client: "Laura P.", phone: "+573005551234", service: "Pedicure Spa", staff: "Ana López", date: "2026-02-25", time: "12:00 PM", status: "confirmada", notes: "" },
  { id: 4, client: "María José S.", phone: "+573002223333", service: "Uñas Acrílicas", staff: "Sofía Rodríguez", date: "2026-02-26", time: "9:00 AM", status: "pendiente", notes: "Diseño francés" },
  { id: 5, client: "Ana G.", phone: "+573004445555", service: "Manicure Clásica", staff: "María García", date: "2026-02-26", time: "11:00 AM", status: "completada", notes: "" },
  { id: 6, client: "Camila T.", phone: "+573006667777", service: "Polygel", staff: "Sofía Rodríguez", date: "2026-02-26", time: "2:00 PM", status: "cancelada", notes: "Reagendó para la próxima semana" },
];

const statusColors: Record<Status, string> = {
  confirmada: "bg-green-100 text-green-700",
  pendiente: "bg-yellow-100 text-yellow-700",
  completada: "bg-blue-100 text-blue-700",
  cancelada: "bg-red-100 text-red-700",
  no_show: "bg-gray-100 text-gray-700",
};

const AdminCitas = () => {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("todos");

  const filtered = appointments.filter(a => {
    const matchSearch = a.client.toLowerCase().includes(search.toLowerCase()) || a.service.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "todos" || a.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const updateStatus = (id: number, status: Status) => {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-display text-2xl font-bold text-foreground">Citas</h1>
          <button className="rounded-lg gradient-rose px-4 py-2 font-body text-sm font-semibold text-primary-foreground">
            + Nueva Cita
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar cliente o servicio..."
              className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 font-body text-sm outline-none focus:border-primary"
            />
          </div>
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary"
          >
            <option value="todos">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="confirmada">Confirmada</option>
            <option value="completada">Completada</option>
            <option value="cancelada">Cancelada</option>
            <option value="no_show">No Show</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Cliente</th>
                <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Servicio</th>
                <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Profesional</th>
                <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Fecha</th>
                <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Hora</th>
                <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Estado</th>
                <th className="px-4 py-3 text-left font-body text-xs font-semibold uppercase text-muted-foreground">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(a => (
                <tr key={a.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="px-4 py-3">
                    <p className="font-body text-sm font-medium text-foreground">{a.client}</p>
                    <p className="font-body text-xs text-muted-foreground">{a.phone}</p>
                  </td>
                  <td className="px-4 py-3 font-body text-sm text-foreground">{a.service}</td>
                  <td className="px-4 py-3 font-body text-sm text-muted-foreground">{a.staff}</td>
                  <td className="px-4 py-3 font-body text-sm text-muted-foreground">{a.date}</td>
                  <td className="px-4 py-3 font-body text-sm text-muted-foreground">{a.time}</td>
                  <td className="px-4 py-3">
                    <select
                      value={a.status}
                      onChange={e => updateStatus(a.id, e.target.value as Status)}
                      className={`rounded-full border-0 px-2.5 py-1 font-body text-xs font-medium outline-none ${statusColors[a.status]}`}
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="confirmada">Confirmada</option>
                      <option value="completada">Completada</option>
                      <option value="cancelada">Cancelada</option>
                      <option value="no_show">No Show</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="p-8 text-center font-body text-sm text-muted-foreground">No se encontraron citas</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCitas;
