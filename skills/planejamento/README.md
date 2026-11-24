# PLANEJAMENTO

Skill do Claude Code que transforma um trabalho grande demais pra uma
conversa só num plano salvo em arquivo: tarefas do tamanho de uma sessão,
com o modelo e o esforço indicados pra cada uma, check ao fim de cada
tarefa e o comando pronto pra retomar na sessão seguinte. A memória do
trabalho fica no arquivo, não na conversa, então dá pra limpar a sessão
entre uma tarefa e outra sem perder o fio.

## Como usar — Claude Code (app ou terminal)

1. Copie o arquivo `SKILL.md` desta pasta pra
   `~/.claude/skills/planejamento/SKILL.md` na sua máquina. Ou arraste o
   arquivo pra uma conversa no Claude Code e peça: "instala essa skill pra
   mim, pra valer em todos os meus projetos".
2. Peça: "monta um plano pra <o trabalho grande>".
3. Nas sessões seguintes, depois de limpar a conversa (`/clear`):
   "continua o plano".

Os planos ficam em `~/.claude/planos/`, fora das pastas de projeto. Cada
plano vai pra lixeira quando a última tarefa fecha.

## Como usar — app Claude (claude.ai / desktop, aba de chat)

Esta skill não funciona no chat: ela precisa salvar e ler um arquivo no
seu computador entre uma sessão e outra, e isso só existe no Claude Code.

## Personalizando

O conteúdo do `SKILL.md` é o comportamento inteiro da skill, sem script
externo. Pra mudar a pasta dos planos, a tabela de modelos ou o formato do
aviso de fim de tarefa, edite o próprio arquivo.

## Guia em PDF

Quer o passo a passo explicado do zero, com as 9 skills do kit Skills Reais
para Claude? Baixe o guia em PDF em
[metodonaghol.com.br/gratuitos/skills-reais-claude](https://www.metodonaghol.com.br/gratuitos/skills-reais-claude)
(liberado pelo seu e-mail).
