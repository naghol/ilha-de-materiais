---
name: material-pos-treinamento
description: Gera um PDF de material pós-treinamento (resumo, principais pontos, próximos passos) a partir da transcrição de uma aula, mentoria ou treinamento gravado no Zoom. Use depois de dar um treinamento pra transformar a transcrição em material pronto pra entregar aos participantes.
user-invocable: true
---

# Skill — Material Pós-Treinamento (Zoom)

Pega a transcrição de um treinamento/aula/mentoria gravado no Zoom e transforma
em um PDF pronto pra entregar aos participantes — sem precisar reler ou
reescrever a aula na mão.

## Quando acionar

- "gera o material do treinamento de hoje"
- "faz o PDF pós-aula"
- "resume esse treinamento do Zoom"
- "puxa a última gravação e monta o material"
- qualquer variação de transformar uma aula/treinamento gravado em material de entrega

## Processo

### 1. Obter a transcrição

- Se o Zoom estiver conectado (conector oficial), buscar a transcrição da
  última reunião/gravação automaticamente.
- Se não houver conexão com o Zoom disponível na sessão, pedir que a pessoa
  cole a transcrição diretamente no chat (exportada do próprio Zoom, ou de
  qualquer outra ferramenta de transcrição).

### 2. Estruturar o conteúdo

A partir da transcrição, extrair:

- **Resumo executivo** — 3-4 linhas, o que foi ensinado e por quê importa
- **Principais tópicos** — bullets, um por assunto coberto
- **Pontos de ação** — o que os participantes devem fazer com o que aprenderam
- **Perguntas em aberto** — dúvidas levantadas na aula que ficaram sem resposta completa, se houver

Nunca inventar conteúdo que não apareceu na transcrição — se um tópico não
ficou claro, listar como pergunta em aberto em vez de arriscar um resumo errado.

### 3. Gerar o PDF

Rodar `gerar-pdf.js` (nesta mesma pasta) com o conteúdo estruturado no passo
anterior. O design é fixo — não foi feito pra ser reinventado a cada execução,
só o conteúdo muda:

```
node gerar-pdf.js
```

O script lê as variáveis de conteúdo no topo do arquivo (título do
treinamento, data, resumo, tópicos, ações, perguntas) — editar essas
variáveis antes de rodar, nunca o HTML/CSS abaixo delas.

### 4. Entregar

Confirmar o PDF gerado. Se fizer sentido, perguntar se a pessoa quer que o
envio para os participantes também seja automatizado (exige conectar o Gmail
ou outro e-mail — fora do escopo desta skill sozinha).

## Automação (sem precisar pedir toda vez)

Duas formas de rodar esta skill, do mais simples ao mais automático:

1. **Sob demanda:** depois de qualquer treinamento, pedir "Claude, executa a
   skill material-pos-treinamento".
2. **Agendada:** configurar uma rotina (ex: toda terça às 15h, com margem
   segura depois de um treinamento ao meio-dia) pra rodar esta skill sozinha,
   sem precisar pedir. Isso é configuração de agendamento, não faz parte do
   arquivo da skill em si.

## Arquivos desta pasta

```
material-pos-treinamento/
├── SKILL.md                  ← este arquivo
├── gerar-pdf.js              ← script de geração (design fixo, editar só o conteúdo no topo)
└── exemplo-transcricao.md    ← transcrição fictícia pra testar a skill sem precisar de uma aula real
```
