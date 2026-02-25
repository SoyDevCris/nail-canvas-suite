import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Calendar, Scissors, Users, Image, Tag, Settings, LogOut, Menu, X, ChevronRight
} from "lucide-react";

const sidebarLinks = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/citas", icon: Calendar, label: "Citas" },
  { to: "/admin/servicios", icon: Scissors, label: "Servicios" },
  { to: "/admin/clientes", icon: Users, label: "Clientes" },
  { to: "/admin/galeria", icon: Image, label: "Galería" },
  { to: "/admin/promos", icon: Tag, label: "Promociones" },
  { to: "/admin/configuracion", icon: Settings, label: "Configuración" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - desktop */}
      <aside className="hidden w-60 flex-col border-r border-border bg-card md:flex">
        <div className="flex h-14 items-center border-b border-border px-5">
          <Link to="/admin" className="font-display text-lg font-bold text-primary">Velvet Admin</Link>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {sidebarLinks.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm transition-colors ${
                  active
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <l.icon size={18} />
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut size={18} /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-64 bg-card shadow-elevated">
            <div className="flex h-14 items-center justify-between border-b border-border px-5">
              <span className="font-display text-lg font-bold text-primary">Velvet Admin</span>
              <button onClick={() => setSidebarOpen(false)}><X size={20} className="text-muted-foreground" /></button>
            </div>
            <nav className="space-y-1 p-3">
              {sidebarLinks.map(l => {
                const active = location.pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm transition-colors ${
                      active ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <l.icon size={18} /> {l.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-border p-3">
              <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-muted-foreground hover:text-destructive">
                <LogOut size={18} /> Cerrar sesión
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center gap-3 border-b border-border px-4 md:px-6">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu size={20} className="text-foreground" />
          </button>
          <div className="flex items-center gap-1 font-body text-xs text-muted-foreground">
            <span>Admin</span>
            <ChevronRight size={12} />
            <span className="font-medium text-foreground">
              {sidebarLinks.find(l => l.to === location.pathname)?.label || "Panel"}
            </span>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
