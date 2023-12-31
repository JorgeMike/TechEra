import { CarouselItemProps } from "@/components/Carousel/CarouselItem";
import portadaUno from "../public/images/postadaUno.jpeg";
import portadaTres from "../public/images/portadaTres.jpg";
import portadaCuatro from "../public/images/portadaCuatro.jpg";
import portadaSeis from "../public/images/portadaSeis.jpg";

import imagen1 from "../public/images/articulos/articuloUno.jpg";
import imagen2 from "../public/images/articulos/articuloDos.jpg";
import imagen3 from "../public/images/articulos/articuloTres.jpg";
import imagen4 from "../public/images/portadaSeis.jpg";
import { StaticImageData } from "next/image";
import { ILink } from "@/components/Layout/Dashboard";

export interface RecentNew {
  image: StaticImageData;
  title: string;
  subtitle: string;
  categories: string[];
  id: string;
}

export const carouselImages: CarouselItemProps[] = [
  {
    image: portadaUno,
    title: "Apple Watch Ultra 2.",
    subtitle:
      "Análisis: el Apple Watch que me compraría no es el Apple Watch que necesito.",
    id: "1",
    active: true,
  },
  {
    image: portadaTres,
    title: "Inteligencia Artificial Avanza",
    subtitle:
      "Nuevos algoritmos podrían permitir a las IA aprender idiomas con la fluidez de un humano.",
    id: "2",
  },
  {
    image: portadaCuatro,
    title: "Blockchain Más Allá de las Criptomonedas",
    subtitle:
      "Empresas exploran el uso de la tecnología blockchain para la seguridad en votaciones electrónicas.",
    id: "3",
  },
  {
    image: portadaSeis,
    title: "Realidad Virtual en Educación",
    subtitle:
      "Escuelas piloto incorporan la realidad virtual para mejorar la experiencia de aprendizaje en aulas.",
    id: "4",
  },
];

export const recenteNews: RecentNew[] = [
  {
    image: imagen1,
    title: "Computación Cuántica: El Futuro es Ahora",
    subtitle:
      "Las empresas líderes anuncian avances significativos en qubits estables.",
    categories: ["Ciencia", "Tecnología", "Innovación"],
    id: "4",
  },
  {
    image: imagen2,
    title: "La Nueva Generación de Smartphones Plegables",
    subtitle: "Fabricantes revelan diseños más duraderos y flexibles.",
    categories: ["Gadgets", "Tecnología", "Diseño"],
    id: "5",
  },
  {
    image: imagen3,
    title: "Revolución en el Espacio: Internet por Satélite",
    subtitle:
      "La conexión global se aproxima con la próxima generación de satélites de internet.",
    categories: ["Espacio", "Internet", "Avances Tecnológicos"],
    id: "6",
  },
  {
    image: imagen4,
    title: "Realidad Virtual en Educación",
    subtitle:
      "Escuelas piloto incorporan la realidad virtual para mejorar la experiencia de aprendizaje en aulas.",
    categories: ["Educación", "Realidad Virtual", "Innovación en el Aula"],
    id: "7",
  },
];

export const popularCategories = [
  {
    text: "Hardware",
    imageUrl: "https://s1.significados.com/foto/hardware.jpg",
    link: "/categoria/computadoras-hardware",
  },
  {
    text: "Software",
    imageUrl:
      "https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080087611-800x400.jpg",
    link: "/categoria/software-aplicaciones",
  },
  {
    text: "Videojuegos",
    imageUrl:
      "https://web-assets.esetstatic.com/wls/2021/08/por-qu%C3%A9-compa%C3%B1%C3%ADas-videojuegos-son-blanco-atractivo-cibercriminales.jpg",
    link: "/categoria/videojuegos",
  },
  {
    text: "Realidad Virtual",
    imageUrl:
      "https://www.obicex.es/sites/obicex/files/styles/blog_desktop/public/images/blog/que-son-las-gafas-realidad-virtual.jpg?itok=HYaGdYZp",
    link: "/categoria/realidad-virtual",
  },
  {
    text: "Inteligencia Artificial",
    imageUrl:
      "https://blogibsamericas.com/wp-content/uploads/2023/04/Img-IA-1920-x-1080-2-1920x960.jpg",
    link: "/categoria/inteligencia-artificial",
  },
  {
    text: "Gadgets",
    imageUrl:
      "https://grupocmm.com/wp-content/uploads/2018/09/final_cb_0086.0-1024x744.jpg",
    link: "/categoria/gadgets",
  },
];

export const categories = [
  {
    id: 1,
    name: "Robótica",
    description:
      "Explora las últimas tendencias y desarrollos en el mundo de la robótica, desde drones hasta sistemas autónomos.",
  },
  {
    id: 2,
    name: "Realidad Virtual",
    description:
      "Sumérgete en el fascinante mundo de la realidad virtual, descubriendo las nuevas tecnologías y aplicaciones en diferentes campos.",
  },
  {
    id: 3,
    name: "Inteligencia Artificial",
    description:
      "Descubre cómo la inteligencia artificial está transformando industrias y revolucionando la tecnología moderna.",
  },
  {
    id: 4,
    name: "Computación Cuántica",
    description:
      "Adéntrate en el complejo mundo de la computación cuántica y su potencial para cambiar el panorama tecnológico.",
  },
  {
    id: 5,
    name: "Ciberseguridad",
    description:
      "Mantente al día con las últimas estrategias y tecnologías en ciberseguridad para proteger datos y sistemas.",
  },
  {
    id: 6,
    name: "Internet de las Cosas",
    description:
      "Descubre cómo los dispositivos conectados están creando redes inteligentes en hogares y empresas.",
  },
  {
    id: 7,
    name: "Blockchain",
    description:
      "Explora la tecnología de blockchain y cómo está impulsando la innovación en finanzas y más allá.",
  },
  {
    id: 8,
    name: "5G y Conectividad",
    description:
      "Conoce los avances en tecnología 5G y su impacto en la comunicación y la interconexión de dispositivos.",
  },
  {
    id: 9,
    name: "Energías Renovables",
    description:
      "Investiga las últimas innovaciones y desarrollos en energías renovables, incluyendo solar, eólica, y otras formas de energía sostenible.",
  },
];

export const linksAdministrador: ILink[] = [
  { name: "Inicio", route: "" },
  { name: "Artículos", route: "articulos" },
  { name: "Pendientes", route: "pendientes" },
  { name: "Grupos", route: "grupos" },
  { name: "Analíticas", route: "analiticas" },
  { name: "Carousel", route: "carousel" },
];

export const linksPublicador: ILink[] = [
  { name: "Inicio", route: "" },
  { name: "Mis Articulos", route: "mis-articulos" },
  { name: "Mis Borradores", route: "mis-borradores" },
  { name: "Analiticas", route: "analiticas" },
  { name: "Crear Articulo", route: "crear-articulo" },
];
