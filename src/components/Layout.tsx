import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { salonInfo } from "@/data/mockData";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/galeria", label: "Galería" },
  { to: "/reservar", label: "Reservar" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="container-narrow flex items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="font-display text-xl font-semibold tracking-wide text-foreground md:text-2xl">
          {salonInfo.name}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`font-body text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/reservar"
          className="hidden rounded-full gradient-rose px-6 py-2 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 md:inline-block"
        >
          Reservar
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 font-body text-sm font-medium tracking-wide transition-colors ${
                      location.pathname === l.to
                        ? "bg-rose-light text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/reservar"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full gradient-rose px-6 py-3 text-center font-body text-sm font-semibold text-primary-foreground"
                >
                  Reservar Ahora
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const whatsappLink = `https://wa.me/${salonInfo.whatsapp.replace(/\+/g, "")}`;

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">{salonInfo.name}</h3>
            <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{salonInfo.description}</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-medium text-foreground">Horarios</h4>
            <p className="mt-2 font-body text-sm text-muted-foreground">{salonInfo.hours}</p>
            <p className="mt-1 font-body text-sm text-muted-foreground">{salonInfo.address}</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-medium text-foreground">Síguenos</h4>
            <div className="mt-3 flex gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Phone size={18} />
                <span className="font-body text-sm">WhatsApp</span>
              </a>
              <a href={`https://instagram.com/${salonInfo.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Instagram size={18} />
                <span className="font-body text-sm">{salonInfo.instagram}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">© {new Date().getFullYear()} {salonInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => {
  const link = `https://wa.me/${salonInfo.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent("¡Hola! Me gustaría reservar una cita.")}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
