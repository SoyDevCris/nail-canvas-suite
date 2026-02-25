import { Save } from "lucide-react";
import AdminLayout from "./AdminLayout";
import { salonInfo } from "@/data/mockData";

const AdminConfig = () => (
  <AdminLayout>
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Configuración</h1>

      <div className="max-w-2xl space-y-6">
        {/* Salon Info */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="font-display text-lg font-semibold text-foreground">Información del Salón</h2>
          <div className="mt-4 space-y-3">
            {[
              { label: "Nombre", value: salonInfo.name },
              { label: "Dirección", value: salonInfo.address },
              { label: "Ciudad", value: salonInfo.city },
              { label: "WhatsApp", value: salonInfo.whatsapp },
              { label: "Instagram", value: salonInfo.instagram },
              { label: "Horarios", value: salonInfo.hours },
            ].map(f => (
              <div key={f.label}>
                <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">{f.label}</label>
                <input
                  type="text"
                  defaultValue={f.value}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Policies */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-card">
          <h2 className="font-display text-lg font-semibold text-foreground">Políticas</h2>
          <div className="mt-4">
            <label className="mb-1 block font-body text-xs font-medium text-muted-foreground">Política de cancelación</label>
            <textarea
              defaultValue="Cancelaciones deben realizarse con al menos 4 horas de anticipación. En caso contrario, se cobrará el 50% del servicio."
              rows={3}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 font-body text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-lg gradient-rose px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
          <Save size={16} /> Guardar Cambios
        </button>
      </div>
    </div>
  </AdminLayout>
);

export default AdminConfig;
