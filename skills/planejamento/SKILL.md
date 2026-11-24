---
name: planejamento
description: >
  Transforma um trabalho grande demais pra uma conversa só num plano salvo em arquivo, quebrado em
  tarefas do tamanho de uma sessão, com o modelo e o esforço indicados pra cada uma, check ao fim de
  cada tarefa e o comando pronto pra retomar na sessão seguinte. Feita pro Claude Code. Acionar
  quando o usuário disser "monta um plano", "planeja isso", "vamos fazer em partes", "quero ir
  limpando a sessão", "isso não cabe numa conversa", ou "continua o plano". NÃO acionar pra tarefa
  que cabe numa sessão (aí é só fazer), pra planejar agenda ou semana (isso é calendário, não plano
  de trabalho) nem pra uma lista de afazeres solta, sem entregável no fim.
---

# Planejamento em sessões

## O que essa skill faz

Trabalho grande feito numa conversa só dá errado de dois jeitos: a conversa fica longa, cada pedido passa a gastar mais do seu limite, e o Claude começa a se perder no que já foi decidido lá no começo. Essa skill resolve isso tirando a memória da conversa e pondo num arquivo.

O trabalho vira um plano, quebrado em tarefas do tamanho de uma sessão. Entre uma tarefa e outra, você limpa a sessão (`/clear`) e, se quiser, troca o modelo. **O arquivo é a única memória que passa de uma sessão pra outra**, então tudo que a próxima sessão precisa saber tem que estar escrito nele.

A régua: uma sessão nova, que não viu nada antes, abre o arquivo e consegue fazer a próxima tarefa sem perguntar o que já foi combinado.

**Onde funciona:** no Claude Code (app do Claude, aba Code, ou terminal), porque a skill precisa salvar e ler um arquivo no seu computador entre uma sessão e outra. No chat do Claude não existe esse arquivo que fica.

---

## Processo

### 1. Antes de escrever o plano: entender e perguntar

1. Ler o que já existe sobre o trabalho: os arquivos da pasta, os links e os documentos que o usuário mandou. Só então perguntar.
2. Perguntar, de uma vez só, tudo que muda o plano: escopo, ordem, formato da entrega, o que pode ficar de fora, prazo. Quando a pergunta couber em opções, oferecer as opções com a recomendada primeiro.
3. Não perguntar o que dá pra descobrir sozinho nem o que tem um padrão óbvio: decidir, anotar no plano como decisão e seguir.

### 2. O arquivo do plano

- **Onde:** `~/.claude/planos/AAAA-MM-DD_<nome-curto>.md` (no Windows, a pasta `.claude\planos` dentro da pasta do usuário). Fica fora das pastas de projeto: é um arquivo temporário e não vai pro GitHub nem pra pasta que você compartilha.
- **Estrutura, sempre esta:**

```markdown
# Plano: <nome>
Criado em AAAA-MM-DD. Arquivo temporário: vai pra lixeira quando a última tarefa fechar.
Como retomar: abrir sessão nova e dizer "continua o plano <nome-curto>".

## Objetivo
<uma ou duas linhas: o que existe no fim que não existe hoje>

## Decisões fechadas
- <cada resposta do usuário ou decisão tomada, com as palavras dele quando houver>

## Fontes
- <links, caminhos de pasta, arquivos e skills que cada tarefa precisa ler>

## Tarefas
- [ ] **1. <nome>** · modelo: <mais forte | intermediário | mais leve> · esforço: <baixo | médio | alto>
  - Faz: <o que fazer, escrito pra uma sessão que não viu nada antes>
  - Pronto quando: <critério que dá pra conferir, inclusive se termina com aprovação do usuário>
- [ ] **2. ...**

## Passagem de bastão
<atualizado ao fim de cada tarefa: o que ficou pronto, onde está, o que mudou, pendências e surpresas pra próxima>
```

### 3. Como quebrar as tarefas

- **Uma tarefa = uma sessão.** Cortar onde existe um entregável e, de preferência, um ponto em que o usuário aprova antes de seguir. Tarefa que não cabe numa sessão vira duas.
- **Cada tarefa diz o modelo e o esforço**, escolhidos pelo tipo de trabalho:

| Tipo de trabalho | Modelo | Esforço |
|---|---|---|
| Decidir a estrutura, mexer em algo com risco de quebrar, trabalho criativo fino (texto, conceito, curadoria) | O mais forte do seu plano (hoje, Opus) | Alto |
| Executar com julgamento (montar, revisar, propor cortes) | O mais forte | Médio |
| Executar algo já bem especificado (rodar uma ferramenta, aplicar o que já foi decidido) | Intermediário (hoje, Sonnet) | Médio |
| Trivial (renomear, mover, marcar) | O mais leve (hoje, Haiku) | Baixo |

- A sessão que monta o próprio plano é decisão de estrutura: modelo mais forte, esforço alto. Plano raso custa mais caro nas sessões seguintes.
- Se o plano do usuário não tiver o modelo mais forte, usar o intermediário onde a tabela pede o mais forte, e avisar.
- Os comandos que o usuário digita na sessão nova: `/clear` limpa a conversa, `/model` troca o modelo e `/effort` troca o esforço (quando a versão dele tiver esse comando).

### 4. Começo de cada sessão ("continua o plano")

1. Listar a pasta de planos. Se houver mais de um, perguntar qual.
2. Ler o plano inteiro, pegar a primeira tarefa sem check e ler a passagem de bastão.
3. Se o modelo ou o esforço da sessão não bate com o da tarefa, avisar numa linha, sem travar o trabalho.

### 5. Fim de cada tarefa

1. Marcar `[x]` na tarefa e atualizar a **Passagem de bastão**.
2. Se o que foi feito mudou o que vem depois, ajustar as próximas tarefas no arquivo e avisar o que mudou.
3. Avisar sempre neste formato e nesta ordem, com o comando sozinho na linha, pronto pra copiar:

> ✅ Tarefa N pronta: <resultado numa linha>.
> Pode limpar a sessão (`/clear`).
> `continua o plano <nome-curto> (tarefa N+1, <nome da tarefa>)`
> Modelo e esforço: <modelo> e <esforço>. <o que ter em mãos, se houver>

### 6. Fim do plano

1. Se algum aprendizado vale além deste trabalho (uma regra, um cuidado, um jeito de fazer), salvar antes onde ele mora de verdade: o `CLAUDE.md` do projeto ou a skill daquela tarefa. O plano é descartável; a regra não.
2. Mandar o arquivo do plano pra lixeira do sistema. Nunca apagar direto.
3. Avisar que o plano terminou e onde o arquivo foi parar.

---

## Restrições

- **Nunca começar a executar antes de o usuário aprovar o plano.** Montar o plano é a tarefa da primeira sessão; a execução começa na tarefa 1.
- **Nunca deixar informação importante só na conversa.** Decisão tomada, link novo, caminho de arquivo, surpresa: vai pro arquivo na mesma hora, porque a conversa vai ser limpa.
- **Nunca marcar check em tarefa que não bateu o "Pronto quando".** Tarefa pela metade fica sem check, com o ponto exato em que parou na passagem de bastão.
- **Nunca tocar duas tarefas na mesma sessão quando cada uma pede um modelo diferente.** Termina uma, avisa, e a próxima vai na sessão seguinte.
- **Não criar plano pra tarefa pequena.** Se cabe numa sessão, dizer isso e fazer direto.

## Casos de borda

- **O usuário pula a ordem** ("faz a 4 antes da 3"): conferir se a 4 depende do que a 3 entrega. Se depende, avisar o que falta; se não, seguir e anotar a troca nas decisões.
- **Surgiu trabalho novo no meio:** virar tarefa nova no arquivo, no lugar certo da ordem, em vez de fazer de carona na tarefa atual.
- **A tarefa ficou maior que a sessão:** parar num ponto limpo, dividir a tarefa em duas no arquivo, marcar o que já foi feito na passagem de bastão e avisar com o comando da metade que falta.
- **Mais de um plano aberto:** sempre perguntar qual continuar. Nunca adivinhar pelo assunto da conversa.
- **O usuário usa um gerenciador de tarefas conectado ao Claude (Notion, Trello, Asana):** só espelhar as tarefas do plano lá se ele pedir. O arquivo continua sendo a fonte.

---

## Passo a passo de instalação (rascunho pro PDF)

1. Baixe o arquivo `planejamento.md`.
2. Abra o app do Claude, aba Code, em qualquer pasta.
3. Arraste o arquivo pra conversa e peça: "instala essa skill pra mim, pra valer em todos os meus projetos".
4. Teste com um trabalho de verdade: "monta um plano pra <o trabalho grande que você está adiando>".
