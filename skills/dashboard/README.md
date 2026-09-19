# DASHBOARD

Skill do Claude que transforma dados estruturados (planilha, CSV, export de
qualquer ferramenta) num painel visual (artifact HTML) com as métricas que
você mesmo escolhe como as mais importantes — nunca um dump de toda coluna
da fonte. Roda uma mini-entrevista fixa de 5 perguntas antes de desenhar
qualquer coisa, o que padroniza a skill pra qualquer área (vendas, saúde,
conteúdo, operação, financeiro) sem precisar de template por nicho.

## Como usar — Claude Code (terminal)

1. Copie o arquivo `SKILL.md` desta pasta pra `~/.claude/skills/dashboard.md`
   na sua máquina (ou pra `~/.claude/skills/dashboard/SKILL.md`, os dois
   formatos funcionam).
2. Peça: "Claude, usa a skill DASHBOARD nesses dados" e cole ou anexe a
   planilha/CSV.

## Como usar — app Claude (claude.ai / desktop)

1. Em Configurações → Capabilities → Skills, suba este `SKILL.md` como uma
   Skill customizada.
2. Suba a planilha/CSV na conversa e peça pra montar o painel (ou
   simplesmente diga "DASHBOARD").

## Personalizando

O conteúdo do `SKILL.md` é o comportamento inteiro da skill — não depende de
nenhum script externo. Pra ajustar a mini-entrevista ou o sistema de design,
edite o próprio arquivo.
