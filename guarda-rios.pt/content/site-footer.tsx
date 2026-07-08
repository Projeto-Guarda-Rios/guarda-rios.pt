import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, LINKS } from "./site-config";
import { GitHubIcon, InstagramIcon, MailIcon } from "./ui/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="flogo">
              <Image
                className="logo-img"
                src="/brand/PGR_Logo.png"
                alt="Projeto Guarda-Rios"
                width={42}
                height={42}
              />
              <span className="name">Projeto Guarda-Rios</span>
            </div>
            <p>
              Tecnologia e ciência cidadã em ação na promoção da sustentabilidade dos ecossistemas fluviais.
            </p>
          </div>

          <div className="foot-col">
            <h5>Explorar</h5>
            <ul>
              {NAV_ITEMS.filter((item) => item.href !== "/").map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/sobre">Missão</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Projeto</h5>
            <ul>
              <li>
                <a href={LINKS.portal} target="_blank" rel="noreferrer noopener">
                  Portal de Dados
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/estacao">Como replicar</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Contacto</h5>
            <ul>
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
                  <GitHubIcon />
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${LINKS.email}`}>
                  <MailIcon />
                  {LINKS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="credit">
            Um projeto de alunos do <strong>Grupo Ribadouro</strong> · Porto
          </div>
          <div>© {new Date().getFullYear()} · Produzido com dados abertos</div>
        </div>
      </div>
    </footer>
  );
}
