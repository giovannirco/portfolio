// Every string on the site, in both languages. The build fails if a key is missing in one of them.

export const site = {
  origin: "https://giovanni.dev.br",
  email: "giovannirco@gmail.com",
  resume: "https://resume.giovanni.dev.br",
  github: "https://github.com/giovannirco",
  linkedin: "https://www.linkedin.com/in/giovanni-coutinho",
  orrery: "https://orrery.giovanni.dev.br",
  checked: "2026-10-23",
};

const clusters = {
  en: ["Personal services", "Business production", "Business development", "Client services", "Observability", "Insurance services"],
  "pt-br": ["Serviços pessoais", "Produção da empresa", "Desenvolvimento da empresa", "Serviços de clientes", "Observabilidade", "Seguros"],
};

export const pages = {
  en: {
    lang: "en",
    path: "/",
    title: "Giovanni Coutinho · Staff Platform Engineer",
    description: "Staff Platform Engineer. Kubernetes platforms, GitOps, observability and network policy, at work and on six Talos clusters at home.",
    skip: "Skip to content",
    switchLabel: "Language",
    nav: "Screens",
    next: "Next: what I've done",
    clusters: clusters.en,
    clustersLabel: "One light per cluster in my homelab",
    hero: {
      name: "Giovanni Coutinho",
      role: "Staff Platform Engineer",
      lede: "I design and run Kubernetes platforms: GitOps, observability, network policy and the tooling people use on top of them. Eight years of production Kubernetes, almost seven of them on the platform team at Exodus, a non-custodial crypto wallet and exchange.",
      links: { resume: "Resume", github: "GitHub", linkedin: "LinkedIn", email: "Email" },
    },
    screens: { top: "Who I am", work: "What I've done", homelab: "What I run", projects: "Projects", contact: "How I work" },
    work: {
      heading: "What I've done",
      intro: "At Exodus, from 2019 to 2026, on multi-cluster AWS EKS.",
      rows: [
        ["GitOps", "Launched and drove the move of 30+ services from GitLab to Argo CD, with templates so service owners ship without a DevOps engineer."],
        ["Observability", "Took observability from commercial tools to self-hosted Mimir, Loki and Tempo, led a cut of about 70% in metric cardinality, then the move to Grafana Cloud."],
        ["Network policy", "Brought in Cilium and 50+ network policies as code. In a production incident they contained an SSRF callback."],
        ["Databases", "Took six PostgreSQL services through Aurora Blue/Green upgrades and turned the path into a skill the team runs."],
        ["AI tooling", "Wrote two production MCP servers, Observe and Checkly, used by 15+ engineers across teams."],
      ],
    },
    homelab: {
      heading: "What I run",
      lede: "At home I run the platform I would want at work, on a smaller budget.",
      spec: [["6", "Talos clusters"], ["11", "Kubernetes nodes"], ["3", "Proxmox hosts"], ["2 × 3090", "GPU node"], ["130", "alert rules"], ["~500", "network policies"]],
      asof: "Counted on the clusters on 23 Oct 2026",
      body: "Omni manages Talos, Flux lays down the platform and Argo CD the apps. Every namespace is default deny. Metrics, logs and traces go to a self-hosted Grafana stack, alerts arrive on WhatsApp, and every change leaves a written run record.",
      orrery: "See it running in the orrery",
      handbook: "How it was built",
    },
    projects: {
      heading: "Projects",
      source: "Source",
      visit: "Visit",
      rows: [
        { name: "job-scout", text: "Watches job boards, filters listings and drafts applications. TypeScript, a 40-tool MCP server, deployed through Argo CD.", repo: "https://github.com/giovannirco/job-scout" },
        { name: "Platen", text: "A home printer and scanner for browsers, scripts and AI agents, with PDF printing on printers that refuse PDFs. One Go binary.", repo: "https://github.com/giovannirco/platen" },
        { name: "The orrery", text: "A Three.js map of my projects with live readings from the homelab, without exposing a single address.", repo: "https://github.com/giovannirco/giovanni-dev-br-public", url: "https://orrery.giovanni.dev.br" },
        { name: "cpa-prometheus-plugin", text: "Prometheus metrics for usage and provider quota on an OpenAI-compatible proxy, in Go.", repo: "https://github.com/giovannirco/cpa-prometheus-plugin" },
      ],
    },
    contact: {
      heading: "How I work",
      principles: [
        ["Check before changing.", "Live state against what we believe: Hubble flows against the policy, the bill against deduplication."],
        ["Write it down.", "Runbooks, postmortems and run records, and now agent skills that other teams use."],
        ["Recommend with evidence.", "I ran Istio and Linkerd in a test lab and recommended against a mesh. The company stopped there."],
      ],
      reach: "Get in touch",
      labels: { email: "Email", linkedin: "LinkedIn", github: "GitHub", resume: "Resume" },
      where: "Belo Horizonte, Brazil (UTC−3). Remote.",
      foot: "Served from my homelab.",
    },
    notFound: { title: "Page not found", text: "There's nothing at this address.", home: "Go to the start" },
  },

  "pt-br": {
    lang: "pt-BR",
    path: "/pt-br/",
    title: "Giovanni Coutinho · Staff Platform Engineer",
    description: "Staff Platform Engineer. Plataformas Kubernetes, GitOps, observabilidade e network policy, no trabalho e em seis clusters Talos em casa.",
    skip: "Pular para o conteúdo",
    switchLabel: "Idioma",
    nav: "Telas",
    next: "Próxima: o que eu fiz",
    clusters: clusters["pt-br"],
    clustersLabel: "Uma luz para cada cluster do meu homelab",
    hero: {
      name: "Giovanni Coutinho",
      role: "Staff Platform Engineer",
      lede: "Projeto e opero plataformas Kubernetes: GitOps, observabilidade, network policy e as ferramentas que as pessoas usam em cima delas. Oito anos de Kubernetes em produção, quase sete deles no time de plataforma da Exodus, uma carteira e exchange cripto não custodial.",
      links: { resume: "Currículo", github: "GitHub", linkedin: "LinkedIn", email: "E-mail" },
    },
    screens: { top: "Quem sou", work: "O que eu fiz", homelab: "O que eu opero", projects: "Projetos", contact: "Como trabalho" },
    work: {
      heading: "O que eu fiz",
      intro: "Na Exodus, de 2019 a 2026, em AWS EKS com vários clusters.",
      rows: [
        ["GitOps", "Iniciei e conduzi a migração de mais de 30 serviços do GitLab para o Argo CD, com templates para o dono do serviço publicar sem depender de um DevOps."],
        ["Observabilidade", "Levei a observabilidade de ferramentas comerciais para Mimir, Loki e Tempo próprios, liderei um corte de cerca de 70% na cardinalidade e depois a ida para o Grafana Cloud."],
        ["Network policy", "Trouxe o Cilium e mais de 50 network policies como código. Num incidente em produção elas contiveram um callback de SSRF."],
        ["Bancos de dados", "Levei seis serviços PostgreSQL por upgrades Blue/Green no Aurora e transformei o caminho numa skill que o time roda."],
        ["Ferramentas de IA", "Escrevi dois servidores MCP em produção, Observe e Checkly, usados por mais de 15 engenheiros de vários times."],
      ],
    },
    homelab: {
      heading: "O que eu opero",
      lede: "Em casa eu mantenho a plataforma que eu gostaria de ter no trabalho, com orçamento menor.",
      spec: [["6", "clusters Talos"], ["11", "nós Kubernetes"], ["3", "hosts Proxmox"], ["2 × 3090", "nó com GPU"], ["130", "regras de alerta"], ["~500", "network policies"]],
      asof: "Contado nos clusters em 23 out. 2026",
      body: "O Omni gerencia o Talos, o Flux instala a plataforma e o Argo CD os apps. Todo namespace nega tudo por padrão. Métricas, logs e traces vão para um stack Grafana próprio, os alertas chegam no WhatsApp e cada mudança deixa um registro escrito.",
      orrery: "Veja funcionando no orrery",
      handbook: "Como foi construído",
    },
    projects: {
      heading: "Projetos",
      source: "Código",
      visit: "Abrir",
      rows: [
        { name: "job-scout", text: "Acompanha vagas, filtra anúncios e rascunha candidaturas. TypeScript, um servidor MCP de 40 ferramentas, publicado pelo Argo CD.", repo: "https://github.com/giovannirco/job-scout" },
        { name: "Platen", text: "Impressora e scanner de casa para navegador, scripts e agentes de IA, imprimindo PDF onde a impressora não aceita. Um binário Go.", repo: "https://github.com/giovannirco/platen" },
        { name: "O orrery", text: "Um mapa em Three.js dos meus projetos com leituras ao vivo do homelab, sem expor nenhum endereço.", repo: "https://github.com/giovannirco/giovanni-dev-br-public", url: "https://orrery.giovanni.dev.br" },
        { name: "cpa-prometheus-plugin", text: "Métricas Prometheus de uso e cota por provedor num proxy compatível com OpenAI, em Go.", repo: "https://github.com/giovannirco/cpa-prometheus-plugin" },
      ],
    },
    contact: {
      heading: "Como trabalho",
      principles: [
        ["Confiro antes de mudar.", "O estado real contra o que achamos: fluxos do Hubble contra a policy, a fatura contra a deduplicação."],
        ["Deixo por escrito.", "Runbooks, postmortems e registros de execução, e agora skills de agente que outros times usam."],
        ["Recomendo com evidência.", "Rodei Istio e Linkerd num laboratório e recomendei não adotar mesh. A empresa parou ali."],
      ],
      reach: "Fale comigo",
      labels: { email: "E-mail", linkedin: "LinkedIn", github: "GitHub", resume: "Currículo" },
      where: "Belo Horizonte, Brasil (UTC−3). Remoto.",
      foot: "Servido a partir do meu homelab.",
    },
    notFound: { title: "Página não encontrada", text: "Não há nada neste endereço.", home: "Voltar ao início" },
  },
};
