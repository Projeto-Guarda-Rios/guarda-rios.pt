import type { Metadata } from "next";
import {
  Eyebrow,
  SectionHeading,
  PhotoFrame,
  StatBand,
} from "@/content/ui";

export const metadata: Metadata = {
  title: "Missão",
  description:
    "A missão do Projeto Guarda-Rios: promover a conservação da qualidade da água e dos ecossistemas através da ciência cidadã e de tecnologia aberta.",
};

/** Placeholder team years — photos arriving later. */
const TEAM_YEARS = ["2022 / 2023", "2023 / 2024", "2024 / 2025", "2025 / 2026"];

export default function SobrePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Sobre o projeto</Eyebrow>
          <h1>
            A nossa <em>missão</em>
          </h1>
          <p className="lead">
            Promover a consciencialização sobre a importância da água e dos
            ecossistemas naturais, usando a ciência cidadã como ferramenta
            central.
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

      {/* ---------- MISSÃO ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="split-grid">
            <div className="prose">
              <p>
                O Projeto Guarda-Rios tem como missão promover a
                consciencialização da importância da conservação da qualidade da
                água e dos ecossistemas naturais utilizando a{" "}
                <b>ciência cidadã</b> como ferramenta central. Pretendemos
                envolver comunidades escolares e não escolares e instituições
                locais na implementação de ações que promovam a sustentabilidade
                ambiental, fazendo com que todos assumam um compromisso na
                promoção de um desenvolvimento sustentável.
              </p>
              <p>
                A principal linha de ação consiste em criar uma rede de
                monitorização da qualidade de massas de água doce através da
                implementação de <b>sistemas modulares</b> que permitam
                identificar geograficamente possíveis focos de poluição,
                possibilitando a implementação imediata de ações que contribuam
                para minimizar ou solucionar problemas ambientais. Estes
                sistemas foram concebidos para avaliar a qualidade da água
                através da medição regular de parâmetros físico-químicos e da
                sua disponibilização num portal público.
              </p>
              <p>
                De forma a realizar uma abordagem ecológica mais integrada e
                multidisciplinar, os valores associados aos parâmetros
                físico-químicos serão articulados com parâmetros biológicos
                (estudo das comunidades de macroinvertebrados bentónicos),
                garantindo uma maior validade dos resultados.
              </p>
              <p>
                O <b>espírito open source</b> é também um significativo elemento
                diferenciador deste projeto, pretendendo-se disponibilizar na web
                todos os procedimentos associados à sua implementação, além dos
                dados recolhidos, após a sua validação. Com o Projeto
                Guarda-Rios pretendemos inspirar outros a replicar, testar e
                melhorar o sistema, criando as bases para uma rede de
                monitorização útil à proteção dos rios.
              </p>
            </div>

            <aside className="aside-sticky">
              <PhotoFrame
                alt="Trabalho de campo do Projeto Guarda-Rios"
                caption="trabalho de campo"
                ratio="4/5"
                duotone
              />
              <p className="pull-quote">
                Não se protege o que não se <span>mede</span>. Medir é o
                primeiro passo.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- VALORES ---------- */}
      <StatBand
        stats={[
          {
            value: "2",
            caption: (
              <>
                <strong>Parâmetros confirmados.</strong> Temperatura e turbidez
                no desenho atual da estação.
              </>
            ),
          },
          {
            value: (
              <>
                100<em>%</em>
              </>
            ),
            caption: (
              <>
                <strong>Open-source.</strong> Hardware, firmware e dados abertos
                a todos.
              </>
            ),
          },
          {
            value: "ODS",
            caption: (
              <>
                <strong>Desenvolvimento sustentável.</strong> Alinhado com os
                Objetivos da ONU.
              </>
            ),
          },
        ]}
      />

      {/* ---------- EQUIPA ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Quem faz"
            title={
              <>
                A <em>equipa</em>
              </>
            }
            lead="O Guarda-Rios é desenvolvido por alunos do Grupo Ribadouro, com o apoio de professores e especialistas de diferentes áreas científicas. O projeto assenta no trabalho colaborativo, permitindo que cada elemento contribua com os seus conhecimentos e interesses."
          />

          <p
            className="lead"
            style={{ marginTop: 26, maxWidth: "68ch", color: "var(--muted)" }}
          >
            Começou no ano letivo de 2022/2023 com uma equipa de quatro alunos
            do Colégio Ribadouro e cresceu, no ano seguinte, para dezenas de
            alunos dos três colégios do Grupo Ribadouro. As fotografias de cada
            equipa serão publicadas em breve.
          </p>

          <div className="photo-row" style={{ marginTop: 40 }}>
            {TEAM_YEARS.map((year) => (
              <PhotoFrame
                key={year}
                alt={`Equipa Guarda-Rios ${year}`}
                caption={year}
                ratio="4/5"
                sizes="(max-width: 720px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
