import styles from "./categoriesContent.module.css";
import { RiRobot2Line, RiHeartPulseLine } from "react-icons/ri";
import { PiVirtualReality } from "react-icons/pi";
import {
  GiArtificialIntelligence,
  GiComputing,
  GiProcessor,
} from "react-icons/gi";
import {
  SiCyberdefenders,
  SiBlockchaindotcom,
  SiSamsung,
  SiHuawei,
  SiSony,
} from "react-icons/si";
import { BsLightbulb, BsSmartwatch } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { TbAugmentedReality } from "react-icons/tb";
import { DiDatabase } from "react-icons/di";
import {
  FaCity,
  FaChalkboardTeacher,
  FaGamepad,
  FaApple,
  FaWindows,
  FaLinux,
  FaGoogle,
  FaBookOpen,
} from "react-icons/fa";
import CategoryCard from "./CategoryCard";

export interface Category {
  id: number;
  name: string;
  route: string;
  description: string;
  icon: React.ReactElement;
}

export const categoriesIcons: Category[] = [
  {
    id: 1,
    name: "Robótica",
    route: "robotica",
    description:
      "Explora las últimas tendencias y desarrollos en el mundo de la robótica, desde drones hasta sistemas autónomos.",
    icon: <RiRobot2Line />,
  },
  {
    id: 2,
    name: "Realidad Virtual",
    route: "realidad-virtual",
    description:
      "Sumérgete en el fascinante mundo de la realidad virtual, descubriendo las nuevas tecnologías y aplicaciones en diferentes campos.",
    icon: <PiVirtualReality />,
  },
  {
    id: 3,
    name: "Inteligencia Artificial",
    route: "inteligencia-artificial",
    description:
      "Descubre cómo la inteligencia artificial está transformando industrias y revolucionando la tecnología moderna.",
    icon: <GiArtificialIntelligence />,
  },
  {
    id: 4,
    name: "Computación Cuántica",
    route: "computacion-cuantica",
    description:
      "Adéntrate en el complejo mundo de la computación cuántica y su potencial para cambiar el panorama tecnológico.",
    icon: <GiComputing />,
  },
  {
    id: 5,
    name: "Ciberseguridad",
    route: "ciberseguridad",
    description:
      "Mantente al día con las últimas estrategias y tecnologías en ciberseguridad para proteger datos y sistemas.",
    icon: <SiCyberdefenders />,
  },
  {
    id: 6,
    name: "Internet de las Cosas",
    route: "internet-de-las-cosas",
    description:
      "Descubre cómo los dispositivos conectados están creando redes inteligentes en hogares y empresas.",
    icon: <BsLightbulb />,
  },
  {
    id: 7,
    name: "Blockchain",
    route: "blockchain",
    description:
      "Explora la tecnología de blockchain y cómo está impulsando la innovación en finanzas y más allá.",
    icon: <SiBlockchaindotcom />,
  },
  {
    id: 8,
    name: "5G y Conectividad",
    route: "conectividad",
    description:
      "Conoce los avances en tecnología 5G y su impacto en la comunicación y la interconexión de dispositivos.",
    icon: <BiNetworkChart />,
  },
  {
    id: 9,
    name: "Energías Renovables",
    route: "energias-renovables",
    description:
      "Investiga las últimas innovaciones y desarrollos en energías renovables, incluyendo solar, eólica, y otras formas de energía sostenible.",
    icon: <MdOutlineEnergySavingsLeaf />,
  },
  {
    id: 10,
    name: "Realidad Aumentada",
    route: "realidad-aumentada",
    description:
      "Explora el mundo emergente de la realidad aumentada y su aplicación en juegos, educación, y más allá.",
    icon: <TbAugmentedReality />,
  },
  {
    id: 11,
    name: "Big Data y Análisis de Datos",
    route: "bif-data",
    description:
      "Descubre cómo el Big Data está transformando la toma de decisiones y estrategias en negocios y ciencia.",
    icon: <DiDatabase />,
  },
  {
    id: 12,
    name: "Tecnología Vestible",
    route: "tecnologia-vestible",
    description:
      "Adéntrate en el mundo de la tecnología vestible y cómo estos dispositivos están integrándose en nuestra vida cotidiana.",
    icon: <BsSmartwatch />,
  },
  {
    id: 13,
    name: "Urbanismo Tecnológico",
    route: "urbanismo-tecnologico",
    description:
      "Investiga cómo la tecnología está transformando nuestras ciudades, haciéndolas más inteligentes y sostenibles.",
    icon: <FaCity />,
  },
  {
    id: 14,
    name: "Salud Digital",
    route: "salud-digital",
    description:
      "Adéntrate en cómo la tecnología está revolucionando el cuidado de la salud y la medicina.",
    icon: <RiHeartPulseLine />,
  },
  {
    id: 15,
    name: "Educación",
    route: "educacion",
    description:
      "Explora las innovaciones en educación digital y cómo la tecnología está cambiando la manera en que aprendemos.",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 16,
    name: "Videojuegos",
    route: "videojuegos",
    description:
      "Sumérgete en el mundo dinámico de los videojuegos, desde las últimas tendencias en juegos hasta desarrollos en plataformas de entretenimiento digital.",
    icon: <FaGamepad />,
  },
  {
    id: 17,
    name: "Hardware",
    route: "hardware",
    description:
      "Descubre los avances en sistemas embebidos y hardware, esenciales en la era del Internet de las Cosas.",
    icon: <GiProcessor />,
  },
  {
    id: 18,
    name: "Apple",
    route: "apple",
    description:
      "Explora el mundo de Apple, desde los últimos modelos de iPhone y Mac hasta innovaciones en software y servicios de la marca.",
    icon: <FaApple />,
  },
  {
    id: 19,
    name: "Windows",
    route: "windows",
    description:
      "Descubre lo último en sistemas operativos Windows, software, y dispositivos de Microsoft, así como trucos y consejos para usuarios.",
    icon: <FaWindows />,
  },
  {
    id: 21,
    name: "Linux",
    route: "linux",
    description:
      "Adéntrate en el mundo de Linux, explorando sus diversas distribuciones, software de código abierto y comunidades de desarrollo.",
    icon: <FaLinux />,
  },
  {
    id: 22,
    name: "Samsung",
    route: "samsung",
    description:
      "Mantente al día con las innovaciones de Samsung, incluyendo smartphones, electrodomésticos inteligentes y tecnología de pantalla.",
    icon: <SiSamsung />,
  },
  {
    id: 23,
    name: "Google",
    route: "google",
    description:
      "Explora las últimas soluciones de Google en búsqueda, Android, servicios en la nube, inteligencia artificial y más.",
    icon: <FaGoogle />,
  },
  {
    id: 24,
    name: "Sony",
    route: "sony",
    description:
      "Descubre las innovaciones de Sony en electrónica de consumo, desde cámaras y televisores hasta consolas de videojuegos y audio.",
    icon: <SiSony />,
  },
  {
    id: 25,
    name: "Huawei",
    route: "huawei",
    description:
      "Descubre lo último de Huawei, abarcando desde sus innovadores smartphones y dispositivos de red hasta soluciones en tecnología 5G y sistemas de inteligencia artificial. Explora análisis de productos, noticias y tendencias relacionadas con esta gigante tecnológica china.",
    icon: <SiHuawei />,
  },
  {
    id: 26,
    name: "Tutoriales",
    route: "tutoriales",
    description:
      "Encuentra tutoriales detallados y guías prácticas que te ayudarán a navegar y aprovechar al máximo el mundo de la tecnología, cubriendo una variedad de temas desde programación básica hasta el uso avanzado de dispositivos específicos.",
    icon: <FaBookOpen />,
  },
];

export default function PageCategories() {
  return (
    <div className={styles.categoriesContainer}>
      {categoriesIcons.map((item, index) => (
        <CategoryCard item={item} key={index} />
      ))}
    </div>
  );
}
