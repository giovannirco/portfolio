export const site = {
  "origin": "https://giovanni.dev.br",
  "email": "giovannirco@gmail.com",
  "resume": "https://resume.giovanni.dev.br",
  "github": "https://github.com/giovannirco",
  "linkedin": "https://www.linkedin.com/in/giovanni-coutinho",
  "orrery": "https://orrery.giovanni.dev.br",
  "checked": "2026-10-23"
};

export const pages = {
  "en": {
    "lang": "en",
    "path": "/",
    "title": "Giovanni Coutinho · Staff Platform Engineer",
    "description": "Staff Platform Engineer. Kubernetes platforms, GitOps, observability and network policy, at work and on six Talos clusters at home.",
    "skip": "Skip to content",
    "switchLabel": "Language",
    "nav": "Main navigation",
    "hero": {
      "name": "Giovanni Coutinho",
      "role": "Staff Platform Engineer",
      "lede": "I design and run Kubernetes platforms. I care about how code gets to production and how engineers find their way when something goes wrong.",
      "links": {
        "resume": "Resume",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "email": "Email"
      },
      "heading": "Platforms people can run."
    },
    "screens": {
      "top": "Intro",
      "work": "Decisions",
      "projects": "Public work",
      "products": "Products",
      "homelab": "Homelab"
    },
    "work": {
      "heading": "Decisions",
      "intro": "Selected engineering decisions"
    },
    "homelab": {
      "heading": "What I run",
      "lede": "At home I run the platform I would want at work, on a smaller budget.",
      "spec": [
        [
          "6",
          "Talos clusters"
        ],
        [
          "11",
          "Kubernetes nodes"
        ],
        [
          "3",
          "Proxmox hosts"
        ],
        [
          "2 × 3090",
          "GPU node"
        ],
        [
          "130",
          "alert rules"
        ],
        [
          "~500",
          "network policies"
        ]
      ],
      "asof": "Counted on the clusters on 23 Oct 2026",
      "body": "Omni manages Talos, Flux lays down the platform and Argo CD the apps. Every namespace is default deny. Metrics, logs and traces land in my own Grafana stack and alerts come to WhatsApp. When I change something, I write down what I did and why.",
      "orrery": "See it running in the orrery",
      "handbook": "How it was built"
    },
    "projects": {
      "heading": "Public work",
      "source": "Source",
      "visit": "Visit",
      "rows": [
        {
          "name": "Job Scout",
          "text": "A self-hosted job-search desk for listings, applications and research. MCP gives assistants access; drafts stay yours to review.",
          "repo": "https://github.com/giovannirco/job-scout",
          "url": ""
        },
        {
          "name": "Platen",
          "text": "Print and scan from a browser, scripts or an AI assistant. One Go binary handles the printer, PDFs and scan filing in Paperless-ngx.",
          "repo": "https://github.com/giovannirco/platen",
          "url": ""
        },
        {
          "name": "CPA Prometheus",
          "text": "Prometheus metrics for CLIProxyAPI traffic, token usage and provider quotas, with a Grafana dashboard.",
          "repo": "https://github.com/giovannirco/cpa-prometheus-plugin",
          "url": ""
        },
        {
          "name": "Interview skills",
          "text": "Local interview transcripts with timestamps and speaker checks, plus preparation and review workflows. Audio stays on your machine.",
          "repo": "https://github.com/giovannirco/interview-skills",
          "url": ""
        },
        {
          "name": "Orrery",
          "text": "A Three.js map of my projects with sanitized public homelab readings.",
          "repo": "https://github.com/giovannirco/giovanni-dev-br-public",
          "url": "https://orrery.giovanni.dev.br"
        },
        {
          "name": "Peephole",
          "text": "A Rust hub collects and renders data for an ESP32 desk display, keeping the firmware simple.",
          "repo": "https://github.com/giovannirco/peephole",
          "url": "https://peephole.bitops.com.br"
        }
      ],
      "upstream": "Upstream contributions",
      "contributions": [
        {
          "name": "ai-memory",
          "text": "Context after compaction",
          "url": "https://github.com/akitaonrails/ai-memory/pull/1230"
        },
        {
          "name": "ai-memory",
          "text": "Grok handoffs",
          "url": "https://github.com/akitaonrails/ai-memory/pull/840"
        },
        {
          "name": "CLIProxyAPI Management Center",
          "text": "Grok subscription quotas",
          "url": "https://github.com/router-for-me/Cli-Proxy-API-Management-Center/pull/451"
        },
        {
          "name": "CLIProxyAPI Plugins Store",
          "text": "CPA Prometheus registration",
          "url": "https://github.com/router-for-me/CLIProxyAPI-Plugins-Store/pull/130"
        }
      ]
    },
    "contact": {
      "heading": "How I work",
      "principles": [
        [
          "Check before changing.",
          "Live state against what we believe: Hubble flows against the policy, the bill against deduplication."
        ],
        [
          "Write it down.",
          "Runbooks, postmortems and run records, and now agent skills that other teams use."
        ],
        [
          "Recommend with evidence.",
          "I ran Istio and Linkerd in a test lab and recommended against a mesh. The company stopped there."
        ]
      ],
      "reach": "Get in touch",
      "labels": {
        "email": "Email",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "resume": "Resume"
      },
      "where": "Belo Horizonte, Brazil (UTC−3). Remote.",
      "foot": "Served from my homelab."
    },
    "notFound": {
      "title": "Page not found",
      "text": "There's nothing at this address.",
      "home": "Go to the start"
    },
    "cases": [
      {
        "id": "observability",
        "label": "Observability",
        "title": "Choosing what to operate.",
        "summary": "I compared the cost and upkeep of our telemetry stack, recommended a managed service, and led the migration.",
        "steps": [
          "Our stack",
          "Cost and upkeep",
          "Managed service"
        ],
        "sections": [
          [
            "The problem",
            "I had built a central metrics, logs and traces stack after years of operating commercial tools. Self-hosting gave us control, but compute and storage were only part of the cost. Someone also had to maintain it, handle upgrades and investigate failures."
          ],
          [
            "The decision",
            "I evaluated the managed option against infrastructure costs and the time the team would spend running the stack. The collection layer already made destinations easy to change. I ran the trial, worked with the vendor and recommended moving metrics and traces to Grafana Cloud. Logs remained in Observe."
          ],
          [
            "Making it useful",
            "The migration included access, team permissions and alerting. I worked with application teams on which metrics and traces they actually needed and helped them investigate their own telemetry. We removed unnecessary cardinality and retired the replaced infrastructure."
          ],
          [
            "What stayed with me",
            "I had wanted to build that self-hosted stack for years. Recommending its replacement meant letting the operating costs decide. Keeping collection separate from storage made that decision much easier to act on."
          ]
        ]
      },
      {
        "id": "delivery",
        "label": "Delivery",
        "title": "Making delivery self-service.",
        "summary": "I drove a GitOps migration and built templates so service owners could ship without a platform engineer on every release.",
        "steps": [
          "Service owners",
          "Git and templates",
          "Repeatable delivery"
        ],
        "sections": [
          [
            "The problem",
            "Delivery depended on pipelines and knowledge concentrated in the platform team. Moving to GitOps needed more than a new deployment tool: service owners needed a path they could understand and use themselves."
          ],
          [
            "The decision",
            "I helped establish Argo CD, launched a migration program and worked with owners across environments. I built kickstart templates for standard services and handled the applications that needed a different migration design. Platform components, including network policy, went through the same reviewable delivery path."
          ],
          [
            "Checking the result",
            "I compared the registered applications with what was actually running, investigated gaps and checked behavior around migrations. For network policy, that meant comparing traffic before and after a change rather than treating a successful sync as proof that everything worked."
          ],
          [
            "What changed",
            "Covered services could deploy without bringing a platform engineer into each release. Templates, runbooks and later agent skills carried the method to other engineers. The useful outcome was ownership of delivery, with a shared way to inspect and change it."
          ]
        ]
      },
      {
        "id": "network",
        "label": "Network policy",
        "title": "Making isolation hold up.",
        "summary": "I put network policy into the delivery workflow and checked it against real traffic. The policies later contained a malicious callback.",
        "steps": [
          "Intended access",
          "Policy as code",
          "Observed traffic"
        ],
        "sections": [
          [
            "The problem",
            "A policy file says what should be allowed. It does not prove what the running cluster enforces. I wanted changes to be reviewable and their effects visible across environments."
          ],
          [
            "The decision",
            "I drove Cilium adoption and built a policy repository with templates, validation and GitOps delivery. Coverage reporting made gaps visible. Before and after changes, I checked Hubble flows and investigated unexpected denials with the service owners."
          ],
          [
            "What changed",
            "The policies later contained an SSRF callback during a production incident. I checked the enforcement evidence, followed up with a broader policy audit and handed the application issue to its owning team."
          ],
          [
            "The operating lesson",
            "I treat intended configuration and observed behavior as separate things to verify. The same habit applies to deployments and monitoring: a green pipeline or a checked box is the start of the check."
          ]
        ]
      },
      {
        "id": "ai",
        "label": "AI tooling",
        "title": "Giving engineers investigation tools.",
        "summary": "I built MCP servers and reusable workflows that other teams used to investigate systems and carry out platform work.",
        "steps": [
          "Engineering questions",
          "Tools and context",
          "Reviewable work"
        ],
        "sections": [
          [
            "The problem",
            "Engineers were starting to use agents, but useful operational context was scattered across tools. A community logging integration already had users when its author removed it. That made the dependency risk immediate."
          ],
          [
            "The decision",
            "I built and maintained an internal Observe MCP server and a Checkly MCP server, with tests, releases and setup documentation. One concrete request became a log export tool: an engineer needed thousands of rows, while the interface limited each export."
          ],
          [
            "Getting people using it",
            "I onboarded engineers across teams and helped them use the tools in real investigations. I also turned repeated platform work into shared skills and runbooks, including database upgrades with review before changes. The documentation became a way to share how the platform team approached a problem."
          ],
          [
            "What I would change",
            "I would write the case for the work earlier. Adoption showed that the need was real, but a clear proposal would have made priorities and expectations easier to discuss before building."
          ]
        ]
      }
    ],
    "reel": {
      "label": "Engineering cases",
      "read": "Read the case",
      "back": "Back to the cases",
      "previous": "Previous case",
      "next": "Next case",
      "hint": "Swipe or use the arrows",
      "caseNav": "Choose a case",
      "intro": "Intro",
      "contact": "Contact",
      "notes": "Case notes",
      "related": "Related public work"
    },
    "products": {
      "heading": "Products I'm building",
      "rows": [
        {
          "name": "Plano Adentro",
          "text": "Architects and designers share projects their clients can walk through in a browser.",
          "url": "https://planoadentro.com.br"
        },
        {
          "name": "Subsíndico",
          "text": "Condominium documents, assemblies and maintenance, with answers grounded in the building's own rules.",
          "url": "https://subsindico.ia.br"
        },
        {
          "name": "Tessera",
          "text": "Share access to authenticator codes with permissions, time limits and an audit trail.",
          "url": "https://tessera.otservices.space"
        },
        {
          "name": "Navalha",
          "text": "Scheduling for barbershops and other appointment-based businesses, with WhatsApp and an AI assistant. In testing.",
          "url": ""
        },
        {
          "name": "Seguros MCP",
          "text": "Tools for assistants to look up insurance policies, installments, claims and documents. Tokio Marine integration in beta.",
          "url": "https://seguros-mcp.bitops.com.br"
        }
      ]
    },
    "about": {
      "heading": "How I work",
      "experience": "Experience",
      "history": "I spent 2019–2026 on the platform team at Exodus as a DevOps / Platform Engineer, working on wallet and exchange infrastructure. Before that, I worked in systems administration, networking and infrastructure."
    }
  },
  "pt-br": {
    "lang": "pt-BR",
    "path": "/pt-br/",
    "title": "Giovanni Coutinho · Staff Platform Engineer",
    "description": "Staff Platform Engineer. Plataformas Kubernetes, GitOps, observabilidade e network policy, no trabalho e em seis clusters Talos em casa.",
    "skip": "Pular para o conteúdo",
    "switchLabel": "Idioma",
    "nav": "Navegação principal",
    "hero": {
      "name": "Giovanni Coutinho",
      "role": "Staff Platform Engineer",
      "lede": "Projeto e opero plataformas Kubernetes. Me importo com o caminho do código até a produção e com a forma como os engenheiros investigam quando algo dá errado.",
      "links": {
        "resume": "Currículo",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "email": "E-mail"
      },
      "heading": "Plataformas que os times conseguem operar."
    },
    "screens": {
      "top": "Início",
      "work": "Decisões",
      "projects": "Código aberto",
      "products": "Produtos",
      "homelab": "Homelab"
    },
    "work": {
      "heading": "Decisões",
      "intro": "Decisões de engenharia"
    },
    "homelab": {
      "heading": "O que eu opero",
      "lede": "Em casa eu mantenho a plataforma que eu gostaria de ter no trabalho, com orçamento menor.",
      "spec": [
        [
          "6",
          "clusters Talos"
        ],
        [
          "11",
          "nós Kubernetes"
        ],
        [
          "3",
          "hosts Proxmox"
        ],
        [
          "2 × 3090",
          "nó com GPU"
        ],
        [
          "130",
          "regras de alerta"
        ],
        [
          "~500",
          "network policies"
        ]
      ],
      "asof": "Contado nos clusters em 23 out. 2026",
      "body": "O Omni gerencia o Talos, o Flux instala a plataforma e o Argo CD os apps. Todo namespace nega tudo por padrão. Métricas, logs e traces vão para um stack Grafana próprio e os alertas chegam no WhatsApp. Quando mudo algo, escrevo o que fiz e por quê.",
      "orrery": "Veja funcionando no orrery",
      "handbook": "Como foi construído"
    },
    "projects": {
      "heading": "Código aberto",
      "source": "Código",
      "visit": "Abrir",
      "rows": [
        {
          "name": "Job Scout",
          "text": "Uma mesa de trabalho para buscar vagas, acompanhar candidaturas e pesquisar empresas. Assistentes acessam por MCP; os rascunhos ficam para você revisar.",
          "repo": "https://github.com/giovannirco/job-scout",
          "url": ""
        },
        {
          "name": "Platen",
          "text": "Imprima e digitalize pelo navegador, scripts ou um assistente de IA. Um binário Go cuida da impressora, dos PDFs e do envio ao Paperless-ngx.",
          "repo": "https://github.com/giovannirco/platen",
          "url": ""
        },
        {
          "name": "CPA Prometheus",
          "text": "Métricas Prometheus de tráfego, tokens e cotas de provedores do CLIProxyAPI, com um dashboard Grafana.",
          "repo": "https://github.com/giovannirco/cpa-prometheus-plugin",
          "url": ""
        },
        {
          "name": "Interview skills",
          "text": "Transcrições locais de entrevistas com timestamps e conferência de falantes, além de preparação e revisão. O áudio fica na sua máquina.",
          "repo": "https://github.com/giovannirco/interview-skills",
          "url": ""
        },
        {
          "name": "Orrery",
          "text": "Um mapa dos meus projetos em Three.js, com leituras públicas e sanitizadas do homelab.",
          "repo": "https://github.com/giovannirco/giovanni-dev-br-public",
          "url": "https://orrery.giovanni.dev.br"
        },
        {
          "name": "Peephole",
          "text": "Um hub Rust coleta e renderiza dados para uma tela ESP32 na mesa, mantendo o firmware simples.",
          "repo": "https://github.com/giovannirco/peephole",
          "url": "https://peephole.bitops.com.br"
        }
      ],
      "upstream": "Contribuições em outros projetos",
      "contributions": [
        {
          "name": "ai-memory",
          "text": "Contexto após compactação",
          "url": "https://github.com/akitaonrails/ai-memory/pull/1230"
        },
        {
          "name": "ai-memory",
          "text": "Handoffs para Grok",
          "url": "https://github.com/akitaonrails/ai-memory/pull/840"
        },
        {
          "name": "CLIProxyAPI Management Center",
          "text": "Cotas de assinatura Grok",
          "url": "https://github.com/router-for-me/Cli-Proxy-API-Management-Center/pull/451"
        },
        {
          "name": "CLIProxyAPI Plugins Store",
          "text": "Registro do CPA Prometheus",
          "url": "https://github.com/router-for-me/CLIProxyAPI-Plugins-Store/pull/130"
        }
      ]
    },
    "contact": {
      "heading": "Como trabalho",
      "principles": [
        [
          "Confiro antes de mudar.",
          "O estado real contra o que achamos: fluxos do Hubble contra a policy, a fatura contra a deduplicação."
        ],
        [
          "Deixo por escrito.",
          "Runbooks, postmortems e registros de execução, e agora skills de agente que outros times usam."
        ],
        [
          "Recomendo com evidência.",
          "Rodei Istio e Linkerd num laboratório e recomendei não adotar mesh. A empresa parou ali."
        ]
      ],
      "reach": "Fale comigo",
      "labels": {
        "email": "E-mail",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "resume": "Currículo"
      },
      "where": "Belo Horizonte, Brasil (UTC−3). Remoto.",
      "foot": "Servido a partir do meu homelab."
    },
    "notFound": {
      "title": "Página não encontrada",
      "text": "Não há nada neste endereço.",
      "home": "Voltar ao início"
    },
    "cases": [
      {
        "id": "observability",
        "label": "Observabilidade",
        "title": "Escolher o que operar.",
        "summary": "Comparei o custo e a manutenção do nosso stack de telemetria, recomendei um serviço gerenciado e conduzi a migração.",
        "steps": [
          "Stack próprio",
          "Custo e manutenção",
          "Serviço gerenciado"
        ],
        "sections": [
          [
            "O problema",
            "Eu tinha montado um stack central de métricas, logs e traces depois de anos operando ferramentas comerciais. Hospedar tudo dava controle, mas computação e armazenamento eram só parte do custo. Alguém também precisava manter o stack, atualizar componentes e investigar falhas."
          ],
          [
            "A decisão",
            "Comparei a opção gerenciada com a infraestrutura e o tempo que o time gastaria na operação. A camada de coleta já permitia trocar o destino com facilidade. Conduzi os testes, trabalhei com o fornecedor e recomendei levar métricas e traces para o Grafana Cloud. Os logs continuaram no Observe."
          ],
          [
            "Fazer funcionar para os times",
            "A migração incluiu acesso, permissões por time e alertas. Trabalhei com os desenvolvedores para decidir quais métricas e traces eram necessários e ajudá-los a investigar a própria telemetria. Reduzimos a cardinalidade desnecessária e desligamos a infraestrutura substituída."
          ],
          [
            "O que ficou",
            "Eu queria montar aquele stack próprio havia anos. Recomendar sua substituição exigiu deixar o custo de operação decidir. Separar a coleta do armazenamento facilitou bastante colocar essa decisão em prática."
          ]
        ]
      },
      {
        "id": "delivery",
        "label": "Entrega",
        "title": "Dar autonomia para publicar.",
        "summary": "Conduzi uma migração para GitOps e criei templates para os donos dos serviços publicarem sem chamar um engenheiro de plataforma a cada release.",
        "steps": [
          "Donos dos serviços",
          "Git e templates",
          "Entrega repetível"
        ],
        "sections": [
          [
            "O problema",
            "A entrega dependia de pipelines e de conhecimento concentrado no time de plataforma. Adotar GitOps exigia mais do que trocar a ferramenta: os donos dos serviços precisavam entender o caminho e conseguir usá-lo."
          ],
          [
            "A decisão",
            "Ajudei a estabelecer o Argo CD, iniciei um programa de migração e trabalhei com os donos dos serviços nos vários ambientes. Criei templates para os casos comuns e cuidei dos apps que exigiam outro desenho. Componentes de plataforma, incluindo network policies, passaram pelo mesmo fluxo de entrega revisável."
          ],
          [
            "Conferir o resultado",
            "Comparei os aplicativos registrados com o que realmente rodava, investiguei diferenças e conferi o comportamento nas migrações. Para network policy, isso significou comparar o tráfego antes e depois da mudança, em vez de tratar um sync bem-sucedido como prova de que tudo funcionava."
          ],
          [
            "O que mudou",
            "Os serviços migrados podiam publicar sem envolver um engenheiro de plataforma em cada release. Templates, runbooks e depois skills de agente levaram o método a outros engenheiros. O resultado foi autonomia sobre a entrega, com um caminho comum para investigar e mudar."
          ]
        ]
      },
      {
        "id": "network",
        "label": "Rede",
        "title": "Fazer o isolamento funcionar.",
        "summary": "Coloquei network policy no fluxo de entrega e conferi o resultado no tráfego real. Mais tarde, as políticas contiveram um callback malicioso.",
        "steps": [
          "Acesso necessário",
          "Policy como código",
          "Tráfego observado"
        ],
        "sections": [
          [
            "O problema",
            "Um arquivo de policy diz o que deveria ser permitido. Ele não prova o que o cluster em execução aplica. Eu queria mudanças revisáveis e efeitos visíveis em todos os ambientes."
          ],
          [
            "A decisão",
            "Conduzi a adoção do Cilium e montei um repositório de políticas com templates, validação e entrega por GitOps. Relatórios de cobertura mostravam as lacunas. Antes e depois das mudanças, conferia os fluxos no Hubble e investigava bloqueios inesperados com os donos dos serviços."
          ],
          [
            "O que mudou",
            "As políticas contiveram um callback de SSRF durante um incidente em produção. Conferi a evidência de bloqueio, fiz uma auditoria mais ampla das políticas e encaminhei o problema da aplicação ao time responsável."
          ],
          [
            "A lição operacional",
            "Trato a configuração pretendida e o comportamento observado como coisas distintas a verificar. O mesmo vale para deploys e monitoramento: um pipeline verde ou um item marcado é o começo da conferência."
          ]
        ]
      },
      {
        "id": "ai",
        "label": "Ferramentas de IA",
        "title": "Dar ferramentas para investigar.",
        "summary": "Criei servidores MCP e fluxos reutilizáveis que outros times usaram para investigar sistemas e executar trabalho de plataforma.",
        "steps": [
          "Perguntas dos times",
          "Ferramentas e contexto",
          "Trabalho revisável"
        ],
        "sections": [
          [
            "O problema",
            "Os engenheiros começavam a usar agentes, mas o contexto operacional estava espalhado por várias ferramentas. Uma integração comunitária de logs já tinha usuários quando seu autor a removeu. O risco da dependência ficou imediato."
          ],
          [
            "A decisão",
            "Criei e mantive servidores MCP internos para Observe e Checkly, com testes, releases e documentação de instalação. Uma demanda concreta virou uma ferramenta de exportação: um engenheiro precisava de milhares de linhas de logs, mas a interface limitava cada exportação."
          ],
          [
            "Levar ao uso",
            "Ajudei engenheiros de vários times a instalar e usar as ferramentas em investigações reais. Também transformei tarefas repetidas em skills e runbooks compartilhados, incluindo upgrades de banco com revisão antes das mudanças. A documentação passou a compartilhar como o time de plataforma investigava os problemas."
          ],
          [
            "O que eu mudaria",
            "Eu escreveria a proposta mais cedo. A adoção mostrou que a necessidade era real, mas uma proposta clara teria facilitado discutir prioridades e expectativas antes de construir."
          ]
        ]
      }
    ],
    "reel": {
      "label": "Casos de engenharia",
      "read": "Leia o caso",
      "back": "Voltar aos casos",
      "previous": "Caso anterior",
      "next": "Próximo caso",
      "hint": "Deslize ou use as setas",
      "caseNav": "Escolha um caso",
      "intro": "Início",
      "contact": "Contato",
      "notes": "Notas do caso",
      "related": "Trabalho público relacionado"
    },
    "products": {
      "heading": "Produtos que estou construindo",
      "rows": [
        {
          "name": "Plano Adentro",
          "text": "Arquitetos e designers compartilham projetos que seus clientes podem explorar pelo navegador.",
          "url": "https://planoadentro.com.br"
        },
        {
          "name": "Subsíndico",
          "text": "Documentos, assembleias e manutenção de condomínios, com respostas baseadas nas regras do próprio prédio.",
          "url": "https://subsindico.ia.br"
        },
        {
          "name": "Tessera",
          "text": "Compartilhe acesso a códigos de autenticação com permissões, limites de tempo e registro de uso.",
          "url": "https://tessera.otservices.space"
        },
        {
          "name": "Navalha",
          "text": "Agendamento para barbearias e outros negócios com hora marcada, com WhatsApp e assistente de IA. Em testes.",
          "url": ""
        },
        {
          "name": "Seguros MCP",
          "text": "Ferramentas para assistentes consultarem apólices, parcelas, sinistros e documentos. Integração Tokio Marine em beta.",
          "url": "https://seguros-mcp.bitops.com.br"
        }
      ]
    },
    "about": {
      "heading": "Como trabalho",
      "experience": "Experiência",
      "history": "De 2019 a 2026, trabalhei no time de plataforma da Exodus como DevOps / Platform Engineer, na infraestrutura de carteira e exchange. Antes disso, trabalhei com administração de sistemas, redes e infraestrutura."
    }
  }
};
