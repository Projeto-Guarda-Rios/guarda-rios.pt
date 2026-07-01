import Link from "next/link";
import {
  Eyebrow,
  Button,
  PhotoFrame,
  SectionHeading,
  StatBand,
  Gauge,
  MiniAreaChart,
  ChartAxis,
  Card,
  LiveTag,
  CTASection,
  ArrowRight,
} from "@/content/ui";
import { LINKS } from "@/content/site-config";

/** Cards that lead visitors into each section of the site. */
const ENTRIES = [
  {
    href: "/ribalab",
    kicker: "01 · Ribalab",
    title: "O nosso hackerspace",
    teaser:
      "O espaço maker do Grupo Ribadouro onde os alunos desenham e constroem cada estação.",
    photo: undefined,
    caption: "Ribalab",
  },
  {
    href: "/estacao",
    kicker: "02 · Estação",
    title: "Tecnologia aberta",
    teaser:
      "Solar, modular e replicável: do sensor submerso à transmissão por rede móvel NB-IoT.",
    photo: undefined,
    caption: "estação no terreno",
  },
  {
    href: "/divulgacao",
    kicker: "03 · Divulgação",
    title: "Levamos os rios ao público",
    teaser:
      "GreenFest, hackathons e encontros onde partilhamos o projeto com a comunidade.",
    photo: "/divulgacao/greenfest-2025/greenfest-1.jpg",
    caption: "GreenFest 2025",
  },
  {
    href: "/concursos",
    kicker: "04 · Concursos",
    title: "Concurso Guarda-Rios",
    teaser:
      "O desafio STEM que lançámos às escolas — e as distinções que o projeto já conquistou.",
    photo: "/concursos/atlantico-junior-2023/aj-1.jpg",
    caption: "Atlântico Júnior",
  },
  {
    href: "/parcerias",
    kicker: "05 · Parcerias",
    title: "Quem caminha connosco",
    teaser:
      "Instituições que apoiam e orientam o projeto, da engenharia à gestão da água.",
    photo: undefined,
    caption: "parcerias",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <Eyebrow>Ciência cidadã · Rios de Portugal</Eyebrow>
              <h1>
                Projeto
                <br />
                <span className="accent">
                  Guarda-Rios
                  <svg viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden>
                    <path
                      d="M2 7 C60 2 110 11 160 6 C210 1 250 10 298 5"
                      fill="none"
                      stroke="var(--orange)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="hero-mission">
                Estações open-source que monitorizam a qualidade da água dos
                rios de Portugal, em tempo real.
              </p>
              <p className="hero-sub">
                Um projeto de alunos do Grupo Ribadouro, no Porto — ciência
                aberta ao serviço das nossas ribeiras. Qualquer escola ou
                comunidade pode montar a sua estação.
              </p>
              <div className="hero-ctas">
                <Button href={LINKS.portal} arrow>
                  Portal de Dados
                </Button>
                <Button href="/sobre" variant="ghost">
                  A nossa missão
                </Button>
              </div>
            </div>

            <div className="hero-figure">
              <PhotoFrame
                alt="Fotografia de um rio de Portugal"
                caption="rio · fotografia"
                ratio="5/6"
                duotone
                sizes="(max-width: 1080px) 100vw, 480px"
              />
              <div className="hero-data">
                <div className="hd-top">
                  <span className="dot" /> Ao vivo · Estação-piloto
                </div>
                <div className="hd-row">
                  <span className="hd-k">Temperatura</span>
                  <span className="hd-v tnum">
                    14,8<span>ºC</span>
                  </span>
                </div>
                <div className="hd-row">
                  <span className="hd-k">Turbidez</span>
                  <span className="hd-v tnum">
                    3<span>NTU</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wave-divider" aria-hidden style={{ marginTop: 96 }}>
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
      </section>

      {/* ---------- STATS ---------- */}
      <StatBand
        stats={[
          {
            value: (
              <>
                100<em>%</em>
              </>
            ),
            caption: (
              <>
                <strong>Open-source.</strong> Esquemas, código e materiais
                abertos a todos.
              </>
            ),
          },
          {
            value: "24/7",
            caption: (
              <>
                <strong>Monitorização contínua.</strong> Leituras a chegar de
                dia e de noite.
              </>
            ),
          },
          {
            value: "2",
            caption: (
              <>
                <strong>Parâmetros medidos.</strong> Temperatura e turbidez — e
                a crescer.
              </>
            ),
          },
        ]}
      />

      {/* ---------- DADOS EM DIRETO (teaser) ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <div className="dados-top">
            <SectionHeading
              eyebrow="Dados em tempo real"
              title={
                <>
                  A água, <em>em direto.</em>
                </>
              }
              lead="Cada estação transmite leituras contínuas para um portal público e aberto. Estes são exemplos do que vai encontrar."
            />
            <LiveTag>A transmitir agora</LiveTag>
          </div>

          <div className="dados-grid">
            <Card title="Temperatura">
              <Gauge
                value={14.8}
                max={40}
                unit="ºC"
                sublabel="Fresco · escala 0–40 ºC"
                color="var(--orange)"
                display="14,8"
              />
            </Card>

            <Card title="Turbidez">
              <Gauge
                value={3}
                max={20}
                unit="NTU"
                sublabel="Água limpa · escala 0–20 NTU"
                color="var(--blue)"
              />
            </Card>

            <Card
              className="chart-card"
              title="Temperatura · últimas 24 h"
              action={<LiveTag />}
            >
              <MiniAreaChart />
              <ChartAxis labels={["00h", "06h", "12h", "18h", "agora"]} />
            </Card>
          </div>

          <div className="dados-foot">
            <a
              className="link-arrow"
              href={LINKS.portal}
              target="_blank"
              rel="noreferrer noopener"
            >
              Explorar todas as estações no Portal de Dados
              <ArrowRight width={16} height={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- SECTION ENTRIES ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Explorar o projeto"
            title={
              <>
                Por onde <em>começar</em>
              </>
            }
            lead="Do espaço onde nascem as estações às competições que nos desafiam — percorre cada parte do Guarda-Rios."
          />

          <div className="entry-grid">
            {ENTRIES.map((entry) => (
              <Link key={entry.href} href={entry.href} className="entry-card">
                <PhotoFrame
                  src={entry.photo}
                  alt={entry.caption}
                  caption={entry.caption}
                  ratio="16/10"
                  sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 380px"
                />
                <div className="entry-body">
                  <span className="kicker">{entry.kicker}</span>
                  <h3>{entry.title}</h3>
                  <p>{entry.teaser}</p>
                  <span className="link-arrow">
                    Ver mais
                    <ArrowRight width={16} height={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        eyebrow="Junta-te"
        title={
          <>
            Traz o Guarda-Rios <em>ao teu rio.</em>
          </>
        }
        description="Escolas, autarquias e comunidades: qualquer um pode montar uma estação e juntar-se à rede de vigilância dos rios de Portugal."
        photo={{ alt: "A equipa no Ribalab", caption: "a equipa no Ribalab" }}
        actions={
          <>
            <Button href="/concursos" variant="orange" arrow>
              Participar no concurso
            </Button>
            <Button href={LINKS.github} variant="ghost">
              Ver no GitHub
            </Button>
          </>
        }
      />
    </>
  );
}
