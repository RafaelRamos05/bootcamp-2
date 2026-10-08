

## Identificação

| Campo | Informação |
|---|---|
| Título | Artefato 1 — Gestão do Negócio/Domínio e Gestão do Projeto |
| Projeto | Rede Solidária: Gerenciamento de ONGs pequenas e médias do DF |
| Disciplina | Projeto Integrador |
| Turma | A |
| Instituição | CEUB |
| Organização no GitHub | CampusCEUB |
| Repositório | RedeSolidaria |
| Professora responsável | Adriana Falcomer |
| ID do Projeto | [Informar o ID conforme o Portfólio de Projetos de TI do CEUB] |

**Equipe**

| Integrante | E-mail |
|---|---|
| Bruna Bonifácio Soares Santos | bruna.bonifacio@sempreceub.com |
| Renata Teixeira de Jesus | renata.teixeira@sempreceub.com |
| Rafael Ramos | rafael.rcarvalho@sempreceub.com |
| Ana Clara de Almeida Coelho | anaclara0811@sempreceub.com |
| Arthur Amaral dos Santos | arthur.amaral@sempreceub.com |

**Contexto do projeto**

- **Problema:** pequenas e médias ONGs do Distrito Federal enfrentam dificuldades na gestão de doações físicas (alimentos, higiene, vestuário e insumos hospitalares). A dependência da divulgação informal em redes sociais gera alta volatilidade na captação, causando desequilíbrio de estoque (superávit de alguns itens, com risco de vencimento, e escassez crítica de outros). A ausência de uma ferramenta centralizada e transparente também gera insegurança no doador, que desiste de ajudar por não saber o que é mais urgente nem qual será o impacto de sua doação.
- **Solução proposta:** plataforma digital (Web/Mobile) que centraliza os pedidos das ONGs em tempo real, usa um "Termômetro de Urgência" para ranquear prioridades e oferece rastreabilidade via check-in (QR Code/ID) para prestar contas ao doador.
- **Público atendido:** pequenas e médias ONGs do DF, doadores locais e gestores de projetos sociais.
- **Valor esperado:** eliminação do desperdício de insumos, direcionamento assertivo das doações para urgências reais, facilitação logística por geolocalização e geração de dados estratégicos (BI) sobre vulnerabilidade social na região.

## Sprint relacionada

Esta entrega consolida o planejamento e o acompanhamento das **Sprints 1 a 3**, que compõem o MVP, conforme o Artefato 1 (data-base 17/09/2026):

| Sprint | Tema | Período | Situação no Artefato 1 |
|---|---|---|---|
| Sprint 1 | Fundamentos | Semanas 3 e 4 | Concluída |
| Sprint 2 | Núcleo do negócio | Semanas 5 e 6 | Em andamento |
| Sprint 3 | Rastreabilidade | Semanas 7 e 8 | Planejada |

O projeto é organizado em sprints de duas semanas, cada uma com planejamento, execução, revisão (Sprint Review) e retrospectiva.

**Marcos do `requisitos.md`** (correspondência aproximada com as sprints):

| Milestone | Foco | Sprint correspondente |
|---|---|---|
| Milestone 1 — Autenticação e Perfis | Cadastro e autenticação de doadores e ONGs com perfis diferenciados | Sprint 1 — Fundamentos |
| Milestone 2 — Gestão Visual e Geolocalização | Mapa interativo, geocodificação de endereços e semáforo de urgência | Sprint 2 — Núcleo do negócio (semáforo); mapa e geocodificação a definir |
| Milestone 3 — Vouchers e Scanner | Vouchers com QR Code dinâmico e escaneamento por câmera, com baixa automática | Sprint 3 — Rastreabilidade |

**Numeração dos requisitos:** os códigos de RF e RNF deste documento são os do `requisitos.md`, que é a referência válida. O Artefato 1 e o Artefato 2 entregues usam outra numeração; a tabela de correspondência está no Artefato 2.



## Escopo

**Composição da entrega**

1. **Revisão e atualização do roadmap do produto**, dividido em um MVP e duas releases subsequentes, priorizadas pelos objetivos originais do projeto.
2. **Planejamento, execução, revisão e retrospectiva de cada sprint** (Sprints 1, 2 e 3).
3. **Backlog rastreável no GitHub**: 37 issues no repositório (33 abertas e 4 fechadas), organizadas em 2 épicos e 17 features no GitHub Project.

**Ajustes de escopo após o refinamento**

| Item | Versão inicial da proposta | Ajuste após refinamento |
|---|---|---|
| Notificação de item crítico | Fora do escopo do MVP | Adicionada ao MVP, por ser simples de implementar e ter alto impacto na motivação 1. O `requisitos.md` não tem RF próprio para notificação; a sinalização visual é o semáforo (RF04) |
| Geolocalização avançada (raio de busca, rotas) | Junto com a busca básica | Separada para a Release 3 (rotas: RF08; raio de busca: RF09); o MVP usa apenas ordenação por distância |
| Relatórios de BI | Prevista para o MVP | Movida para a Release 2, pois depende de volume mínimo de dados de uso real |
| Autenticação | Login simples por e-mail e senha | Mantido no MVP; login social fica como possível item de backlog futuro |

**Roadmap por release**

| Release | Funcionalidades | Objetivo atendido | Previsão |
|---|---|---|---|
| MVP (Sprints 1–3) | Cadastro de doador e instituição; autenticação; registro e acompanhamento de demandas; termômetro de urgência; registro de doações; geração de QR code; check-in de entrega; histórico básico | Objetivos 1, 2 e 3 | Semana 8 |
| Release 2 | Relatórios de BI (itens mais demandados por período e região); notificação automática de item crítico | Objetivos 2 e 5 | Semana 12 |
| Release 3 | Geolocalização avançada (raio de busca, RF09; estimativa de rota e roteirização, RF08); expansão para novas regiões do DF | Objetivo 4 | Semana 16 |

**Backlog planejado por sprint (Artefato 1)**

*Sprint 1 — Fundamentos*

| Item | Descrição | Requisito (`requisitos.md`) | Estimativa |
|---|---|---|---|
| US01 | Como doador, quero criar uma conta com meus dados de contato | RF02 | 3 pontos |
| US02 | Como instituição, quero me cadastrar na plataforma | RF02 | 3 pontos |
| US03 | Como usuário, quero fazer login de forma segura | RF02, RNF02 | 5 pontos |
| US04 | Como equipe, quero o modelo de dados (MER) validado e aplicado ao banco | — | 5 pontos |

*Sprint 2 — Núcleo do negócio*

| Item | Descrição | Requisito (`requisitos.md`) | Estimativa |
|---|---|---|---|
| US05 | Como instituição, quero registrar e atualizar a quantidade necessária de cada item | RF03 | 5 pontos |
| US06 | Como doador, quero ver o status de urgência de cada item por instituição | RF04 | 5 pontos |
| US07 | Como doador, quero buscar instituições ordenadas por proximidade | RF06 (parcial) | 5 pontos |
| US08 | Como doador, quero registrar uma doação escolhendo itens e quantidades | Sem RF equivalente | 8 pontos |

*Sprint 3 — Rastreabilidade*

| Item | Descrição | Requisito (`requisitos.md`) | Estimativa |
|---|---|---|---|
| US09 | Como sistema, quero gerar um código de rastreio único para cada doação | RF07 | 3 pontos |
| US10 | Como instituição, quero validar o código de rastreio na entrega | RF07 | 5 pontos |
| US11 | Como sistema, quero atualizar a quantidade recebida após o check-in | RF07, RNF04 | 5 pontos |
| US12 | Como doador e instituição, quero consultar o histórico de doações | Sem RF equivalente | 5 pontos |
| US13 | Como instituição, quero ser notificada quando um item ficar crítico | Sem RF equivalente | 3 pontos |

Os códigos seguem o `requisitos.md`. "Sem RF equivalente" indica funções do Artefato 1 entregue que não têm requisito funcional no `requisitos.md`.

**Requisitos e issues (numeração válida: `requisitos.md`)**

| ID | Requisito | Issues |
|---|---|---|
| RF01 | Portal Unificado de Entrada (seleção de perfil) | #8 |
| RF02 | Cadastro e Autenticação de Usuários | #25, #26, #15, #27, #11 |
| RF03 | Gerenciamento de Demandas da ONG | #23, #24 |
| RF04 | Semáforo de Necessidades: 🔴 Crítico (menos de 30%), 🟡 Estável (30% a 90%) e 🟢 Suprido (mais de 90%) | #4 |
| RF05 | Dashboard Administrativo da ONG | #5 |
| RF06 | Mapa e Geocodificação | #20, #22, #17 |
| RF07 | Emissão e Validação de Vouchers (QR Code) | #3, #2, #12 |
| RF08 | Filtros e Roteirização por GPS | #7, #9 |
| RF09 | Trava por Raio Geográfico (10 km) | #10 |
| RNF01 | Interface Responsiva (Mobile First) | #18 |
| RNF02 | Segurança e LGPD | #16, #19 |
| RNF03 | Desempenho e Latência (mapa em menos de 2 s) | #17 |
| RNF04 | Persistência de Dados | #28, #29, #30 |

**Backlog no GitHub (33 issues abertas)**

O status é o do GitHub Project; "—" indica item que não aparece na captura do Project (grupos Task, PBI ou documentação).

| Bloco | Issue | Título | Tipo | Status |
|---|---|---|---|---|
| Cadastro e autenticação | #25 | Cadastro de Instituições (ONGs) | Epic | New |
| | #26 | Cadastro do Doador | Epic | New |
| | #27 | [BACK] Validação dos Dados Informados no Cadastro | PBI | — |
| | #28 | [BACK] Armazenamento dos Dados das ONGs no Banco | PBI | — |
| | #29 | [BACK] Salvamento dos Dados da ONG no Sistema | PBI | — |
| | #15 | [FRONT/BACK] Implementação do Formulário de Autenticação | Feature | In progress |
| | #21 | [FRONT] Formulário de Complemento de Perfil | Feature | New |
| | #8 | [FRONT/BACK] Portal Unificado de Entrada (Decisão de Perfil) | Feature | New |
| | #11 | [BACK] Autenticação Social Real (Google OAuth/Redes Sociais) | PBI | — |
| Demandas, estoque e urgência | #23 | [FRONT/BACK] Cadastro de Itens Necessários para Recebimento de Doações | Feature | New |
| | #24 | [FRONT] Tela de Demandas da ONG | Feature | New |
| | #30 | [BACK] Sincronização de Estoque via LocalStorage | Task | — |
| | #4 | [FRONT] Semáforo de Necessidades (Tabela Colorida) | Task | — |
| | #7 | [FRONT] Filtros de Categoria em Modal (Pílulas) | Feature | New |
| | #5 | [FRONT/BACK] Painel Administrativo da ONG (Dashboard) | Feature | New |
| | #31 | [FRONT/BACK] Painel Administrativo da ONG (Dashboard) | Feature | New |
| Rastreabilidade (QR Code) | #3 | [FRONT/BACK] Emissão de Vouchers com QR Code Dinâmico | Feature | New |
| | #2 | [FRONT] Simulador de Scanner de QR Code (Câmera Ativa) | Feature | New |
| | #12 | [BACK] Integração Real do Scanner com o Banco de Dados Externo | Feature | In progress |
| Geolocalização e mapa | #20 | [FRONT] Visualização de Instituições no Mapa | Feature | New |
| | #17 | [BACK] API de Consulta de Localizações | PBI | — |
| | #22 | [BACK] Integração API Geocoding | PBI | — |
| | #9 | [FRONT] Roteirização Direta por GPS (Integração Google Maps/Waze) | Feature | To Do |
| | #10 | [BACK] Bloqueio Inteligente de Recebimento por Raio (10km) | Feature | To Do |
| Engajamento e transparência | #1 | [FRONT] Interações Rápidas na ONG (Pix/Voluntariado) | Feature | New |
| | #6 | [FRONT] Banner de Estatísticas de Impacto na Home | Feature | New |
| Qualidade, segurança e RNF | #13 | [TEST] Validação de Fluxo com Dados Fictícios | PBI | — |
| | #14 | [TEST] Validação do Cadastro da ONG | Feature | New |
| | #16 | [BACK] Implementação de Criptografia (LGPD) | PBI | — |
| | #18 | [RNF] Interface Responsiva (Mobile First) | PBI | — |
| | #19 | [RNF] Proteção de Dados Sensíveis (LGPD) | PBI | — |
| Documentação | #34 | docs: modelagem de dados (DER e dicionário de dados) | documentation | — |
| | #36 | docs: corrige e atualiza arquitetura.md com stack definida | documentation | — |

**Correspondência entre histórias de usuário e issues** 

| História | Requisito (`requisitos.md`) | Issues relacionadas |
|---|---|---|
| US01 — Cadastro de doador | RF01, RF02 | #26, #21, #8 |
| US02 — Cadastro de instituição | RF02 | #25, #27, #28, #29, #14 |
| US03 — Login seguro | RF02, RNF02 | #15, #16, #19 |
| US04 — Modelo de dados (MER) | — | #34 |
| US05 — Demandas da instituição | RF03 | #23, #24, #30 |
| US06 — Status de urgência | RF04 | #4 |
| US07 — Busca por proximidade | RF06 (parcial) | #20, #17, #22 |
| US08 — Registro de doação | Sem RF equivalente | Sem issue correspondente identificada |
| US09 — Código de rastreio | RF07 | #3 |
| US10 — Validação na entrega | RF07 | #2, #12 |
| US11 — Atualização de estoque | RF07, RNF04 (parcial) | #30 (parcial) |
| US12 — Histórico de doações | Sem RF equivalente | Sem issue correspondente identificada |
| US13 — Notificação de item crítico | Sem RF equivalente | Sem issue correspondente identificada |

## Links principais



- **Repositório:** https://github.com/CAMPUSCEUB/RedeSolidaria
- **Requisitos:** `requisitos.md` (numeração válida de RF e RNF)
- **Issues:** https://github.com/CampusCEUB/RedeSolidaria/issues
  - Épicos: [#25](https://github.com/CampusCEUB/RedeSolidaria/issues/25) (Cadastro de ONGs) e [#26](https://github.com/CampusCEUB/RedeSolidaria/issues/26) (Cadastro do Doador)
  - Em andamento: [#12](https://github.com/CampusCEUB/RedeSolidaria/issues/12) e [#15](https://github.com/CampusCEUB/RedeSolidaria/issues/15)
  - Documentação: [#34](https://github.com/CampusCEUB/RedeSolidaria/issues/34) (DER e dicionário de dados) e [#36](https://github.com/CampusCEUB/RedeSolidaria/issues/36) (arquitetura.md)
- **Artefatos centrais:** Figura 1 — Roadmap do produto [roadmap.png](https://postimg.cc/F13nkfgf)

## Critérios atendidos



| Critério | Como foi demonstrado | Evidência |
|---|---|---|
| Revisão e atualização do roadmap do produto | Quadro de mudanças desde a proposta inicial, roadmap visualizado (Figura 1) e roadmap por release com objetivos e previsões | Artefato 1, seção 1 |
| Planejamento de sprint | Histórias de usuário com requisito e estimativa em pontos para as Sprints 1, 2 e 3 | Artefato 1, seção 2 |
| Execução de sprint | Registro do que foi feito na Sprint 1 e do progresso parcial da Sprint 2 | Artefato 1, seção 2; issues #12 e #15 em andamento |
| Revisão de sprint (Sprint Review) | Sprint 1: demonstração de cadastro e login por perfil, validada pelo Product Owner; Sprint 2: revisão prevista para o fim da semana 6 | Artefato 1, seção 2 |
| Retrospectiva de sprint | Quadros "o que funcionou / o que melhorar / ação" para as Sprints 1 e 2 (parcial) | Artefato 1, seção 2 |
| Gestão do backlog no GitHub | Épicos, features, PBIs e tasks cadastrados como issues, com tipos e status no Project | Issues #1 a #36; Project com 2 épicos e 17 features |
| Documentação técnica | Modelagem de dados (DER e dicionário) e atualização da arquitetura com a stack definida, cada uma com PR vinculado | Issues #34 e #36 |
| Requisitos não funcionais | Segurança e LGPD (RNF02: criptografia e proteção de dados sensíveis) e interface responsiva (RNF01: mobile first) registrados no backlog | Issues #16, #19 e #18 |
| Alinhamento com os requisitos | Histórias de usuário e issues referenciadas aos códigos RF01 a RF09 e RNF01 a RNF04 | `requisitos.md`; seção Escopo |

## Validação

| Verificação | Responsável | Resultado | Evidência |
|---|---|---|---|
| Cadastro de doador e instituição de ponta a ponta (RF02) | Equipe de desenvolvimento / Product Owner | Validado na Sprint Review da Sprint 1 | Artefato 1; endpoints testados manualmente; épicos #25 e #26 |
| Autenticação com token JWT por perfil (RF02: doador, gestor de instituição, administrador) | Equipe de desenvolvimento / Product Owner | Validado: retorna token válido por perfil | Artefato 1; issue #15 (autenticação) |
| Campos do cadastro | Product Owner (papel de ONG parceira fictícia) | Validados; sugerido tornar o telefone do doador opcional (aceito como ajuste na Sprint 2) | Registro da Sprint Review no Artefato 1 |
| Modelo entidade-relacionamento (MER) | Equipe e professor orientador | Validado após revisão da cardinalidade do relacionamento *contem* | Artefato 1; issue #34 (DER e dicionário de dados) |
| Cadastro de demandas (RF03) e semáforo de necessidades (RF04, regra RN02) | Equipe de desenvolvimento | Validado em ambiente de teste | Artefato 1 (Sprint 2); issues #23, #24 e #4 |
| Validação do cadastro da ONG e do fluxo com dados fictícios | Equipe de testes | Planejada; issues ainda abertas | Issues #14 e #13 |

## Limitações

- O MVP usa apenas **ordenação por distância**; raio de busca (RF09) e estimativa de rota (RF08) ficam para a Release 3. As issues #9 (roteirização por GPS) e #10 (bloqueio por raio de 10 km) estão em *To Do* e se alinham a esse escopo.
- **Relatórios de BI** não fazem parte do MVP, pois dependem de volume mínimo de dados de uso real.
- **Login social** (issue #11, listada no RF02 do `requisitos.md`) não está previsto no MVP; permanece como item de backlog futuro.
- A sincronização de estoque usa **LocalStorage** (issue #30), o que indica solução de protótipo; o scanner de QR Code tem uma versão simulada (issue #2) e a integração real está em andamento (issue #12).
- As **Sprints 2 e 3** ainda não foram concluídas; a Sprint Review da Sprint 2 estava prevista para o fim da semana 6.
- A Sprint 1 não contou com **testes automatizados**, apenas testes manuais dos endpoints.
- As releases 2 e 3 dependem da **validação do MVP com instituições parceiras**.
- O Product Owner representa o papel de uma **ONG parceira fictícia**, e não uma instituição real.

## Pendências conhecidas

- **Alinhar o GitHub Project ao Artefato 1:** o Artefato 1 registra a Sprint 1 como concluída, mas as issues de cadastro e autenticação ainda constam como abertas (#15 *In progress*; #21, #25 e #26 *New*). É preciso atualizar os status ou ajustar o texto do artefato.
- **Atribuir sprint, assignees e estimativas** às issues; essas colunas estão vazias no Project.
- **Vincular o milestone** às issues da entrega.
- **Numeração dos requisitos:** usar sempre os códigos do `requisitos.md`. O Artefato 1 e o Artefato 2 entregues usam outra numeração e não serão alterados (ver tabela de correspondência no Artefato 2).
- **Funções sem RF no `requisitos.md`:** registro de doação (US08), histórico de doações (US12) e notificação de item crítico (US13). Decidir se viram requisitos novos ou ficam fora do MVP.
- **Mapa e geocodificação (RF06):** o `requisitos.md` coloca o mapa interativo e a geocodificação no Milestone 2, mas o Artefato 1 e o protótipo deixam o mapa visual para a Release 3. Definir a release.
- **RF08 e RF09 (rotas e raio de 10 km):** definir a release; o Artefato 1 os coloca na Release 3 e as issues #9 e #10 estão em *To Do*.
- **Login social (#11):** o `requisitos.md` lista a issue no RF02, mas o Artefato 1 a trata como backlog futuro.
- **Possível duplicidade:** as issues #5 e #31 têm o mesmo título ("Painel Administrativo da ONG (Dashboard)"). Consolidar ou diferenciar (o `requisitos.md` vincula apenas a #5 ao RF05).
- **Itens do Artefato 1 sem issue correspondente:** registro de doação (US08), histórico de doações (US12) e notificação de item crítico (US13).
- **Issues sem RF ou RNF no `requisitos.md`:** #1 (Pix/voluntariado), #6 (banner de estatísticas), #13 e #14 (testes), #21 (complemento de perfil) e #31 (duplicada da #5). Vincular a um requisito ou registrar como fora do escopo; #1 e #6 também estão fora do roadmap do Artefato 1.
- **US06 / Semáforo (RF04, #4):** concluir a exibição do status de urgência no aplicativo mobile.
- **US07 e US08:** ainda não iniciadas (previstas para a segunda metade da Sprint 2). US08 depende de US06 e US07, o que cria gargalo no fim da sprint.
- **Ajuste de escopo:** tornar o telefone do doador opcional, conforme sugestão do Product Owner.
- **Testes automatizados:** criar testes básicos de API a partir da Sprint 2.
- **Sprint 3 (US09 a US13):** planejada, ainda não iniciada; as issues #3, #2 e #12 cobrem parte do escopo.
- **Pull requests:** concluir a revisão e o merge dos PRs das issues #34 e #36.
- Registro de execução, revisão e retrospectiva das Sprints 2 e 3, na próxima atualização do artefato.
- Preenchimento do **ID do Projeto** e da **turma**.

## Próximos passos

1. Atualizar o GitHub Project (status, sprint, assignees e estimativas) para refletir o Artefato 1.
2. Concluir a Sprint 2 (urgência, busca por proximidade e registro de doação) e realizar a Sprint Review.
3. Executar a Sprint 3 para fechar o MVP na semana 8: vouchers com QR Code e scanner (RF07: #3, #2 e #12), atualização de estoque, histórico de doações e notificação de item crítico.
4. Cobrir os requisitos não funcionais (RNF01 a RNF04: mobile first, segurança/LGPD, desempenho e persistência) e executar as issues de teste (#13 e #14).
5. Aplicar as ações das retrospectivas: margem de 20% nas estimativas de modelagem de dados e testes básicos de API desde a Sprint 2.
6. Validar o MVP com instituições parceiras.
7. Planejar a Release 2 (BI e notificações, semana 12) e a Release 3 (geolocalização avançada, roteirização e expansão regional, semana 16).
8. Atualizar este artefato com a execução, a revisão e a retrospectiva das Sprints 2 e 3.
