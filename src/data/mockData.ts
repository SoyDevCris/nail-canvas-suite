export interface Service {
  id: string;
  name: string;
  description: string;
  duration_min: number;
  price_from: number;
  category: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  service: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
}

export const services: Service[] = [
  { id: "1", name: "Manicure Clásica", description: "Limado, cutículas, hidratación y esmalte tradicional. Manos perfectas y cuidadas.", duration_min: 45, price_from: 25000, category: "Manicure" },
  { id: "2", name: "Manicure Spa", description: "Tratamiento completo con exfoliación, mascarilla nutritiva, masaje y esmalte premium.", duration_min: 60, price_from: 45000, category: "Manicure" },
  { id: "3", name: "Pedicure Clásica", description: "Cuidado completo de pies con limado, cutículas, hidratación y esmaltado.", duration_min: 50, price_from: 30000, category: "Pedicure" },
  { id: "4", name: "Pedicure Spa", description: "Experiencia relajante con baño aromático, exfoliación, masaje y esmaltado premium.", duration_min: 75, price_from: 55000, category: "Pedicure" },
  { id: "5", name: "Semipermanente", description: "Esmalte de larga duración con acabado brillante. Dura hasta 3 semanas sin descascararse.", duration_min: 60, price_from: 40000, category: "Semipermanente" },
  { id: "6", name: "Uñas Acrílicas", description: "Extensiones resistentes y duraderas con diseño personalizado. Forma y largo a tu gusto.", duration_min: 90, price_from: 65000, category: "Acrílico" },
  { id: "7", name: "Polygel", description: "Técnica híbrida ligera y flexible. Más cómoda que el acrílico con acabado natural.", duration_min: 80, price_from: 60000, category: "Polygel" },
  { id: "8", name: "Nail Art Premium", description: "Diseños exclusivos: piedras, foil, efecto espejo, degradados, encapsulados y más.", duration_min: 30, price_from: 15000, category: "Nail Art" },
  { id: "9", name: "Reparación de Uña", description: "Reparación individual de uñas rotas o dañadas. Incluye reconstrucción si es necesario.", duration_min: 20, price_from: 10000, category: "Reparación" },
];

export const categories = ["Manicure", "Pedicure", "Semipermanente", "Acrílico", "Polygel", "Nail Art", "Reparación"];

export const testimonials: Testimonial[] = [
  { id: "1", name: "Carolina M.", text: "¡Mis uñas quedaron hermosas! El diseño superó mis expectativas. Definitivamente volveré.", rating: 5, service: "Nail Art Premium" },
  { id: "2", name: "Valentina R.", text: "Excelente servicio, muy profesional y limpio. El semipermanente me duró 3 semanas perfectas.", rating: 5, service: "Semipermanente" },
  { id: "3", name: "Laura P.", text: "La mejor experiencia de pedicure que he tenido. Súper relajante y el resultado impecable.", rating: 5, service: "Pedicure Spa" },
  { id: "4", name: "María José S.", text: "Me encanta que usan productos de primera calidad. Mis uñas acrílicas quedaron naturales y elegantes.", rating: 5, service: "Uñas Acrílicas" },
];

export const galleryImages: GalleryItem[] = [
  { id: "1", image: "", tags: ["Nail Art", "Diseño"], featured: true },
  { id: "2", image: "", tags: ["Acrílico", "French"], featured: true },
  { id: "3", image: "", tags: ["Semipermanente", "Elegante"], featured: false },
  { id: "4", image: "", tags: ["Polygel", "Natural"], featured: true },
  { id: "5", image: "", tags: ["Nail Art", "Piedras"], featured: false },
  { id: "6", image: "", tags: ["Manicure", "Clásica"], featured: true },
];

export const promotions: Promotion[] = [
  { id: "1", title: "Primera Visita", description: "20% de descuento en tu primer servicio. ¡Te esperamos!", discount: "20% OFF" },
  { id: "2", title: "Combo Manos + Pies", description: "Manicure + Pedicure con semipermanente a precio especial.", discount: "Desde $70.000" },
];

export const salonInfo = {
  name: "Velvet Nails Studio",
  city: "Bogotá, Colombia",
  whatsapp: "+573001234567",
  instagram: "@velvetnailsstudio",
  hours: "Lun – Sáb: 9:00 AM – 7:00 PM",
  address: "Calle 85 #15-40, Chapinero, Bogotá",
  tagline: "Donde tus manos hablan de ti",
  description: "Estudio premium de uñas con los más altos estándares de calidad, higiene y diseño personalizado.",
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
};
