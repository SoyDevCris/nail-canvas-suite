import { Plus, Star, Trash2 } from "lucide-react";
import AdminLayout from "./AdminLayout";
import galleryImg from "@/assets/gallery-nails.jpg";
import heroImg from "@/assets/hero-nails.jpg";
import salonImg from "@/assets/salon-interior.jpg";

const mockPhotos = [
  { id: 1, src: galleryImg, tags: ["Nail Art", "Diseño"], featured: true },
  { id: 2, src: heroImg, tags: ["French", "Elegante"], featured: false },
  { id: 3, src: salonImg, tags: ["Estudio"], featured: false },
  { id: 4, src: galleryImg, tags: ["Acrílico"], featured: true },
  { id: 5, src: heroImg, tags: ["Semipermanente"], featured: false },
  { id: 6, src: salonImg, tags: ["Ambiente"], featured: true },
];

const AdminGaleria = () => (
  <AdminLayout>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Galería</h1>
        <button className="flex items-center gap-2 rounded-lg gradient-rose px-4 py-2 font-body text-sm font-semibold text-primary-foreground">
          <Plus size={16} /> Subir Foto
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {mockPhotos.map(p => (
          <div key={p.id} className="group relative overflow-hidden rounded-xl border border-border">
            <img src={p.src} alt="Galería" className="h-40 w-full object-cover" />
            <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-foreground/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex gap-1">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full bg-background/80 px-2 py-0.5 font-body text-[10px] font-medium text-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-1">
                <button className="rounded-lg bg-background/80 p-1.5 text-foreground hover:text-primary">
                  <Star size={14} className={p.featured ? "fill-primary text-primary" : ""} />
                </button>
                <button className="rounded-lg bg-background/80 p-1.5 text-foreground hover:text-destructive">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AdminLayout>
);

export default AdminGaleria;
