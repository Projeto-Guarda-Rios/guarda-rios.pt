import type { Metadata } from "next";
import {
  Eyebrow,
  SectionHeading,
  PhotoFrame,
  Card,
  CTASection,
  Button,
} from "@/content/ui";
import { LINKS } from "@/content/site-config";
import { PcbSideShowcase } from "./pcb-side-showcase";
import { SensorShowcase } from "./sensor-showcase";

export const metadata: Metadata = {
  title: "Estação",
  description:
    "A estação Guarda-Rios: arquitetura open-source de dois níveis — AquaNode (STM32) e caixa ESP32 com NB-IoT — alimentada a energia solar.",
};

const ARCHITECTURE = [
  {
    n: "01",
    title: "Caixa",
    text: "Invólucro impresso em 3D em filamento ASA, desenhado para proteger as componentes eletrónicas junto da água, garantindo-se a sua estanquidade.",
  },
  {
    n: "02",
    title: "AquaNode",
    text: "O nó sensorial submerso: recolhe as leituras dos sensores de água e envia-as por cabo, através de um barramento RS-485.",
  },
  {
    n: "03",
    title: "NB-IoT",
    text: "Ligação móvel de baixo consumo que transmite os dados para o portal, sem Wi-Fi e sem gateways próprios.",
  },
  {
    n: "04",
    title: "Painel solar",
    text: "O painel solar carrega uma bateria 18650, que armazena energia para alimentar a estação de forma contínua — mantendo-a em funcionamento durante a noite e em períodos de menor luz solar.",
  },
];

export default function EstacaoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Tecnologia aberta</Eyebrow>
          <h1>
            A <em>estação</em>
          </h1>
          <p className="lead">
            Concebida e construída pelos alunos no Ribalab: modular, de baixo
            custo e totalmente replicável. Alimentada por energia solar, mede
            parâmetros físico-químicos da água e envia os dados por rede móvel
            NB-IoT, sem depender de <em>Wi-Fi</em>, nem de gateways próprios.
          </p>
        </div>
      </section>

      {/* ---------- ARQUITETURA (dark panel) ---------- */}
      <section className="section panel-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Arquitetura"
            title={
              <>
                Quatro componentes, um <em>sistema</em>
              </>
            }
            lead="A estação organiza-se numa arquitetura de dois níveis que separa a aquisição de dados da comunicação e da gestão de energia — cada nível na sua própria placa, testável e substituível de forma independente."
          />

          <div className="est-grid">
            <div className="est-figure">
              <PhotoFrame
                src="/estacao/estacao-completa.png"
                alt="Protótipo da estação Guarda-Rios, com o AquaNode e a caixa impressa em 3D"
                caption="Estação Guarda Rios  "
                ratio="5/4"
                duotone
                sizes="(max-width: 1080px) 100vw, 440px"
              />
            </div>

            <div>
              <ul className="est-parts">
                {ARCHITECTURE.map((part) => (
                  <li className="part" key={part.n}>
                    <span className="pnum">{part.n}</span>
                    <div>
                      <h4>{part.title}</h4>
                      <p>{part.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="est-note">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.9 2.1 5.9 2.4 5.9 2.4a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 8.8c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
                </svg>
                Esquemas, código-fonte e listas de material — tudo aberto no
                GitHub.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ESPECIFICAÇÕES ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Hardware"
            title={
              <>
                Dois níveis, duas <em>placas</em>
              </>
            }
            lead="Isolar a aquisição de sensores num chip dedicado de consumo ultra-baixo mantém o orçamento energético no mínimo — e permite evoluir cada placa sem tocar na outra."
          />

          <PcbSideShowcase />

          <div className="spec-grid">
            <div className="card spec">
              <span className="lvl">Nível 1 · Nó sensorial</span>
              <h3>AquaNode PCB</h3>
              <p>
                A placa de interface com os sensores. Um microcontrolador
                STM32L053R8 executa <em>firmware</em> bare-metal, consulta ambos os
                sensores a cada minuto e envia as leituras por RS-485 —
                imune a ruído em cabos de grande comprimento.
              </p>
              <ul className="spec-list">
                <li>
                  <span className="k">Microcontrolador</span>
                  <span className="v">STM32L053R8</span>
                </li>
                <li>
                  <span className="k">Sensor de turbidez</span>
                  <span className="v">DFRobot SEN0554</span>
                </li>
                <li>
                  <span className="k">Sensor de temperatura</span>
                  <span className="v">DS18B20</span>
                </li>
                <li>
                  <span className="k">Ligação</span>
                  <span className="v">RS-485</span>
                </li>
                <li>
                  <span className="k">Amostragem</span>
                  <span className="v">a cada minuto</span>
                </li>
              </ul>
            </div>

            <div className="card spec">
              <span className="lvl">Nível 2 · Comunicação e energia</span>
              <h3>Caixa · PCB Principal</h3>
              <p>
                O núcleo da estação, alojado numa caixa à prova de intempéries.
                Um ESP32-WROOM-32D acorda a cada ~5 minutos, lê os dados mais
                recentes do AquaNode, transmite-os por NB-IoT e volta a hibernar
                — gerindo também a bateria e a segurança física.
              </p>
              <ul className="spec-list">
                <li>
                  <span className="k">Microcontrolador</span>
                  <span className="v">ESP32-WROOM-32D</span>
                </li>
                <li>
                  <span className="k">Comunicação</span>
                  <span className="v">M5Stack NB-IoT2 (SIM7028)</span>
                </li>
                <li>
                  <span className="k">Energia</span>
                  <span className="v">Solar + 18650</span>
                </li>
                <li>
                  <span className="k">Segurança</span>
                  <span className="v">Sensor de abertura (tamper)</span>
                </li>
                <li>
                  <span className="k">Transmissão</span>
                  <span className="v">a cada ~5 min</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose" style={{ marginTop: 64, maxWidth: "72ch" }}>
            <h3>Do rio à nuvem</h3>
            <p>
              O AquaNode, submerso, consulta os sensores de turbidez e
              temperatura a cada minuto e envia as leituras por RS-485 até
              à caixa. Aí, o ESP32 sai do modo de hibernação a cada cinco
              minutos, lê os dados mais recentes, ativa o módulo NB-IoT e
              transmite-os para o nosso servidor — voltando de imediato a
              hibernar. Este ciclo de trabalho, inferior a 1%, é o que torna
              viável a operação autónoma a energia solar.
            </p>
            <p>
              Na nuvem, cada leitura é validada por uma API REST e guardada numa
              base de dados de séries temporais <b>InfluxDB</b>, que alimenta os
              painéis <b>Grafana</b> do portal público{" "}
              <b>data.guarda-rios.pt</b> — acessível a qualquer pessoa, sem
              registo.
            </p>
            <p>
              A tecnologia <b>NB-IoT</b> foi escolhida por operar na rede celular
              existente e reduzir a necessidade de infraestrutura local: uma
              estação pode transmitir em locais onde exista cobertura NB-IoT
              adequada.
            </p>
          </div>

          <div className="photo-row" style={{ marginTop: 52 }}>
            <PhotoFrame
              src="/estacao/campo/granja-4.jpg"
              alt="Estação Guarda-Rios a transmitir dados junto à Ribeira da Granja"
              caption="no terreno"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
            <PhotoFrame
              src="/estacao/campo/granja-2.jpg"
              alt="Recolha de amostras na Ribeira da Granja"
              caption="amostragem"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
            <PhotoFrame
              src="/estacao/campo/granja-3.jpg"
              alt="Trabalho de campo na Ribeira da Granja"
              caption="Ribeira da Granja"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
            <PhotoFrame
              src="/estacao/campo/granja-6.jpg"
              alt="Equipa do Guarda-Rios em ensaios no terreno"
              caption="ensaios"
              ratio="4/3"
              sizes="(max-width: 720px) 50vw, 25vw"
            />
          </div>

          <div style={{ marginTop: 40, maxWidth: "72ch" }}>
            <PhotoFrame
              src="/estacao/rede-nb-iot.jpg"
              alt="Ilustração conceptual de uma rede de estações Guarda-Rios ao longo de um rio, ligadas por NB-IoT"
              caption="Conceito · Rede de estações"
              ratio="16/9"
            />
            <p style={{ marginTop: 16, color: "var(--muted)", fontSize: "0.95rem" }}>
              Visão a longo prazo do projeto: várias estações ao longo do mesmo
              curso de água, a transmitir para um único portal, capazes de
              ajudar a localizar geograficamente a origem de uma descarga
              poluente. A distância entre estações irá depender da extensão e do
              caudal do curso de água em monitorização.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- PARÂMETROS ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <SectionHeading
            eyebrow="O que medimos"
            title={
              <>
                Dois <em>parâmetros</em>
              </>
            }
            lead="Atualmente medimos temperatura e turbidez — dois parâmetros físico-químicos que são indicadores fundamentais para avaliar a qualidade da água. O sistema é modular: pH, oxigénio dissolvido e condutividade podem ser integrados sem alterar a placa principal."
          />

          <div className="detail-grid">
            <Card title="Parâmetro físico-químico">
              <div className="card-body">
                <h3>Temperatura</h3>
                <p>
                  Fator crítico para a biodiversidade aquática: determina a
                  capacidade da água em reter gases vitais, como o oxigénio
                  dissolvido. Sendo os organismos fluviais maioritariamente
                  poiquilotérmicos (a temperatura corporal varia com a do meio),
                  tornam-se muito vulneráveis a oscilações térmicas bruscas.
                  Picos invulgares funcionam como alerta imediato de poluição
                  térmica, associada a descargas industriais de água quente. No
                  âmbito do Decreto-Lei n.º 236/98, o Valor Máximo Admissível é
                  de 25 ºC e o recomendável de 22 ºC; as descargas não devem
                  alterar a temperatura natural do rio em mais de 1,5 a 3 ºC.
                </p>
              </div>
            </Card>

            <Card title="Parâmetro físico-químico">
              <div className="card-body">
                <h3>Turbidez</h3>
                <p>
                  Quantidade de partículas sólidas em suspensão na água. Afeta a
                  penetração da luz solar, prejudicando a fotossíntese e toda a
                  cadeia alimentar. Mede-se em NTU (Unidades Nefelométricas de
                  Turbidez): para consumo humano, o valor legal é de 1 NTU à
                  saída das ETA, tolerando-se até 4 NTU na torneira (Decreto-Lei
                  n.º 69/2023). Nos rios não há valor fixo, mas como referência
                  ecológica: &lt; 5 NTU indica água muito limpa, 5–25 NTU água
                  moderadamente clara (comum em rios saudáveis) e &gt; 50 NTU
                  água muito turva — alerta para arrastamento de terras ou
                  poluição.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        eyebrow="Constrói a tua"
        title={
          <>
            Tudo aberto, <em>tudo replicável.</em>
          </>
        }
        description="Esquemas eletrónicos, firmware, ficheiros de impressão 3D e configuração de servidor — está tudo disponível para qualquer escola ou comunidade replicar a estação."
        photo={{
          src: "/estacao/caixa-principal.png",
          alt: "Caixa da estação Guarda-Rios impressa em 3D em filamento ASA",
          caption: "Caixa Principal",
        }}
        actions={
          <>
            <Button href={LINKS.github} variant="orange" arrow>
              Ver no GitHub
            </Button>
            <Button href={LINKS.portal} variant="ghost">
              Portal de Dados
            </Button>
          </>
        }
      />
    </>
  );
}
