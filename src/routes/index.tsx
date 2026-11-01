import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Heart,
  Menu,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Dra. Thalyta Moura - início">
          <span className="brand-mark"><span>t</span><i>.</i></span>
          <span className="brand-copy">
            <strong>Dra. Thalyta Moura</strong>
            <small>Cirurgiã-Dentista</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contato">
          <span>Agendar atendimento</span><ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} />
            </a>
          ))}
          <a className="mobile-nav-cta" href="#contato" onClick={closeMenu}>Agendar atendimento <ArrowUpRight size={17} /></a>
        </nav>
      )}

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> ODONTOLOGIA COM ACOLHIMENTO</div>
          <h1>Seu sorriso, nossa <em>prioridade.</em></h1>
          <p className="hero-description">
            Um atendimento humanizado, moderno e personalizado para cuidar da sua saúde bucal e valorizar o que há de melhor no seu sorriso.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Agende sua consulta <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#sobre">Conheça meu trabalho <ArrowDown size={15} /></a>
          </div>
          <div className="hero-note">
            <span className="note-icon"><Heart size={16} /></span>
            <span>Atendimento personalizado, com atenção a cada detalhe.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ambiente odontológico acolhedor">
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1500&q=88"
              alt="Ambiente moderno e acolhedor de uma clínica odontológica"
              fetchPriority="high"
            />
            <div className="image-shade" />
          </div>
          <div className="hero-stamp">
            <Sparkles size={17} strokeWidth={1.5} />
            <span>Seu bem-estar<br />em primeiro lugar</span>
          </div>
          <div className="hero-index"><span>01</span><i /> 04</div>
          <span className="visual-caption">CUIDADO EM CADA DETALHE</span>
        </div>
        <a className="scroll-cue" href="#sobre"><span>Role para descobrir</span><ArrowDown size={15} /></a>
        <div className="hero-side-label">THALYTA MOURA · ODONTOLOGIA</div>
      </section>

      <section className="intro-section section-pad" id="sobre">
        <div className="section-kicker" data-reveal><span>01</span><i /> UM CUIDADO QUE COMEÇA NA ESCUTA</div>
        <div className="intro-grid">
          <div className="intro-heading" data-reveal>
            <h2>Cuidado em cada <em>detalhe.</em></h2>
          </div>
          <div className="intro-body" data-reveal>
            <p>
              Sou Dra. Thalyta Moura, cirurgiã-dentista. Acredito que um sorriso vai muito além da estética: ele também expressa saúde, autoestima e bem-estar. Meu propósito é oferecer um atendimento próximo, ético e individualizado.
            </p>
            <a className="underlined-link" href="#contato">Dê o primeiro passo <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="intro-bottom" data-reveal>
          <span className="large-quote">“</span>
          <p>Um atendimento mais humano, tranquilo e pensado para você.</p>
          <span className="signature">Dra. Thalyta Moura</span>
        </div>
      </section>

      <section className="care-section section-pad" id="atendimento">
        <div className="care-top">
          <div>
            <div className="section-kicker light-kicker" data-reveal><span>02</span><i /> NOSSO JEITO DE CUIDAR</div>
            <h2 data-reveal>Cuidado pensado para <em>você.</em></h2>
          </div>
          <p data-reveal>Acolhimento, atenção e orientação em cada etapa do seu atendimento.</p>
        </div>
        <div className="care-grid">
          <article className="care-item" data-reveal>
            <span className="care-number">01 / 03</span>
            <div className="care-icon"><Heart size={22} strokeWidth={1.4} /></div>
            <h3>Escuta atenta</h3>
            <p>Entender suas necessidades, dúvidas e expectativas é o começo de tudo.</p>
            <ArrowUpRight className="care-arrow" size={19} />
          </article>
          <article className="care-item" data-reveal>
            <span className="care-number">02 / 03</span>
            <div className="care-icon"><Sparkles size={22} strokeWidth={1.4} /></div>
            <h3>Olhar individual</h3>
            <p>Cada pessoa é única. O cuidado deve considerar essa individualidade.</p>
            <ArrowUpRight className="care-arrow" size={19} />
          </article>
          <article className="care-item" data-reveal>
            <span className="care-number">03 / 03</span>
            <div className="care-icon"><Check size={22} strokeWidth={1.5} /></div>
            <h3>Acompanhamento</h3>
            <p>Orientação clara e atenção em cada etapa da sua jornada de cuidado.</p>
            <ArrowUpRight className="care-arrow" size={19} />
          </article>
        </div>
      </section>

      <section className="quote-section section-pad">
        <div className="quote-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="quote-content" data-reveal>
          <span className="quote-mark">“</span>
          <h2>O melhor resultado começa quando você se sente <em>bem cuidado.</em></h2>
          <a className="button button-light" href="#contato">Converse com a equipe <ArrowUpRight size={17} /></a>
        </div>
        <span className="quote-caption">CUIDADO COM PRESENÇA E PROPÓSITO</span>
      </section>

      <section className="contact-section section-pad" id="contato">
        <div className="contact-copy" data-reveal>
          <div className="section-kicker"><span>03</span><i /> VAMOS COMEÇAR?</div>
          <h2>Seu sorriso merece cuidado e <em>atenção especial.</em></h2>
          <p>Entre em contato para saber mais sobre o atendimento e dar o primeiro passo.</p>
        </div>
        <div className="contact-panel" data-reveal>
          <div className="contact-panel-icon"><MessageCircle size={23} /></div>
          <h3>Vamos conversar?</h3>
          <p>Entre em contato para tirar suas dúvidas e saber mais sobre o atendimento. Os dados oficiais de contato serão adicionados após confirmação.</p>
          <span className="contact-pending">CONTATO OFICIAL A CONFIRMAR</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark"><span>t</span><i>.</i></span>
          <span className="brand-copy"><strong>Dra. Thalyta Moura</strong><small>Cirurgiã-Dentista</small></span>
        </a>
        <span className="footer-note">Cuidado que acolhe. Sorrisos com identidade.</span>
        <a className="back-top" href="#inicio">Voltar ao topo <MoveUpRight size={15} /></a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Dra. Thalyta Moura.</span><span>Todos os direitos reservados.</span><span>Feito com cuidado.</span></div>
      </footer>
    </main>
  );
}
