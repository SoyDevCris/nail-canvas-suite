import { useState } from "react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import ServiceCard from "@/components/ServiceCard";
import { services, categories } from "@/data/mockData";

const Servicios = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? services : services.filter(s => s.category === active);

  return (
    <Layout>
      <section className="section-padding gradient-hero">
        <div className="container-narrow text-center">
          <SectionReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Servicios</span>
            <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
              Nuestros servicios
            </h1>
            <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
              Cada servicio está diseñado para brindarte una experiencia premium con los mejores productos del mercado.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-2">
              {["Todos", ...categories].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-all ${
                    active === cat
                      ? "gradient-rose text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => (
              <SectionReveal key={s.id} delay={i * 0.05}>
                <ServiceCard service={s} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
