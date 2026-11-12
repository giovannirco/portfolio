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
      "body": "Omni manages Talos, Flux lays down the platform and Argo CD the apps. The design uses default-deny namespaces, a self-hosted Grafana stack for metrics, logs and traces, and a WhatsApp alert integration. The figures above are a dated record, not a live availability indicator. When I change something, I write down what I did and why.",
      "orrery": "Explore the homelab in Orrery",
      "handbook": "How it was built"
    },
    "projects": {
      "heading": "Public work",
      "source": "Source",
      "visit": "Visit",
      "rows": [
        {
          "name": "Job Scout",
          "text": "A self-hosted workspace for listings, company research, applications and interview preparation. Job-description history preserves what changed; assistants help research and draft while the user decides what to send.",
          "repo": "https://github.com/giovannirco/job-scout",
          "url": "",
          "id": "job-scout",
          "featured": true,
          "tagline": "Keep the job search’s context together.",
          "role": "Application and MCP integration.",
          "decision": "Keep application history and reviewed drafts together, with AI optional.",
          "status": "Self-hosted, single-user software. It does not apply for jobs automatically.",
          "sections": [
            [
              "The context survives the next step",
              "A listing, a researched company and an application should not become disconnected notes. Job Scout keeps them in one workspace and records changes to the job description. Interview preparation can refer to the description saved at that stage."
            ],
            [
              "AI assists; the user applies",
              "MCP gives assistants access to the workspace for research and drafting. The core workflow also works without an AI provider. Application materials stay under the user’s review rather than becoming an automatic submission pipeline."
            ]
          ],
          "flow": [
            "Find a role",
            "Research and draft",
            "Review and track"
          ],
          "image": null
        },
        {
          "name": "Platen",
          "text": "One Go service gives browsers, scripts and assistants access to printing and scanning. It talks directly to devices, renders PDFs for printers that cannot accept them, and files scans in Paperless.",
          "repo": "https://github.com/giovannirco/platen",
          "url": "",
          "id": "platen",
          "featured": true,
          "tagline": "Print and scan without building a driver stack.",
          "role": "Go service, browser interface and REST/MCP tools.",
          "decision": "Use direct device protocols and stream rasterized pages rather than require CUPS or printer drivers.",
          "status": "Early software with a limited hardware test matrix. Feeder support still needs real-device validation.",
          "sections": [
            [
              "A PDF is not always printable",
              "Some printers accept raster pages but not PDFs. Platen uses PDFium through WebAssembly to render pages, then sends them through IPP. Scanning uses eSCL, with a browser workflow for assembling multiple flatbed pages."
            ],
            [
              "Physical actions need a boundary",
              "The same operations are available through the web, REST and MCP. Dry runs and confirmation for larger jobs make the physical effect visible before paper is consumed. Compatibility is documented per device rather than assumed from a generic protocol claim."
            ]
          ],
          "flow": [],
          "image": {
            "src": "platen-home.png",
            "alt": "Platen dashboard with a printer, scanner and Paperless connection.",
            "caption": "Platen’s device dashboard, from its public documentation."
          }
        },
        {
          "name": "CPA Prometheus",
          "text": "A CLIProxyAPI plugin exposes request failures, latency, token usage and provider quota information through authenticated management metrics, with a Grafana dashboard.",
          "repo": "https://github.com/giovannirco/cpa-prometheus-plugin",
          "url": "",
          "id": "cpa-prometheus",
          "featured": false,
          "tagline": "Make AI proxy usage observable.",
          "role": "The metrics plugin and dashboard, built for the upstream CLIProxyAPI project.",
          "decision": "Collect usage inside the proxy and keep metrics behind its management authentication.",
          "status": "Provider quota fields depend on what each provider exposes. This is a plugin, not the underlying proxy.",
          "sections": [
            [
              "See more than request counts",
              "The plugin hooks into proxy usage events to record failures, duration and token categories, including reasoning and cached tokens. Quota polling adds remaining capacity and reset information where providers expose it."
            ],
            [
              "Keep the integration close to its source",
              "Running in process avoids a separate service polling traffic counters. The authenticated management endpoint and accompanying dashboard provide an operational view without making account information an anonymous public feed."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Interview skills",
          "text": "Local transcripts with timestamps and speaker checks, plus preparation and debrief workflows. The procedure includes listening to sample clips before trusting speaker labels.",
          "repo": "https://github.com/giovannirco/interview-skills",
          "url": "",
          "id": "interview-skills",
          "featured": false,
          "tagline": "Turn recordings into a reviewable preparation workflow.",
          "role": "Workflow and integration of existing transcription and speaker models.",
          "decision": "Keep audio local and make speaker verification part of the process.",
          "status": "Models need an initial download. Apple Silicon is the documented tested environment; recording requires consent.",
          "sections": [
            [
              "A transcript needs checking",
              "Whisper and speaker models provide the raw material. Timestamps and a short listening check make it possible to inspect the result rather than treat model labels as ground truth."
            ],
            [
              "Preparation and reflection",
              "The skills connect research and practice before an interview with a structured review afterward. They package a local working method, not a newly trained speech model or a guarantee of transcription accuracy."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Orrery",
          "text": "An interactive Three.js map connects projects and sanitized public homelab readings. It is a separate visual experience alongside this text-first portfolio.",
          "repo": "https://github.com/giovannirco/giovanni-dev-br-public",
          "url": "https://orrery.giovanni.dev.br",
          "id": "orrery",
          "featured": false,
          "tagline": "Explore the work as a small solar system.",
          "role": "The interactive project map and public telemetry presentation.",
          "decision": "Keep the visual experiment separate from the accessible portfolio and private operational systems.",
          "status": "WebGL experience. Public readings can be unavailable or stale; they are not an availability guarantee.",
          "sections": [
            [
              "An invitation to explore",
              "The spatial map gives projects a place to be discovered rather than a position in a conventional list. Readers who prefer a direct account can stay in this portfolio; the resume remains a separate destination."
            ],
            [
              "A public view, not an operations console",
              "The readings are sanitized for public presentation. The Orrery does not expose the private monitoring interface or provide controls over the systems it represents."
            ]
          ],
          "flow": [],
          "image": {
            "src": "orrery-public.png",
            "alt": "The Orrery landing view with projects arranged around an orbital map.",
            "caption": "The public Orrery interface."
          }
        },
        {
          "name": "Peephole",
          "text": "A Rust hub collects data from plugins and renders frames for ESP32 displays and a browser view. Integrations and service credentials stay at the hub; the display remains a thin client.",
          "repo": "https://github.com/giovannirco/peephole",
          "url": "https://peephole.bitops.com.br",
          "id": "peephole",
          "featured": true,
          "tagline": "Put service status on a tiny physical screen.",
          "role": "Rust hub, rendering, service plugins and display integration.",
          "decision": "Render at the hub so one screen can show many services without holding their credentials.",
          "status": "Early project built around a LilyGo display. The public demo uses synthetic data and refuses actions.",
          "sections": [
            [
              "One display, many sources",
              "Plugins connect sources such as Prometheus, JSON endpoints and service APIs to a shared rendering pipeline. Device pages choose what to show; the browser can display the same frames as the physical screen."
            ],
            [
              "Keep the device small",
              "The ESP32 fetches rendered frames and sends button actions. Keeping integrations at the hub avoids reproducing every service client on the board and keeps monitored-service credentials off the display."
            ]
          ],
          "flow": [],
          "image": {
            "src": "peephole-demo.png",
            "alt": "Peephole frames showing synthetic service status and metrics.",
            "caption": "Public demo: synthetic hosts and metrics, not live infrastructure."
          }
        },
        {
          "name": "Jev Playground",
          "repo": "https://github.com/giovannirco/jev-playground",
          "url": "",
          "text": "Twenty small experiments show TypeSafe’s Jev model making bounded decisions. Ticket triage, document checks and games expose their model requests and responses.",
          "id": "jev-playground",
          "featured": false,
          "tagline": "Make typed AI decisions inspectable.",
          "role": "The experiments, interfaces and model integration; TypeSafe provides the Jev model.",
          "decision": "Leave arithmetic, dates and ranking in ordinary code; use the model for judgment.",
          "status": "Local experiments using an external model provider, not validated safety controls.",
          "sections": [
            [
              "Inspect the decision",
              "Each experiment exposes the request and response so the reader can see the choices, scores or other typed output. Calls happen through an explicit interaction rather than silently when the page loads."
            ],
            [
              "A model has a bounded job",
              "Small tools and games separate deterministic work from judgment. The playground makes that boundary visible and gives model behavior a concrete interface to inspect."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Latchkey",
          "repo": "https://github.com/giovannirco/latchkey",
          "url": "",
          "text": "ESP32 firmware pairs directly with supported TTLock locks and serves an owner-controlled web interface, without a vendor account or phone app.",
          "id": "latchkey",
          "featured": false,
          "tagline": "Put a supported smart lock under local control.",
          "role": "ESP32 firmware and product integration built on an upstream TTLock protocol port.",
          "decision": "Run pairing and control on the board, with physical confirmation for destructive web actions.",
          "status": "Early development with hardware limits. The protocol core is ported from kind3r/ttlock-sdk-js.",
          "sections": [
            [
              "The board owns the connection",
              "The ESP32 handles the Bluetooth protocol, owner interface and supported lock operations locally. Features depend on what the lock reports and what has been verified on hardware."
            ],
            [
              "Attribution and physical boundaries",
              "The firmware builds on kind3r/ttlock-sdk-js as its primary protocol reference and port, with ttlock-ble supplying another reference and test vectors. USB claiming and a board-button confirmation put physical presence into privileged workflows; the documented security model still matters."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "HeatBar",
          "repo": "https://github.com/giovannirco/heatbar",
          "url": "",
          "text": "A small macOS utility runs CPU workers and a Metal matrix multiplication, with a local control socket for start, stop and status.",
          "id": "heatbar",
          "featured": false,
          "tagline": "Start and stop CPU and GPU load from the menu bar.",
          "role": "The Swift menu-bar utility and bundled Metal workload.",
          "decision": "Make load explicit and reversible; quitting stops the processes it started.",
          "status": "macOS 14 or later with a Metal GPU. It neither controls fan settings nor produces benchmark scores.",
          "sections": [
            [
              "A deliberately small control",
              "Start stress launches CPU workers and the GPU workload. Stop stress ends them. The application also exposes start, stop and status through a user-only Unix socket."
            ],
            [
              "Know what it changes",
              "HeatBar creates load on the Mac running it. The operating system decides how to manage cooling. The tool does not change fan settings, and launch at login stays off until enabled."
            ]
          ],
          "flow": [],
          "image": null
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
      ],
      "intro": "Software I build and share. From investigation tools to a screen on the desk, each project starts with a concrete problem."
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
        "title": "Moved metrics and traces to managed infrastructure.",
        "summary": "I evaluated the operating cost, ran the trial and led the move to Grafana Cloud.",
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
        ],
        "comparison": {
          "before": {
            "title": "We operated the stack",
            "body": "Compute and storage, plus upgrades, maintenance and failures."
          },
          "decision": "Evaluate total operating cost. Run the trial. Lead the migration.",
          "after": {
            "title": "Managed metrics + traces",
            "body": "Moved to Grafana Cloud. Retired the replaced infrastructure."
          },
          "scope": {
            "label": "Kept in place",
            "body": "Collection layer retained. Logs remained in Observe."
          }
        },
        "proof": {
          "result": "Managed metrics and traces; replaced infrastructure retired.",
          "scope": "Collection stayed. Logs remained in Observe."
        },
        "indexLabel": "Telemetry"
      },
      {
        "id": "delivery",
        "label": "Delivery",
        "title": "Made service delivery self-service.",
        "summary": "I drove a GitOps migration and built shared templates with service owners.",
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
        ],
        "comparison": {
          "before": {
            "title": "Releases needed the platform team",
            "body": "Pipelines and deployment knowledge were concentrated in one team."
          },
          "decision": "Build shared templates. Work with service owners on the GitOps migration.",
          "after": {
            "title": "Service owners could ship",
            "body": "Covered services deployed without a platform engineer on each release."
          },
          "scope": {
            "label": "Scope",
            "body": "Shared templates covered standard services; others needed a tailored migration."
          }
        },
        "proof": {
          "result": "Covered services could ship without a platform engineer on every release.",
          "scope": "Standard templates plus tailored migrations for other services."
        },
        "indexLabel": "Delivery"
      },
      {
        "id": "network",
        "label": "Network policy",
        "title": "Contained an SSRF callback with network policy.",
        "summary": "I put Cilium policies through GitOps and checked Hubble flows against real traffic.",
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
        ],
        "comparison": {
          "before": {
            "title": "Rules described intent",
            "body": "A policy file alone could not prove what the running cluster enforced."
          },
          "decision": "Put policies through GitOps. Check Hubble flows before and after changes.",
          "after": {
            "title": "Enforcement was verified",
            "body": "The policies later contained a malicious callback in production."
          },
          "scope": {
            "label": "Follow-through",
            "body": "I checked the block, audited policies and handed the application issue to its owners."
          }
        },
        "proof": {
          "result": "A malicious callback was blocked in a production incident.",
          "scope": "I verified the block and audited policies; the app issue went to its owners."
        },
        "indexLabel": "Network policy"
      },
      {
        "id": "ai",
        "label": "AI tooling",
        "title": "Built investigation tools other teams adopted.",
        "summary": "I built internal Observe and Checkly MCP servers and helped teams use them in investigations.",
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
        ],
        "comparison": {
          "before": {
            "title": "The interface limited exports",
            "body": "An engineer needed thousands of log rows for an investigation."
          },
          "decision": "Build an export tool in the internal Observe MCP server and help engineers use it.",
          "after": {
            "title": "Engineers could get the logs",
            "body": "The tool addressed the export limit. Teams used MCP in real investigations."
          },
          "scope": {
            "label": "Beyond this request",
            "body": "Checkly MCP and shared runbooks also supported investigations and platform work."
          }
        },
        "proof": {
          "result": "Engineers could export thousands of log rows beyond the interface limit.",
          "scope": "Employer-owned tools, with tests, releases and setup documentation."
        },
        "indexLabel": "AI tools"
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
          "url": "https://planoadentro.com.br",
          "id": "plano-adentro",
          "featured": false,
          "tagline": "Let clients explore the project.",
          "role": "",
          "decision": "",
          "status": "",
          "sections": [],
          "flow": [],
          "image": null
        },
        {
          "name": "Subsíndico",
          "text": "A workspace for condominium documents, assemblies and maintenance. Residents and managers can ask questions against uploaded material and inspect the cited source. Permissions determine which documents can be used in an answer.",
          "url": "https://subsindico.ia.br",
          "id": "subsindico",
          "featured": true,
          "tagline": "Answers grounded in the building’s own documents.",
          "role": "Product workflows and permission-aware document retrieval.",
          "decision": "Filter documents by access before sending context to the model.",
          "status": "Product in development. Answers need source review; they do not replace the building’s governing documents.",
          "sections": [
            [
              "A question needs a source",
              "Building rules, assembly records and maintenance information belong in the same working context. Document retrieval helps residents and managers reach the relevant passage and inspect it, rather than accept a detached answer."
            ],
            [
              "Permissions are part of retrieval",
              "Condominium boundaries and role-based access apply before the model receives document context. Operational workflows and document access share the same product boundary, with tenant isolation below the interface as well."
            ]
          ],
          "flow": [
            "Ask about a rule",
            "Retrieve permitted sources",
            "Inspect the citation"
          ],
          "image": null
        },
        {
          "name": "Tessera",
          "text": "Give someone permission to request an authentication code, with an expiry and a record of each code issued. The web application is separate from the service that holds and uses the underlying secrets.",
          "url": "https://tessera.otservices.space",
          "id": "tessera",
          "featured": true,
          "tagline": "Share a code without handing over its secret.",
          "role": "Permission flows, isolated code issuance and its audit trail.",
          "decision": "Separate the web tier from secret custody and enforce limits when issuing a code.",
          "status": "Product in development, with server-side custody. The audit records issuance, not successful authentication elsewhere.",
          "sections": [
            [
              "Permission instead of a copied secret",
              "A shared authenticator secret is hard to take back. Tessera gives access to code issuance with permissions and time limits, so the underlying secret does not need to be handed to every person who needs a code."
            ],
            [
              "Custody is a deliberate boundary",
              "An isolated service holds and uses the secrets. The web tier coordinates access, while issuance enforces the grant and produces an audit record. That separation describes the custody model; it does not claim that no server can access the secret."
            ]
          ],
          "flow": [
            "Grant limited access",
            "Request a code",
            "Audit issuance"
          ],
          "image": null
        },
        {
          "name": "Navalha",
          "text": "A barbershop workspace for bookings, clients and daily operations. Scheduling connects to packages, memberships, commissions and stock, with WhatsApp supporting the customer journey.",
          "url": "",
          "id": "navalha",
          "featured": false,
          "tagline": "Run the appointment and the business around it.",
          "role": "Booking and business workflows, plus messaging integration.",
          "decision": "Connect reservations and confirmations to the shop’s operating records.",
          "status": "In testing. Payment-provider integrations are not presented as available.",
          "sections": [
            [
              "An appointment is part of the operation",
              "The booking flow uses reservations and confirmation rather than treating every slot selection as a completed appointment. Customer records, packages and memberships connect the calendar to the shop’s daily work."
            ],
            [
              "Messages support the workflow",
              "WhatsApp integration supports communication and reminders. The assistant belongs inside the documented scheduling workflow; it is not a promise of unrestricted autonomous business operation."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Seguros MCP",
          "text": "Tools for retrieving policies, installments, claims and documents from insurer portals. Explicit operations give an assistant a structured way to work with those systems.",
          "url": "https://seguros-mcp.bitops.com.br",
          "id": "seguros-mcp",
          "featured": false,
          "tagline": "Bring insurance operations into an assistant’s workflow.",
          "role": "MCP tools and insurer-portal adapters, not the insurers’ underlying systems.",
          "decision": "Expose explicit operations and preserve the source system’s actual response.",
          "status": "Tokio Marine integration in beta. Implemented adapters do not imply equal production support across insurers.",
          "sections": [
            [
              "Make the operation explicit",
              "Policies, installments, claims and documents have distinct retrieval operations. The MCP interface gives an assistant named tools instead of relying on unrestricted navigation through a portal."
            ],
            [
              "Respect the integration boundary",
              "Adapters bridge insurer APIs and browser workflows. The product must distinguish an unavailable record or portal failure from a real business result, and documented write operations have their own controls."
            ]
          ],
          "flow": [],
          "image": null
        }
      ],
      "intro": "Products that bring engineering decisions into everyday work. These are their workflows, the choices behind them and their current limits."
    },
    "about": {
      "heading": "How I work",
      "experience": "Experience",
      "history": "I spent 2019–2026 on the platform team at Exodus as a DevOps / Platform Engineer, working on wallet and exchange infrastructure. Before that, I worked in systems administration, networking and infrastructure."
    },
    "comparison": {
      "before": "Before",
      "decision": "My decision",
      "after": "After"
    },
    "proof": {
      "decision": "My decision",
      "result": "Result",
      "scope": "Scope"
    },
    "stories": {
      "read": "Explore the project",
      "back": "Back to",
      "role": "My contribution",
      "decision": "Engineering decision",
      "status": "Stage and limits",
      "workflow": "How it works",
      "directory": "More projects",
      "productRead": "About the product"
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
      "body": "O Omni gerencia o Talos, o Flux instala a plataforma e o Argo CD os apps. O desenho usa negação por padrão nos namespaces, um stack Grafana próprio para métricas, logs e traces e uma integração de alertas com WhatsApp. Os números acima são um registro datado, não um indicador de disponibilidade atual. Quando mudo algo, escrevo o que fiz e por quê.",
      "orrery": "Explore o homelab no Orrery",
      "handbook": "Como foi construído"
    },
    "projects": {
      "heading": "Código aberto",
      "source": "Código",
      "visit": "Abrir",
      "rows": [
        {
          "name": "Job Scout",
          "text": "Um espaço próprio para vagas, pesquisa de empresas, candidaturas e preparação para entrevistas. O histórico das descrições preserva o que mudou; assistentes ajudam a pesquisar e redigir, e a pessoa decide o que enviar.",
          "repo": "https://github.com/giovannirco/job-scout",
          "url": "",
          "id": "job-scout",
          "featured": true,
          "tagline": "Mantenha o contexto da busca por trabalho.",
          "role": "Aplicação e integração MCP.",
          "decision": "Manter histórico e rascunhos revisados juntos, sem exigir IA.",
          "status": "Software auto-hospedado para uso individual. Não envia candidaturas automaticamente.",
          "sections": [
            [
              "O contexto acompanha a candidatura",
              "Uma vaga, a pesquisa da empresa e a candidatura não precisam virar notas desconectadas. O Job Scout reúne tudo e registra mudanças na descrição da vaga. A preparação para a entrevista pode consultar a descrição salva naquela etapa."
            ],
            [
              "A IA ajuda; a pessoa se candidata",
              "O MCP dá aos assistentes acesso à pesquisa e à redação. O fluxo principal também funciona sem provedor de IA. O material fica para revisão, em vez de entrar em um envio automático de candidaturas."
            ]
          ],
          "flow": [
            "Encontrar uma vaga",
            "Pesquisar e redigir",
            "Revisar e acompanhar"
          ],
          "image": null
        },
        {
          "name": "Platen",
          "text": "Um serviço Go permite imprimir e digitalizar pelo navegador, por scripts ou assistentes. Ele conversa diretamente com os dispositivos, renderiza PDFs para impressoras que não os aceitam e envia digitalizações ao Paperless.",
          "repo": "https://github.com/giovannirco/platen",
          "url": "",
          "id": "platen",
          "featured": true,
          "tagline": "Imprima e digitalize sem montar um stack de drivers.",
          "role": "Serviço Go, interface web e ferramentas REST/MCP.",
          "decision": "Usar protocolos diretos e transmitir páginas rasterizadas, sem exigir CUPS ou drivers de impressão.",
          "status": "Software em estágio inicial, testado em poucos dispositivos. O alimentador ainda precisa de validação em hardware real.",
          "sections": [
            [
              "Nem toda impressora aceita PDF",
              "Algumas impressoras aceitam páginas rasterizadas, mas não PDFs. O Platen usa PDFium via WebAssembly para renderizar páginas e enviá-las por IPP. A digitalização usa eSCL, com um fluxo no navegador para reunir várias páginas da mesa do scanner."
            ],
            [
              "Ações físicas precisam de limites",
              "As operações estão disponíveis na web, por REST e por MCP. Simulações e confirmação para trabalhos maiores tornam o efeito físico visível antes de consumir papel. A compatibilidade é documentada por dispositivo."
            ]
          ],
          "flow": [],
          "image": {
            "src": "platen-home.png",
            "alt": "Painel do Platen com impressora, scanner e conexão ao Paperless.",
            "caption": "Painel de dispositivos do Platen, da documentação pública."
          }
        },
        {
          "name": "CPA Prometheus",
          "text": "Um plugin do CLIProxyAPI expõe falhas, latência, uso de tokens e cotas dos provedores em métricas autenticadas de gerenciamento, com um dashboard Grafana.",
          "repo": "https://github.com/giovannirco/cpa-prometheus-plugin",
          "url": "",
          "id": "cpa-prometheus",
          "featured": false,
          "tagline": "Torne o uso do proxy de IA observável.",
          "role": "O plugin de métricas e o dashboard, construídos para o projeto CLIProxyAPI.",
          "decision": "Coletar uso dentro do proxy e manter métricas protegidas pela autenticação de gerenciamento.",
          "status": "Os campos de cota dependem do que cada provedor expõe. Este é o plugin, não o proxy que o hospeda.",
          "sections": [
            [
              "Veja além da contagem de requisições",
              "O plugin recebe eventos de uso do proxy e registra falhas, duração e categorias de tokens, incluindo raciocínio e cache. A consulta de cotas acrescenta capacidade restante e renovação quando o provedor oferece esses dados."
            ],
            [
              "Mantenha a integração perto da origem",
              "Rodar no mesmo processo evita um serviço separado para consultar contadores de tráfego. O endpoint autenticado e o dashboard dão uma visão operacional sem transformar informações de contas em um feed público anônimo."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Interview skills",
          "text": "Transcrições locais com timestamps e conferência de falantes, além de preparação e retrospectiva. O procedimento inclui ouvir trechos antes de confiar nos rótulos de quem falou.",
          "repo": "https://github.com/giovannirco/interview-skills",
          "url": "",
          "id": "interview-skills",
          "featured": false,
          "tagline": "Transforme gravações em um fluxo de preparação revisável.",
          "role": "Fluxos e integração de modelos existentes de transcrição e identificação de falantes.",
          "decision": "Manter o áudio local e incluir a conferência de falantes no processo.",
          "status": "Os modelos exigem download inicial. Apple Silicon é o ambiente de teste documentado; gravar exige consentimento.",
          "sections": [
            [
              "Uma transcrição precisa de conferência",
              "Whisper e modelos de falantes fornecem a matéria-prima. Timestamps e uma breve escuta permitem inspecionar o resultado, sem tratar os rótulos do modelo como verdade."
            ],
            [
              "Preparação e reflexão",
              "As skills conectam pesquisa e prática antes da entrevista com uma revisão estruturada depois. Elas organizam um método local, não um novo modelo de fala nem uma garantia de precisão da transcrição."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Orrery",
          "text": "Um mapa interativo em Three.js conecta projetos e leituras públicas sanitizadas do homelab. É uma experiência visual separada deste portfólio focado em leitura.",
          "repo": "https://github.com/giovannirco/giovanni-dev-br-public",
          "url": "https://orrery.giovanni.dev.br",
          "id": "orrery",
          "featured": false,
          "tagline": "Explore o trabalho como um pequeno sistema solar.",
          "role": "O mapa interativo de projetos e a apresentação da telemetria pública.",
          "decision": "Separar o experimento visual do portfólio acessível e dos sistemas operacionais privados.",
          "status": "Experiência WebGL. Leituras públicas podem estar indisponíveis ou desatualizadas; não garantem disponibilidade.",
          "sections": [
            [
              "Um convite para explorar",
              "O mapa espacial dá aos projetos um lugar para serem descobertos. Quem prefere uma explicação direta pode continuar neste portfólio; o currículo segue em um endereço separado."
            ],
            [
              "Uma visão pública, não um console operacional",
              "As leituras são sanitizadas para apresentação pública. O Orrery não expõe a interface privada de monitoramento nem fornece controles sobre os sistemas representados."
            ]
          ],
          "flow": [],
          "image": {
            "src": "orrery-public.png",
            "alt": "Tela inicial do Orrery com projetos organizados em um mapa orbital.",
            "caption": "A interface pública do Orrery."
          }
        },
        {
          "name": "Peephole",
          "text": "Um hub Rust coleta dados de plugins e renderiza quadros para telas ESP32 e para o navegador. Integrações e credenciais dos serviços ficam no hub; a tela continua um cliente simples.",
          "repo": "https://github.com/giovannirco/peephole",
          "url": "https://peephole.bitops.com.br",
          "id": "peephole",
          "featured": true,
          "tagline": "Leve o estado dos serviços para uma pequena tela.",
          "role": "Hub Rust, renderização, plugins de serviços e integração com a tela.",
          "decision": "Renderizar no hub para mostrar vários serviços sem guardar suas credenciais na tela.",
          "status": "Projeto inicial criado em torno de uma tela LilyGo. A demonstração pública usa dados sintéticos e recusa ações.",
          "sections": [
            [
              "Uma tela, várias fontes",
              "Plugins conectam Prometheus, endpoints JSON e APIs de serviços a uma renderização comum. As páginas do dispositivo escolhem o que mostrar; o navegador exibe os mesmos quadros da tela física."
            ],
            [
              "Mantenha o dispositivo simples",
              "O ESP32 busca quadros renderizados e envia ações dos botões. As integrações no hub evitam repetir cada cliente de serviço na placa e mantêm as credenciais dos serviços monitorados fora da tela."
            ]
          ],
          "flow": [],
          "image": {
            "src": "peephole-demo.png",
            "alt": "Quadros do Peephole mostrando estado e métricas de serviços sintéticos.",
            "caption": "Demonstração pública: hosts e métricas sintéticos, não infraestrutura real."
          }
        },
        {
          "name": "Jev Playground",
          "repo": "https://github.com/giovannirco/jev-playground",
          "url": "",
          "text": "Vinte pequenos experimentos mostram o modelo Jev da TypeSafe tomando decisões delimitadas. Triagem de chamados, conferência de documentos e jogos expõem as requisições e respostas do modelo.",
          "id": "jev-playground",
          "featured": false,
          "tagline": "Torne decisões tipadas de IA inspecionáveis.",
          "role": "Os experimentos, interfaces e integração; a TypeSafe fornece o modelo Jev.",
          "decision": "Manter aritmética, datas e ordenação em código comum; usar o modelo para julgamento.",
          "status": "Experimentos locais com um provedor externo de modelo, não controles de segurança validados.",
          "sections": [
            [
              "Inspecione a decisão",
              "Cada experimento expõe a requisição e a resposta para mostrar escolhas, pontuações ou outras saídas tipadas. As chamadas partem de uma interação explícita, não silenciosamente ao abrir a página."
            ],
            [
              "O modelo tem uma tarefa delimitada",
              "Ferramentas e jogos separam trabalho determinístico de julgamento. O playground torna esse limite visível e dá ao comportamento do modelo uma interface concreta para inspeção."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Latchkey",
          "repo": "https://github.com/giovannirco/latchkey",
          "url": "",
          "text": "Um firmware ESP32 se conecta diretamente a fechaduras TTLock compatíveis e oferece uma interface web sob controle do dono, sem conta do fabricante nem aplicativo de celular.",
          "id": "latchkey",
          "featured": false,
          "tagline": "Coloque uma fechadura compatível sob controle local.",
          "role": "Firmware ESP32 e integração do produto sobre um porte do protocolo TTLock de um projeto existente.",
          "decision": "Executar pareamento e controle na placa, com confirmação física para ações destrutivas pela web.",
          "status": "Em desenvolvimento inicial, com limites de hardware. O núcleo do protocolo é portado de kind3r/ttlock-sdk-js.",
          "sections": [
            [
              "A placa mantém a conexão",
              "O ESP32 executa localmente o protocolo Bluetooth, a interface do dono e as operações suportadas. As funções dependem do que a fechadura informa e do que foi verificado em hardware."
            ],
            [
              "Atribuição e limites físicos",
              "O firmware usa kind3r/ttlock-sdk-js como referência principal e origem do porte do protocolo, além de ttlock-ble como referência e fonte de vetores de teste. A configuração inicial por USB e a confirmação por botão incluem presença física nos fluxos privilegiados; o modelo de segurança documentado continua essencial."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "HeatBar",
          "repo": "https://github.com/giovannirco/heatbar",
          "url": "",
          "text": "Um pequeno utilitário macOS executa processos de carga de CPU e multiplicação de matrizes em Metal, com socket local para iniciar, parar e consultar o estado.",
          "id": "heatbar",
          "featured": false,
          "tagline": "Inicie e pare carga de CPU e GPU pela barra de menus.",
          "role": "O utilitário Swift da barra de menus e a carga Metal incluída.",
          "decision": "Tornar a carga explícita e reversível; sair encerra os processos iniciados pelo aplicativo.",
          "status": "macOS 14 ou posterior com GPU Metal. Não controla ventoinhas nem produz pontuações de benchmark.",
          "sections": [
            [
              "Um controle deliberadamente pequeno",
              "Iniciar a carga abre processos de CPU e a tarefa de GPU. Parar encerra esses processos. O aplicativo também expõe início, parada e estado em um socket Unix restrito ao usuário."
            ],
            [
              "Saiba o que muda",
              "O HeatBar gera carga no Mac em que roda. O sistema operacional decide como refrigerá-lo. O utilitário não muda as ventoinhas, e a abertura no login fica desativada até ser escolhida."
            ]
          ],
          "flow": [],
          "image": null
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
      ],
      "intro": "Software que construo e compartilho. De ferramentas de investigação a uma tela na mesa, cada projeto resolve um problema concreto."
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
        "title": "Migrei métricas e traces para infraestrutura gerenciada.",
        "summary": "Comparei o custo de operação, conduzi os testes e liderei a migração para o Grafana Cloud.",
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
        ],
        "comparison": {
          "before": {
            "title": "Nós operávamos o stack",
            "body": "Computação e armazenamento, além de atualizações, manutenção e falhas."
          },
          "decision": "Comparar o custo total de operação. Conduzir os testes e a migração.",
          "after": {
            "title": "Métricas e traces gerenciados",
            "body": "Migramos para o Grafana Cloud e desligamos a infraestrutura substituída."
          },
          "scope": {
            "label": "O que ficou",
            "body": "A camada de coleta continuou. Os logs ficaram no Observe."
          }
        },
        "proof": {
          "result": "Métricas e traces gerenciados; infraestrutura substituída desligada.",
          "scope": "A coleta continuou. Os logs ficaram no Observe."
        },
        "indexLabel": "Telemetria"
      },
      {
        "id": "delivery",
        "label": "Entrega",
        "title": "Dei aos times autonomia para publicar.",
        "summary": "Conduzi a migração para GitOps e criei templates compartilhados com os donos dos serviços.",
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
        ],
        "comparison": {
          "before": {
            "title": "Releases dependiam da plataforma",
            "body": "Pipelines e conhecimento de deploy estavam concentrados em um time."
          },
          "decision": "Criar templates comuns e conduzir a migração para GitOps com os donos dos serviços.",
          "after": {
            "title": "Os times podiam publicar",
            "body": "Os serviços migrados podiam publicar sem chamar a plataforma a cada release."
          },
          "scope": {
            "label": "Escopo",
            "body": "Templates atendiam os serviços comuns; os demais precisavam de uma migração própria."
          }
        },
        "proof": {
          "result": "Os serviços migrados podiam publicar sem chamar a plataforma a cada release.",
          "scope": "Templates para casos comuns; migrações específicas para os demais."
        },
        "indexLabel": "Entrega"
      },
      {
        "id": "network",
        "label": "Rede",
        "title": "Contive um callback de SSRF com network policy.",
        "summary": "Entreguei políticas do Cilium por GitOps e conferi os fluxos no Hubble com tráfego real.",
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
        ],
        "comparison": {
          "before": {
            "title": "Regras descreviam a intenção",
            "body": "O arquivo de policy não provava o que o cluster em execução aplicava."
          },
          "decision": "Entregar policies por GitOps. Conferir os fluxos no Hubble antes e depois das mudanças.",
          "after": {
            "title": "O bloqueio foi verificado",
            "body": "Mais tarde, as políticas contiveram um callback malicioso em produção."
          },
          "scope": {
            "label": "Acompanhamento",
            "body": "Conferi o bloqueio, auditei as policies e encaminhei o problema ao time da aplicação."
          }
        },
        "proof": {
          "result": "Um callback malicioso foi bloqueado em um incidente em produção.",
          "scope": "Conferi o bloqueio e auditei as políticas; o problema da aplicação ficou com seus responsáveis."
        },
        "indexLabel": "Rede"
      },
      {
        "id": "ai",
        "label": "Ferramentas de IA",
        "title": "Criei ferramentas de investigação adotadas por outros times.",
        "summary": "Criei servidores MCP internos para Observe e Checkly e ajudei os times a usá-los em investigações.",
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
        ],
        "comparison": {
          "before": {
            "title": "A interface limitava a exportação",
            "body": "Um engenheiro precisava de milhares de linhas de logs para investigar."
          },
          "decision": "Criar uma ferramenta de exportação no Observe MCP interno e ajudar os times a usá-la.",
          "after": {
            "title": "Os logs ficaram acessíveis",
            "body": "A ferramenta resolveu o limite de exportação. Times usaram MCP em investigações reais."
          },
          "scope": {
            "label": "Além dessa demanda",
            "body": "Checkly MCP e runbooks compartilhados também apoiaram investigações e trabalho de plataforma."
          }
        },
        "proof": {
          "result": "Engenheiros puderam exportar milhares de linhas de logs além do limite da interface.",
          "scope": "Ferramentas internas, com testes, releases e documentação de instalação."
        },
        "indexLabel": "IA"
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
          "url": "https://planoadentro.com.br",
          "id": "plano-adentro",
          "featured": false,
          "tagline": "Deixe o cliente explorar o projeto.",
          "role": "",
          "decision": "",
          "status": "",
          "sections": [],
          "flow": [],
          "image": null
        },
        {
          "name": "Subsíndico",
          "text": "Um espaço para documentos, assembleias e manutenção de condomínios. Moradores e gestores fazem perguntas sobre os materiais enviados e conferem a fonte citada. As permissões determinam quais documentos podem entrar na resposta.",
          "url": "https://subsindico.ia.br",
          "id": "subsindico",
          "featured": true,
          "tagline": "Respostas baseadas nos documentos do próprio prédio.",
          "role": "Fluxos do produto e consulta de documentos com controle de permissões.",
          "decision": "Filtrar documentos por acesso antes de enviar contexto ao modelo.",
          "status": "Produto em desenvolvimento. As respostas precisam de conferência na fonte; não substituem os documentos do condomínio.",
          "sections": [
            [
              "Uma pergunta precisa de uma fonte",
              "Regras do prédio, atas e informações de manutenção fazem parte do mesmo contexto de trabalho. A consulta de documentos ajuda moradores e gestores a encontrar e conferir o trecho relevante, em vez de aceitar uma resposta isolada."
            ],
            [
              "Permissões fazem parte da consulta",
              "Os limites entre condomínios e o acesso por perfil se aplicam antes de o modelo receber o contexto. Os fluxos operacionais e os documentos compartilham esse limite, com isolamento entre condomínios também abaixo da interface."
            ]
          ],
          "flow": [
            "Perguntar sobre uma regra",
            "Consultar fontes permitidas",
            "Conferir a citação"
          ],
          "image": null
        },
        {
          "name": "Tessera",
          "text": "Dê a alguém permissão para solicitar um código de autenticação, com validade e registro de cada emissão. A aplicação web é separada do serviço que guarda e usa os segredos de origem.",
          "url": "https://tessera.otservices.space",
          "id": "tessera",
          "featured": true,
          "tagline": "Compartilhe um código sem entregar seu segredo.",
          "role": "Fluxos de permissão, emissão isolada de códigos e sua auditoria.",
          "decision": "Separar a camada web da custódia dos segredos e aplicar limites na emissão do código.",
          "status": "Produto em desenvolvimento, com custódia no servidor. A auditoria registra emissões, não autenticações bem-sucedidas em outros serviços.",
          "sections": [
            [
              "Permissão no lugar de um segredo copiado",
              "É difícil retirar um segredo de autenticação depois de compartilhá-lo. O Tessera dá acesso à emissão com permissões e limites de tempo, sem entregar o segredo a cada pessoa que precisa de um código."
            ],
            [
              "Custódia é um limite deliberado",
              "Um serviço isolado guarda e usa os segredos. A camada web coordena o acesso; a emissão aplica a autorização e gera um registro. Essa separação descreve a custódia, sem afirmar que nenhum servidor tem acesso ao segredo."
            ]
          ],
          "flow": [
            "Conceder acesso limitado",
            "Solicitar um código",
            "Auditar a emissão"
          ],
          "image": null
        },
        {
          "name": "Navalha",
          "text": "Um espaço de trabalho para agendamentos, clientes e operação de barbearias. A agenda se conecta a pacotes, assinaturas, comissões e estoque, com WhatsApp no atendimento.",
          "url": "",
          "id": "navalha",
          "featured": false,
          "tagline": "Cuide do agendamento e do negócio ao redor dele.",
          "role": "Fluxos de agendamento e operação, além da integração de mensagens.",
          "decision": "Conectar reservas e confirmações aos registros operacionais da barbearia.",
          "status": "Em testes. Integrações com provedores de pagamento não são apresentadas como disponíveis.",
          "sections": [
            [
              "Um horário faz parte da operação",
              "O fluxo usa reservas e confirmação, em vez de tratar toda seleção de horário como agendamento concluído. Clientes, pacotes e assinaturas conectam a agenda à rotina da barbearia."
            ],
            [
              "Mensagens apoiam o fluxo",
              "A integração WhatsApp apoia comunicação e lembretes. O assistente faz parte do fluxo documentado de agendamento; não é uma promessa de operação autônoma irrestrita."
            ]
          ],
          "flow": [],
          "image": null
        },
        {
          "name": "Seguros MCP",
          "text": "Ferramentas para consultar apólices, parcelas, sinistros e documentos nos portais das seguradoras. Operações explícitas dão ao assistente uma forma estruturada de trabalhar com esses sistemas.",
          "url": "https://seguros-mcp.bitops.com.br",
          "id": "seguros-mcp",
          "featured": false,
          "tagline": "Leve operações de seguros ao fluxo de um assistente.",
          "role": "Ferramentas MCP e adaptadores para portais, não os sistemas internos das seguradoras.",
          "decision": "Expor operações explícitas e preservar a resposta real do sistema de origem.",
          "status": "Integração Tokio Marine em beta. Adaptadores implementados não significam suporte equivalente em produção para todas as seguradoras.",
          "sections": [
            [
              "Torne a operação explícita",
              "Apólices, parcelas, sinistros e documentos têm operações distintas de consulta. A interface MCP oferece ferramentas nomeadas, em vez de depender de navegação irrestrita pelo portal."
            ],
            [
              "Respeite o limite da integração",
              "Adaptadores conectam APIs e fluxos de navegador das seguradoras. O produto precisa distinguir um registro indisponível ou uma falha do portal de um resultado de negócio; operações de escrita documentadas têm controles próprios."
            ]
          ],
          "flow": [],
          "image": null
        }
      ],
      "intro": "Produtos que levam decisões de engenharia ao dia a dia de quem usa. Aqui estão os fluxos, as escolhas e os limites de cada um."
    },
    "about": {
      "heading": "Como trabalho",
      "experience": "Experiência",
      "history": "De 2019 a 2026, trabalhei no time de plataforma da Exodus como DevOps / Platform Engineer, na infraestrutura de carteira e exchange. Antes disso, trabalhei com administração de sistemas, redes e infraestrutura."
    },
    "comparison": {
      "before": "Antes",
      "decision": "Minha decisão",
      "after": "Depois"
    },
    "proof": {
      "decision": "Minha decisão",
      "result": "Resultado",
      "scope": "Escopo"
    },
    "stories": {
      "read": "Conheça o projeto",
      "back": "Voltar para",
      "role": "Minha contribuição",
      "decision": "Decisão de engenharia",
      "status": "Estágio e limites",
      "workflow": "Como funciona",
      "directory": "Mais projetos",
      "productRead": "Conheça o produto"
    }
  }
};
