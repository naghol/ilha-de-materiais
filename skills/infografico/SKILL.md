---
name: infografico
description: >
  Transforma um texto, PDF, artigo, anotação ou conjunto de dados enviado pelo usuário
  em um infográfico visual moderno e autocontido (artifact HTML), pronto para postar,
  imprimir ou apresentar. Acionar quando o usuário disser "INFOGRAFICO", "transforma isso
  em infográfico", "quero um infográfico sobre isso/sobre [tema]", "visualiza esse conteúdo",
  "resume isso visualmente", ou colar um texto/PDF pedindo uma versão visual/resumida dele.
  NÃO acionar para gráficos de dados numéricos puros de planilha (isso é visualização de
  dados clássica, sem narrativa) nem para apresentações de múltiplos slides (isso é a skill
  APRESENTA).
---

# Infográfico

## O que essa skill faz

Recebe qualquer conteúdo (texto colado, PDF, anotações, transcrição, link) e devolve **um infográfico único, visual, em uma página**, que resume os 3-6 pontos mais importantes daquele conteúdo de forma que alguém entenda em 10 segundos de leitura visual — sem precisar ler o texto original.

Não é um resumo em bullets com um ícone do lado. É uma peça de design: hierarquia visual real, número forte quando existir, uma linha do tempo/processo quando fizer sentido, cor com propósito.

---

## Processo

1. **Ler o conteúdo enviado por completo.** Se vier um PDF ou link, extrair o texto antes de decidir estrutura.
2. **Escolher os 3-6 pontos mais relevantes, sozinho, sem perguntar.** Ninguém que baixa um material gratuito quer responder 3 perguntas antes de ver o resultado. Só fazer 1 pergunta de volta se o conteúdo for genuinamente ambíguo (ex: um PDF com 4 assuntos não relacionados) — e mesmo assim, sugerir a leitura mais provável primeiro ("vou focar em X, a menos que você queira Y").
3. **Escolher o template estrutural** (seção abaixo) pelo tipo de conteúdo — nunca forçar todo conteúdo no mesmo template.
4. **Nunca inventar dado, número ou estatística que não estava no material.** Se o conteúdo não tem números, o infográfico não inventa números pra "parecer mais forte" — usa hierarquia tipográfica e agrupamento em vez de estatística fake. Se um número existir no original, usar exatamente ele, sem arredondar de um jeito que mude o sentido.
5. **Construir como artifact HTML autocontido** — self-contained, sem dependência de arquivo externo além das libs permitidas (Google Fonts para tipografia, ícones como SVG inline, nunca emoji como substituto de ícone).
6. **Testar mentalmente em mobile antes de entregar** — a maioria vai ver isso na tela do celular. Nada de coluna de texto que exige zoom.

---

## Templates estruturais (escolher 1, pelo conteúdo)

| Template | Quando usar |
|---|---|
| **Processo/passos** | Conteúdo descreve uma sequência (como fazer X em N passos) |
| **Estatística-líder** | O conteúdo tem 1-3 números/dados fortes que sustentam o argumento inteiro — o número vira o elemento visual dominante, gigante, não uma legenda pequena do lado |
| **Comparação / antes-depois** | O conteúdo contrasta duas coisas (certo vs errado, com vs sem, opção A vs B) |
| **Hierarquia / pirâmide** | O conteúdo tem uma ordem de importância clara (do mais crítico ao menos crítico, ou uma escada de maturidade) |
| **Linha do tempo** | O conteúdo tem progressão temporal (histórico, evolução, cronologia de um caso) |

Nunca escolher "processo" por padrão só porque é o mais comum — o template errado é a diferença entre um infográfico que parece feito por profissional e um que parece um resumo com moldura.

---

## Dispositivos de visualização (obrigatório usar pelo menos 2)

Uma página com hierarquia bonita e ícones ao lado do texto **não é** um infográfico — é uma página editorial ilustrada. O que faz algo ler como infográfico é ter pelo menos 2 destes dispositivos, mesmo quando o conteúdo de origem não é uma planilha:

| Dispositivo | O que é | Quando usar mesmo sem dado numérico "oficial" |
|---|---|---|
| **Pictograma / array de ícones** | Um ícone repetido N vezes representa uma contagem real (pessoas, itens, ocorrências) | Qualquer quantidade contável no conteúdo original — nº de passos, personagens, categorias, exemplos citados |
| **Ícone em escala crescente/decrescente** | Uma sequência do mesmo ícone em tamanhos crescentes mostra proporção ou variação (cresce, aumenta, piora) | Qualquer variável que sobe/desce/cresce ao longo do conteúdo, mesmo sem % exata — ex: intensidade, frequência, repetição |
| **Número gigante com legenda curta** | 1-3 números reais do conteúdo em destaque tipográfico máximo, não escondidos em texto corrido | Sempre que existir uma contagem, data, quantidade ou métrica no material — extrair e destacar, nunca deixar apenas em prosa |
| **Selo numerado (01, 02, 03...)** | Círculo/badge numerado em cada etapa de uma sequência real | Todo template de Processo ou Linha do tempo — nunca decorativo, só quando a ordem importa de fato |

**Contar é permitido, inventar não:** extrair uma contagem real do próprio conteúdo (quantos capítulos, quantos passos, quantas vezes algo se repete) não viola a regra de "não inventar dado" — é exatamente o tipo de fato objetivo que dá ao infográfico a sensação de dado real. O que seguir proibido é estatística, percentual ou comparação que não vem do material.

**Cor com função, não decoração:** quando o conteúdo tem 2-3 categorias/eixos reais (ex: tipos de risco, fases, forças em jogo), mapear 1 cor por categoria e manter esse mapeamento consistente em toda a peça (ícones, badges, cards) — isso é estrutura de informação, não paleta decorativa. Só usar esse sistema quando o conteúdo realmente sustenta 2-3 categorias distintas; forçar categorias que não existem no material é o mesmo erro que inventar dado.

---

## Sistema de design — regras não-negociáveis

O objetivo é **"alto e moderno design"**, não "bonitinho de IA". A régua é: isso poderia estar num deck de produto de uma empresa de design, não num template de Canva genérico.

### Paleta dinâmica por tema do conteúdo (decidir antes de qualquer outra escolha de cor)

**Nunca existe uma paleta fixa do kit.** A cor muda peça a peça, de acordo com a atmosfera real daquele conteúdo — dois infográficos gerados no mesmo dia, sobre assuntos diferentes, têm que parecer produtos visuais diferentes.

Processo: 1) ler o conteúdo e identificar o tema/sensação dominante (bélico-estratégico, natural/bem-estar, tecnológico, financeiro, histórico, emocional/reflexivo, lúdico/infantil, etc. — não uma lista fechada, é leitura de atmosfera); 2) escolher a família de cor (matiz) que essa leitura sugere; 3) só depois aplicar as regras de paleta da seção "Regras positivas" (1 destaque + neutros) dentro dessa família escolhida.

Exemplos de leitura tema → família de cor (ilustrativos, não uma tabela fechada):
| Tema/atmosfera | Direção de cor |
|---|---|
| Estratégia, guerra, competição | Grafite ou azul-noite + destaque quente (vermelho, dourado) |
| Natureza, saúde, bem-estar | Verdes terrosos + areia/creme |
| Tecnologia, futuro, dados | Azul profundo + ciano |
| Finanças, negócio | Verde-escuro ou azul-marinho + dourado/cobre |
| Reflexivo, filosófico, emocional | Tons suaves e desaturados — nunca o roxo-azul-rosa genérico de IA, esse gradiente continua proibido não importa o tema |
| Lúdico, infantil, fantasioso | Cores mais quentes e saturadas, mas ainda dentro do limite de 3 cores com função |

A regra de no máximo 3 cores com função (abaixo) nunca muda — só a família de cor muda peça a peça. Tema nenhum é desculpa pra reintroduzir os clichês da seção seguinte.

### Antídoto ao "look de IA genérica" (proibido)
- Gradiente roxo-azul-rosa "IA padrão" sem motivo de marca
- Emoji fazendo o papel de ícone (💡📊🚀) — usar SVG inline, thin-line, peso único, consistente entre todos os ícones da peça
- Paleta arco-íris (uma cor por bullet só para "colorir")
- Robôzinho, cérebro brilhante, ou qualquer clipart-clichê de "IA"
- Sombra pesada/3D forçado, glassmorphism decorativo sem função
- Fonte padrão do sistema (Arial/system-ui) como única tipografia — sem intenção tipográfica

### Regras positivas
- **Paleta:** 1 cor de destaque + 1 neutro escuro + 1 neutro claro + no máximo 1 cor secundária de apoio. Nunca mais de 3 cores com função (a 4ª em diante é ruído). A cor de destaque é usada com intenção — no número/dado mais importante, nunca espalhada uniformemente
- **Tipografia:** 1 família de display (títulos, números grandes) + 1 família de texto (corpo/legendas) — nunca mais de 2 famílias. Contraste de peso forte entre o dado principal (bold, grande, 60-120px conceitual) e o texto de apoio (regular, pequeno). Hierarquia clara: dá pra entender a mensagem central só pelo tamanho da fonte, sem ler o texto
- **Grid:** alinhamento real, não elementos "flutuando" por instinto. Espaço em branco generoso — informação densa demais é o erro mais comum de infográfico ruim
- **Ícones:** SVG inline, um único peso de linha, mesma escala entre eles. Ícone ilustra, nunca decora sem função
- **Ilustração temática (obrigatório, pelo menos 1 por peça):** além dos dispositivos de dado, que continuam sendo o que carrega a informação, a peça ganha pelo menos 1 elemento ilustrativo em SVG inline — geralmente perto do título ou como ambientação de topo — ligado a um motivo concreto do próprio conteúdo (nunca uma forma abstrata genérica escolhida ao acaso). Mesmo estilo line-art dos ícones, mesmo peso de linha, cor de destaque da paleta do tema. Existe pra a peça não ficar só texto e ícone fino — nunca pra decorar sem função, e nunca no lugar dos dispositivos de dado já obrigatórios
- **Dark mode:** cores como tokens (`:root`), redefinidas em `@media (prefers-color-scheme: dark)` e em `[data-theme="dark"]` — nunca hardcoded
- **Mobile:** funciona em largura de tela de celular sem scroll horizontal, gutter mínimo de 16px
- **Fonte de dados:** se o conteúdo original citar uma fonte (estudo, relatório, nome do autor), incluir uma linha de crédito discreta no rodapé do infográfico — reforça credibilidade e evita parecer que o dado foi inventado

---

## Restrições

- Não adicionar nenhuma marca, CTA, promoção ou autopromoção dentro do infográfico gerado — a peça é sobre o conteúdo da pessoa, para uso profissional dela, nunca uma vitrine para outra coisa
- Não adicionar dado, comparação ou conclusão que não esteja no material de origem, mesmo que pareça "faltar uma conclusão mais forte" — fidelidade ao conteúdo original vem antes de impacto visual
- Se o conteúdo enviado for muito curto (menos de ~100 palavras) ou não tiver substância suficiente pra 3 pontos reais, avisar em vez de inflar artificialmente o infográfico com repetição

---

## Casos de borda

- **Conteúdo muito longo (um livro, um PDF de 40 páginas):** escolher o argumento central e 3-5 pontos que sustentam ele — não tentar caber o conteúdo inteiro. Avisar que foi feito um recorte, e qual foi o critério
- **Conteúdo técnico demais para o público leigo:** traduzir a linguagem no infográfico (esse é literalmente o valor que a marca entrega), sem perder precisão
- **Conteúdo sem nenhum dado numérico:** usar o template de Processo, Comparação ou Hierarquia — nunca forçar Estatística-líder sem número real
