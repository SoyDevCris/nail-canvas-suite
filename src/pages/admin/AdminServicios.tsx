import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import AdminLayout from "./AdminLayout";
import { services as mockServices, formatPrice, categories } from "@/data/mockData";

const AdminServicios = () => {
  const [serviceList] = useState(mockServices);

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-foreground">Servicios</h1>
          <button className="flex items-center gap-2 rounded-lg gradient-rose px-4 py-2 font-body text-sm font-semibold text-primary-foreground">
            <Plus size={16} /> Nuevo Servicio
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map(s => (
            <div key={s.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">{s.category}</span>
                <div className="flex gap-1">
                  <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                    <Pencil size={14} />
                  </button>
                  <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{s.name}</h3>
              <p className="mt-1 font-body text-xs text-muted-foreground line-clamp-2">{s.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="font-display text-base font-bold text-primary">{formatPrice(s.price_from)}</span>
                <span className="font-body text-xs text-muted-foreground">{s.duration_min} min</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminServicios;
