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
            eyebrow="Desafios científicos"
            title={
              <>
                Participações e <em>Distinções</em>
              </>
            }
            lead="O projeto tem marcado presença em prestigiados desafios de ciência e tecnologia propostos a jovens do Ensino Secundário. Explore o nosso percurso selecionando cada um dos concursos abaixo para visualizar a respetiva galeria de fotografias."
          />

          <ContestShowcase contests={CONTESTS} />
        </div>
      </section>

      {/* ---------- SOBRE O CONCURSO ---------- */}
      <section className="section bg-2" id="NossoConcurso">
        <div className="wrap">
          <SectionHeading
            eyebrow="O nosso desafio"
            title={
              <>
                Desafio Guarda-Rios: <em>Em Rede pelos Rios</em>
              </>
            }
            lead="O Projeto Guarda-Rios nasceu da convicção de que a tecnologia aberta e a ciência cidadã são as ferramentas mais poderosas que temos para proteger os recursos hídricos. Após o desenvolvimento e validação do nosso sistema modular de monitorização ambiental autónomo e open-source, percebeu-se que o verdadeiro impacto não se esgota nos nossos colégios — cresce quando é partilhado!"
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
