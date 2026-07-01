import type { Metadata } from "next";
import Image from "next/image";
import {
  Eyebrow,
  SectionHeading,
  PhotoFrame,
  Medal,
  DownloadIcon,
} from "@/content/ui";

export const metadata: Metadata = {
  title: "Concursos",
  description:
    "O Concurso Guarda-Rios — desafio STEM para o 3.º ciclo e secundário — e as distinções que o projeto já conquistou.",
};

/** The competition detail cards. */
const DETAILS = [
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

/** Distinctions shown in the A2 competitions grid. */
const DISTINCTIONS = [
  {
    name: "Atlântico Júnior",
    year: "2023",
    text: "Mostra de ciência e engenharia para jovens investigadores.",
  },
  {
    name: "Mostra Nacional de Ciência",
    year: "2024",
    text: "Encontro nacional de projetos científicos escolares.",
  },
  {
    name: "i-Fest",
    year: "2025",
    text: "Festival de inovação, tecnologia e empreendedorismo.",
  },
  {
    name: "FAQTOS",
    year: "2025/26",
    logo: "/concursos/faqtos-logo.png",
    text: "Concurso de projetos tecnológicos do ensino secundário.",
  },
];

export default function ConcursosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Desafio STEM</Eyebrow>
          <h1>
            Concurso <em>Guarda-Rios</em>
          </h1>
          <p className="lead">
            Um desafio que leva as escolas a construir a sua própria estação de
            monitorização — do sensor ao dado aberto, no espírito da ciência
            cidadã.
          </p>
        </div>
      </section>

      {/* ---------- SOBRE O CONCURSO ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="O concurso"
            title={
              <>
                Constrói, mede, <em>partilha</em>
              </>
            }
            lead="Inspirado no próprio Guarda-Rios, o concurso desafia equipas de alunos a projetar e montar uma estação de qualidade da água — aprendendo eletrónica, programação e ciência ambiental pelo caminho."
          />

          <div className="detail-grid">
            {DETAILS.map((d) => (
              <div className="detail" key={d.k}>
                <div className="dk">{d.k}</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44 }}>
            {/* Placeholder path — the PDF will be published later. */}
            <a
              className="btn btn-primary"
              href="/regulamento.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <DownloadIcon />
              Regulamento
            </a>
          </div>
        </div>
      </section>

      {/* ---------- RESULTADOS E DISTINÇÕES ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <SectionHeading
            eyebrow="Reconhecimento"
            title={
              <>
                Distinções e <em>mostras</em>
              </>
            }
            lead="O projeto tem sido apresentado e distinguido em alguns dos principais palcos de ciência e tecnologia jovem."
          />

          <div className="conc-grid">
            {DISTINCTIONS.map((item) => (
              <article className="conc" key={item.name}>
                {item.logo ? (
                  <Image
                    className="conc-logo"
                    src={item.logo}
                    alt={item.name}
                    width={120}
                    height={40}
                  />
                ) : (
                  <Medal className="medal" />
                )}
                <span className="yr">{item.year}</span>
                <h4>{item.name}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          {/* Atlântico Júnior — the win, in photographs */}
          <div style={{ marginTop: 72 }}>
            <SectionHeading
              eyebrow="Em destaque"
              title={
                <>
                  Atlântico Júnior, <em>em fotografia</em>
                </>
              }
            />
            <div className="photo-row" style={{ marginTop: 34 }}>
              <PhotoFrame
                src="/concursos/atlantico-junior-2023/aj-premios.jpg"
                alt="Entrega de prémios no Atlântico Júnior"
                caption="prémios"
                ratio="4/3"
                sizes="(max-width: 720px) 50vw, 25vw"
              />
              <PhotoFrame
                src="/concursos/atlantico-junior-2023/aj-1.jpg"
                alt="Projeto Guarda-Rios no Atlântico Júnior"
                ratio="4/3"
                sizes="(max-width: 720px) 50vw, 25vw"
              />
              <PhotoFrame
                src="/concursos/atlantico-junior-2023/aj-2.jpg"
                alt="Estação apresentada no Atlântico Júnior"
                ratio="4/3"
                sizes="(max-width: 720px) 50vw, 25vw"
              />
              <PhotoFrame
                src="/concursos/atlantico-junior-2023/aj-3.jpg"
                alt="Equipa no Atlântico Júnior"
                ratio="4/3"
                sizes="(max-width: 720px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
