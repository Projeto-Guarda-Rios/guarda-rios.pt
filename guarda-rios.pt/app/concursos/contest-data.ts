export interface ContestPhoto {
  src: string;
  alt: string;
  caption?: string;
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
    name: "Mostra Nacional de Ciência",
    year: "2024",
    text: "Encontro nacional de projetos científicos escolares.",
    photos: [],
  },
  {
    name: "i-Fest",
    year: "2025",
    text: "Festival de inovação, tecnologia e empreendedorismo.",
    photos: [],
  },
  {
    name: "FAQTOS",
    year: "2025/26",
    logo: "/concursos/faqtos-logo.png",
    text: "Concurso de projetos tecnológicos do ensino secundário.",
    photos: [],
  },
];
