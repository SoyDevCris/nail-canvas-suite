import { MapPin, Clock, Phone, Instagram, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { salonInfo } from "@/data/mockData";
import salonImg from "@/assets/salon-interior.jpg";

const Contacto = () => {
  const whatsappLink = `https://wa.me/${salonInfo.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent("¡Hola! Quiero más información.")}`;

  return (
    <Layout>
      <section className="section-padding gradient-hero">
        <div className="container-narrow text-center">
          <SectionReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Contacto</span>
            <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">¿Hablamos?</h1>
            <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
              Estamos aquí para resolver tus dudas y ayudarte a lucir unas uñas increíbles.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Información de contacto</h2>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    Escríbenos por WhatsApp o visítanos en nuestro estudio.
                  </p>
                </div>

                <div className="space-y-5">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-xl border border-border p-4 transition-colors hover:border-primary/30 hover:bg-rose-light">
                    <Phone size={20} className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">WhatsApp</p>
                      <p className="font-body text-sm text-muted-foreground">{salonInfo.whatsapp}</p>
                    </div>
                  </a>
                  <a href={`https://instagram.com/${salonInfo.instagram.replace("@","")}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-xl border border-border p-4 transition-colors hover:border-primary/30 hover:bg-rose-light">
                    <Instagram size={20} className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Instagram</p>
                      <p className="font-body text-sm text-muted-foreground">{salonInfo.instagram}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 rounded-xl border border-border p-4">
                    <MapPin size={20} className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Dirección</p>
                      <p className="font-body text-sm text-muted-foreground">{salonInfo.address}</p>
                      <p className="font-body text-xs text-muted-foreground">{salonInfo.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-border p-4">
                    <Clock size={20} className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Horarios</p>
                      <p className="font-body text-sm text-muted-foreground">{salonInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <img src={salonImg} alt="Nuestro estudio" className="h-full min-h-[300px] w-full rounded-2xl object-cover shadow-card" loading="lazy" />
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
