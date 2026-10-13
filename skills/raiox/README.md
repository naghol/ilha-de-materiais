# RAIOX

Skill do Claude que faz revisão crítica de um contrato, proposta comercial
ou e-mail/mensagem importante antes de enviar — aponta risco real
(jurídico, financeiro, de escopo), a objeção real de quem recebe, e
problema de tom, e termina num veredito direto (pode mandar / ajustar antes
/ não mandar). Nunca reescreve por conta própria, nunca dá aconselhamento
jurídico definitivo.

## Como usar — Claude Code (terminal)

1. Copie o arquivo `SKILL.md` desta pasta pra `~/.claude/skills/raiox.md`
   na sua máquina (ou pra `~/.claude/skills/raiox/SKILL.md`, os dois
   formatos funcionam).
2. Peça: "Claude, usa a skill RAIOX nesse texto" e cole ou anexe o
   contrato/proposta/e-mail.

## Como usar — app Claude (claude.ai / desktop)

1. Em Configurações → Capabilities → Skills, suba este `SKILL.md` como uma
   Skill customizada.
2. Cole o texto na conversa e peça uma segunda opinião antes de enviar (ou
   simplesmente diga "RAIOX").

## Personalizando

O conteúdo do `SKILL.md` é o comportamento inteiro da skill — não depende de
nenhum script externo. Pra ajustar as 3 camadas de leitura, edite o próprio
arquivo.

## Guia em PDF

Quer o passo a passo explicado do zero, com as 8 skills do kit Skills Reais
para Claude? Baixe o guia em PDF em
[metodonaghol.com.br/gratuitos/skills-reais-claude](https://www.metodonaghol.com.br/gratuitos/skills-reais-claude)
(liberado pelo seu e-mail).
