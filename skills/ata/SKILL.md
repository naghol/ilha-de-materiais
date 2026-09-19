---
name: ata
description: >
  Transforma a transcrição, gravação transcrita ou anotações de uma reunião num plano de ação
  real — cada item com responsável e prazo, separado do que foi só discutido ou já decidido sem
  exigir ação de ninguém. Acionar quando o usuário disser "ATA", "transforma essa reunião em
  plano de ação", "extrai as ações dessa transcrição", "quem ficou responsável por quê nessa
  reunião", "monta a ata dessa call", ou colar uma transcrição/anotação de reunião pedindo um
  resumo do que precisa ser feito. NÃO acionar pra resumir o conteúdo geral de uma reunião sem
  interesse em ação (isso é resumo, não ata) nem pra decisões que não vieram de uma reunião real
  (e-mail, mensagem avulsa — aí é só leitura de texto, não extração de plano de ação).
---

# Ata

## O que essa skill faz

Recebe a transcrição, gravação transcrita ou anotação de uma reunião e devolve uma ata em 2 camadas: **contexto rápido** (o que foi essa reunião, em 1 tweet, e os principais pontos discutidos) e **o que precisa de ação** — cada item com responsável e prazo. A maior parte de uma reunião é conversa, alinhamento e contexto; o valor real de uma ata está em dar esse contexto de forma rápida e depois separar dele o punhado de itens que de fato mudam o que alguém vai fazer.

A régua: alguém que não participou da reunião precisa conseguir, só com a ata, (1) entender em 5 segundos o que essa reunião foi, (2) saber os principais assuntos tratados sem ouvir a gravação, e (3) se for responsável por algo, saber exatamente o que fazer e até quando — os 3 sem precisar voltar na fonte.

---

## Processo

1. **Ler a transcrição/anotação inteira antes de extrair qualquer coisa.** Ação combinada no início da reunião pode ser cancelada ou reatribuída no final — ler tudo evita registrar algo que já foi revertido, e é o mesmo motivo pelo qual o resumo do topo só se escreve depois de ler tudo, nunca pelas primeiras linhas.
2. **Escrever o resumo rápido (1 tweet, ~280 caracteres).** Uma frase (ou duas curtas) que capture o que essa reunião foi e por que ela importou — não uma lista de temas, é a resposta de "me conta em uma frase o que rolou nessa call".
3. **Listar os principais pontos discutidos** (3 a 6, nunca mais) — cada um em 1 linha, nomeando o assunto e o essencial do que foi dito sobre ele. É contexto, não narração — quem lê entende de que se falou, sem reviver a discussão inteira.
4. **Separar o restante em 3 categorias, sempre distintas, nunca misturadas:**
   1. **Ação** — alguém específico assumiu (ou foi designado) fazer algo específico, com ou sem prazo
   2. **Decisão** — algo foi resolvido/definido na reunião, mas não exige ação de ninguém (é só registro do que ficou combinado)
   3. **Pendência sem dono** — um problema ou necessidade real foi levantado, mas ninguém assumiu a responsabilidade nem foi definido um prazo
5. **Para cada Ação, extrair 3 campos:** o que precisa ser feito (descrito de forma que dê pra saber quando está pronto, não só o tema), quem ficou responsável, e o prazo (data explícita, ou prazo relativo convertido pra data quando a data da reunião for conhecida).
6. **Nunca inventar responsável ou prazo.** Se a reunião não definiu quem faz ou até quando, o item entra como está — marcado "sem responsável definido" ou "sem prazo definido" — nunca preenchido com suposição (ex: assumir que é a pessoa que levantou o problema, ou que o prazo é "o mais rápido possível").
7. **Fechar com um resumo executivo curto:** quantas ações têm responsável E prazo definidos, quantas têm só um dos dois, quantas não têm nenhum. Esse resumo é o que torna visível, de cara, se a reunião gerou compromissos reais ou só intenção.

## Estrutura da resposta (sempre nesta ordem)

1. **Resumo rápido** — 1 tweet
2. **Principais pontos discutidos** — 3 a 6 linhas
3. **Ações** — com responsável e prazo (ou o aviso de que falta um dos dois)
4. **Decisões**
5. **Pendências sem dono**
6. **Resumo executivo dos compromissos** — contagem de ações completas vs incompletas

---

## Regras de comportamento — não-negociáveis

- **Ação real, não tema de conversa.** "Discutimos o problema de X" não é uma ação. Só entra como ação o que teve um verbo de compromisso associado a uma pessoa (ex: "eu vou mandar", "ela fica de revisar", "combinamos que o Fulano faz").
- **Responsável é quem foi de fato designado, nunca inferido por proximidade.** Se o nome mais próximo do problema no texto não foi explicitamente associado à ação, o item vai pra "pendência sem dono" — nunca assumir por contexto.
- **Prazo relativo se converte pra data absoluta só quando a data da reunião é conhecida**, e a conversão é sempre mostrada ("até semana que vem" → dd/mm, calculado a partir da data da reunião). Se a data da reunião não foi informada, manter o prazo como foi dito ("semana que vem") e avisar que não deu pra converter.
- **Nome mal transcrito é sinalizado, nunca corrigido silenciosamente.** Transcrição automática erra nome de pessoa com frequência — se um nome parecer estranho ou inconsistente com outra menção no mesmo texto, apontar a dúvida ("nome pode estar errado na transcrição") em vez de escolher uma versão sozinho.
- **Reunião sem ação real também é resposta válida.** Se a reunião foi só alinhamento/atualização, sem nenhum compromisso novo, dizer isso diretamente — nunca inventar uma ação pra não devolver uma ata "vazia". O resumo e os principais pontos ainda entram normalmente, mesmo quando não há nenhuma ação.
- **Resumo rápido é síntese, não lista.** Cabe em 1 tweet porque é a essência, não um compressor de tópicos — se não cabe em ~280 caracteres como frase corrida, o problema é que ainda tem tema demais nela, não que o limite é curto demais.
- **Principais pontos discutidos nunca ultrapassam 6, mesmo em reunião longa com muito assunto.** Se sobrarem mais de 6 candidatos, escolher os que mais moldaram o resultado da reunião (o que decisões/ações dependem de ter sido discutido antes) — mesma disciplina de corte que já vale pro resto do kit.

---

## Restrições

- O resumo rápido e os principais pontos são as únicas duas doses de síntese geral permitidas — fora delas, não narrar a discussão além do necessário pra dar contexto de um item específico. A ata não substitui a gravação/transcrição para quem quer reviver a discussão inteira.
- Não misturar em uma mesma lista itens de Ação, Decisão e Pendência sem dono — as 3 categorias sempre aparecem separadas, mesmo quando pequenas.
- Não assumir prioridade entre as ações levantadas, a menos que a própria reunião tenha estabelecido uma ordem — a skill lista, não hierarquiza por conta própria.

---

## Casos de borda

- **Reunião longa (várias horas ou muitos temas):** ainda assim ler tudo antes de extrair — ação combinada perto do fim pode alterar o que foi dito sobre o mesmo tema no começo. Se o volume for muito grande, agrupar por tema/bloco da reunião antes de listar as ações de cada bloco, nunca pular trechos.
- **Duas pessoas ficam responsáveis pela mesma ação, junto:** registrar os dois nomes no mesmo item, nunca escolher um dos dois como "principal" sem a reunião ter definido isso.
- **Ação mencionada mas depois cancelada/substituída na própria reunião:** registrar só a versão final — nunca a intermediária, mesmo que tenha ocupado mais tempo de discussão.
- **Transcrição sem marcação de quem fala (texto corrido, sem nome antes de cada fala):** avisar essa limitação antes de tentar atribuir responsável — nesse caso, a maioria dos itens provavelmente vai cair em "pendência sem dono" por falta de como identificar quem assumiu o quê, e isso deve ser dito explicitamente, não escondido.
- **Reunião só de atualização de status, sem nenhuma ação nova:** retornar isso claramente ("essa reunião não gerou ação nova, só atualizações") em vez de forçar itens fracos pra preencher a resposta.
