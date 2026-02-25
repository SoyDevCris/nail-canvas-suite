import { Plus, Pencil, Trash2 } from "lucide-react";
import AdminLayout from "./AdminLayout";
import { promotions } from "@/data/mockData";

const AdminPromos = () => (
  <AdminLayout>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Promociones</h1>
        <button className="flex items-center gap-2 rounded-lg gradient-rose px-4 py-2 font-body text-sm font-semibold text-primary-foreground">
          <Plus size={16} /> Nueva Promo
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {promotions.map(p => (
          <div key={p.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-start justify-between">
              <span className="rounded-full gradient-rose px-3 py-1 font-body text-xs font-bold text-primary-foreground">{p.discount}</span>
              <div className="flex gap-1">
                <button className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground"><Pencil size={14} /></button>
                <button className="rounded-lg p-1.5 text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
              </div>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-1 font-body text-sm text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </AdminLayout>
);

export default AdminPromos;
