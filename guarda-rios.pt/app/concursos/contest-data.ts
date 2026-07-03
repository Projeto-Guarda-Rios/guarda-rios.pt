export interface ContestPhoto {
  src: string;
  alt: string;
  caption?: string;
  /** Crop anchor (CSS `object-position`), e.g. `"center top"` or `"50% 20%"`. */
  focal?: string;
  /** Extra zoom as a percentage (`100` = none, `130` = 130%). */
  zoom?: number;
}

export interface ContestItem {
  name: string;
  year: string;
  text: string;
  logo?: string;
  photos: ContestPhoto[];
}

export interface ContestDetail {
  k: string;
  title: string;
  text: string;
}

export const CONTEST_DETAILS: ContestDetail[] = [
  {
    k: "Quem participa",
    title: "Equipas de 2 a 6 alunos",
    text: "Do 3.º ciclo e do ensino secundário, cada equipa é acompanhada por um professor-tutor que orienta o trabalho.",
  },
  {
    k: "Como funciona",
    title: "Fases até ao Hackathon",
    text: "Ao longo de várias fases, cada equipa concebe e constrói a sua estação de monitorização, culminando num Hackathon final.",
  },
  {
    k: "Licenças abertas",
    title: "MIT + CERN-OHL-P",
    text: "Todo o material entregue é partilhado sob licenças abertas — MIT para o software e CERN-OHL-P para o hardware.",
  },
  {
    k: "Edição",
    title: "2026 / 2027",
    text: "A primeira edição do Concurso Guarda-Rios decorre no ano letivo de 2026/2027. Inscrições e calendário no regulamento.",
  },
];

export const CONTESTS: ContestItem[] = [
  {
    name: "Atlântico Júnior",
    year: "2023",
    logo: "/concursos/premio-atlantico-junior-logo.jpg",
    text: "Mostra de ciência e engenharia para jovens investigadores.",
    photos: [
      {
        src: "/concursos/atlantico-junior-2023/aj-premios.jpg",
        alt: "Entrega de prémios no Atlântico Júnior",
        caption: "prémios",
      },
      {
        src: "/concursos/atlantico-junior-2023/aj-1.jpg",
        alt: "Projeto Guarda-Rios no Atlântico Júnior",
      },
      {
        src: "/concursos/atlantico-junior-2023/aj-2.jpg",
        alt: "Estação apresentada no Atlântico Júnior",
      },
      {
        src: "/concursos/atlantico-junior-2023/aj-3.jpg",
        alt: "Equipa no Atlântico Júnior",
      },
      {
        src: "/concursos/atlantico-junior-2023/aj-4.jpg",
        alt: "Banca do Projeto Guarda-Rios no Atlântico Júnior",
      },
    ],
  },
    {
    name: "Atlântico Júnior",
    year: "2024",
    logo: "/concursos/premio-atlantico-junior-logo.jpg",
    text: "Mostra de ciência e engenharia para jovens investigadores.",
    photos: [
      {
        src: "/concursos/atlantico-junior-2024/atlantico-junior-2024-1.png",
        alt: "Equipa Guarda-Rios no Atlântico Júnior",
        caption: "Equipa",
      },
      {
        src: "/concursos/atlantico-junior-2024/atlantico-junior-2024-2.png",
        alt: "Equipa Guarda-Rios no Atlântico Júnior",
        caption: "Equipa",
      },
      {
        src: "/concursos/atlantico-junior-2024/atlantico-junior-2024-3.png",
        alt: "Equipa Guarda-Rios no Atlântico Júnior",
      },
      {
        src: "/concursos/atlantico-junior-2024/atlantico-junior-2024-4.png",
        alt: "Equipa Guarda-Rios no Atlântico Júnior",
      },
      {
        src: "/concursos/atlantico-junior-2024/atlantico-junior-2024-5.png",
        alt: "Equipa Guarda-Rios no Atlântico Júnior",
        caption: "Apresentação",
      },
    ],
  },
  {
    name: "Mostra Nacional de Ciência",
    year: "2025",
    logo: "/concursos/mostra_nacional_de_ciencia_logo.png",
    text: "Encontro nacional de projetos científicos escolares.",
    photos: [
      {
        src: "/concursos/mostra-nacional-2025/Mostra Nacional 3.jpg",
        alt: "Entrega de prémios na Mostra Nacional de Ciência",
        caption: "prémios",
      },
      {
        src: "/concursos/mostra-nacional-2025/Mostra Nacional 1.jpg",
        alt: "Projeto Guarda-Rios na Mostra Nacional de Ciência",
      },
      {
        src: "/concursos/mostra-nacional-2025/Mostra Nacional 2.jpg",
        alt: "Projeto apresentado na Mostra Nacional de Ciência",
      },
    ],
  },
  {
    name: "I-Fest",
    year: "2026",
    logo: "/concursos/i-fest-logo.png",
    text: "Festival internacional de ciência, engenharia, biologia, multimédia e matemática.",
    photos: [
      {
        src: "/concursos/i-fest-2026/iFest-4.jpg",
        alt: "Entrega de prémios na i-Fest",
      },
      {
        src: "/concursos/i-fest-2026/equipa-premios-bandeiras.jpg",
        alt: "Entrega de prémios na i-Fest",
      },
      {
        src: "/concursos/i-fest-2026/iFest-3.jpg",
        alt: "Entrega de prémios na i-Fest",
      },
      {
        src: "/concursos/i-fest-2026/palco-premios-usable-aspect.jpg",
        alt: "Entrega de prémios na i-Fest",
      },
      {
        src: "/concursos/i-fest-2026/palco-medalha.jpg",
        alt: "Entrega de prémios na i-Fest",
      },
      {
        src: "/concursos/i-fest-2026/iFest-9.jpg",
        alt: "Projeto apresentado na i-Fest",
      },
      {
        src: "/concursos/i-fest-2026/iFest-8.jpg",
        alt: "Projeto Guarda-Rios na i-Fest",
      },
      {
        src: "/concursos/i-fest-2026/iFest-10.jpg",
        alt: "Projeto apresentado na i-Fest",
      },
    ],
  },
  {
    name: "FAQTOS",
    year: "2025/26",
    logo: "/concursos/faqtos-logo.png",
    text: "Concurso de projetos tecnológicos do ensino secundário.",
    photos: [],
  },
];
