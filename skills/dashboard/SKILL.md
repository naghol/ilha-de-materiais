---
name: dashboard
description: >
  Transforma dados estruturados (planilha, CSV, export de qualquer ferramenta, texto colado
  com números) num painel visual (artifact HTML) com as métricas que a própria pessoa escolheu
  como as mais importantes — nunca um dump de toda coluna da fonte. Funciona pra qualquer área
  (vendas, saúde, conteúdo, operação, financeiro, o que for) porque a personalização não vem de
  um template fixo por nicho, vem de uma mini-entrevista fixa que roda antes de desenhar
  qualquer coisa. Acionar quando o usuário disser "DASHBOARD", "monta um dashboard disso",
  "quero um painel dos meus dados/da minha planilha", "cria um dashboard de [área]",
  "transforma essa planilha num painel visual", ou colar uma planilha/CSV/print de dados
  pedindo um resumo executivo visual. NÃO acionar para conteúdo narrativo de leitura única
  (isso é a skill INFOGRAFICO) nem quando a pessoa só quer uma tabela/cálculo, sem intenção de
  olhar aquele painel de novo depois — dashboard é ferramenta de consulta repetida, não peça de
  leitura única.
---

# Dashboard

## O que essa skill faz

Recebe dados estruturados de qualquer área e devolve um **painel visual, personalizado pela própria pessoa**, com as métricas que ela mesma disse que importam — nunca uma lista automática de "toda coluna que existe na planilha". A personalização não vem de adivinhar o nicho (vendas usa isto, saúde usa aquilo) — vem de uma **mini-entrevista fixa, curta, que roda sempre**, e é essa entrevista que padroniza a skill pra funcionar em qualquer área sem precisar de um template por nicho.

Diferença que importa: um dashboard não é lido uma vez e descartado (isso é o papel do INFOGRAFICO) — é uma ferramenta de consulta repetida. Por isso a densidade de informação, a escolha de alerta e a métrica em destaque vêm de quem vai olhar aquilo de novo, e com que frequência — não de uma escolha editorial da IA.

---

## Processo

1. **Receber os dados** — planilha, CSV, export, ou números colados no chat. Ler a estrutura real antes de qualquer decisão (quais colunas existem, que tipo de dado é cada uma — contagem, valor monetário, data, categoria).
2. **Rodar a mini-entrevista antes de desenhar qualquer coisa** (nunca pular, mesmo quando o tipo de dado parece deixar óbvio o que a pessoa quer — ver por quê na seção seguinte).
3. **Cruzar as respostas com o dado real.** Só destacar métrica que existe de fato na fonte. Se a pessoa pedir algo que os dados não sustentam, avisar e sugerir a métrica real mais próxima — nunca inventar ou aproximar silenciosamente.
4. **Cortar para o essencial:** 1 métrica hero (resposta da pergunta 1) + no máximo 3-6 métricas secundárias (resposta da pergunta 4). Mesma disciplina anti-dump das outras skills visuais do kit — mais métrica não é mais valor, é mais ruído.
5. **Escolher o dispositivo certo por métrica**, nunca por padrão: tile numérico simples, tile com tendência (sparkline), ou tile com alerta semântico — a escolha vem diretamente das respostas 3 e 5 da entrevista, não de gosto estético.
6. **Construir como artifact HTML autocontido**, responsivo, com tema claro/escuro — mesma exigência técnica das outras skills visuais do kit (SVG inline, sem API de imagem, sem dependência de chave do Método Naghol).
7. **Nomear a fonte dos dados** (nome do arquivo/planilha, período coberto) discretamente no rodapé — sem isso, um painel com número parece mais autoritativo do que é.

---

## Mini-entrevista (fixa — é o que padroniza a skill pra qualquer área)

Rodar sempre, nesta ordem, antes de montar o painel. São 5 perguntas, nunca mais — entrevista longa demais mata o valor de "resultado rápido" que um comprador espera de uma skill.

| # | Pergunta | O que ela decide na construção |
|---|---|---|
| 1 | "Qual é a pergunta que esse painel precisa responder num olhar de 5 segundos?" | A métrica **hero** — a que domina visualmente o topo do painel |
| 2 | "Quem vai olhar isso, e com que frequência (você mesmo todo dia, seu time toda semana, um cliente/chefe uma vez por mês)?" | Densidade de informação e tom — painel operacional (mais denso, mais frequente) vs. resumo executivo (mais limpo, menos tiles) |
| 3 | "Tem algum número que, se passar de um limite, precisa saltar aos olhos (meta, teto, alerta)?" | Quais tiles ganham cor semântica (verde/âmbar/vermelho) — sem essa resposta, nenhum tile leva alerta, só neutro |
| 4 | "Quais 3 a 5 métricas não podem faltar, mesmo se todo o resto sumisse?" | O corte real do painel — é a pergunta que impede o dashboard de virar um dump de toda coluna da planilha |
| 5 | "Isso muda no tempo (dia a dia, semana a semana) ou é uma foto de um momento só?" | Se entra tendência/sparkline nos tiles, ou só o número do instante — nunca forçar tendência em dado que não tem série temporal real |

**Nunca pular a entrevista assumindo que já é óbvio pelo tipo de dado.** A mesma planilha de vendas serve pra uma pessoa que quer ver churn em primeiro lugar e pra outra que quer ver ticket médio — só a entrevista revela qual é qual. Se a pessoa responder "sei lá, bota tudo que tiver" na pergunta 4, não aceitar isso como resposta final: apresentar as 3-5 métricas mais prováveis dado o tipo de dados recebido e confirmar com ela antes de seguir — o corte é obrigatório, a origem da decisão pode ser sugerida pela skill quando a pessoa não tem clareza própria.

---

## Sistema de design

### O que muda em relação às outras skills visuais do kit

Os outros 4 visuais do kit (INFOGRAFICO, FLASHCARDS, QUIZ, APRESENTA) usam paleta e **ilustração de ambientação** (SVG decorativo ligado ao tema do conteúdo) pra criar atmosfera — fazem sentido porque são lidos uma vez, como uma peça editorial. **Dashboard é ferramenta de uso repetido, não peça editorial** — o objetivo é leitura rápida e recorrente, não impacto na primeira vez. Por isso essa skill **não usa ilustração de ambientação** (nenhum desenho decorativo competindo com o dado).

Isso não significa menos visual — significa visual que carrega dado real em vez de atmosfera. Um dashboard bem feito (referência: apps de saúde/monitoramento tipo Bevel/Apple Health) é rico em **dispositivos funcionais**: gauge circular, pictograma de composição, indicador de posição numa faixa — cada um comunicando um número sem exigir leitura de texto corrido. A régua at correta: mais dispositivo visual é bem-vindo desde que cada um mapeie pra um dado real da entrevista/fonte — o mesmo princípio anti-invenção que já vale pro resto do kit, aplicado a widget em vez de estatística.

### Dispositivos visuais por tipo de métrica (escolher pelo formato do dado, nunca por padrão)

| Dispositivo | Quando usar | O que mostra |
|---|---|---|
| **Gauge circular** (arco + número grande no centro + rótulo qualitativo curto, ex: "64 · fair") | Métrica tipo índice/score, ou a métrica hero quando ela é a "cara" do painel | O valor absoluto/relativo de uma vez, sem precisar comparar com nada ao lado |
| **Indicador de posição numa faixa** (barra vertical ou horizontal com zona normal marcada + ponto indicando onde o valor atual cai + rótulo de status: Normal/Abaixo/Acima) | Métrica onde a pergunta 3 da entrevista definiu um limite/meta/faixa de referência | Não só o número — onde ele está *em relação* ao que era esperado, de um jeito que se lê em 1 segundo, sem fazer conta de cabeça |
| **Pictograma de composição** (pontos ou blocos coloridos, 1 cor por subcategoria, contagem = quantidade real) | Métrica que é soma de partes (ex: 4 categorias de erro, ou um total dividido em subtipos) | A proporção entre as partes visualmente, sem precisar ler 4 números e comparar mentalmente |
| **Tile numérico simples** | Métrica de contexto/apoio, sem faixa de referência nem composição interna | O número puro, quando ele já é auto-explicativo (ex: "total de escopos analisados") |

**Regra de escolha:** o tipo de dado decide o dispositivo, nunca o inverso — não forçar um gauge numa métrica que não tem uma faixa/rótulo qualitativo real, e não inventar uma "faixa normal" que a entrevista não definiu. Quando a pergunta 3 da entrevista respondeu "não, sem alerta", o indicador de posição-em-faixa não entra — usar gauge neutro ou tile simples em vez disso, nunca forçar uma cor semântica que não foi pedida.

**Ícone por métrica (herdado do resto do kit):** cada card de métrica pode ter 1 ícone de linha fina identificando o tipo (mesma disciplina das outras skills — peso único, SVG inline, nunca emoji). O ícone ajuda o escaneio, o dispositivo (gauge/faixa/pictograma) carrega o dado.

### Paleta

- **1 neutro de fundo + 1 neutro de texto + 1 cor de destaque (accent)**, derivada de uma leitura leve da área do dado (a mesma lógica das outras skills, só que sem forçar uma "atmosfera" elaborada — aqui a cor existe pra guiar o olho, não pra contar uma história).
- **Cor semântica (verde = dentro da meta, âmbar = atenção, vermelho = crítico) é sempre separada da cor de destaque** e nunca a substitui — accent guia navegação/hierarquia, semântica guia estado. As duas nunca competem pelo mesmo papel visual.
- Cor semântica só aparece nos tiles que a pergunta 3 da entrevista definiu como tendo limite/alerta — nunca em todos os tiles por padrão, isso dilui o sinal.

### Cards (a unidade visual do dashboard)

- Todos os cards do mesmo nível (hero vs. secundário) compartilham a mesma borda, o mesmo raio, o mesmo padding interno — nunca um "estilo por card".
- O card/dispositivo hero é visivelmente maior/dominante — o gauge ou número em destaque tipográfico máximo, o resto do painel em escala secundária.
- Números sempre em fonte com dígitos tabulares (alinhamento vertical de coluna), principalmente quando há mais de um número lado a lado.
- Sparkline, quando presente (só se a pergunta 5 confirmou série temporal), é discreta — não é o elemento dominante do card, é o suporte visual do número.
- Grid de 2 colunas pra cards secundários em telas largas, empilhando em 1 coluna no mobile — mesma disciplina responsiva das outras skills do kit.

### Antídoto ao "look de IA genérica" (mesma lista das outras skills do kit)

Gradiente roxo-azul-rosa padrão, emoji no lugar de ícone, robôzinho/cérebro/clichê de IA, glassmorphism decorativo, sombra 3D pesada sem função, fonte de sistema como única tipografia — nenhum desses entra.

### Dado real, nunca placeholder

O painel entregue mostra os números reais da pessoa, calculados a partir do que ela forneceu — nunca "Lorem 123" ou exemplo genérico. Se o dado fornecido for insuficiente pra alguma métrica que a entrevista pediu, avisar e mostrar só o que existe, marcado como incompleto — nunca preencher com número inventado pra não deixar buraco visual.

---

## Restrições

- **Nunca pular a mini-entrevista** — nem quando a pessoa entrega os dados junto com uma descrição do que quer, a confirmação rápida (mesmo que resumida) ainda passa pelas 5 perguntas.
- **Nunca inventar métrica, tendência ou número que não está nos dados fornecidos.**
- **Nunca depender de API paga ou chave do Método Naghol** — SVG e CSS inline, exatamente como as outras skills visuais do kit, pra funcionar em qualquer conta Claude de quem comprar.
- **Nunca presumir nicho.** A estrutura do painel vem só da entrevista + do dado real — a skill não parte de "todo dashboard de vendas tem CAC e LTV" ou equivalente. Se a pessoa não citar uma métrica nas respostas, ela não entra, mesmo que seja comum naquela área.
- **Nenhuma marca, CTA ou autopromoção do Método Naghol dentro do painel entregue** — é produto de quem compra a skill, não vitrine pra outra coisa (mesma regra do INFOGRAFICO).

---

## Casos de borda

- **Dado sem nenhuma série temporal (é uma foto única de agora):** nunca forçar sparkline ou tendência — usar só o tile de número do instante, mesmo que pareça "faltar dinamismo" ao painel.
- **Resposta da entrevista pede uma métrica que os dados não sustentam:** avisar isso diretamente e sugerir a métrica real mais próxima disponível, nunca aproximar ou calcular algo parecido sem avisar que é uma substituição.
- **Volume de dado muito grande (milhares de linhas):** agregar antes de exibir (soma, média, contagem, taxa) — nunca listar linha a linha num tile, um dashboard não é uma tabela.
- **Pessoa não sabe responder a entrevista com clareza ("bota tudo que tiver"):** usar o tipo de dado recebido pra sugerir as 3-5 métricas mais prováveis e confirmar antes de construir — o corte da pergunta 4 é obrigatório mesmo quando a origem da decisão precisa vir da skill em vez da pessoa.
- **Dados de mais de uma fonte/planilha ao mesmo tempo:** perguntar se o painel deve juntar as fontes numa métrica só ou mostrá-las separadas — nunca assumir fusão silenciosa de dados que podem não ser comparáveis (unidades diferentes, períodos diferentes).
