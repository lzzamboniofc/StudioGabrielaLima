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

## Atelier Edition — aprimoramento visual e de navegação

A nova camada `assets/css/atelier.css` e o script `assets/js/atelier.js` acrescentam, preservando o design preto/branco/dourado:

- **Marca GL autoral:** identidade editorial refinada, detalhes dourados e hierarquia visual mais forte;
- **Hero cinematográfica:** entradas suaves, detalhes interativos para mouse, barra de progresso de leitura e suporte opcional a vídeo oficial;
- **Apresentação da Gabi:** nova seção pessoal com monograma e espaço reservado para retrato profissional;
- **Galeria filtrável:** imagens ilustrativas organizadas nas categorias Alisamentos, Mega Hair, Mechas e Cortes; filtro acessível e lightbox integrado;
- **Comparador de antes/depois:** controle deslizante funcional, inicialmente com **placeholders gráficos**, sem inventar resultados;
- **Mobile refinado:** galeria horizontal com toque, melhor hierarquia da seção pessoal, botões de agendamento e tamanhos adaptados;
- **Acessibilidade:** suporte a teclado, teclado na galeria, `prefers-reduced-motion`, indicadores e rótulos apropriados.

### Substituir conteúdo provisório por material autorizado

Todos os controles opcionais ficam em `assets/js/config.js`:

```js
founderPhotoUrl: '',          // Exemplo: 'assets/img/gabi-lima.jpg'
heroVideoUrl: '',             // Exemplo: 'assets/video/studio.mp4'
comparisonAuthorized: false,  // Só ativar com autorização explícita
comparisonBeforeUrl: '',      // Exemplo: 'assets/img/antes.jpg'
comparisonAfterUrl: '',       // Exemplo: 'assets/img/depois.jpg'
```

Ao preencher `founderPhotoUrl`, a foto substitui a composição provisória da seção da Gabi. Sem foto, o monograma editorial permanece.

Ao preencher `heroVideoUrl`, o vídeo aparece sobre a imagem de fundo. O vídeo deve ser **silencioso, otimizado, curto e autorizado**. Se não houver vídeo ou se a reprodução falhar, a foto ilustrativa da capa permanece. Pessoas com redução de movimento ativada não recebem reprodução automática.

O comparador exige `comparisonAuthorized: true` **e as duas fotografias**. Até lá, só mostra um modelo gráfico e não afirma nenhum resultado. Depois de carregar ambas, troca automaticamente os placeholders pelas fotos. Use registros reais **do mesmo atendimento**, feitos com condições de iluminação e ângulo similares, e obtenha consentimento do cliente.

A galeria utiliza imagens de referência ilustrativas externas. Para lançar comercialmente, substitua as fontes dos `<img>` da seção `#inspiracoes` por fotos oficiais e autorizadas; revise legendas, textos e avisos. A propriedade `data-category` controla os filtros. Não associe fotografias de bancos de imagens a resultados de procedimentos.

A logo GL continua **provisória** até receber a identidade oficial dourada da cliente. Ainda não foram fornecidos vídeos, retrato ou fotos reais de transformação. Todas as áreas novas foram desenhadas para funcionar sem esses itens, com ressalvas transparentes.

## Acabamento de identidade — dourado champagne luminoso

O dourado recebeu novos tons: base `#C89A4B`, destaque `#E2BE7A` e brilho `#F3D79C`. Os ajustes estão no final de `assets/css/atelier.css` (seção "BRILHO CHAMPAGNE"), mantendo a base preta e branca. Algumas aplicações sobre fundos brancos permanecem com dourado mais escuro para assegurar legibilidade.

O botão flutuante **“Agende aqui”** usa agora um ícone SVG de calendário com confirmação, centralizado em uma medalha circular. O botão continua abrindo o WhatsApp configurado em `assets/js/config.js`, sem criar agendamento automático. Monograma provisório e favicon foram harmonizados à nova paleta.
