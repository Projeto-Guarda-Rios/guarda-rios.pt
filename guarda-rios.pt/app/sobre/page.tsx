import type { Metadata } from "next";
import {
  Eyebrow,  
  PhotoFrame,
} from "@/content/ui";

export const metadata: Metadata = {
  title: "Missão",
  description:
    "A missão do Projeto Guarda-Rios: promover a conservação da qualidade da água e dos ecossistemas através da ciência cidadã e de tecnologia aberta.",
};

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
                envolver comunidades escolares e não escolares e outras instituições
                na implementação de ações que promovam a sustentabilidade
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
                O <b>espírito <em>open-source</em></b> é também um significativo elemento
                diferenciador deste projeto, pretendendo-se disponibilizar na <em>web</em>
                todos os procedimentos associados à sua implementação, além dos
                dados recolhidos, após a sua validação. Com o Projeto
                Guarda-Rios pretendemos inspirar outros a replicar, testar e
                melhorar o sistema, criando as bases para uma rede de
                monitorização útil à proteção dos rios.
              </p>
            </div>

            <aside className="aside-sticky">
              <PhotoFrame
                src="/ribalab/ODS.png"
                alt="Objetivos do desenvolviimento sustentável"
                caption="ods.pt"
                ratio="4/5"
                duotone
              />
              <p className="pull-quote">
                Medir para proteger: tecnologia inteligente e ciência cidadã como o primeiro passo para garantir um futuro sustentáveç
              </p>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
}
