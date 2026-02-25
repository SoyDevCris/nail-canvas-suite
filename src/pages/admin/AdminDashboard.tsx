import { Calendar, Users, Scissors, DollarSign, TrendingUp, Clock } from "lucide-react";
import AdminLayout from "./AdminLayout";

const stats = [
  { label: "Citas Hoy", value: "8", icon: Calendar, change: "+2 vs ayer" },
  { label: "Citas Semana", value: "34", icon: TrendingUp, change: "+12%" },
  { label: "Clientes Activos", value: "156", icon: Users, change: "+5 nuevos" },
  { label: "Ingresos Est.", value: "$2.4M", icon: DollarSign, change: "+18%" },
];

const recentAppointments = [
  { id: 1, client: "Carolina M.", service: "Nail Art Premium", time: "9:00 AM", status: "confirmada" },
  { id: 2, client: "Valentina R.", service: "Semipermanente", time: "10:30 AM", status: "pendiente" },
  { id: 3, client: "Laura P.", service: "Pedicure Spa", time: "12:00 PM", status: "confirmada" },
  { id: 4, client: "María José S.", service: "Uñas Acrílicas", time: "2:00 PM", status: "pendiente" },
  { id: 5, client: "Ana G.", service: "Manicure Clásica", time: "3:30 PM", status: "confirmada" },
];

const topServices = [
  { name: "Semipermanente", count: 45, pct: 85 },
  { name: "Nail Art Premium", count: 32, pct: 65 },
  { name: "Uñas Acrílicas", count: 28, pct: 55 },
  { name: "Manicure Spa", count: 20, pct: 40 },
];

const statusColors: Record<string, string> = {
  confirmada: "bg-green-100 text-green-700",
  pendiente: "bg-yellow-100 text-yellow-700",
  completada: "bg-blue-100 text-blue-700",
  cancelada: "bg-red-100 text-red-700",
};

const AdminDashboard = () => (
  <AdminLayout>
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(s => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="font-body text-xs font-medium text-muted-foreground">{s.label}</span>
              <s.icon size={18} className="text-primary" />
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-foreground">{s.value}</p>
            <p className="mt-1 font-body text-xs text-muted-foreground">{s.change}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Appointments */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="font-display text-lg font-semibold text-foreground">Citas de Hoy</h2>
          <div className="mt-4 space-y-3">
            {recentAppointments.map(a => (
              <div key={a.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
                <div>
                  <p className="font-body text-sm font-medium text-foreground">{a.client}</p>
                  <p className="font-body text-xs text-muted-foreground">{a.service}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                    <Clock size={12} /> {a.time}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 font-body text-xs font-medium ${statusColors[a.status]}`}>
                    {a.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Services */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="font-display text-lg font-semibold text-foreground">Servicios Más Populares</h2>
          <div className="mt-4 space-y-4">
            {topServices.map(s => (
              <div key={s.name}>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-foreground">{s.name}</span>
                  <span className="font-body text-xs text-muted-foreground">{s.count} citas</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full gradient-rose" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default AdminDashboard;
