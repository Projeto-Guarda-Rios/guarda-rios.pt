import type { Metadata } from "next";
import Image from "next/image";
import {
  Eyebrow,
  SectionHeading,
  PhotoFrame,
  CTASection,
  Button,
} from "@/content/ui";
import { LINKS } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Ribalab",
  description:
    "O Ribalab é o hackerspace do Grupo Ribadouro onde os alunos desenham, imprimem, programam e testam as estações do Projeto Guarda-Rios.",
};

const MAKING = [
  {
    n: "01",
    title: "Desenho e montagem de PCB",
    text: "Da esquemática à soldadura: as placas AquaNode e principal são desenhadas, produzidas e montadas à mão pelos alunos.",
  },
  {
    n: "02",
    title: "Impressão 3D",
    text: "Caixas e compartimentos modelados em Fusion 360 e impressos numa Bambu Lab P1S em filamento ASA, resistente a radiação UV, chuva e temperaturas extremas.",
  },
  {
    n: "03",
    title: "Firmware",
    text: "Código bare-metal em C para o STM32 e firmware para o ESP32 — com um programador de baixo custo feito a partir de um Arduino Nano.",
  },
  {
    n: "04",
    title: "Testes e estanquidade",
    text: "Bancada onde se validam leituras, consumo energético e o isolamento à prova de água, antes de cada estação seguir para o rio.",
  },
];

export default function RibalabPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Hackerspace · Grupo Ribadouro</Eyebrow>
          <h1>
            <em>Ribalab</em>
          </h1>
          <p className="lead">
            O espaço maker onde as estações Guarda-Rios ganham forma — da ideia
            ao protótipo, tudo é feito pelos alunos.
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
                O <b>Ribalab</b> é o hackerspace do Grupo Ribadouro — um espaço
                maker onde os alunos passam das ideias às mãos na massa. É aqui
                que o Guarda-Rios acontece: desenham-se as placas de circuito,
                imprimem-se as caixas em 3D, escreve-se o firmware e testam-se as
                estações antes de irem para o terreno.
              </p>
              <p>
                Mais do que uma oficina, é um ambiente de{" "}
                <b>trabalho colaborativo e multidisciplinar</b>, onde cada aluno
                contribui com os seus conhecimentos e interesses — da eletrónica
                ao design, da programação à ciência ambiental — para atingir
                objetivos comuns.
              </p>
              <p>
                Esta é também a raiz da filosofia open-source do projeto: aquilo
                que aqui se aprende e constrói é documentado e partilhado, para
                que qualquer escola ou comunidade possa replicar o mesmo
                percurso.
              </p>
            </div>

            <aside className="aside-sticky">
              <div
                className="card"
                style={{
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
                O que se faz <em>aqui</em>
              </>
            }
            lead="Cada estação atravessa o Ribalab de ponta a ponta — da placa nua ao teste de estanquidade."
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
                alt="Bancada de trabalho no Ribalab"
                caption="bancada · Ribalab"
                ratio="4/5"
                duotone
              />
            </aside>
          </div>

          <div className="photo-row" style={{ marginTop: 52 }}>
            <PhotoFrame alt="Soldadura de uma placa" caption="soldadura" ratio="4/3" sizes="(max-width: 720px) 50vw, 25vw" />
            <PhotoFrame alt="Impressão 3D de uma caixa" caption="impressão 3D" ratio="4/3" sizes="(max-width: 720px) 50vw, 25vw" />
            <PhotoFrame alt="Testes de firmware" caption="firmware" ratio="4/3" sizes="(max-width: 720px) 50vw, 25vw" />
            <PhotoFrame alt="Testes de estanquidade" caption="testes" ratio="4/3" sizes="(max-width: 720px) 50vw, 25vw" />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        eyebrow="Junta-te"
        title={
          <>
            Constrói connosco no <em>Ribalab.</em>
          </>
        }
        description="Todo o hardware, firmware e ficheiros de impressão estão abertos. Explora, replica e contribui — a começar pelo repositório do projeto."
        photo={{ alt: "A equipa no Ribalab", caption: "a equipa no Ribalab" }}
        actions={
          <>
            <Button href={LINKS.github} variant="orange" arrow>
              Ver no GitHub
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
