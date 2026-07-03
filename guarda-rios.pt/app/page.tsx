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

interface Entry {
  href: string;
  kicker: string;
  title: string;
  teaser: string;
  photo: string;
  /** Crop anchor (CSS `object-position`), e.g. `"center top"` or `"50% 20%"`. */
  focal?: string;
  /** Extra zoom as a percentage (`100` = none, `130` = 130%). */
  zoom?: number;
}

/** Cards that lead visitors into each section of the site. */
const ENTRIES: Entry[] = [
  {
    href: "/ribalab",
    kicker: "01 · Ribalab",
    title: "O nosso hackerspace",
    teaser:
      "O espaço maker do Grupo Ribadouro onde os alunos desenham e constroem cada estação.",
    photo: "/ribalab/ribalab-colab.webp",
    // Ajusta o enquadramento: "center top", "center bottom", "left", "50% 20%"…
    focal: "top",
    // Aproxima a imagem: 100 = sem zoom, 130 = 130%…
    zoom: 100,
  },
  {
    href: "/estacao",
    kicker: "02 · Estação",
    title: "Tecnologia aberta",
    teaser:
      "Solar, modular e replicável: do sensor submerso à transmissão por rede móvel NB-IoT.",
    photo: "/estacao/PGR - PCB.png",
    focal: "center",
    zoom: 110,
  },
  {
    href: "/divulgacao",
    kicker: "03 · Divulgação",
    title: "Levamos os rios ao público",
    teaser:
      "GreenFest, hackathons e encontros onde partilhamos o projeto com a comunidade.",
    photo: "/divulgacao/greenfest-2024/greenfest-2024-3.jpg",
    focal: "50% 30%",
    zoom: 100,
  },
  {
    href: "/concursos",
    kicker: "04 · Concursos",
    title: "Concursos Guarda-Rios",
    teaser:
      "O desafio STEM que lançámos às escolas — e as distinções que o projeto já conquistou.",
    photo: "/concursos/i-fest-2026/iFest-3.jpg",
    focal: "center",
    zoom: 100,
  },
  {
    href: "/parcerias",
    kicker: "05 · Parcerias",
    title: "Quem caminha connosco",
    teaser:
      "Instituições que apoiam e orientam o projeto, da engenharia à gestão da água.",
    photo: "/ribalab/ribalab-team-guarda-rios.jpg",
    focal: "center",
    zoom: 100,
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
                Estações open-source para monitorizar a qualidade da água dos
                rios de Portugal com tecnologia acessível e replicável.
              </p>
              <p className="hero-sub">
                Um projeto de alunos do Grupo Ribadouro, no Porto — ciência
                cidadã e tecnologia aberta ao serviço das nossas ribeiras. O
                sistema já foi validado em laboratório e está preparado para
                testes de campo com parceiros.
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
                src="/guarda-rios/equipa.webp"
                alt="Estação Guarda-Rios montada, com o AquaNode e a caixa impressa em 3D"
                caption="estação montada"
                ratio="5/6"
                duotone
                sizes="(max-width: 1080px) 100vw, 480px"
              />
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
            value: "<1%",
            caption: (
              <>
                <strong>Ciclo ativo.</strong> O ESP32 acorda, transmite e volta
                a hibernar para poupar energia.
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

      {/* ---------- DADOS (teaser) ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <div className="dados-top">
            <SectionHeading
              eyebrow="Dados abertos"
              title={
                <>
                  Da estação ao <em>portal.</em>
                </>
              }
              lead="O fluxo técnico já liga sensores, API REST, InfluxDB, Grafana e o portal público. Os valores abaixo ilustram os parâmetros confirmados: temperatura e turbidez."
            />
            <LiveTag>Exemplo</LiveTag>
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
              title="Temperatura · exemplo de série"
              action={<LiveTag>Demo</LiveTag>}
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
              Abrir o Portal de Dados
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
                  alt={entry.title}
                  focal={entry.focal}
                  zoom={entry.zoom}
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
        description="Escolas, autarquias e comunidades podem replicar a estação, testar o modelo localmente e ajudar a construir uma futura rede aberta de vigilância dos rios."
        photo={{
          src: "/estacao/rede-nb-iot.jpg",
          alt: "Conceito de rede de estações Guarda-Rios ao longo de um rio, ligadas por NB-IoT",
          caption: "conceito · rede de estações",
        }}
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
