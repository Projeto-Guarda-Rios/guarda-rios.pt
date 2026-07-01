import type { Metadata } from "next";
import {
  Eyebrow,
  SectionHeading,
  EventCard,
  PhotoFrame,
  CTASection,
  Button,
} from "@/content/ui";
import { LINKS } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Divulgação",
  description:
    "GreenFest, hackathons, mostras e encontros — os momentos em que o Projeto Guarda-Rios leva a ciência dos rios ao público.",
};

export default function DivulgacaoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Ciência em público</Eyebrow>
          <h1>
            <em>Divulgação</em>
          </h1>
          <p className="lead">
            Levar os rios ao encontro das pessoas: festivais, hackathons e
            mostras onde partilhamos o projeto e a ciência que o sustenta.
          </p>
        </div>
      </section>

      {/* ---------- EVENTOS COM FOTOGRAFIA ---------- */}
      <section className="section">
        <div className="wrap">
          <EventCard
            title="GreenFest 2025"
            year="2025"
            description="Levámos o Guarda-Rios ao GreenFest, um festival dedicado à sustentabilidade, onde apresentámos as estações e o portal de dados ao grande público."
            photos={[
              { src: "/divulgacao/greenfest-2025/greenfest-1.jpg", alt: "Guarda-Rios no GreenFest 2025", caption: "GreenFest" },
              { src: "/divulgacao/greenfest-2025/greenfest-2.jpg", alt: "Estação apresentada no GreenFest 2025" },
              { src: "/divulgacao/greenfest-2025/greenfest-3.jpg", alt: "Equipa no GreenFest 2025" },
              { src: "/divulgacao/greenfest-2025/greenfest-4.jpg", alt: "Público no stand do GreenFest 2025" },
            ]}
          />

          <EventCard
            title="Hackathon Ciência pelo Ambiente"
            year="2024"
            description="Participámos no Hackathon Ciência pelo Ambiente, onde equipas desenvolveram, em conjunto, soluções tecnológicas para desafios ambientais reais."
            photos={[
              { src: "/divulgacao/hackathon-2024/hackathon-1.jpg", alt: "Equipa no Hackathon Ciência pelo Ambiente 2024", caption: "Hackathon" },
              { src: "/divulgacao/hackathon-2024/hackathon-2.jpg", alt: "Trabalho durante o Hackathon 2024" },
              { src: "/divulgacao/hackathon-2024/hackathon-3.jpg", alt: "Apresentação no Hackathon 2024" },
              { src: "/divulgacao/hackathon-2024/hackathon-4.jpg", alt: "Momento do Hackathon 2024" },
            ]}
          />
        </div>
      </section>

      {/* ---------- MAIS MOMENTOS ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <SectionHeading
            eyebrow="E também"
            title={
              <>
                Mais <em>momentos</em>
              </>
            }
            lead="Outras ocasiões em que o projeto saiu do laboratório para o encontro com a comunidade. Fotografias a caminho."
          />

          <div className="mini-grid">
            <article className="mini-card">
              <PhotoFrame alt="Mostra de ciência" caption="mostra" ratio="1/1" />
              <div>
                <h4>Mostras de ciência</h4>
                <p>
                  Apresentámos o projeto em mostras e feiras de ciência, em
                  contacto direto com estudantes, professores e curiosos.
                </p>
              </div>
            </article>

            <article className="mini-card">
              <PhotoFrame alt="Encontro Guarda-Rios" caption="encontro" ratio="1/1" />
              <div>
                <h4>Encontro Guarda-Rios</h4>
                <p>
                  Momentos que reúnem as equipas do projeto para partilhar
                  progresso, resultados e os próximos passos da rede.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        eyebrow="Acompanha-nos"
        title={
          <>
            Segue o projeto <em>por dentro.</em>
          </>
        }
        description="Publicamos bastidores, novidades e resultados no Instagram — e todo o trabalho técnico fica aberto no GitHub."
        photo={{ alt: "Divulgação do Guarda-Rios", caption: "divulgação" }}
        actions={
          <>
            <Button href={LINKS.instagram} variant="orange" arrow>
              Seguir no Instagram
            </Button>
            <Button href="/concursos" variant="ghost">
              Ver os concursos
            </Button>
          </>
        }
      />
    </>
  );
}
