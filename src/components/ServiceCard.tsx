import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Service, formatPrice } from "@/data/mockData";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group hover-lift rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
      <span className="inline-block rounded-full bg-rose-light px-3 py-1 font-body text-xs font-medium text-primary">
        {service.category}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{service.name}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-display text-lg font-bold text-primary">{formatPrice(service.price_from)}</span>
          <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
            <Clock size={12} /> {service.duration_min} min
          </span>
        </div>
        <Link
          to={`/reservar?servicio=${service.id}`}
          className="flex items-center gap-1 font-body text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
        >
          Reservar <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
