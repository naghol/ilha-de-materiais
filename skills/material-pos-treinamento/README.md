# Material Pós-Treinamento

Skill do Claude que transforma a transcrição de uma aula, mentoria ou
treinamento (gravado no Zoom, ou de qualquer outra fonte) em um PDF pronto
pra entregar aos participantes — resumo executivo, principais tópicos,
pontos de ação e perguntas em aberto.

## Como usar — Claude Code (terminal)

1. Copie esta pasta inteira (`material-pos-treinamento`) pra
   `~/.claude/skills/` na sua máquina.
2. Rode `npm install` dentro da pasta copiada (instala o Puppeteer, usado
   pra gerar o PDF).
3. Peça: "Claude, executa a skill material-pos-treinamento" e cole a
   transcrição do seu treinamento (ou use `exemplo-transcricao.md` pra
   testar antes).

## Como usar — app Claude (claude.ai / desktop)

1. Em Configurações → Capabilities → Skills, suba o arquivo `SKILL.md`
   como uma Skill customizada.
2. Cole a transcrição do treinamento na conversa e peça pra executar a
   skill.
3. A geração do PDF (`gerar-pdf.js`) depende de Node.js — rode esse passo
   localmente ou peça ajuda de alguém que use Claude Code, se você não
   tiver Node instalado.

## Personalizando

- Troque `logo.svg` pelo seu próprio logo.
- Edite a assinatura no rodapé do PDF, dentro de `gerar-pdf.js` (procure
  por `assinatura`).
- O design (HTML/CSS) é fixo de propósito — só o conteúdo no topo do
  script muda a cada execução.

## Estrutura

```
material-pos-treinamento/
├── SKILL.md                  ← instruções da skill
├── gerar-pdf.js              ← gera o PDF (design fixo, editar só o conteúdo no topo)
├── exemplo-transcricao.md    ← transcrição fictícia pra testar sem precisar de uma aula real
├── logo.svg                  ← logo usado no PDF (troque pelo seu)
└── package.json
```
