const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Troque este arquivo pelo seu próprio logo pra personalizar o material.
const LOGO_PATH = path.join(__dirname, 'logo.svg');

function toBase64(filePath) {
  const ext = path.extname(filePath).replace('.', '');
  const mime = ext === 'svg' ? 'image/svg+xml' : `image/${ext}`;
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${data}`;
}

const logo = toBase64(LOGO_PATH);

// ===== CONTEÚDO — editar só isto a cada execução, nunca o HTML/CSS abaixo =====

const TITULO = 'Introdução ao Notion pra Times de Marketing';
const DATA = '08/09/2026';

const RESUMO = `Este treinamento apresentou a lógica por trás do Notion pra
organizar o time de marketing: a diferença entre página e banco de dados, e
como usar propriedades, relações e views pra que a mesma informação sirva a
pessoas diferentes de formas diferentes.`;

const TOPICOS = [
  'Diferença entre página (documento) e banco de dados (coleção com propriedades)',
  'Criação do banco de dados "Campanhas": nome, status, responsável, datas',
  'Relação entre bancos de dados (ex: Campanhas ↔ Peças de Conteúdo)',
  'Views: a mesma base pode virar calendário, kanban ou lista, dependendo de quem olha',
];

const ACOES = [
  'Cadastrar pelo menos 2 campanhas reais do time no banco "Campanhas" até sexta-feira',
  'Não se preocupar em fazer perfeito — o objetivo é perder o medo da ferramenta',
];

const PERGUNTAS = [
  'Dá pra puxar automaticamente os dados de performance do Instagram pro Notion? (Sim, via automação — fica pra um próximo treinamento)',
];

// ===== DESIGN — fixo, não alterar =====

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join('\n');
}

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body { height: 297mm; }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background: #fff;
    color: #1C1C32;
    font-size: 11px;
    line-height: 1.6;
    padding: 40px 48px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 28px;
    padding-bottom: 16px;
    border-bottom: 2px solid #2C7DFF;
  }
  .header img.logo {
    height: 26px;
    width: auto;
  }
  .header .data {
    font-size: 10px;
    color: #777;
  }

  .titulo h1 {
    font-size: 19px;
    font-weight: 800;
    color: #1C1C32;
    letter-spacing: -0.3px;
    margin-bottom: 4px;
  }
  .titulo .subtitulo {
    font-size: 11px;
    color: #2C7DFF;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .section { margin-top: 22px; }
  .section h2 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #2C7DFF;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e8edf5;
  }

  .resumo {
    background: #f0f5ff;
    border-left: 3px solid #2C7DFF;
    border-radius: 0 6px 6px 0;
    padding: 12px 16px;
    font-size: 11px;
    color: #333;
  }

  ul { padding-left: 0; list-style: none; }
  ul li {
    padding: 4px 0 4px 16px;
    position: relative;
    color: #333;
    font-size: 11px;
  }
  ul li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #2C7DFF;
    font-size: 10px;
  }

  .acoes li::before { content: '✓'; color: #1C9A6C; }
  .perguntas li::before { content: '?'; color: #C7841C; font-weight: 700; }

  .footer {
    margin-top: 32px;
    padding-top: 12px;
    border-top: 1px solid #e8edf5;
    font-size: 9px;
    color: #aaa;
    text-align: center;
  }
  .footer .assinatura {
    color: #2C7DFF;
    font-weight: 600;
  }
</style>
</head>
<body>

  <div class="header">
    <img class="logo" src="${logo}" alt="Método Naghol" />
    <div class="data">${DATA}</div>
  </div>

  <div class="titulo">
    <h1>${TITULO}</h1>
  </div>

  <div class="section">
    <h2>Resumo Executivo</h2>
    <div class="resumo">${RESUMO}</div>
  </div>

  <div class="section">
    <h2>Principais Tópicos</h2>
    <ul>${listItems(TOPICOS)}</ul>
  </div>

  <div class="section">
    <h2>Pontos de Ação</h2>
    <ul class="acoes">${listItems(ACOES)}</ul>
  </div>

  ${PERGUNTAS.length > 0 ? `
  <div class="section">
    <h2>Perguntas em Aberto</h2>
    <ul class="perguntas">${listItems(PERGUNTAS)}</ul>
  </div>` : ''}

  <div class="footer">
    Gerado automaticamente a partir da transcrição do treinamento<br>
    <span class="assinatura">Luccas Góes · Método Naghol</span> — metodonaghol.com.br
  </div>

</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: `${__dirname}/material-pos-treinamento.pdf`,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await browser.close();
  console.log('PDF gerado com sucesso.');
})();
