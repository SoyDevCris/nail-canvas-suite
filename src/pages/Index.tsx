import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Shield, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import ServiceCard from "@/components/ServiceCard";
import HeroParticles from "@/components/HeroParticles";
import HandMockup from "@/components/HandMockup";
import { services, testimonials, promotions, salonInfo } from "@/data/mockData";
import heroImg from "@/assets/hero-nails.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import galleryImg from "@/assets/gallery-nails.jpg";

const Index = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden gradient-hero">
        <HeroParticles />
        <div className="container-narrow relative z-10 px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="mb-4 inline-block rounded-full bg-rose-light px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary">
                Estudio Premium de Uñas
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
                {salonInfo.tagline}
              </h1>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted-foreground md:text-lg">
                {salonInfo.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/reservar"
                  className="inline-flex items-center gap-2 rounded-full gradient-rose px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                >
                  <Sparkles size={16} /> Reservar Ahora
                </Link>
                <Link
                  to="/servicios"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 font-body text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Ver Servicios <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden md:block"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                <img src={heroImg} alt="Esmaltes premium de uñas" className="h-[500px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float rounded-2xl bg-background p-4 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-primary text-primary" />)}
                  </div>
                  <span className="font-body text-xs font-medium text-muted-foreground">+500 clientas felices</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hand Mockup / Nail Preview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionReveal>
            <div className="text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Prueba Virtual</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
                ¿Cómo se verían tus uñas?
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
                Selecciona un color y previsualiza cómo lucirían en tus manos.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <HandMockup />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionReveal>
            <div className="text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Nuestros Servicios</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
                Cuidado experto para tus manos
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
                Ofrecemos una amplia gama de servicios con productos de primera calidad y las últimas tendencias en diseño.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <SectionReveal key={s.id} delay={i * 0.1}>
                <ServiceCard service={s} />
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="mt-10 text-center">
              <Link to="/servicios" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline">
                Ver todos los servicios <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionReveal>
            <div className="text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Galería</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Nuestro trabajo</h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {[galleryImg, salonImg, heroImg, galleryImg, salonImg, heroImg].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <img
                    src={img}
                    alt={`Galería ${i + 1}`}
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110 md:h-64"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="mt-10 text-center">
              <Link to="/galeria" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline">
                Ver galería completa <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionReveal>
            <div className="text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Testimonios</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Lo que dicen nuestras clientas</h2>
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.id} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-4 font-body text-sm italic leading-relaxed text-muted-foreground">"{t.text}"</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="font-body text-xs text-primary">{t.service}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      {promotions.length > 0 && (
        <section className="section-padding gradient-hero">
          <div className="container-narrow">
            <SectionReveal>
              <div className="text-center">
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Promociones</span>
                <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Ofertas especiales</h2>
              </div>
            </SectionReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {promotions.map((p, i) => (
                <SectionReveal key={p.id} delay={i * 0.15}>
                  <div className="hover-lift rounded-2xl border border-primary/20 bg-background p-8">
                    <span className="inline-block rounded-full gradient-rose px-4 py-1 font-body text-sm font-bold text-primary-foreground">
                      {p.discount}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 font-body text-sm text-muted-foreground">{p.description}</p>
                    <Link to="/reservar" className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                      Aprovechar <ArrowRight size={14} />
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location & Info */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionReveal>
              <img src={salonImg} alt="Interior del salón" className="h-80 w-full rounded-2xl object-cover shadow-card" loading="lazy" />
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Visítanos</span>
                <h2 className="mt-2 font-display text-3xl font-bold text-foreground">Nuestro estudio</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">{salonInfo.address}</p>
                      <p className="font-body text-xs text-muted-foreground">{salonInfo.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 text-primary" />
                    <p className="font-body text-sm text-foreground">{salonInfo.hours}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield size={18} className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">Higiene garantizada</p>
                      <p className="font-body text-xs text-muted-foreground">Todos nuestros instrumentos son esterilizados y usamos productos de primera calidad.</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contacto"
                  className="mt-8 inline-flex items-center gap-2 rounded-full gradient-rose px-8 py-3 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
                >
                  Contáctanos
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
