import type { Metadata } from "next";
import {
  Eyebrow,
  SectionHeading,
  DownloadIcon,
} from "@/content/ui";
import { CONTESTS, CONTEST_DETAILS } from "./contest-data";
import { ContestShowcase } from "./contest-showcase";

export const metadata: Metadata = {
  title: "Concursos",
  description:
    "Distinções, mostras e o futuro Concurso Guarda-Rios para escolas.",
};

export default function ConcursosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Ciência jovem</Eyebrow>
          <h1>
            Concursos e <em>distinções</em>
          </h1>
          <p className="lead">
            Os palcos onde o Guarda-Rios tem sido apresentado e o desafio STEM
            que irá levar o modelo do projeto a mais escolas.
          </p>
        </div>
      </section>

      {/* ---------- RESULTADOS E DISTINÇÕES ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Reconhecimento"
            title={
              <>
                Distinções e <em>mostras</em>
              </>
            }
            lead="O projeto tem sido apresentado em palcos de ciência e tecnologia jovem. Seleciona um concurso para ver a respetiva galeria; a secção também roda automaticamente."
          />

          <ContestShowcase contests={CONTESTS} />
        </div>
      </section>

      {/* ---------- SOBRE O CONCURSO ---------- */}
      <section className="section bg-2">
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
            {CONTEST_DETAILS.map((d) => (
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
    </>
  );
}
