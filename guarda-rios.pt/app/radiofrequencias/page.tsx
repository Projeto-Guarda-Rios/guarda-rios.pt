import type { Metadata } from "next";
import {
  Eyebrow,
  SectionHeading,
  Card,
  Button,
  DownloadIcon,
} from "@/content/ui";
import { LINKS } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Radiofrequências",
  description:
    "Como o Guarda-Rios transmite os dados do rio: da comunicação série RS-485 entre AquaNode e caixa, à evolução de LoRa para NB-IoT na ligação à nuvem.",
};

const REPORT = "/docs/relatorio-final-faqtos-2026.pdf";

export default function RadiofrequenciasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Comunicação · Radiofrequências em ação</Eyebrow>
          <h1>
            <em>Radiofrequências</em>
          </h1>
          <p className="lead">
            Monitorizar rios em locais remotos, sem Wi-Fi nem rede elétrica,
            impõe exigências próprias à comunicação. Aqui explicamos como os
            dados viajam do sensor submerso até ao portal público — e porque
            passámos de LoRa para NB-IoT.
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

      {/* ---------- O DESAFIO ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: "72ch" }}>
            <SectionHeading
              eyebrow="O desafio"
              title={
                <>
                  Comunicar a partir do <em>rio</em>
                </>
              }
            />
            <p>
              Os pontos de monitorização distribuem-se ao longo de troços
              fluviais, muitas vezes em zonas sem cobertura Wi-Fi e sem
              alimentação de rede — e, no caso dos sensores submersos, em
              condições onde qualquer falha de comunicação implica uma
              intervenção física dispendiosa. A tecnologia de comunicação
              condiciona, por isso, não só a viabilidade técnica do projeto, mas
              também o seu custo de operação a longo prazo.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- ARQUITETURA ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <SectionHeading
            eyebrow="Arquitetura"
            title={
              <>
                Sensoriamento e comunicação, <em>separados</em>
              </>
            }
            lead="O sistema é hierárquico e separa deliberadamente as duas funções — o que torna a cadeia de rádio substituível sem tocar nos sensores."
          />
          <div className="prose" style={{ maxWidth: "72ch" }}>
            <p>
              Em cada local, um conjunto de <b>AquaNodes</b> — as unidades de
              sensoriamento — liga-se por cabo (comunicação série <b>RS-485</b>)
              a uma <b>caixa</b> (<i>station box</i>) fora de água. No interior da
              caixa, uma PCB baseada em <b>ESP32</b> agrega os dados e trata da
              comunicação com o exterior. A radiofrequência ocorre apenas neste
              troço — entre a caixa e a infraestrutura do projeto.
            </p>
            <p>
              Esta separação tem vantagens claras: os AquaNodes podem ser
              instalados nas posições ótimas (incluindo submersas) sem terem de
              assegurar a ligação ao exterior, o que simplifica o seu design,
              reduz o consumo e permite otimizar a estanquidade de forma
              independente. A antena da caixa, por sua vez, fica acima da linha de
              água, num local com boas condições de propagação.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- DUAS FASES ---------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Evolução"
            title={
              <>
                Duas tecnologias <em>LPWAN</em>
              </>
            }
            lead="Ao longo do projeto explorámos duas tecnologias de baixo consumo e longo alcance (Low-Power Wide-Area Network) para a ligação da caixa ao exterior."
          />
          <div className="detail-grid">
            <Card title="Fase 1 · banda ISM (livre)">
              <div className="card-body">
                <h3>LoRa ponto-a-ponto</h3>
                <p>
                  Módulos <b>Ebyte E220</b> a 868 MHz, em ligação ponto-a-ponto
                  com um <b>gateway</b> próprio baseado em Raspberry Pi 4B. O LoRa
                  usa modulação por <i>chirp</i> (CSS), muito imune a ruído,
                  privilegiando o alcance (vários km em linha de vista) em
                  detrimento do débito. Vantagens: independência total de
                  operadores e custo por mensagem nulo. Limitações: restrições de{" "}
                  <i>duty cycle</i> na banda ISM e a necessidade de manter um
                  gateway em cada zona de cobertura.
                </p>
              </div>
            </Card>
            <Card title="Fase 2 · banda licenciada">
              <div className="card-body">
                <h3>NB-IoT</h3>
                <p>
                  Com a rede a expandir-se por bacias mais dispersas, manter
                  gateways LoRa tornou-se insustentável. Passámos a <b>NB-IoT</b>{" "}
                  (módulos SIM7028G/SIM7080G, com SIM IoT da NOS): uma tecnologia
                  móvel do 3GPP, operada pelas redes 4G/5G existentes. Ocupa apenas
                  180 kHz, com modulação simples (QPSK) e modos de poupança de
                  energia (PSM, eDRX). Elimina o gateway — cada caixa comunica
                  diretamente com a rede do operador e os dados seguem para o
                  InfluxDB/Grafana. Em troca, depende da cobertura NB-IoT e de um
                  custo recorrente de SIM.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- COMPARAÇÃO ---------- */}
      <section className="section bg-2">
        <div className="wrap">
          <SectionHeading eyebrow="Em resumo" title={<>LoRa ou NB-IoT?</>} />
          <div className="prose" style={{ maxWidth: "72ch" }}>
            <p>
              Não há superioridade absoluta: é uma decisão de engenharia
              condicionada pela escala, pela geografia e pelo modelo de operação.
              O <b>LoRa</b> continua preferível quando a implantação é
              geograficamente concentrada, quando não há cobertura celular, ou se
              se quer eliminar qualquer dependência de operadores. O{" "}
              <b>NB-IoT</b> é mais adequado a redes distribuídas por várias bacias,
              onde manter gateways seria proibitivo e a rede celular já oferece boa
              fiabilidade — como acontece, cada vez mais, em Portugal.
            </p>
            <p>
              A separação entre AquaNode e caixa foi determinante: por a cadeia de
              rádio estar concentrada num único componente (a PCB ESP32 da caixa,
              já na 4.ª revisão), a troca de LoRa por NB-IoT foi uma evolução
              natural do hardware, sem qualquer alteração ao sensoriamento.
            </p>
          </div>
          <div style={{ marginTop: 36 }}>
            <a
              className="btn btn-primary"
              href={REPORT}
              target="_blank"
              rel="noreferrer noopener"
            >
              <DownloadIcon />
              Ver o relatório final (FAQTOS 2026)
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div
          className="wrap"
          style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
        >
          <Button href="/estacao" variant="ghost">
            Voltar à estação
          </Button>
          <Button href={LINKS.portal} arrow>
            Portal de Dados
          </Button>
        </div>
      </section>
    </>
  );
}
