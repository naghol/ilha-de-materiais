# Automação de DM no Instagram: plano executável

> **Como usar:** crie uma pasta vazia no computador, abra o Claude Code nela, arraste este arquivo pra conversa e escreva **executar**. O Claude faz as perguntas, roda os comandos e te avisa quando for a sua vez de clicar em algum painel.
>
> Sem baixar nada, cole isto no Claude Code (numa pasta vazia):
> `Baixa com curl este arquivo pra esta pasta, lê inteiro e executar: https://raw.githubusercontent.com/naghol/ilha-de-materiais/main/guias/automacao-dm-instagram/automacao-dm-instagram.md`

Versão de 13/10/2026. Base: [OpenReply](https://github.com/diwenne/openreply) (código aberto, licença MIT).

---

## Instruções para o assistente (Claude Code)

Quando a pessoa disser "executar", você conduz a instalação deste plano do começo ao fim. Ela provavelmente não é programadora. Siga estas regras:

1. **Antes de tudo, procure `PROGRESSO.md` nesta pasta.** Se existir, leia, diga em uma linha onde a pessoa parou e continue de lá. Se não existir, crie o arquivo e comece pela Etapa 0. Ao fim de cada passo, anote nele o que foi feito e o caminho escolhido (A ou B), **sem nenhum segredo**. Assim, se a sessão acabar, basta dizer "executar" de novo.
2. **Faça as 8 perguntas da seção "Perguntas" uma de cada vez**, antes de qualquer instalação. Explique em uma frase por que cada uma importa. Não pule nenhuma.
3. **Siga só o caminho que a pessoa escolher** (A local e grátis, ou B nuvem e paga). Antes de qualquer passo que custe dinheiro, diga o valor e espere o "ok".
4. **Use a conexão direta com a Meta** (o próprio app da pessoa). Não configure o Zernio, que é pago.
5. **Comandos de terminal você roda.** Processos que ficam ligados (painel, worker, túnel) rode em segundo plano. Se o Claude Code barrar algum comando (o túnel costuma ser barrado no modo automático), peça que a pessoa digite `!` seguido do comando, no próprio prompt.
6. **Painéis da Meta, Railway, ngrok, Resend e o app do Instagram são com a pessoa.** Diga exatamente onde clicar, um passo de cada vez, e espere ela confirmar. Se ela disser que a tela está diferente, peça um print e adapte. Não invente passo.
7. **Segredos:** peça que a pessoa cole as chaves direto no `.env` (local) ou nas variáveis do Railway quando possível. Nunca commite segredo, nunca mostre segredo salvo e nunca grave segredo no `PROGRESSO.md`. Sugira guardar tudo num gerenciador de senhas.
8. **Leia `README.md` e `docs/setup.md` do OpenReply** depois de baixar o código. Se algo deles contradisser este plano, avise a pessoa e siga o que funcionar.
9. **Ao fim de cada etapa**, confira com `/api/health` (quando já existir) e diga o que falta.
10. **Pronto quando:** um comentário com a palavra `TESTE`, feito de outra conta, gera a DM e aparece como `SENT` em DM Logs. Aí ajude a criar as automações de verdade (Etapa 4).
11. Fale em português simples, frases curtas, sem jargão sem explicar.

---

## O que a pessoa vai ter no fim

Uma automação de DM do Instagram só sua, sem mensalidade de ManyChat: a pessoa comenta uma palavra no seu post e recebe na DM o link, com botão, resposta pública no comentário e, se você quiser, a exigência de seguir antes.

- **Pra quem serve:** criador ou negócio que quer automatizar a própria conta. Não serve pra revender pra clientes: aí a Meta exige App Review, com empresa registrada e vídeo do fluxo.
- **O que precisa ter:** conta do Instagram profissional (Criador ou Empresa), uma conta no Facebook pra entrar no painel de desenvolvedor da Meta, um computador (Mac, Windows ou Linux) e uma segunda conta do Instagram pra testar.
- **Tempo:** uma tarde pra subir local; mais uma tarde pra subir na nuvem. A parte lenta é o painel da Meta, não o código.

## Custos

O caminho local custa R$ 0. O da nuvem fica entre US$ 8 e 15 por mês (cerca de R$ 45 a 85, com o dólar a R$ 5,50 já com IOF do cartão). A Meta não cobra pela API do Instagram.

| Item | Caminho A: local | Caminho B: nuvem |
| --- | --- | --- |
| Código (OpenReply) | Grátis | Grátis |
| App na Meta e API do Instagram | Grátis | Grátis |
| Onde roda o painel e o worker | Seu computador, ligado e acordado | Railway Hobby: US$ 5/mês com US$ 5 de uso inclusos; o que passar é cobrado por uso. Estimativa total: US$ 8 a 15/mês |
| Banco de dados (Postgres) | Grátis, no computador | No Railway (entra no uso) ou Supabase grátis (500 MB) |
| Redis (fila de envio) | Grátis, no computador | No Railway (entra no uso). Redis só por HTTP, como o REST do Upstash, não funciona |
| Endereço público | ngrok grátis: 1 endereço fixo, 20 mil requisições/mês | Endereço grátis do Railway (`*.up.railway.app`) |
| E-mail do login | Mailpit, grátis, no computador | Resend grátis (3.000/mês, 100/dia) ou Gmail |
| Domínio próprio | Não precisa | Opcional: `.com.br` sai R$ 40/ano no Registro.br |
| Claude Code | Plano pago do Claude (Pro a partir de US$ 20/mês) | Idem |
| **Total por mês (fora o Claude)** | **R$ 0** | **US$ 8 a 15 (≈ R$ 45 a 85)** |

- **Custo escondido do local:** computador desligado ou dormindo, nada responde. Quando volta, a varredura pega os comentários das últimas 72 horas (até 30 por automação a cada 5 minutos).
- **Por que não Vercel:** o worker (a peça que envia as DMs) precisa ficar ligado o tempo todo, e a Vercel não roda isso. O Railway entraria de qualquer jeito. Além disso, o plano grátis da Vercel é só pra uso não comercial; automação que leva gente pro seu funil é uso comercial.
- **Trave o gasto:** no Railway, defina um limite de uso (mínimo US$ 10) em Workspace > Usage.
- Preços conferidos em 13/10/2026. Confira as páginas oficiais (em Fontes) antes de assinar.

## Perguntas (o assistente faz antes de começar)

1. **Sua conta do Instagram é profissional (Criador ou Empresa)?** Conta pessoal não conecta. Troca em Configurações > Tipo de conta.
2. **Você já usou ManyChat, InstantDM ou outra ferramenta de DM nessa conta?** Se sim, tem um passo extra (Roteamento de conversas, Etapa 3). Mesmo cancelada, ela pode continuar "dona" das conversas.
3. **Local e grátis (A) ou nuvem e paga (B)?** A: o computador precisa ficar ligado pra responder. B: responde 24 horas, US$ 8 a 15/mês. Dá pra começar no A e passar pro B depois.
4. **Seu computador é Mac, Windows ou Linux?**
5. **Você tem domínio próprio (ex.: seusite.com.br)?** Não é obrigatório.
6. **Você tem uma segunda conta do Instagram pra testar?** Precisa: a ferramenta ignora comentários da própria conta.
7. **Qual palavra e qual link você quer automatizar primeiro?** Ex.: comentou QUERO, recebe o link da aula. Tenha a palavra, o texto da DM e o link.
8. **Quer exigir que a pessoa siga o perfil antes de receber o link?** Se sim, prepare o texto do pedido em português (o padrão vem em inglês).

## Etapa 0: programas necessários

O assistente confere o que já está instalado (`git --version`, `node --version`) e ajuda a instalar o que faltar.

- **Git.**
- **Node.js 20 ou mais novo** (o OpenReply usa Next.js 16).
- **Mac:** Homebrew (`brew`), que instala o resto.
- **Windows:** Docker Desktop (pro banco e o Redis). Se preferir, use o WSL (Linux dentro do Windows) e siga como Linux.
- **Linux:** Docker, ou Postgres e Redis pelo gerenciador de pacotes.
- **Caminho B:** conta no GitHub (o Railway puxa o código de lá).

## Etapa 1 (os dois caminhos): código, app na Meta e chaves

1. **Baixe o código para uma subpasta desta pasta:**
    - Caminho A: `git clone https://github.com/diwenne/openreply.git openreply`
    - Caminho B: a pessoa faz um fork de `github.com/diwenne/openreply` no GitHub dela e você clona o fork em `openreply`. O fork fica público, o que não tem problema: o `.env` nunca vai pro Git.
    - Daqui em diante, trabalhe dentro de `openreply/`.
2. **Instale as dependências:** `npm ci` e `npm run db:generate`.
3. **Crie o app na Meta** (com a pessoa): em [developers.facebook.com/apps](https://developers.facebook.com/apps), criar app do tipo Empresa, com um e-mail de contato que ela lê. No caso de uso, filtrar por Todos e escolher "Gerenciar mensagens e conteúdo no Instagram" (API com login do Instagram). **Não** escolher Marketing API nem Login do Facebook: o login quebra depois com erro de cliente.
4. **Junte as chaves do app:**
    - `INSTAGRAM_APP_ID` e `INSTAGRAM_APP_SECRET`: produto Instagram > "Configurar API com login do Instagram" (clicar em Mostrar). Esse ID **não** é o ID do app que aparece no topo; é o que está dentro do produto Instagram.
    - `FACEBOOK_APP_SECRET`: Configurações do app > Básico > Chave secreta do app.
5. **Ponha a conta da pessoa como testadora:** Funções do app > Funções > Testadores do Instagram, convidar o @ exato. Depois, **no app do Instagram**: Configurações e atividade > Apps e sites > Convites de testador > aceitar. Sem aceitar, o login dá "Insufficient Developer Role".
6. **Gere os segredos da instalação** (você roda e já grava no `.env` ou entrega pra pessoa pôr no Railway):
    - `NEXTAUTH_SECRET` e `CRON_SECRET`: `openssl rand -base64 32` (um pra cada).
    - `ENCRYPTION_KEY`: `openssl rand -hex 32` (64 caracteres).
    - `WEBHOOK_VERIFY_TOKEN`: `openssl rand -hex 16`.
    - `META_GRAPH_API_VERSION=v25.0`.

## Etapa 2, caminho A: local e grátis

Tudo roda no computador, e um túnel do ngrok com endereço fixo deixa a Meta alcançá-lo.

1. **Banco, Redis e caixa de e-mail local:**
    - Mac sem Docker: `brew install postgresql@16 redis mailpit`, `brew services start postgresql@16 redis mailpit` e `createdb openreply`.
    - Windows, Linux ou Mac com Docker: `docker-compose up -d` dentro de `openreply/` (Postgres e Redis) e `docker run -d --name mailpit -p 8025:8025 -p 1025:1025 axllent/mailpit`.
2. **Túnel com endereço fixo** (com a pessoa): conta grátis no [ngrok](https://ngrok.com), instalar, `ngrok config add-authtoken SEU_TOKEN` e pegar o domínio grátis no painel (Domains), algo como `seu-nome.ngrok-free.app`. Usar sempre esse; túnel de endereço que muda obriga a atualizar a Meta a cada reinício.
3. **Monte o `.env`:** `cp .env.example .env` e preencha:
    - `NEXTAUTH_URL=https://seu-nome.ngrok-free.app`
    - `DATABASE_URL=postgresql://USUARIO_DO_MAC@localhost:5432/openreply` (brew) ou `postgresql://postgres:postgres@localhost:5432/openreply` (Docker)
    - `REDIS_URL=redis://localhost:6379`
    - `EMAIL_SERVER=smtp://localhost:1025` e `EMAIL_FROM=login@localhost` (o link de login cai no Mailpit, sem Resend)
    - `ALLOWED_EMAILS=email-da-pessoa` (só ela entra)
    - As chaves da Meta e os segredos da Etapa 1.
4. **Crie as tabelas:** `npm run db:migrate`.
5. **Ligue as três peças em segundo plano:**
    - Painel: `npm run build && npm start`. **Não** usar `npm run dev`: aberto pelo túnel, o painel trava no esqueleto.
    - Worker: `npx tsx --env-file=.env worker/dm-worker.ts`. O `npm run worker` não lê o `.env` sozinho.
    - Túnel: `ngrok http --url=seu-nome.ngrok-free.app 3000` (se for barrado, a pessoa roda com `!`).
6. **Entrar no painel:** a pessoa abre o endereço do ngrok, digita o e-mail e pega o link mágico em `http://localhost:8025`.
7. **Saúde:** `curl -s http://localhost:3000/api/health` tem de mostrar `worker.healthy: true`.
8. **Rotina diária (renovar token).** O token do Instagram vence em 60 dias e, fora da Vercel, nada renova sozinho. A rota só renova quando faltam 10 dias, então rode todo dia. Mac/Linux: adicione ao crontab, com o `CRON_SECRET` e o endereço reais:

```
0 9 * * * curl -s -H "Authorization: Bearer SEU_CRON_SECRET" https://seu-nome.ngrok-free.app/api/cron/refresh-tokens; curl -s -H "Authorization: Bearer SEU_CRON_SECRET" https://seu-nome.ngrok-free.app/api/cron/attach-next-reel
```

   No Windows, crie a mesma tarefa com `schtasks`. A segunda chamada prende as automações do tipo "próximo Reel" ao Reel que acabou de sair.

9. **Ensine a pessoa a ligar e desligar.** Desligar: parar painel, worker e túnel, e `brew services stop postgresql@16 redis mailpit` (ou `docker-compose down`). Religar: os comandos do passo 1 e do passo 5. Deixe um `LIGAR.md` na pasta com os comandos certos pro computador dela.

**Nunca deixar local e nuvem ligados juntos na mesma conta:** os dois respondem o mesmo comentário.

## Etapa 2, caminho B: nuvem paga (Railway)

Tudo fica num projeto do Railway e responde 24 horas. Estimativa: US$ 8 a 15/mês. Confirme o custo com a pessoa antes do passo 1.

1. **Conta no [Railway](https://railway.com)** no plano Hobby (US$ 5/mês). Definir o limite de gasto em Workspace > Usage.
2. **Projeto e bancos:** New Project, depois New > Database > PostgreSQL e New > Database > Redis. (Alternativa mais barata pro Postgres: projeto grátis no [Supabase](https://supabase.com), colando a string de conexão no lugar.)
3. **Serviço do painel (web):** New > GitHub Repo > o fork. Em Settings: Build `npm run build`, Start `npm start`, Pre-deploy `npm run db:migrate`. Em Networking > Generate Domain: o endereço `https://algo.up.railway.app` é o endereço público.
4. **Serviço do worker:** New > GitHub Repo > o mesmo fork. Build `npm run db:generate`, Start `npm run worker`. Sem domínio.
5. **Variáveis, iguais nos dois serviços:**
    - `DATABASE_URL=${{Postgres.DATABASE_URL}}` e `REDIS_URL=${{Redis.REDIS_URL}}` (referências internas do Railway).
    - `NEXTAUTH_URL` = o endereço público do passo 3, nos dois.
    - `ENCRYPTION_KEY` idêntica nos dois. Diferente, todo envio falha.
    - `ALLOWED_EMAILS`, as chaves da Meta e os segredos da Etapa 1.
6. **E-mail do login, uma opção:**
    - Resend grátis sem domínio: `RESEND_API_KEY` e `EMAIL_FROM=onboarding@resend.dev`. Nesse modo o Resend só envia pro e-mail da própria conta Resend, o que basta (só a pessoa entra). O e-mail da conta Resend tem de ser o mesmo do `ALLOWED_EMAILS`.
    - Resend com domínio verificado: `EMAIL_FROM=Login <login@dominio.com.br>`.
    - Gmail: verificação em duas etapas, senha de app e `EMAIL_SERVER=smtps://email%40gmail.com:SENHA_DE_APP@smtp.gmail.com:465`.
7. **Rotina diária:** New > GitHub Repo > o mesmo fork, com as mesmas variáveis. Em Settings: Cron Schedule `0 8 * * *` (5h de Brasília), Build `npm run db:generate` e Start:

```
node -e "const h={headers:{Authorization:'Bearer '+process.env.CRON_SECRET}};Promise.all(['refresh-tokens','attach-next-reel','snapshot-followers'].map(p=>fetch(process.env.NEXTAUTH_URL+'/api/cron/'+p,h).then(r=>console.log(p,r.status)))).then(()=>process.exit(0))"
```

   Sem isso, o token vence em 60 dias e a automação para sem avisar. Depois do primeiro deploy, rode o serviço uma vez à mão e confira nos logs que as três rotas devolveram 200.

8. **Confira:** `curl -s SEU_ENDERECO/api/health` com `worker.healthy: true`, e a pessoa entra no painel com o e-mail dela.
9. **Domínio próprio (opcional):** Networking > Custom Domain no serviço web e um CNAME onde está o DNS do domínio (Registro.br, Cloudflare...). Depois trocar o `NEXTAUTH_URL` nos serviços e os endereços na Meta (Etapa 3).

## Etapa 3 (os dois caminhos): ligar a Meta, conectar e testar

`SEU_ENDERECO` = o endereço do ngrok (A) ou do Railway (B), sem barra no fim. Tudo aqui é no painel, com a pessoa.

1. **Redirect do login:** produto Instagram > Configurar login da empresa no Instagram > configurações > URIs de redirecionamento do OAuth: `SEU_ENDERECO/api/instagram/callback`.
2. **Publicar o app** (menu Publicar). A Meta pede três endereços, que o OpenReply já serve: `SEU_ENDERECO/privacy`, `SEU_ENDERECO/data-deletion` e `SEU_ENDERECO/terms`. No caminho A, painel e túnel ligados na hora. Sem publicar, a Meta não manda comentário de verdade e nada acontece.
3. **Webhook:** produto Instagram > Configurar webhooks: URL `SEU_ENDERECO/api/webhook` e o `WEBHOOK_VERIFY_TOKEN`. Verificar e salvar, e assinar `comments` **e** `messages`. Se o botão estiver cinza, colar o token de novo.
4. **Se a pessoa já usou outra ferramenta de DM:** Meta Business Suite > Configurações > Integrações > Roteamento de conversas > Apps parceiros. Remover a ferramenta antiga (de dentro dela, ex.: ManyChat > Instagram > Desconectar) e, no app novo, ligar "Acessar todas as conversas" e "Assumir o controle".
5. **Conectar a conta pelo painel do OpenReply:** Settings > Connect Instagram, entrando com a conta testadora. Não usar o "Gerar tokens" da Meta.
6. **Automação de teste:** um post da pessoa, palavra `TESTE`, texto da DM, botão com o link, resposta pública. Se for pedir pra seguir, trocar os textos do pedido e do botão pra português.
7. **Teste:** da segunda conta, comentar `TESTE` no post (ela não precisa ser testadora). Em segundos devem chegar a resposta pública e a DM; tocar no botão pra ver o link abrir.
8. **Não chegou?** `/api/health` e a página DM Logs. No banco: `WebhookEvent` (a Meta avisou?), `DmLog` (o envio e o erro), `OperationalEvent` (a varredura). Mesmo sem webhook, a varredura de 5 em 5 minutos acaba pegando o comentário. Use a tabela de Pegadinhas.

## Etapa 4: automações de verdade

Com o teste passando, apague a automação de teste e crie as reais com a palavra, o texto e o link da pergunta 7. Dá pra prender a palavra a um post específico, a qualquer post (global) ou ao próximo Reel que a pessoa publicar. Revise todos os textos em português, inclusive as respostas públicas. Atualize o `PROGRESSO.md` com "concluído".

## Pegadinhas

| Sintoma | Causa | Como resolver |
| --- | --- | --- |
| Login do Instagram dá "Insufficient Developer Role" | Convite de testador não aceito | No Instagram: Configurações e atividade > Apps e sites > Convites de testador > aceitar |
| Configurei tudo e nada acontece | App não publicado | Publicar (Etapa 3, passo 2) |
| Primeira DM chega, mas o botão não responde ("not the thread owner") | Ferramenta antiga ainda é dona das conversas | Roteamento de conversas (Etapa 3, passo 4) |
| Conectar dá erro de redirect_uri | Endereço do redirect diferente | `SEU_ENDERECO/api/instagram/callback`, sem barra no fim, igual ao `NEXTAUTH_URL` |
| Login falha com erro de cliente | Caso de uso errado (Login do Facebook) | Usar "Gerenciar mensagens e conteúdo no Instagram" e o ID do app do Instagram |
| Segunda conta conecta, mas tudo dá "Unsupported request" | Ela não é testadora | Convidar e aceitar, como na Etapa 1; publicar não libera outras contas |
| Painel fica só no esqueleto pelo túnel | `npm run dev` bloqueia scripts por túnel | `npm run build && npm start` |
| Worker não acha banco ou chaves | `npm run worker` não lê o `.env` | `npx tsx --env-file=.env worker/dm-worker.ts` |
| Webhook recebe, mas nenhuma DM sai | Worker parado ou `ENCRYPTION_KEY` diferente | `/api/health` e a mesma chave no painel e no worker |
| Tudo parou depois de uns dois meses | Token venceu | Rotina diária (A: passo 8; B: passo 7) e reconectar a conta |
| Resposta por DM (sem comentário) não dispara | Webhook sem `messages` | Assinar `messages` |
| Comentário respondido duas vezes | Local e nuvem ligados juntos | Deixar só um |
| DM com textos em inglês | Padrões do OpenReply | Trocar os textos de cada automação |

Limites que valem pra qualquer ferramenta: as regras de mensagem do Instagram (resposta privada a comentário, janela de 24 horas na DM) e os limites de envio por hora. Nenhuma configuração contorna isso.

## Fontes

- [OpenReply no GitHub](https://github.com/diwenne/openreply) e o `docs/setup.md` do repositório
- [Railway: planos e preços](https://docs.railway.com/pricing/plans)
- [Supabase: preços](https://supabase.com/pricing)
- [Resend: preços](https://resend.com/pricing)
- [ngrok: limites do plano grátis](https://ngrok.com/docs/pricing-limits/free-plan-limits)
- [Registro.br](https://registro.br)
