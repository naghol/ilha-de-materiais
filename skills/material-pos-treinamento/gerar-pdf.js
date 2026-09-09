const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// ===== LÊ O TEMPLATE PREENCHIDO — edite conteudo.md, nunca este arquivo =====

function toBase64(filePath) {
  const ext = path.extname(filePath).replace('.', '');
  const mime = ext === 'svg' ? 'image/svg+xml' : `image/${ext}`;
  const data = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${data}`;
}

function parseConteudo(markdown) {
  const secoes = {
    'Resumo Executivo': [],
    'Principais Tópicos': [],
    'Pontos de Ação': [],
    'Perguntas em Aberto': [],
  };

  let titulo = '';
  let data = '';
  let secaoAtual = null;

  for (const linhaBruta of markdown.split('\n')) {
    const linha = linhaBruta.trim();
    const tituloMatch = linha.match(/^#\s+(.+)/);
    const dataMatch = linha.match(/^\*\*Data:\*\*\s*(.+)/);
    const secaoMatch = linha.match(/^##\s+(.+)/);
    const bulletMatch = linha.match(/^-\s+(.+)/);

    if (tituloMatch) { titulo = tituloMatch[1].trim(); continue; }
    if (dataMatch) { data = dataMatch[1].trim(); continue; }
    if (secaoMatch) { secaoAtual = secaoMatch[1].trim(); continue; }
    if (!secaoAtual || !linha) continue;

    if (bulletMatch) {
      secoes[secaoAtual] = secoes[secaoAtual] || [];
      secoes[secaoAtual].push(bulletMatch[1].trim());
    } else if (secaoAtual === 'Resumo Executivo') {
      secoes[secaoAtual].push(linha);
    }
  }

  return {
    titulo,
    data,
    resumo: secoes['Resumo Executivo'].join(' '),
    topicos: secoes['Principais Tópicos'],
    acoes: secoes['Pontos de Ação'],
    perguntas: secoes['Perguntas em Aberto'],
  };
}

const conteudoMd = fs.readFileSync(path.join(__dirname, 'conteudo.md'), 'utf8');
const { titulo, data, resumo, topicos, acoes, perguntas } = parseConteudo(conteudoMd);

// Troque este arquivo pelo seu próprio logo pra personalizar o material.
const logo = toBase64(path.join(__dirname, 'logo.svg'));

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
    <div class="data">${data}</div>
  </div>

  <div class="titulo">
    <h1>${titulo}</h1>
  </div>

  <div class="section">
    <h2>Resumo Executivo</h2>
    <div class="resumo">${resumo}</div>
  </div>

  <div class="section">
    <h2>Principais Tópicos</h2>
    <ul>${listItems(topicos)}</ul>
  </div>

  <div class="section">
    <h2>Pontos de Ação</h2>
    <ul class="acoes">${listItems(acoes)}</ul>
  </div>

  ${perguntas.length > 0 ? `
  <div class="section">
    <h2>Perguntas em Aberto</h2>
    <ul class="perguntas">${listItems(perguntas)}</ul>
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
