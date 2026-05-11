import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-burgundy-dark/80" />

      <div className="relative z-10 container mx-auto px-6 py-10 md:py-20 text-center max-w-4xl">
        <p className="text-dusty-rose font-body text-sm tracking-wider uppercase mb-6">
          ✝ Para cristãos que fumam há anos, já tentaram parar e estão cansados de prometer "agora vai" e voltar para o maço
        </p>

        <h1 className="font-display text-cream-gold text-3xl md:text-5xl lg:text-[56px] leading-tight mb-6">
          Como eu quebrei 24 anos de vício quando parei de lutar contra a vontade de fumar e comecei a entender por que ela existia
        </h1>

        <p className="font-sub text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          21 dias com oração, presença e estratégia de gatilhos — para você parar de ser governado pela vontade de fumar.
        </p>

        <p className="font-display text-cream-gold text-lg md:text-xl lg:text-2xl font-bold mt-8 mb-4 leading-snug">
          Mas antes de começar, leia o que vem abaixo.
        </p>

        <p className="font-sub text-secondary text-base md:text-lg max-w-2xl mx-auto">
          Se você se reconhecer em pelo menos uma dessas situações, esse caminho foi feito pra você.
        </p>

        <div className="mt-8 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cream-gold animate-bounce"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
