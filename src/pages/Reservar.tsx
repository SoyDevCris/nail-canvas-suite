import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Check, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { services, formatPrice, salonInfo } from "@/data/mockData";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM",
];

const Reservar = () => {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const selectedServiceDetails = services.filter(s => selectedServices.includes(s.id));
  const totalPrice = selectedServiceDetails.reduce((sum, s) => sum + s.price_from, 0);
  const totalDuration = selectedServiceDetails.reduce((sum, s) => sum + s.duration_min, 0);

  const canNext = () => {
    if (step === 0) return selectedServices.length > 0;
    if (step === 1) return selectedDate && selectedTime;
    if (step === 2) return formData.name && formData.phone;
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    const whatsappMsg = encodeURIComponent(
      `¡Hola ${salonInfo.name}! Quiero confirmar mi cita:\n` +
      `📋 Servicios: ${selectedServiceDetails.map(s => s.name).join(", ")}\n` +
      `📅 Fecha: ${selectedDate}\n⏰ Hora: ${selectedTime}\n👤 ${formData.name}`
    );
    return (
      <Layout>
        <section className="section-padding gradient-hero">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-lg rounded-3xl border border-border bg-background p-10 text-center shadow-elevated"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-light">
                <Check size={28} className="text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">¡Reserva recibida!</h2>
              <p className="mt-3 font-body text-sm text-muted-foreground">
                Confirma tu cita por WhatsApp para asegurar tu espacio.
              </p>
              <div className="mt-6 rounded-xl bg-muted p-4 text-left">
                <p className="font-body text-sm text-foreground"><strong>Servicios:</strong> {selectedServiceDetails.map(s => s.name).join(", ")}</p>
                <p className="font-body text-sm text-foreground"><strong>Fecha:</strong> {selectedDate} a las {selectedTime}</p>
                <p className="font-body text-sm text-foreground"><strong>Total estimado:</strong> {formatPrice(totalPrice)}</p>
              </div>
              <a
                href={`https://wa.me/${salonInfo.whatsapp.replace(/\+/g, "")}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 font-body text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Confirmar por WhatsApp
              </a>
              <div className="mt-4">
                <Link to="/" className="font-body text-sm text-primary hover:underline">Volver al inicio</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding gradient-hero">
        <div className="container-narrow">
          <SectionReveal>
            <div className="text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Reservar</span>
              <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">Agenda tu cita</h1>
            </div>
          </SectionReveal>

          {/* Steps indicator */}
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2">
            {["Servicios", "Fecha y hora", "Tus datos"].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full font-body text-xs font-bold ${
                  i <= step ? "gradient-rose text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i + 1}
                </div>
                <span className="hidden font-body text-xs font-medium text-muted-foreground sm:inline">{label}</span>
                {i < 2 && <div className={`h-px w-8 ${i < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mx-auto mt-10 max-w-2xl"
          >
            {/* Step 0: Services */}
            {step === 0 && (
              <div className="space-y-3">
                {services.map(s => (
                  <button
                    key={s.id}
                    onClick={() => toggleService(s.id)}
                    className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${
                      selectedServices.includes(s.id)
                        ? "border-primary bg-rose-light shadow-soft"
                        : "border-border bg-background hover:border-primary/30"
                    }`}
                  >
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground">{s.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{s.duration_min} min · {s.category}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold text-primary">{formatPrice(s.price_from)}</span>
                      {selectedServices.includes(s.id) && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full gradient-rose">
                          <Check size={12} className="text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 1: Date/Time */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    <Calendar size={14} className="mr-1 inline text-primary" /> Fecha
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body text-sm font-medium text-foreground">
                    <Clock size={14} className="mr-1 inline text-primary" /> Hora
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`rounded-lg border px-3 py-2 font-body text-sm transition-all ${
                          selectedTime === t
                            ? "border-primary gradient-rose text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/30"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Client info */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Nombre completo *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-primary"
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Email (opcional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none focus:border-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                {/* Summary */}
                <div className="mt-6 rounded-xl bg-muted p-5">
                  <h3 className="font-display text-sm font-semibold text-foreground">Resumen</h3>
                  <ul className="mt-2 space-y-1">
                    {selectedServiceDetails.map(s => (
                      <li key={s.id} className="flex justify-between font-body text-sm text-muted-foreground">
                        <span>{s.name}</span>
                        <span>{formatPrice(s.price_from)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex justify-between border-t border-border pt-3">
                    <span className="font-body text-sm font-semibold text-foreground">Total estimado</span>
                    <span className="font-display text-lg font-bold text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    {selectedDate} · {selectedTime} · ~{totalDuration} min
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="mx-auto mt-8 flex max-w-2xl items-center justify-between">
            {step > 0 ? (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-2 font-body text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft size={14} /> Atrás
              </button>
            ) : <div />}
            {step < 2 ? (
              <button
                onClick={() => canNext() && setStep(s => s + 1)}
                disabled={!canNext()}
                className="flex items-center gap-2 rounded-full gradient-rose px-8 py-3 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 disabled:opacity-50"
              >
                Siguiente <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canNext()}
                className="flex items-center gap-2 rounded-full gradient-rose px-8 py-3 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 disabled:opacity-50"
              >
                <Sparkles size={14} /> Confirmar reserva
              </button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservar;
