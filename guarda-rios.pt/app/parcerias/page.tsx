import type { Metadata } from "next";
import {
  Eyebrow,
  SectionHeading,
  PartnerPlate,
  CTASection,
  Button,
} from "@/content/ui";
import { LINKS } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Parcerias",
  description:
    "As instituições que apoiam e orientam o Projeto Guarda-Rios: CEiiA, Águas e Energia do Porto e Laboratório da Paisagem.",
};

const PARTNERS = [
  {
    name: "CEiiA",
    role: "Centro de Engenharia e Desenvolvimento",
    logo: "/parcerias/ceiia.png",
    description:
      "Apoio e orientação técnica ao desenvolvimento do projeto, da engenharia à validação das soluções.",
  },
  {
    name: "Águas e Energia do Porto",
    role: "Empresa Municipal · gestão da água",
    logo: "/parcerias/aguas-do-porto.png",
    description:
      "A colaboração permitiu identificar a Ribeira da Granja como candidata a estação de testes; a recolha manual de amostras pelos seus técnicos servirá de referência para validar as nossas medições.",
  },
  {
    name: "Laboratório da Paisagem",
    role: "Investigação ambiental · Guimarães",
    logo: "/parcerias/laboratorio-da-paisagem.jpg",
    description:
      "Está prevista uma segunda estação de testes junto a um curso de água por si monitorizado, permitindo comparar e validar os dados recolhidos.",
  },
];

export default function ParceriasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Eyebrow>Quem caminha connosco</Eyebrow>
          <h1>
            <em>Parcerias</em>
          </h1>
          <p className="lead">
            Ninguém protege o futuro sozinho. Contamos com uma rede sólida de
            parceiros e instituições de referência que apoiam, orientam e
            potenciam o Guarda-Rios — unindo esforços desde o desenvolvimento da
            engenharia à gestão sustentável da água e à investigação ambiental de
            vanguarda.
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

      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="Ao nosso lado"
            title={
              <>
                Diversos parceiros, <em>a mesma missão</em>
              </>
            }
            lead="O Guarda-Rios cresce através da colaboração. Conheça as entidades e instituições que apoiam e validam o nosso trabalho, colaborando ativamente nas áreas da engenharia, da gestão de recursos hídricos e da investigação ambiental."
          />

          <div className="part-grid">
            {PARTNERS.map((partner) => (
              <PartnerPlate
                key={partner.name}
                name={partner.name}
                role={partner.role}
                logo={partner.logo}
                description={partner.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        eyebrow="Colaboração"
        title={
          <>
            Quer participar no <em>nosso projeto</em>?
          </>
        }
        description="Estamos sempre à procura de novos horizontes para expandir a nossa rede de proteção ambiental. Se representa uma escola, autarquia ou outra instituição que deseja acolher os nossos testes piloto, validar dados científicos ou apoiar o crescimento do projeto, entre em contacto connosco. Vamos, juntos, proteger os nossos rios."
        photo={{
          src: "/ribalab/ribalab-team-guarda-rios.jpg",
          alt: "Equipa Guarda Rios no Ribalab",
        }}
        actions={
          <>
            <Button href={`mailto:${LINKS.email}`} variant="orange" arrow>
              Mail
            </Button>
            <Button href={LINKS.instagram} variant="ghost">
              Instagram
            </Button>
          </>
        }
      />
    </>
  );
}
