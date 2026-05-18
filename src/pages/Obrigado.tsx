import { useEffect } from "react";
import { Mail, MessageCircle, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Obrigado = () => {
  useEffect(() => {
    const pixelScript = document.createElement("script");
    pixelScript.src = "https://iwrrijemxtudyakmhajk.supabase.co/functions/v1/tracking-pixel?pid=455078f8-5fc2-4eed-aa98-35b4d8948b3e&track=all";
    pixelScript.async = true;
    document.body.appendChild(pixelScript);

    const trackScript = document.createElement("script");
    trackScript.textContent = `
      window.AGMetrics?.track("thank_you_page", {
        page: window.location.pathname,
        referrer: document.referrer
      });
    `;
    document.body.appendChild(trackScript);

    return () => {
      document.body.removeChild(pixelScript);
      document.body.removeChild(trackScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Acima da dobra */}
      <section className="bg-burgundy-dark py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">

          <h1 className="font-display text-cream-gold text-3xl md:text-5xl leading-tight mb-4">
            Compra&nbsp;confirmada.
          </h1>
          <h2 className="font-display text-cream-gold text-2xl md:text-4xl leading-tight mb-8">
            Agora começa a&nbsp;sua&nbsp;parte.
          </h2>

          <p className="font-body text-dusty-rose text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Você acabou de dar um passo que muita gente adia por&nbsp;anos. E&nbsp;eu sei o peso disso, porque eu fumei por&nbsp;24&nbsp;anos.
          </p>

          <div className="bg-burgundy/40 border border-cream-gold/20 rounded-2xl p-6 md:p-8 mb-8">
            <p className="font-body text-cream-gold font-bold text-lg mb-2">
              Próximo passo&nbsp;(agora):
            </p>
            <p className="font-body text-dusty-rose text-base mb-6">
              Abra seu e-mail e pegue o&nbsp;acesso. O&nbsp;assunto costuma vir&nbsp;como:
              <br />
              <span className="text-cream-gold italic">
                "[Seus 21 Dias de Vigilância te&nbsp;aguardam&nbsp;AQUI]"
              </span>
            </p>

            <Button
              asChild
              className="bg-cta-green hover:bg-cta-green/90 text-accent-foreground font-body font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-xl whitespace-normal text-center max-w-full"
            >
              <a href="mailto:" target="_blank" rel="noopener noreferrer">
                Quero acessar meu&nbsp;eBook&nbsp;agora
                <ChevronRight className="ml-2 w-5 h-5 shrink-0" />
              </a>
            </Button>
          </div>

          <div className="bg-burgundy/30 border border-dusty-rose/20 rounded-xl p-4 max-w-xl mx-auto">
            <p className="font-body text-dusty-rose text-sm">
              ⚠️ Se não achar em 5&nbsp;minutos, olhe <strong className="text-cream-gold">Spam</strong>, <strong className="text-cream-gold">Promoções</strong> ou&nbsp;<strong className="text-cream-gold">Lixeira</strong> e pesquise pelo&nbsp;remetente.
            </p>
          </div>
        </div>
      </section>

      {/* Compromisso leve */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display text-primary text-2xl md:text-4xl leading-tight mb-8">
            Faça um acordo comigo por&nbsp;21&nbsp;dias
          </h2>

          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            Não é um voto para nunca mais&nbsp;errar. É&nbsp;um compromisso de&nbsp;caminho.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
            <p className="font-body text-primary font-bold text-lg mb-4">
              Seu único trabalho&nbsp;é:
            </p>
            <p className="font-body text-foreground text-base md:text-lg leading-relaxed">
              Não se enganar sobre o que está sentindo e voltar para o plano quando&nbsp;cair.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 max-w-lg mx-auto shadow-sm">
            <p className="font-body text-muted-foreground text-base italic leading-relaxed">
              Se você caiu ontem, você não&nbsp;"perdeu". Você só tem <strong className="text-primary">informação&nbsp;nova</strong> sobre o&nbsp;seu&nbsp;gatilho.
            </p>
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section className="py-16 md:py-20 bg-burgundy-dark">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display text-cream-gold text-2xl md:text-3xl leading-tight mb-10">
            Precisa falar com alguém da&nbsp;equipe?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:atendimento@agwebi.com.br"
              className="bg-burgundy/40 border border-cream-gold/20 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-cream-gold/40 transition-colors"
            >
              <Mail className="w-8 h-8 text-cream-gold" />
              <p className="font-body text-cream-gold font-bold text-sm">Suporte por&nbsp;e-mail</p>
              <p className="font-body text-dusty-rose text-sm break-all">atendimento@agwebi.com.br</p>
            </a>

            <a
              href="https://wa.me/5548996670822?text=Ol%C3%A1!%20Preciso%20de%20suporte%20para%20o%20Desafio%2021%20Dias%20de%20Vigil%C3%A2ncia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burgundy/40 border border-cream-gold/20 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-cream-gold/40 transition-colors"
            >
              <MessageCircle className="w-8 h-8 text-cta-green" />
              <p className="font-body text-cream-gold font-bold text-sm">WhatsApp</p>
              <p className="font-body text-dusty-rose text-sm">(48)&nbsp;99667&nbsp;0822</p>
            </a>
          </div>

          <div className="flex items-start justify-center gap-2 text-dusty-rose">
            <Clock className="w-4 h-4 shrink-0" />
            <p className="font-body text-sm">
              Horário de atendimento: Segunda à&nbsp;Sexta, das&nbsp;9h às&nbsp;17h
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-burgundy-dark border-t border-cream-gold/10">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-dusty-rose text-sm">
            © 2026 21 Dias de&nbsp;Vigilância. Todos os direitos&nbsp;reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Obrigado;
