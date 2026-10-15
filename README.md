# Studio Gabi Lima — Site institucional

Protótipo comercial **independente** criado para o Studio Gabi Lima (Studio Gabriela Lima), salão de beleza em Itu/SP. Visual editorial premium na identidade **Preto, Branco & Dourado**: fundos brancos, áreas escuras em preto e detalhes dourados. Inspirado na organização do projeto Espaço Sol, com identidade visual e código próprios.

> **Atenção antes de apresentar ou publicar como site oficial:** a marca e as fotos definitivas ainda não foram enviadas. O monograma GL é provisório; fotos e composições atuais são **ilustrativas, não representam trabalhos realizados pelo Studio**. Confirme textos promocionais e serviços com a proprietária antes da entrega.

## Como executar

Requer Node.js 20 ou superior.

```bash
npm start
```

Acesse `http://localhost:3000`. Para reiniciar automaticamente o servidor ao alterar arquivos:

```bash
npm run dev
```

Não é necessário instalar bibliotecas, nem rodar build.

## GitHub Pages

Este projeto foi preparado para **branch `main` e pasta `/(root)`**. Basta colocar os arquivos da pasta `StudioGabiLima` na raiz de um repositório e ativar Pages em **Settings → Pages → Deploy from a branch → main → /(root)**.

O GitHub Pages é estático, portanto não executa `server.js`, mas todos os arquivos `index.html` e `assets/` funcionam normalmente no navegador. Um ambiente Node pode executar o mesmo site via `npm start`.

## Estrutura

- `index.html` — todo o conteúdo institucional, links, dados estruturados para buscadores e componentes visuais.
- `assets/css/styles.css` — layout responsivo e animações originais.
- `assets/css/gold-ice.css` — folha complementar de identidade visual Preto, Branco & Dourado, tipografia editorial, cards de serviços e refinamentos responsivos (nome preservado para não quebrar referências).
- `assets/css/signature.css` — acabamento editorial exclusivo, seções pretas, destaque da especialidade, nova seção "Seu momento" e ajustes mobile.
- `assets/js/concierge.js` — seletor de intenções do visitante, com mensagens contextualizadas para WhatsApp (sem banco de dados nem coleta de informações).
- `assets/js/config.js` — WhatsApp, Instagram, mensagens por serviço, endereço e rota.
- `assets/js/main.js` — menu mobile, animações, navegação, WhatsApp contextual e galeria ampliada.
- `assets/img/logo-provisoria.svg` — monograma TEMPORÁRIO (trocar pela logo da cliente).
- `assets/img/favicon.svg` — favicon temporário.
- `server.js` — servidor estático Node sem dependências externas.

## Personalização antes da venda

1. **Logo oficial**: salve a logo recebida como `assets/img/logo-oficial.png` (preferencialmente transparente), substitua as duas referências em `index.html` a `logo-provisoria.svg` e ajuste as proporções em `.brand img`. Adapte o favicon. A marca atual é apenas um monograma provisório, não uma reprodução do logo real.
2. **Fotos**: substituir as fotos de demonstração por fotos próprias e autorizadas. Há fotos nas classes CSS `.hero-photo`, `.about-photo`, `.feature-image` e três tags `<img>` em `.gallery-grid`. **As imagens da galeria são apenas inspirações** e seu aviso não deve ser ocultado enquanto não houver fotos oficiais. As imagens ilustrativas atualmente dependem de internet.
3. **Dados de contato**: atualize `assets/js/config.js` e, caso os dados mudem, mantenha o texto visível e o JSON-LD (`index.html`) sincronizados.
4. **Horário de funcionamento**: não foi fornecido; o site orienta consultar disponibilidade, sem inventar horários.
5. **Premiações**: o texto faz referência genérica a reconhecimentos mencionados no briefing, sem inventar nomes, datas ou números. Conferir como a cliente quer divulgar.
6. **Marca de mega hair**: a referência à @mermaidhairco_ do briefing não foi apresentada como endosso oficial ou parceria contratual até confirmação.
7. **Fotos de referência**: validar direitos/licenças da origem das imagens e preferir arquivos próprios autorizados para o lançamento comercial.

## Recursos incluídos

- Responsivo (desktop, tablet e celular) com menu expansível acessível.
- Visual premium Ouro & Gelo, tipografia editorial Cormorant Garamond e componentes próprios, com transições e animações moderadas.
- Serviços com mensagens de WhatsApp específicas.
- Apresentação do Studio, reconhecimento, serviços, inspirações, etapas do atendimento, seção interativa de objetivos e perguntas frequentes.
- Lightbox na galeria, com navegação por setas e teclado.
- CTA flutuante de WhatsApp, links para Instagram, mapa, telefone e email.
- Dados estruturados `BeautySalon`, descrição SEO, sem dados de avaliação inventados.
- Acessibilidade de teclado, skip-link e suporte a `prefers-reduced-motion`.
- Sem bibliotecas JS ou dependências em runtime.

## Informações usadas (conforme briefing)

**Studio Gabi Lima / Studio Gabriela Lima**, Rua João Calegari, 145, Itu/SP.

WhatsApp: **(11) 94510-7378** · Email: **studiogabrielaalima@gmail.com** · Instagram: **@studiogabilimaa**.

## Observação comercial

O protótipo é um ponto de partida para apresentação e negociação, não uma confirmação de associação oficial com o estabelecimento. Antes da publicação definitiva, obtenha aprovação da identidade visual, imagem, descrições de serviços e informações comerciais.

## Identidade Preto, Branco & Dourado (versão 3)

A paleta está concentrada em `assets/css/gold-ice.css`, carregado após a folha de estilos base, sem necessidade de reescrever o site. O nome do arquivo foi mantido por compatibilidade.

- Branco `#FFFFFF` e branco levemente acinzentado `#F7F7F7` para áreas amplas;
- ouro champagne `#AC8040` e dourado claro `#DDBE86` para elementos de assinatura;
- Preto `#111111` e cinza neutro para títulos, navegação e contraste;
- serviços em cards editoriais, bordas finas, detalhes metalizados e espaços mais leves;
- marca GL e favicon ainda **provisórios**, não substituem a logo oficial;
- ícones de expansão do FAQ construídos em CSS, centralizados e alternando de `+` para `−` sem rotação.

Não foram incluídos resultados ou depoimentos inventados; fotografias atuais continuam ilustrativas e devem ser trocadas por fotos autorizadas antes do lançamento comercial.

## Signature Edition — aprimoramento visual e comercial

A nova identidade alterna **preto, branco e dourado** ao longo das seções para criar mais ritmo visual. As áreas de reconhecimento, especialidade, seleção do cuidado e convite final têm fundo preto; as áreas de apresentação, serviços, inspirações, experiência e FAQ ficam claras. O card de alisamentos foi destacado como especialidade principal.

### Seção "Seu momento"

A visitante pode selecionar um objetivo (brilho/alinhamento, comprimento/volume, mechas/iluminação ou corte), visualizar uma sugestão de serviço e iniciar uma conversa por WhatsApp com **mensagem já contextualizada**. A seção não é um diagnóstico capilar, não exibe preços inventados e não coleta ou armazena dados. A definição do procedimento depende de avaliação profissional.

Para alterar as opções, editar `assets/js/concierge.js` e os botões `data-curadoria` de `index.html`. A interação utiliza o WhatsApp informado em `assets/js/config.js`.

A identidade personalizada continua **provisória** até o envio da logo oficial e das fotos autorizadas da empresa.
