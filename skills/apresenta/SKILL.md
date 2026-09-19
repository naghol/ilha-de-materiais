---
name: apresenta
description: >
  Transforma um texto, PDF, artigo, anotação ou argumento enviado pelo usuário em uma
  mini apresentação visual (artifact HTML, slides navegáveis) — uma narrativa em sequência,
  com abertura, desenvolvimento e fechamento, pra apresentar uma ideia a alguém. Acionar
  quando o usuário disser "APRESENTA", "monta uma apresentação sobre isso", "transforma
  isso em slides", "preciso apresentar essa ideia pra [alguém]", "faz um mini deck sobre
  isso", ou colar um texto/PDF pedindo pra virar algo navegável em sequência pra mostrar a
  outra pessoa. NÃO acionar para entender o conteúdo de relance numa peça única (isso é
  INFOGRAFICO), pra revisar/memorizar em unidades pequenas sem narrativa entre elas (isso
  é FLASHCARDS), pra testar conhecimento com pontuação (isso é QUIZ), nem quando o usuário
  quer literalmente um arquivo `.pptx` pra baixar e editar no PowerPoint/Keynote (isso é a
  skill de apresentações de arquivo, não esta — APRESENTA é uma peça pra navegar no
  navegador, não um arquivo de apresentação).
---

# Apresenta

## O que essa skill faz

Recebe qualquer conteúdo (texto colado, PDF, anotações, transcrição, argumento) e devolve **uma mini apresentação visual navegável**, em slides no formato 16:9, contando uma ideia do início ao fim — abertura que prende atenção, desenvolvimento que constrói o argumento, fechamento que sintetiza. É a única das quatro skills visuais organizada como **narrativa em sequência**: existe um argumento sendo construído slide a slide, não um conjunto de peças independentes.

**A diferença que importa para as outras três:** INFOGRAFICO é uma peça única, densa, lida de relance — todos os dispositivos visuais na mesma página. FLASHCARDS e QUIZ são unidades pequenas e independentes, navegadas uma de cada vez, sem construir um argumento entre elas (a ordem em flashcards muitas vezes nem importa; em quiz, cada pergunta é isolada). APRESENTA é o oposto disso: os slides **dependem uns dos outros** — tirar o slide 3 quebra o argumento do slide 5. É a única das quatro pensada pra ser mostrada a outra pessoa como uma ideia sendo defendida, não como material de consumo individual.

---

## Processo

1. **Ler o conteúdo enviado por completo.** Se vier PDF ou link, extrair o texto antes de decidir estrutura.
2. **Encontrar o argumento central** — a mensagem que a apresentação inteira existe pra defender. Se o conteúdo é uma lista solta de fatos sem tese, a skill impõe uma: identifica o fio que conecta os fatos (problema → insight → implicação) antes de distribuir em slides. Uma apresentação sem argumento central é só um infográfico fatiado em várias páginas.
3. **Estruturar em 3 movimentos:** Abertura (1-2 slides — a tese ou a tensão que justifica prestar atenção), Desenvolvimento (a maior parte dos slides — a evidência, os passos, ou a comparação que sustenta a tese) e Fechamento (1 slide — síntese do argumento, nunca um resumo burocrático dos slides anteriores).
4. **Escolher os blocos de cada slide de desenvolvimento** (seção "Layout: grid editorial" abaixo) pelo tipo de conteúdo daquele trecho — o mesmo deck pode misturar composições diferentes entre slides.
5. **Definir a quantidade: 6 a 12 slides.** Menos que 6 não sustenta um arco de abertura-desenvolvimento-fechamento; mais que 12 deixa de ser "mini".
6. **Escrever cada slide seguindo a regra de densidade** (seção "Regras de conteúdo por slide") — mais espaço que um card de flashcards, mas ainda longe de um documento.
7. **Construir como artifact HTML autocontido**, navegável (seção "Mecânica de interação" abaixo), canvas 16:9.
8. **Testar mentalmente em mobile antes de entregar** — o 16:9 precisa reduzir com elegância em tela de celular, sem cortar texto nem exigir zoom.

---

## Layout: grid editorial (decidido 2026-09-17, substitui o slide de 1 elemento centralizado)

Cada slide é composto como um **grid assimétrico de blocos**, no estilo de um deck de negócio bem produzido (referência: decks tipo "annual report" com bloco de manchete, chip numerado, callout de estatística e painel visual convivendo na mesma tela) — não mais uma manchete sozinha no centro de uma tela vazia. A régua muda de "keynote minimalista" pra **"grid editorial denso, mas nunca poluído"**.

### Blocos disponíveis (peças do grid, não slides inteiros)

| Bloco | O que mostra | Quando usar |
|---|---|---|
| **Manchete + apoio** | 1 frase de tese grande + 1-2 linhas de sustentação | Sempre presente — é o bloco âncora de todo slide, ocupa a maior área |
| **Chip numerado (01/02)** | 2 sub-pontos curtos relacionados à mesma manchete, cada um com seu número | Quando a ideia do slide se apoia em 2 facetas, não só em 1 frase |
| **Callout de número** | 1 dado real do conteúdo, em destaque tipográfico, com legenda curta | Quando existe uma métrica que sozinha sustenta ou ilustra o ponto do slide |
| **Card de citação** | Uma frase extraída literalmente do material, em destaque tipográfico, com aspas | Quando o conteúdo original já tem uma frase que resume o ponto melhor que qualquer paráfrase |
| **Painel visual gerado** | Uma composição abstrata desenhada em SVG — formas orgânicas sobrepostas (blobs), linhas de contorno, 1 ponto focal — nunca uma foto de banco de imagens, **e nunca só um gradiente de fundo liso** | Ocupa a célula de maior contraste do grid, como âncora visual — ver seção de ilustração abaixo |
| **Comparação / antes-depois** | Duas colunas ou dois estados lado a lado | Contrastar uma mudança, uma decisão, ou duas abordagens — pode ocupar o slide inteiro no lugar do grid comum, quando o contraste é o argumento do slide |

### Regra de composição em grid

- **Manchete + apoio está em praticamente todo slide** — é o que ancora a única ideia daquele slide (ver "1 ideia por slide" abaixo). Os outros blocos existem pra sustentar essa mesma ideia, nunca pra introduzir uma segunda.
- **No máximo 3 blocos por slide**, incluindo a manchete. Empilhar mais que isso vira dashboard, não apresentação.
- **Nunca todos os blocos com o mesmo peso visual** — 1 bloco domina (geralmente a manchete ou o painel visual), os outros são satélites menores. Grid sem hierarquia parece planilha, não deck.
- **Nunca replicar chrome de empresa fake** (barra de navegação, logo placeholder, menu "Sobre/Serviços/Contato") — isso existe em templates de pitch de negócio porque a peça é sobre uma empresa específica. Aqui a peça é sobre o conteúdo da pessoa, não uma vitrine — a "moldura fixa" do deck (seção "Consistência entre slides" abaixo) já cumpre esse papel de identidade visual, sem precisar de chrome decorativo.
- **Comparação/antes-depois é exceção:** pode dispensar o grid de 3 blocos e ocupar o slide inteiro com as 2 colunas — o contraste ali já é a composição.

---

## Regras de conteúdo por slide

- **1 ideia por slide, sempre** — se um slide precisa de "e também" pra ser explicado, é dois slides.
- **Headline curta e grande** (a frase que resume o slide, sozinha, sustenta o sentido) + no máximo ~35 palavras de apoio abaixo dela. Se precisar de mais que isso, o conteúdo pede um documento, não uma apresentação.
- **Nunca colar um parágrafo do material original** — todo conteúdo passa por reescrita para virar afirmação de slide, exceto no bloco Card de citação, onde a citação literal é o ponto.
- **Nunca inventar dado, estatística ou citação que não estava no material de origem** — mesma regra das outras três skills.
- **A apresentação precisa se sustentar sozinha, sem narração ao vivo.** Diferente de um roteiro de slide de palestra (onde o slide é só apoio visual de quem fala), aqui a pessoa pode abrir o link e entender o argumento inteiro sem ninguém explicando ao lado — por isso o apoio textual existe, mesmo que curto.

---

## Mecânica de interação (obrigatória)

- **Um slide visível por vez**, canvas 16:9 — mesma lógica de foco das outras três skills, adaptada pro formato de apresentação.
- **Navegação explícita** por setas/botões "anterior/próximo" e teclado (setas esquerda/direita) — igual às outras, pra manter consistência de interação entre as quatro skills.
- **Indicador de progresso** (pontos ou "4 de 9"), sempre visível, discreto, nunca competindo com o conteúdo do slide.
- **Transição suave entre slides** (fade ou slide horizontal) — nunca corte seco, nunca transição longa que atrapalha o ritmo de leitura.
- **Sem flip, sem seleção de resposta, sem pontuação** — é a diferença mecânica que separa isso de flashcards e quiz. O único gesto aqui é avançar/voltar.
- **Guardar posição atual em `localStorage`** é conveniência aceitável (retomar de onde parou), nunca dado sincronizado entre dispositivos.

---

## Sistema de design — regras não-negociáveis

O dispositivo visual do APRESENTA é **o slide como grid editorial + a tipografia de manchete + no máximo 3 blocos por slide, sempre com 1 dominante** — nunca o flip do flashcards, nunca a alternativa clicável do quiz. É mais denso que a versão minimalista anterior desta skill, mas ainda longe da densidade do infográfico: lá são vários dispositivos disputando a mesma página; aqui é 1 ideia por slide, só que sustentada por um grid de 2-3 blocos que trabalham juntos, em vez de 1 elemento sozinho boiando no centro.

### Paleta dinâmica por tema do conteúdo (decidir antes de qualquer outra escolha de cor)

**Nunca existe uma paleta fixa do kit.** É a skill com mais espaço em tela, então é onde a atmosfera do tema mais aparece — o deck inteiro (fundo, tipografia, ilustração) precisa parecer desenhado pra aquele argumento específico, não pra apresentação genérica nenhuma.

Processo: 1) ler o conteúdo e identificar o tema/sensação dominante; 2) escolher a família de cor e a atmosfera de fundo coerente com ela (um deck sobre estratégia pode pedir um fundo escuro dramático; um deck sobre um método leve de produtividade pode pedir um fundo claro e arejado); 3) só depois aplicar as regras de cor abaixo. Um deck pode, de forma deliberada, comprometer-se só com tema escuro ou só com tema claro (sem alternar por `prefers-color-scheme`) quando isso reforçar a atmosfera do argumento — mas precisa declarar essa escolha e ainda pintar cor de fundo e de texto explicitamente, nunca deixar transparente.

### Antídoto ao "look de IA genérica" (proibido, mesma lista das outras skills)
- Gradiente roxo-azul-rosa "IA padrão"
- Emoji fazendo o papel de ícone
- Robôzinho, cérebro brilhante, clipart-clichê de "IA"
- Sombra pesada/3D forçado, glassmorphism decorativo
- Fonte padrão do sistema como única tipografia
- Slide de curso corporativo: título + 5 bullets + ícone genérico do lado — se parecer com isso, refazer

### Regras positivas
- **Canvas:** proporção 16:9 fixa como unidade de composição, mesmo quando o container reduz pra tela de celular — nunca reempilhar em coluna vertical infinita, e sim escalar o canvas inteiro mantendo a proporção. Dentro dele, o grid usa colunas/áreas reais (CSS grid ou flex), nunca posicionamento solto por instinto
- **Tipografia:** a manchete de cada slide é o elemento dominante da composição — tamanho grande o bastante pra ler a mensagem central sem ler o texto de apoio. 1 família de display + 1 de texto, mesma regra das outras skills
- **Espaço em branco:** mesmo com mais blocos que a versão anterior, cada bloco individual ainda respira dentro de si — a régua de teste é "dá pra tirar mais alguma coisa de um bloco sem perder a ideia?" até a resposta ser não. Densidade de grid não é desculpa pra apertar texto
- **Cor:** 1 cor de destaque, escolhida pelo tema do conteúdo (ver seção acima), usada com intenção (na palavra, número ou painel visual mais importante do slide), consistente do primeiro ao último slide — a cor é o que dá identidade visual ao deck inteiro, não decoração pontual
- **Painel visual gerado (obrigatório em pelo menos metade dos slides):** o bloco "painel visual" ocupa a célula de maior contraste do grid nesses slides, sempre na cor de destaque do tema, e pode incorporar um motivo concreto do conteúdo (o antigo critério de "ilustração temática") quando fizer sentido. **Erro a evitar (já aconteceu num teste):** um painel que é só gradiente de fundo, sem nenhuma forma desenhada dentro, lê como caixa vazia/placeholder esquecido — o contraste entre o painel e o fundo do slide fica baixo demais pra qualquer coisa "aparecer". A composição mínima que funciona: pelo menos 2 formas sobrepostas com preenchimento visível na cor de destaque + neutro, mais 1-2 linhas de contorno (elipses ou arcos finos) pra textura, mais 1 ponto focal sólido — sempre desenhado como SVG inline com `<path>`/`<ellipse>`/`<circle>`/`<polygon>`, nunca só `background` no CSS do container.

**Segundo erro a evitar (também já aconteceu num teste): variar só rotação/posição da mesma forma não é variedade de verdade** — dá pra perceber que é "o mesmo desenho visto de ângulos diferentes", o que parece descuido, não sistema de design. A variedade real vem de **trocar o tipo de composição** entre os painéis, não só transformá-la: ter pelo menos 3-4 "famílias" diferentes de composição (ex: blobs orgânicos sobrepostos; bolhas/círculos dispersos de tamanhos variados; fitas fluidas cruzando o painel; formas geométricas anguladas; ondas concêntricas a partir de um ponto) e alternar entre elas nos painéis do mesmo deck — reservando a variação de rotação/posição/escala como um tempero *adicional* dentro de cada família, não como a única fonte de diferença. O slide de abertura sempre tem esse painel, como peça de maior destaque do deck (a "hero")
- **Consistência entre slides:** a posição da manchete, do indicador de progresso e da navegação não muda de slide pra slide — só o conteúdo muda, a moldura é fixa (é isso que faz parecer um deck, e não uma sequência de páginas soltas)
- **Dark mode:** tokens em `:root`, redefinidos em `@media (prefers-color-scheme: dark)` e em `[data-theme="dark"]`
- **Mobile:** o canvas 16:9 encolhe mantendo proporção e legibilidade, área de toque de navegação grande o suficiente pro polegar
- **Fonte de dados:** mesma regra das outras três — crédito discreto no rodapé do slide de fechamento, se o material original citar uma fonte

---

## Restrições

- Não adicionar nenhuma marca, CTA, promoção ou autopromoção dentro da apresentação gerada — inclui não replicar chrome de empresa fictícia (nav bar, logo placeholder, menu) só porque a referência de layout tinha isso: aqui não existe empresa, existe o conteúdo da pessoa
- Não transformar isso num roteiro de fala com marcações de apresentador — os slides precisam se sustentar sozinhos, sem narração
- Não inventar dado, comparação ou citação que não esteja no material de origem
- Não forçar 6 slides quando o conteúdo sustenta um argumento mais curto — um deck de 4 slides honesto é melhor que um de 6 com um slide de enchimento

---

## Casos de borda

- **Conteúdo sem tese clara (lista solta de fatos ou notícias):** impor um fio narrativo (problema → insight → implicação) antes de distribuir em slides — nunca listar os fatos na ordem em que chegaram
- **Conteúdo muito longo:** escolher o argumento central e os slides que sustentam ele, avisando qual foi o critério de corte — mesma lógica do caso "conteúdo muito longo" do infográfico
- **Conteúdo processual/sequencial:** manchete + apoio pra cada etapa, um slide por passo — ou agrupar 2 passos bem relacionados num único slide via chip numerado (01/02), quando fizer mais sentido juntos do que separados. Nunca comprimir o processo inteiro num único slide de lista
- **Conteúdo sem nenhum dado numérico real:** não forçar o bloco de callout de número — compor o grid só com manchete + apoio + painel visual, ou manchete + card de citação
- **Conteúdo curto demais pra sustentar 6 slides com conteúdo real:** avisar e entregar um deck mais curto (mínimo 4, com abertura + 2 desenvolvimento + fechamento) em vez de inflar com slide de transição vazio
