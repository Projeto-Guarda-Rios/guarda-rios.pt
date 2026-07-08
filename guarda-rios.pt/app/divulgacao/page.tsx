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
            O Projeto Guarda-Rios ganha verdadeira força quando ultrapassa as
            barreiras da escola. Através da nossa participação em competições
            científicas de prestígio, de apresentações públicas e de uma forte
            presença digital, partilhamos o nosso projeto com o mundo.
            Acreditamos que divulgar é educar, mobilizando os cidadãos e
            inspirando outras escolas a juntarem-se a esta rede de ciência cidadã
            e proteção ambiental.
          </p>
        </div>
      </section>

      {/* ---------- EVENTOS COM FOTOGRAFIA ---------- */}
      <section className="section">
        <div className="wrap">
          <EventCard
            title="Hackathon Ciência pelo Ambiente"
            year="2024"
            description="Dinamizámos um Hackathon de dois dias no Colégio da Trofa, unindo alunos do Grupo Ribadouro na busca por soluções inovadoras para desafios reais. Durante esta maratona científica, os estudantes colocaram à prova as suas competências técnicas e superaram-se no desenvolvimento de capacidades sociais, de trabalho em equipa e de comunicação pública."
            photos={[
              { src: "/divulgacao/hackathon-2024/hackathon-1.jpg", alt: "Equipa no Hackathon Ciência pelo Ambiente 2024", caption: "Hackathon" },
              { src: "/divulgacao/hackathon-2024/hackathon-2.jpg", alt: "Trabalho durante o Hackathon 2024" },
              { src: "/divulgacao/hackathon-2024/hackathon-3.jpg", alt: "Apresentação no Hackathon 2024" },
              { src: "/divulgacao/hackathon-2024/hackathon-4.jpg", alt: "Momento do Hackathon 2024" },
            ]}
          />

          <EventCard
            title="GreenFest · Serralves"
            year="2024"
            description="Apresentámos o projeto Guarda-Rios no festival de sustentabilidade GreenFest, na Fundação de Serralves. A nossa participação incluiu uma demonstração prática em tempo real, na qual expusemos ao público e a diversos especialistas o processo de monitorização autónoma dos parâmetros físico-químicos da água, reforçando o compromisso do projeto com a divulgação científica."
            photos={[
              { src: "/divulgacao/greenfest-2024/greenfest-2024-1.jpg", alt: "Equipa do Projeto Guarda-Rios no GreenFest Serralves 2024", caption: "GreenFest Serralves" },
              { src: "/divulgacao/greenfest-2024/greenfest-2024-2.jpg", alt: "Demonstração ao vivo do protótipo Guarda-Rios no GreenFest Serralves 2024" },
              { src: "/divulgacao/greenfest-2024/greenfest-2024-3.jpg", alt: "Apresentação de parâmetros biológicos no GreenFest Serralves 2024" },
              { src: "/divulgacao/greenfest-2024/greenfest-2024-4.jpg", alt: "Equipa a apresentar o projeto a convidados no GreenFest Serralves 2024" },
            ]}
          />

          <EventCard
            title="GreenFest · Universidade do Minho"
            year="2024"
            description="Levámos a nossa engenharia ao ecossistema universitário. Com uma demonstração ao vivo da recolha de parâmetros físico-químicos e biológicos da água, mostrámos de forma prática a estudantes, investigadores e ao público em geral, como o Guarda-Rios aplica tecnologia open-source na monitorização real e rigorosa dos ecossistemas aquáticos."
            wide
            photos={[
              { src: "/divulgacao/greenfest-uminho-2024/greenfest-uminho-1.jpg", alt: "Equipa do Projeto Guarda-Rios a apresentar no GreenFest Braga, Universidade do Minho, 2024", caption: "GreenFest Braga" },
            ]}
          />

          <EventCard
            title="Mostra do 9.º ano do Colégio Ribadouro"
            year="2025"
            description="Apresentámos o Projeto Guarda-Rios à comunidade escolar do Colégio Ribadouro, com demonstração do protótipo e conversa direta com visitantes."
            photos={[
              {
                src: "/divulgacao/mostra-9/Mostra 2 9.º ano 2024_2025.jpg",
                alt: "Equipa do Projeto Guarda-Rios na Mostra do 9.º ano do Colégio Ribadouro",
                caption: "Banca do projeto",
              },
              {
                src: "/instagram/extracted/01-2025-02-23.webp",
                alt: "Equipa do Projeto Guarda-Rios na Mostra do 9.º ano do Colégio Ribadouro",
              },
              {
                src: "/divulgacao/mostra-9/Mostra 3 9.º ano.jpg",
                alt: "Equipa do Projeto Guarda-Rios na Mostra do 9.º ano do Colégio Ribadouro",
              },
              {
                src: "/instagram/extracted/02-2025-02-23.webp",
                alt: "Demonstração do protótipo Guarda-Rios a visitantes na Mostra do 9.º ano",
              },
            ]}
          />

          <EventCard
            title="GreenFest · Serralves"
            year="2025"
            description="Regressámos ao GreenFest com uma abordagem de divulgação totalmente renovada. Desta vez, o Guarda-Rios esteve em exposição contínua e prolongada, transformando o nosso espaço num ponto de encontro interativo. Ao longo do evento, fomos explicando em detalhe as especificidades técnicas e ecológicas do projeto a todos os que nos visitaram, aproveitando uma oportunidade única para partilhar o nosso trabalho e trocar ideias com um público incrivelmente diversificado."
            photos={[
              { src: "/divulgacao/greenfest-2025/greenfest-1.jpg", alt: "Guarda-Rios no GreenFest 2025", caption: "GreenFest" },
              { src: "/divulgacao/greenfest-2025/greenfest-2.jpg", alt: "Estação apresentada no GreenFest 2025" },
              { src: "/divulgacao/greenfest-2025/greenfest-3.jpg", alt: "Equipa no GreenFest 2025" },
              { src: "/divulgacao/greenfest-2025/greenfest-4.jpg", alt: "Público no stand do GreenFest 2025" },
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
                Outras <em>iniciativas</em>
              </>
            }
            lead="Outros momentos em que o projeto se encontrou com a comunidade."
          />

          <div className="mini-grid">
            <article className="mini-card">
              <PhotoFrame
                src="/instagram/extracted/08-2025-07-06.jpg"
                alt="Stand público do Projeto Guarda-Rios com poster e protótipo"
                caption="stand"
                ratio="1/1"
              />
              <div>
                <h4>Mostras de ciência</h4>
                <p>
                  Apresentámos o projeto em mostras e feiras de ciência, em
                  contacto direto com estudantes, professores e curiosos.
                </p>
              </div>
            </article>

            <article className="mini-card">
              <PhotoFrame
                src="/instagram/extracted/11-2025-05-08.jpg"
                alt="Sessão de demonstração do Projeto Guarda-Rios com hardware e apresentação"
                caption="demonstração"
                ratio="1/1"
              />
              <div>
                <h4>Encontro Guarda-Rios</h4>
                <p>
                  Momentos que reúnem as equipas do projeto para partilhar
                  progresso, resultados e os próximos passos do Guarda-Rios.
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
            Acompanha as nossas <em>dinâmicas.</em>
          </>
        }
        description="Publicamos bastidores, novidades e resultados no Instagram — e todo o trabalho técnico fica aberto no GitHub."
        photo={{
          src: "/concursos/i-fest-2026/iFest-5-usable-aspect.jpg",
          alt: "Demonstração pública do protótipo Guarda-Rios",
          caption: "Tunísia - 2026",
        }}
        actions={
          <>
            <Button href={LINKS.instagram} variant="orange" arrow>
              Instagram
            </Button>
            <Button href="/concursos" variant="ghost">
              Concursos
            </Button>
          </>
        }
      />
    </>
  );
}
