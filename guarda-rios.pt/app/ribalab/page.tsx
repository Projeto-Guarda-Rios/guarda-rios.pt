import type { Metadata } from "next";
import Image from "next/image";
import {
  Eyebrow,
  SectionHeading,
  PhotoFrame,
  VideoFrame,
  CTASection,
  Button,
} from "@/content/ui";

export const metadata: Metadata = {
  title: "Ribalab",
  description:
    "O Ribalab é o hackerspace do Grupo Ribadouro onde os alunos desenham, imprimem, programam e testam as estações do Projeto Guarda-Rios.",
};

const MAKING = [
  {
    n: "01",
    title: "Tecnologia e Engenharia",
    text: "Desenvolvimento de soluções eletrónicas, programação, modelação 3D e prototipagem para dar vida a novas ideias.",
  },
  {
    n: "02",
    title: "Ciência e Investigação",
    text: "Estudo dos ecossistemas, recolha e análise de dados ambientais e desenvolvimento de projetos científicos em diferentes áreas.",
  },
  {
    n: "03",
    title: "Inovação e Colaboração",
    text: "Projetos desenvolvidos por equipas multidisciplinares, promovendo a partilha de conhecimento e a aprendizagem entre alunos e parceiros.",
  },
  {
    n: "04",
    title: "Testes e Impacto",
    text: "Validação de protótipos, trabalho de campo e implementação de soluções que respondem a desafios reais da comunidade.",
  },
];

export default function RibalabPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Investigação e criação · Grupo Ribadouro</Eyebrow>
          <h1>
            <em>Ribalab</em>
          </h1>
          <p className="lead">
            Espaço de inovação ativa que permite capacitar os jovens
            para o desenvolvimento de projetos científicos desenhando,
            programando e construindo soluções reais.
          </p>
        </div>
      </section>

      <div className="wave-divider" aria-hidden>
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path
            d="M0 40 C240 12 480 60 720 42 C960 24 1200 58 1440 34"
            fill="none"
            stroke="var(--blue)"
            strokeWidth="1"
            opacity="0.35"
          />
          <path
            d="M0 52 C260 26 520 66 780 48 C1040 30 1240 60 1440 46"
            fill="none"
            stroke="var(--blue)"
            strokeWidth="1"
            opacity="0.18"
          />
        </svg>
      </div>

      {/* ---------- O ESPAÇO ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="split-grid">
            <div className="prose">
              <p>
                O <b>RibaLab</b> é o laboratório de inovação do Grupo Ribadouro,
                um espaço onde os alunos transformam ideias em projetos.
                Aqui, os alunos podem por em prática os seus conhecimentos, e aprenderem
                com situções reais em diferentes contextos, através de investigação
                e produção ativa.
              </p>
              <p>
                Mais do que um laboratório, o RibaLab é um {""}
                <b>ambiente de trabalho colaborativo e multidisciplinar</b>, onde
                diferentes áreas do conhecimento se cruzam. Juntanto a ciência com
                a eletrotécnica os alunos criam ligações através de projetos entre 
                as varias disciplinas de forma interativa
              </p>
              <p>
                O espírito do RibaLab assenta no desenvolvimento de projetos que sejam
                do interesse dos alunos e favoreçam o seu desenvolvimento pessoal.
                Esta abordagem incentiva a autonomia e a capacidade de colocar em prática
                os conhecimentos dos alunos.
              </p>
            </div>

            <aside className="aside-sticky">
              <div
                className="card"
                style={{
                  gap: "10px",
                  display: "grid",
                  placeItems: "center",
                  padding: "56px 40px",
                }}
              >
                <Image
                  src="/brand/ribalab-logo.png"
                  alt="Ribalab"
                  width={420}
                  height={140}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/ribalab/ribalab-colab.webp"
                  alt="Ribalab coolab"
                  width={420}
                  height={140}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- O QUE SE FAZ ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <SectionHeading
            eyebrow="Mãos na massa"
            title={
              <>
                O que se faz no <em>Ribalab</em>
              </>
            }
          />

          <div className="split-grid">
            <ul className="numbered">
              {MAKING.map((item) => (
                <li className="numbered-item" key={item.n}>
                  <span className="tn">{item.n}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="aside-sticky">
              <PhotoFrame
                src="/ribalab/focus-on-sensor.png"
                alt="Alunos do Projeto Guarda-Rios a testar eletrónica na bancada do Ribalab"
                caption="bancada técnica"
                ratio="4/5"
                duotone
              />
            </aside>
          </div>

          <div className="photo-row" style={{ marginTop: 52 }}>
            <PhotoFrame
              src="/estacao/aquanode-pcb.png"
              alt="Desenho da placa AquaNode desenhada no Ribalab"
              caption="Desenho da PCB"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />

            <VideoFrame 
              src="/estacao/timelapse-caixa.mp4"
              alt="Impressão da caixa da estação em 3D em filamento PETG"
              caption="impressão 3D"
              ratio="4/3"
              autoPlay loop muted
              className="(max-width: 720px) 50vw, 25vw" />

            <PhotoFrame
              src="/ribalab/teste-estanquidade.jpg"
              alt="Teste de estanquidade da caixa da estação"
              caption="estanquidade"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
            <PhotoFrame
              src="/ribalab/Soldagem.jpg"
              alt="Aluno a soldar componentes no Ribalab"
              caption="soldadura"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
          </div>

          <div className="photo-row" style={{ marginTop: 20 }}>
            <PhotoFrame
              src="/ribalab/galeria/ribalab-1.jpg"
              alt="Alunos a trabalhar no Ribalab"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
            <PhotoFrame
              src="/ribalab/galeria/ribalab-7.jpg"
              alt="Desenho e modelação 3D no Ribalab"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
            <PhotoFrame
              src="/ribalab/galeria/ribalab-13.jpg"
              alt="Trabalho de eletrónica no Ribalab"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
            <PhotoFrame
              src="/ribalab/galeria/ribalab-17.jpg"
              alt="Bancada de trabalho do Ribalab"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        eyebrow="Junta-te"
        title={
          <>
            Projeta o amanhã no <em>Ribalab</em>!
          </>
        }
        description="Junta-te à equipa do Ribalab e desenvolve as tuas competências. Desenvolve o teu potencial enquanto aprendes, crias e encontras soluções inovadoras para problemas do mundo real."
        photo={{
          src: "/ribalab/ribalab-team-guarda-rios.jpg",
          alt: "Alunos do Projeto Guarda-Rios na bancada do Ribalab",
          caption: "Ribalab",
        }}
        actions={
          <>
            <Button href="https://ribadouro.com/ribalab/" variant="orange" arrow>
              Riba+ - RibaLab
            </Button>
            <Button href="/estacao" variant="ghost">
              Conhecer a estação
            </Button>
          </>
        }
      />
    </>
  );
}
