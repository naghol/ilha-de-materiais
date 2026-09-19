---
name: quiz
description: >
  Transforma um texto, PDF, artigo, anotação ou conjunto de conceitos enviado pelo usuário
  em um mini-quiz interativo (artifact HTML) para testar conhecimento, com pontuação e
  feedback de certo/errado a cada resposta. Acionar quando o usuário disser "QUIZ", "monta
  um quiz sobre isso", "testa meu conhecimento sobre isso", "quero um jogo/trivia sobre
  isso", "cria um teste rápido sobre esse conteúdo", ou colar um texto/PDF pedindo pra
  verificar o quanto já entendeu dele. NÃO acionar quando o objetivo é só entender o
  conteúdo de relance (isso é INFOGRAFICO), quando o objetivo é revisar/memorizar no próprio
  ritmo sem julgamento de certo/errado (isso é FLASHCARDS), ou quando o conteúdo pede uma
  narrativa em sequência de slides pra apresentar a alguém (isso é APRESENTA). QUIZ é o
  único dos quatro visuais com resposta certa definida, pontuação e resultado final.
---

# Quiz

## O que essa skill faz

Recebe qualquer conteúdo (texto colado, PDF, anotações, transcrição, link) e devolve **um mini-quiz de múltipla escolha**, uma pergunta por vez, com feedback imediato de certo/errado a cada resposta e uma pontuação final. É a única das quatro skills visuais com veredito — existe uma resposta certa, o usuário é avaliado nela, e recebe um resultado ao final.

**A diferença que importa para o FLASHCARDS:** os dois mostram uma unidade de conteúdo por vez e navegam em sequência — a mecânica de "uma peça, uma tela, avança quando quiser" é reaproveitada de propósito, pra manter os quatro formatos com uma linguagem de interação previsível. Mas o que cada um faz com essa peça é oposto. Flashcards existe pra treinar memória sem julgamento — vira o card, ninguém erra, ninguém pontua. Quiz existe pra confrontar o usuário com o que ele ainda não sabe — escolhe uma opção, recebe certo/errado na hora, some no placar. Se o pedido é "me ajuda a fixar isso" é flashcards; se é "quero saber se eu realmente sei isso" é quiz.

---

## Processo

1. **Ler o conteúdo enviado por completo.** Se vier um PDF ou link, extrair o texto antes de decidir estrutura.
2. **Extrair só os fatos com resposta certa inquestionável.** Diferente do flashcards (que aceita qualquer unidade de recall), quiz só funciona com fatos que têm **uma única resposta defensável** dentro do material de origem. Se o conteúdo é majoritariamente opinião, interpretação ou nuance sem corte claro, avisar que quiz não é o formato certo antes de forçar perguntas artificiais.
3. **Escolher o template de pergunta** (seção abaixo) por fato — pode misturar templates no mesmo quiz.
4. **Escrever a pergunta e as alternativas** seguindo a regra de qualidade da seção "Regras de conteúdo por pergunta".
5. **Definir a quantidade: 6 a 12 perguntas.** Menos que 6 não sustenta uma sensação de progresso; mais que 12 cansa antes do resultado final, que é o clímax do formato.
6. **Ordenar as perguntas da mais fácil pra mais difícil** dentro do que o conteúdo permitir — começar perdendo confiança logo na pergunta 1 afasta o usuário do resto do quiz.
7. **Construir como artifact HTML autocontido**, interativo (seção "Mecânica de interação" abaixo).
8. **Testar mentalmente em mobile antes de entregar** — toque na alternativa precisa ser óbvio, e o feedback (certo/errado) precisa ser legível sem depender só de cor (ver regra de acessibilidade abaixo).

---

## Templates de pergunta (podem coexistir no mesmo quiz)

| Template | Formato | Quando usar |
|---|---|---|
| **Múltipla escolha** | 1 pergunta + 4 alternativas, 1 correta | Padrão — usar sempre que o fato permitir distratores plausíveis |
| **Verdadeiro ou Falso** | 1 afirmação + 2 alternativas | Fatos binários, ou pra desfazer um mito específico do conteúdo (equivalente ao template Mito→Verdade do flashcards, só que com veredito) |
| **Complete a lacuna** | 1 frase com uma palavra/termo faltando + 4 alternativas | Vocabulário técnico ou termos nomeados no conteúdo |
| **Ordene a sequência** | 3-4 itens de um processo, embaralhados, o usuário reordena | Só quando o conteúdo original é uma sequência real (processo, cronologia) — nunca forçar ordem onde não existe uma ordem certa |

Nunca escolher "Múltipla escolha" por padrão pra todo o quiz só porque é o mais fácil de gerar — um quiz onde todas as 10 perguntas têm o mesmo formato visual cansa mais rápido que um que varia o tipo de interação a cada 3-4 perguntas.

---

## Regras de conteúdo por pergunta

- **A pergunta nunca é ambígua ou tem mais de uma resposta defensável** dentro do material de origem — isso é a diferença crítica entre quiz e qualquer outro formato: aqui existe julgamento de certo/errado, então a pergunta precisa aguentar esse peso.
- **Os distratores (alternativas erradas) podem ser inventados, mas nunca podem ser verdades disfarçadas de erradas.** É a única skill do kit em que se cria conteúdo que não estava no material original — mas só como opção claramente marcada errada no gabarito, nunca apresentada como fato em lugar nenhum da interface.
- **Distratores plausíveis, nunca absurdos.** Uma alternativa ridícula ao lado de 3 sérias não testa conhecimento, só facilita adivinhação — isso esvazia o propósito do quiz.
- **Evitar "todas as anteriores" e "nenhuma das anteriores"** — são muletas de quem não conseguiu escrever 3 distratores de verdade.
- **Evitar perguntas com negativa** ("qual das opções NÃO é...") — se for genuinamente a melhor forma de testar aquele fato, destacar visualmente a palavra negativa (peso ou cor) pra não virar pegadinha de leitura.
- **Nunca pegadinha de redação** (ambiguidade proposital, duplo sentido) — o quiz testa se a pessoa sabe o conteúdo, não se ela lê com atenção de prova.

---

## Mecânica de interação (obrigatória)

- **Uma pergunta visível por vez**, mesma lógica de foco do flashcards — nunca lista de perguntas na mesma tela.
- **Usuário escolhe uma alternativa clicando/tocando nela.** A escolha trava a pergunta — sem tentar de novo na mesma pergunta (senão o quiz vira flashcards com etapa extra).
- **Feedback imediato e visual + textual** ao escolher: alternativa correta destacada, alternativa errada (se foi a escolhida) destacada de outra forma, e um rótulo textual curto ("Certo" / "Errado" — não usar só cor, porque falha pra quem não distingue cor com facilidade).
- **Placar visível o tempo todo** ("6 acertos de 8 respondidas"), atualizado a cada resposta — é o equivalente do contador de progresso do flashcards, só que soma julgamento.
- **Botão explícito "próxima pergunta"** depois do feedback — nunca avançar sozinho, o usuário precisa de um instante pra registrar se acertou ou não antes de seguir.
- **Sem timer e sem contagem regressiva por padrão.** Pressão de tempo é hype de jogo, não o tom do Método Naghol — se algum dia pedirem uma versão cronometrada, é variante explícita, não o padrão.
- **Tela de resultado final obrigatória** ao fim da última pergunta: pontuação total, e uma leitura qualitativa por faixa (ver seção "Faixas de resultado"), nunca só o número seco.
- **Não deixar voltar e mudar resposta já dada** — mas permitir revisar as perguntas anteriores em modo leitura (mostrando o que foi respondido e o gabarito), separado da tela de resultado.
- Guardar progresso em `localStorage` como conveniência (retomar quiz incompleto na mesma sessão) é aceitável, nunca como pontuação definitiva sincronizada entre dispositivos.

---

## Faixas de resultado

Escrever 3 faixas qualitativas por porcentagem de acerto, sempre no tom do Método Naghol — direto, sem hype, sem envergonhar quem foi mal:

| Faixa | Tom da mensagem |
|---|---|
| 0-40% | Neutro, convida a rever o material — nunca linguagem de fracasso |
| 41-75% | Reconhece que entendeu o essencial, aponta que ainda vale reforçar |
| 76-100% | Reconhece domínio, sem exagero tipo "PARABÉNS, CAMPEÃO!" |

Nunca confete, emoji de troféu piscando, ou qualquer estética de app de jogo casual — o resultado é informativo, não uma celebração genérica.

---

## Sistema de design — regras não-negociáveis

O dispositivo visual do quiz é **a alternativa clicável + o estado de feedback (certo/errado) + o placar** — não o flip do flashcards, não o ícone denso do infográfico. A tensão do formato vem da espera pela resposta certa, então a interface precisa deixar claro, o tempo todo, que existe um julgamento em jogo (sem virar estética de game show).

### Paleta dinâmica por tema do conteúdo (decidir antes de qualquer outra escolha de cor)

**Nunca existe uma paleta fixa do kit.** A cor de UI muda de acordo com o conteúdo testado — um quiz sobre um relatório técnico e um quiz sobre um livro de ficção não usam a mesma família de cor só porque os dois são "quiz".

Processo: 1) ler o conteúdo e identificar o tema/sensação dominante; 2) escolher a família de cor de UI (a cor neutra de destaque, não as cores de certo/erro) a partir dessa leitura; 3) só depois aplicar as regras de cor abaixo. **As cores de certo e de erro são a única exceção — continuam semânticas (verde-ish pra certo, vermelho/laranja-ish pra erro) mesmo quando o tema pede outra coisa**, porque mudar o significado dessas duas cores quebra a usabilidade do feedback. O que muda com o tema é a cor neutra de UI (botões, progresso, painel) ao redor delas, nunca o par certo/erro em si.

### Antídoto ao "look de IA genérica" (proibido, mesma lista das outras skills)
- Gradiente roxo-azul-rosa "IA padrão"
- Emoji fazendo o papel de ícone
- Robôzinho, cérebro brilhante, clipart-clichê de "IA"
- Sombra pesada/3D forçado, glassmorphism decorativo
- Fonte padrão do sistema como única tipografia
- Estética de app de trivia casual (confete, troféu, som de acerto genérico, contagem de pontos gigante piscando)

### Regras positivas
- **Estado de feedback:** correto e incorreto precisam ser diferenciáveis sem depender só de cor — usar também um ícone simples (check/x, SVG inline, mesmo peso de linha do resto do kit) e o rótulo textual
- **Alternativas:** área de toque grande, alinhadas em coluna única mesmo em desktop (nunca grade 2x2 que confunde ordem de leitura)
- **Placar:** discreto e constante, nunca do tamanho do conteúdo principal — ele acompanha, não compete com a pergunta
- **Cor:** 1 cor de destaque neutra pra UI (botões, progresso), escolhida pelo tema do conteúdo (ver seção acima) + 1 cor de acerto + 1 cor de erro, sempre semânticas — nunca usar a cor de acerto/erro pra outra função na mesma peça, senão o feedback perde clareza
- **Ilustração temática:** 1 ilustração em SVG inline na tela de resultado final, ligada a um motivo concreto do conteúdo — funciona como fechamento/recompensa visual de ter terminado o quiz. Durante as perguntas, no máximo um motivo bem discreto de fundo (opacidade baixa, atrás do painel) — nunca competindo com a legibilidade das alternativas, porque aqui a tela é uma interface funcional, não uma peça de leitura
- **Dark mode:** tokens em `:root`, redefinidos em `@media (prefers-color-scheme: dark)` e em `[data-theme="dark"]` — as cores de certo/erro também precisam de par dark, nunca hardcoded
- **Mobile:** toda alternativa é alvo de toque confortável, sem exigir precisão de clique
- **Fonte de dados:** mesma regra do infográfico e do flashcards — crédito discreto da fonte original, se houver, fora da área de jogo

---

## Restrições

- Não adicionar nenhuma marca, CTA, promoção ou autopromoção dentro do quiz gerado
- Não inventar fato como resposta correta — só os distratores podem ser conteúdo novo, e sempre marcados como errados
- Não transformar isso em avaliação punitiva — nunca linguagem de vergonha na tela de resultado, mesmo na faixa mais baixa
- Se o conteúdo não sustentar pelo menos 6 fatos com resposta única e defensável, avisar em vez de forçar perguntas ambíguas só pra fechar a contagem mínima

---

## Casos de borda

- **Conteúdo majoritariamente opinativo ou interpretativo (sem fato de corte claro):** avisar que quiz não é o formato certo, sugerir infográfico ou flashcards no lugar
- **Conteúdo com fatos genuinamente debatíveis ou desatualizados:** ou reformular a pergunta pra um recorte inquestionável do material, ou excluir aquele fato do quiz — nunca forçar um gabarito frágil
- **Conteúdo curto demais para 6 perguntas sem repetição disfarçada:** avisar, sugerir reduzir escopo ou trocar de formato
- **Conteúdo que é uma sequência/processo real:** usar o template "Ordene a sequência" pra pelo menos uma pergunta — é a única forma de testar ordem, e reforça o mesmo processo que o flashcards trataria como Passo → Ação
