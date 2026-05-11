## Remover CTA da HeroSection

### Objetivo
Remover o botão de call-to-action (CTA) da primeira seção (HeroSection) da landing page.

### Alteração
- **Arquivo:** `src/components/HeroSection.tsx`
- **Ação:** Remover o elemento `<a href="#pricing" className="btn-cta text-lg mb-6">QUERO COMEÇAR MEUS 21 DIAS AGORA</a>` e seu texto interno.

### Resultado esperado
A seção hero exibirá apenas o texto introdutório, headline, subtítulo, o texto "Mas antes de começar...", a pergunta de identificação e a seta animada — sem o botão CTA acima do texto "Mas antes de começar...".