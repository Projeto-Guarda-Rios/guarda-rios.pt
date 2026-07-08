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
    title: "Um makerspace",
    teaser:
      "O Ribalab é um ecossistema de inovação e criatividade tecnológica. Este makerspace é o local onde os projetos científicos passam de conceitos teóricos a soluções reais para o mundo.",
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
      "Estação autónoma, alimentada por energia solar, que mede parâmetros da água com sensores digitais, enviando os dados em tempo real via rede móvel NB-IoT.",
    photo: "/estacao/PGR - PCB.png",
    focal: "center",
    zoom: 110,
  },
  {
    href: "/divulgacao",
    kicker: "03 · Divulgação",
    title: "Guarda-Rios em movimento",
    teaser:
      "A presença em competições científicas, apresentações públicas e a promoção de eventos científicos, permite a partilha e divulgação do projeto com a comunidade.",
    photo: "/divulgacao/greenfest-2024/greenfest-2024-3.jpg",
    focal: "50% 30%",
    zoom: 100,
  },
  {
    href: "/concursos",
    kicker: "04 · Concursos",
    title: "Desafios científicos",
    teaser:
      "Participar em competições científicas é uma oportunidade de colocar o projeto à prova perante júris de especialistas e realizar a sua divulgação em competições nacionais e internacionais.",
    photo: "/concursos/i-fest-2026/iFest-3.jpg",
    focal: "center",
    zoom: 100,
  },
  {
    href: "/parcerias",
    kicker: "05 · Parcerias",
    title: "Quem caminha connosco",
    teaser:
      "Instituições que apoiam e orientam o projeto, envolvendo empresas municipais, centros de investigação e investigadores de instituições de ensino superior.",
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
              <Eyebrow>Sustentabilidade · Rios · Ciência Cidadã  · Open-source ·  Low-cost</Eyebrow>
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
                Tecnologia open-source ao serviço da ciência cidadã na 
                proteção e monitorização de cursos de água doce em tempo real.
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

            <div className="hero-figure w-80">
              <PhotoFrame
                src="/brand/PGR_Logo.png"
                alt="Logo"
                ratio="5/6"
                contain
                className="photo--plain"
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

      {/* ---------- O PROJETO (narrativa) ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: "72ch" }}>
            <Eyebrow>O projeto</Eyebrow>
            <h3>Como surgiu?</h3>
            <p>
              O Projeto Guarda-Rios foi desenvolvido pela comunidade educativa do
              Grupo Ribadouro, movido pela vontade e necessidade de apresentar uma
              resposta inovadora à contaminação das bacias hidrográficas. A missão
              deste projeto é clara: proteger os recursos hídricos de água doce
              através da implementação de uma tecnologia acessível e replicável,
              promovendo o desenvolvimento de uma cidadania ativa.
            </p>
            <h3>O que foi realizado?</h3>
            <p>
              Foi criado um sistema inteligente e modular de sensorização
              ambiental capaz de monitorizar a qualidade da água em tempo real. Os
              dados recolhidos estão disponíveis para consulta pública e gratuita
              no nosso portal. Juntos, através da ciência cidadã, podemos
              identificar focos de poluição em tempo útil, agir na defesa dos
              ecossistemas fluviais e caminhar rumo a um futuro mais sustentável.
            </p>
            <h3>O que diferencia o projeto?</h3>
            <p>
              Através da implementação de estações de baixo custo e
              energeticamente autossuficientes (alimentadas a energia solar),
              realiza-se uma medição de parâmetros físico-químicos fundamentais,
              cujos dados avaliados são automaticamente enviados via rede móvel
              (NB-IoT). Defendemos que o conhecimento deve ser livre e acessível.
              Por isso, o Guarda-Rios é um projeto totalmente open-source.
              Partilhamos abertamente com a comunidade todos os esquemas de
              hardware, códigos de programação e ficheiros de impressão 3D,
              permitindo que qualquer cidadão, escola, investigador ou outra
              entidade possa replicar as nossas estações.
            </p>
            <p className="lead" style={{ marginTop: 8 }}>
              Explore os dados, replique o projeto e ajude-nos a proteger os
              nossos rios!
            </p>
          </div>
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
                <strong>Open-source:</strong> Esquemas, código e materiais
                totalmente disponíveis.
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
                <strong>Parâmetros medidos.</strong> Temperatura e turbidez - o ponto de
                partida.
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
              lead="O fluxo técnico já estabelece ligação entre sensores, API REST, InfluxDB, Grafana e o portal público. Os valores abaixo ilustram os parâmetros confirmados: temperatura e turbidez."
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
                O Nosso Percurso: Criar, Competir, Divulgar
              </>
            }
            lead="Do espaço de criação às competições científicas, passando pelas apresentações públicas que permitem a divulgação
            do projeto. Fique a conhecer todo o percurso!"
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
            Implementa o Guarda-Rios <em>no teu rio.</em>
          </>
        }
        description="Escolas, autarquias ou outras instituições poderão replicar a nossa estação, testar o modelo localmente e contribuir para a construção de uma futura rede aberta de vigilância de cursos de água doce."
        photo={{
          src: "/estacao/rede-nb-iot.jpg",
          alt: "Conceito de rede de estações Guarda-Rios ao longo de um rio, ligadas por NB-IoT",
          caption: "conceito · rede de estações",
        }}
        actions={
          <>
            <Button href="/concursos#NossoConcurso" variant="orange" arrow>
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
