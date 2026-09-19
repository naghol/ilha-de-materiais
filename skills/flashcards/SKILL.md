---
name: flashcards
description: >
  Transforma um texto, PDF, artigo, anotação ou conjunto de conceitos enviado pelo usuário
  em um baralho de flashcards interativos (artifact HTML) para revisão e memorização ativa —
  card com frente (pergunta/termo/pista) e verso (resposta/explicação), navegável um por vez.
  Acionar quando o usuário disser "FLASHCARDS", "transforma isso em flashcards", "quero cards
  de estudo sobre isso", "monta um material pra eu revisar/decorar isso", "flashcards sobre
  [tema]", "quero fixar esse conteúdo", ou colar um texto/PDF pedindo algo pra estudar aos
  poucos. NÃO acionar quando o objetivo é entender o conteúdo inteiro de relance, numa leitura
  passiva única (isso é a skill INFOGRAFICO); quando o conteúdo pede uma narrativa em sequência
  de slides pra apresentar a alguém (isso é a skill APRESENTA); ou quando o usuário quer
  pontuação, feedback de certo/errado ou mecânica de jogo (isso é a skill QUIZ) — FLASHCARDS é
  revisão livre, no ritmo do próprio usuário, sem nota.
---

# Flashcards

## O que essa skill faz

Recebe qualquer conteúdo (texto colado, PDF, anotações, transcrição, link) e devolve **um baralho de flashcards**, um conceito por card, pensado pra ser revisado várias vezes — não lido uma vez só. Cada card tem uma frente (pergunta, termo ou pista) e um verso (resposta, definição ou explicação curta), revelado por interação do usuário.

**A diferença que importa para o INFOGRAFICO:** infográfico é uma peça única, estática, feita pra alguém entender em 10 segundos de leitura visual. Flashcards é o oposto — várias peças pequenas, feitas pra alguém **não** entender tudo de uma vez, e sim testar a memória card a card, no próprio ritmo, possivelmente em mais de uma sessão. Se o pedido é "me ajuda a entender isso rápido", é infográfico. Se é "me ajuda a lembrar disso depois", é flashcards.

---

## Processo

1. **Ler o conteúdo enviado por completo.** Se vier um PDF ou link, extrair o texto antes de decidir estrutura.
2. **Extrair as unidades de recall** — os fatos, termos, passos ou perguntas que valem a pena ser testados individualmente. Regra prática: se não dá pra resumir num par pergunta-curta/resposta-curta, ainda não é um card, é um conceito grande demais — quebrar em partes menores antes.
3. **Escolher o template estrutural** (seção abaixo) pelo tipo de conteúdo — pode misturar mais de um template no mesmo baralho se o conteúdo original também misturar tipos (ex: um processo com alguns termos técnicos no meio).
4. **Definir a quantidade de cards: 6 a 15.** Menos que 6 não justifica o formato (vira um infográfico de tópicos). Mais que 15 sobrecarrega — se o conteúdo tem mais de 15 unidades reais, dividir em dois baralhos nomeados (ex: "Parte 1: Fundamentos" / "Parte 2: Aplicação") em vez de forçar tudo num só.
5. **Escrever cada card seguindo a regra de tamanho** (seção "Regras de conteúdo por card" abaixo) — nunca um parágrafo, nunca mais de uma ideia por verso.
6. **Decidir se a ordem importa.** Processo/sequência: ordem fixa, numerada. Conceitos/termos/mitos: ordem pode ser arbitrária, mas ainda assim fixa dentro do baralho (não embaralhar sozinho — só o usuário decide se quer revisar fora de ordem).
7. **Construir como artifact HTML autocontido**, interativo (mecânica de flip + navegação — seção "Mecânica de interação" abaixo).
8. **Testar mentalmente em mobile antes de entregar** — a maioria vai revisar isso no celular, provavelmente parado numa fila ou entre tarefas. O toque de virar/avançar precisa ser óbvio sem instrução.

---

## Templates estruturais (podem coexistir no mesmo baralho)

| Template | Frente | Verso | Quando usar |
|---|---|---|---|
| **Termo → Definição** | Palavra ou jargão | Definição simples + 1 exemplo curto | Conteúdo com vocabulário técnico ou conceitos nomeados |
| **Pergunta → Resposta** | Pergunta direta | Resposta objetiva + 1 frase de porquê | Conteúdo que já é ou pode virar uma série de perguntas (FAQ, checklist de entendimento) |
| **Mito → Verdade** | Uma crença comum, apresentada como se fosse verdade | A correção + a razão do engano | Conteúdo que existe pra desfazer um erro comum de entendimento |
| **Passo → Ação** | Número do passo + o que fazer, em poucas palavras | O detalhe que faz o passo funcionar, ou o erro mais comum nele | Conteúdo que descreve uma sequência — cada passo vira 1 card, nunca todos os passos numa lista só |

Nunca escolher "Pergunta → Resposta" por padrão só porque é o mais genérico — o template errado faz o card parecer uma trivia solta em vez de uma peça de estudo com propósito.

---

## Mecânica de interação (obrigatória — é o que torna isso flashcards, e não um infográfico fatiado)

- **Um card visível por vez.** Nunca mostrar frente e verso juntos, nunca mostrar todos os cards na tela ao mesmo tempo — isso anula o exercício de recall.
- **Clique/toque no card revela o verso** (flip). O usuário precisa tentar responder mentalmente antes de virar — é essa pausa que gera a memorização, não a leitura.
- **Navegação explícita entre cards:** setas ou botões "anterior/próximo", nunca só swipe sem alternativa clicável (acessibilidade e desktop).
- **Contador de progresso visível** ("3 de 9"), sempre — sem ele a pessoa não sabe quanto falta e abandona.
- **Atalhos de teclado:** seta esquerda/direita para navegar, espaço ou enter para virar o card atual.
- **Nunca avançar automaticamente.** O ritmo é do usuário, sempre — nada de timer, nada de autoplay.
- Guardar a posição atual do baralho em `localStorage` é uma conveniência aceitável (retomar de onde parou na mesma sessão/aparelho) — nunca depender disso pra funcionar, e nunca tratar como sincronizado entre dispositivos.

---

## Regras de conteúdo por card

- **Frente:** no máximo 1 frase curta ou 1 termo. Nunca a resposta disfarçada de pergunta (frente não pode conter a resposta escondida em detalhe).
- **Verso:** no máximo 2 frases curtas. Se precisar de mais que isso pra explicar, o conceito é grande demais pra 1 card — quebrar em dois cards, ou é conteúdo pra APRESENTA, não FLASHCARDS.
- **Nunca duas ideias no mesmo card.** Um card, um fato testável.
- **Nunca inventar fato, definição ou exemplo que não estava no material de origem** — mesma regra do infográfico: fidelidade ao conteúdo antes de "parecer mais completo".
- **Nunca decorar o verso com informação irrelevante só pra preencher espaço** — card vazio-mas-honesto é melhor que card cheio-mas-inflado.

---

## Sistema de design — regras não-negociáveis

O objetivo ainda é **alto e moderno design**, mas a linguagem visual de flashcards é **tipográfica e de card**, não de infográfico denso — nada de pictograma, array de ícones repetidos ou número gigante de estatística aqui, porque não é essa a peça. O dispositivo visual dos flashcards é o **card em si + a mecânica de flip + o contador de progresso** — isso já cumpre o papel que os "dispositivos de visualização" cumprem no infográfico.

### Paleta dinâmica por tema do conteúdo (decidir antes de qualquer outra escolha de cor)

**Nunca existe uma paleta fixa do kit.** A cor e a atmosfera do baralho mudam de acordo com o conteúdo — um baralho sobre estratégia de negócios e um baralho sobre um livro infantil não podem parecer o mesmo produto com o texto trocado.

Processo: 1) ler o conteúdo e identificar o tema/sensação dominante (estratégico, técnico, lúdico, reflexivo, histórico, afetivo, etc.); 2) escolher a família de cor e, quando fizer sentido, um cenário/atmosfera visual coerente com ela (ex: um "céu noturno" pra conteúdo mais contemplativo, um "papel e tinta" pra conteúdo histórico/estratégico, tons técnicos frios pra conteúdo de ferramenta/produtividade); 3) só depois aplicar as regras de cor abaixo (1 destaque + neutros) dentro dessa escolha. A cor de fundo do card pode ser um gradiente sutil coerente com o tema (ex: um degradê de "entardecer" pra atmosfera contemplativa) em vez de uma cor chapada — desde que continue sustentando contraste de leitura e as regras de dark/light mode.

O limite de cores com função da seção abaixo nunca muda — só a família/atmosfera muda baralho a baralho. O gradiente roxo-azul-rosa genérico de IA continua proibido não importa o tema.

### Antídoto ao "look de IA genérica" (proibido, mesma lista do infográfico)
- Gradiente roxo-azul-rosa "IA padrão" sem motivo de marca
- Emoji fazendo o papel de ícone
- Robôzinho, cérebro brilhante, ou clipart-clichê de "IA"
- Sombra pesada/3D forçado, glassmorphism decorativo sem função
- Fonte padrão do sistema como única tipografia

### Regras positivas
- **Card:** proporção generosa (nem quadrado apertado, nem retângulo fino demais), cantos levemente arredondados, uma sombra sutil só o suficiente pra separar do fundo — não pra simular papel físico
- **Tipografia:** a frente usa a família de display, grande, centralizada — o texto é o protagonista absoluto do card, sem elemento decorativo competindo por atenção. O verso pode usar peso menor pra explicação de apoio, mas a resposta em si continua em destaque
- **Cor:** 1 cor de destaque, usada só no controle de interação (botão de navegação, indicador de progresso, borda do card ao focar) — nunca colorindo o conteúdo em si. Fundo neutro claro/escuro por token, podendo ser o gradiente temático descrito acima
- **Ilustração temática (obrigatório):** cada card da frente ganha 1 pequeno motivo ilustrativo em SVG inline, ligado a um elemento concreto daquele card específico (não um ícone genérico de "estudo") — funciona como pista visual de memorização (a mesma lógica por trás de aprender melhor quando texto e imagem reforçam a mesma ideia), nunca como decoração solta. Mesmo peso de linha em todos os cards do baralho, pequeno o bastante pra nunca competir com a legibilidade do termo/pergunta. O verso pode ficar sem ilustração, ou repetir a mesma em tamanho ainda menor — o texto de resposta é sempre o protagonista do verso
- **Flip:** transição suave (ex: rotação 3D no eixo Y ou fade cross-dissolve), nunca instantânea sem transição nem lenta a ponto de atrapalhar o ritmo de revisão
- **Dark mode:** cores como tokens (`:root`), redefinidas em `@media (prefers-color-scheme: dark)` e em `[data-theme="dark"]`
- **Mobile:** card ocupa a largura útil da tela sem exigir zoom, área de toque grande o bastante pro flip e pros botões de navegação
- **Fonte de dados:** se o conteúdo original citar uma fonte, incluir crédito discreto num rodapé fixo fora do card (não dentro do card, pra não competir com o conteúdo de estudo)

---

## Restrições

- Não adicionar nenhuma marca, CTA, promoção ou autopromoção dentro do baralho gerado — mesma regra do infográfico, a peça é sobre o conteúdo da pessoa
- Não misturar flashcards com quiz: nenhum card marca "certo"/"errado", nenhuma pontuação, nenhum resultado final de acerto — isso é escopo da skill QUIZ
- Não transformar o verso num mini-parágrafo explicativo — se a explicação precisa de mais espaço que 2 frases curtas, o conteúdo pede APRESENTA, não FLASHCARDS
- Se o conteúdo enviado não tiver pelo menos 6 unidades reais de recall, avisar em vez de inflar o baralho repetindo o mesmo fato reformulado

---

## Casos de borda

- **Conteúdo sem estrutura de pergunta/resposta óbvia (texto corrido, narrativo):** extrair os termos e fatos mais testáveis e forçar no template Termo → Definição, mesmo que o material original não estivesse organizado assim
- **Conteúdo muito extenso (mais de 15 unidades reais):** dividir em baralhos nomeados por bloco temático, nunca forçar tudo num baralho só
- **Conteúdo que já é uma lista de FAQ:** mapeia direto pro template Pergunta → Resposta, é o caso mais simples
- **Conteúdo que descreve um processo com muitos passos pequenos:** agrupar micro-passos relacionados num card só antes de dividir demais — um baralho de 20 cards de "clique aqui, depois aqui" não é memorizável, é instrução disfarçada de flashcard
