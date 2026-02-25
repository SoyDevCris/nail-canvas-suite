import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Reservar from "./pages/Reservar";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCitas from "./pages/admin/AdminCitas";
import AdminServicios from "./pages/admin/AdminServicios";
import AdminClientes from "./pages/admin/AdminClientes";
import AdminGaleria from "./pages/admin/AdminGaleria";
import AdminPromos from "./pages/admin/AdminPromos";
import AdminConfig from "./pages/admin/AdminConfig";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/citas" element={<AdminCitas />} />
          <Route path="/admin/servicios" element={<AdminServicios />} />
          <Route path="/admin/clientes" element={<AdminClientes />} />
          <Route path="/admin/galeria" element={<AdminGaleria />} />
          <Route path="/admin/promos" element={<AdminPromos />} />
          <Route path="/admin/configuracion" element={<AdminConfig />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
