# QUIZ

Skill do Claude que transforma um texto, PDF, artigo ou conjunto de
conceitos num mini-quiz interativo (artifact HTML) pra testar conhecimento,
com pontuação e feedback de certo/errado a cada resposta.

## Como usar — Claude Code (terminal)

1. Copie o arquivo `SKILL.md` desta pasta pra `~/.claude/skills/quiz.md`
   na sua máquina (ou pra `~/.claude/skills/quiz/SKILL.md`, os dois
   formatos funcionam).
2. Peça: "Claude, usa a skill QUIZ nesse conteúdo" e cole ou anexe o
   material.

## Como usar — app Claude (claude.ai / desktop)

1. Em Configurações → Capabilities → Skills, suba este `SKILL.md` como uma
   Skill customizada.
2. Cole o conteúdo na conversa e peça pra montar o quiz (ou simplesmente
   diga "QUIZ").

## Personalizando

O conteúdo do `SKILL.md` é o comportamento inteiro da skill — não depende de
nenhum script externo. Pra ajustar os templates de pergunta, edite o próprio
arquivo.
