import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import galleryImg from "@/assets/gallery-nails.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import heroImg from "@/assets/hero-nails.jpg";

const images = [
  { src: galleryImg, tag: "Nail Art" },
  { src: salonImg, tag: "Estudio" },
  { src: heroImg, tag: "Productos" },
  { src: galleryImg, tag: "French" },
  { src: salonImg, tag: "Manicure" },
  { src: heroImg, tag: "Diseño" },
  { src: galleryImg, tag: "Acrílico" },
  { src: salonImg, tag: "Ambiente" },
];

const Galeria = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Layout>
      <section className="section-padding gradient-hero">
        <div className="container-narrow text-center">
          <SectionReveal>
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Galería</span>
            <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">Nuestro trabajo</h1>
            <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
              Cada diseño es una obra de arte hecha con amor y precisión.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setSelected(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.tag}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-56"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/40 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="font-body text-xs font-semibold text-primary-foreground">{img.tag}</span>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute right-4 top-4 text-primary-foreground"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selected}
              alt="Galería ampliada"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Galeria;
