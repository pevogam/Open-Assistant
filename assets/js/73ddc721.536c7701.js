"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[4248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,u=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},s="Introduction to Open Assistant for developers",o={unversionedId:"guides/developers",id:"guides/developers",title:"Introduction to Open Assistant for developers",description:"This is a guide to understand the goals, tools, technologies and teams behind",source:"@site/docs/guides/developers.md",sourceDirName:"guides",slug:"/guides/developers",permalink:"/Open-Assistant/docs/guides/developers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Examples",permalink:"/Open-Assistant/docs/guides/examples"},next:{title:"Plugins",permalink:"/Open-Assistant/docs/plugins/"}},l={},p=[{value:"Overview of the Open Assistant project",id:"overview-of-the-open-assistant-project",level:2},{value:"The tools",id:"the-tools",level:2},{value:"The technologies",id:"the-technologies",level:2},{value:"The web frontend",id:"the-web-frontend",level:3},{value:"The Discord bots",id:"the-discord-bots",level:3},{value:"The FastAPI backend",id:"the-fastapi-backend",level:3},{value:"The inference service",id:"the-inference-service",level:3},{value:"Model training tools",id:"model-training-tools",level:3},{value:"The instruction dataset scripts and notebooks",id:"the-instruction-dataset-scripts-and-notebooks",level:3},{value:"The docs",id:"the-docs",level:3},{value:"The deployment",id:"the-deployment",level:3},{value:"The teams",id:"the-teams",level:2}],d={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-open-assistant-for-developers"},"Introduction to Open Assistant for developers"),(0,i.kt)("p",null,"This is a guide to understand the goals, tools, technologies and teams behind\n",(0,i.kt)("a",{parentName:"p",href:"https://open-assistant.io/"},"Open Assistant"),", a project that tries to be the\ncommunity-driven open source alternative to ChatGPT. It is intended for\ndevelopers that want to contribute to the project. See the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/blob/main/CONTRIBUTING.md"},"contributing guide"),"\nfor detailed instructions on how to contribute."),(0,i.kt)("h2",{id:"overview-of-the-open-assistant-project"},"Overview of the Open Assistant project"),(0,i.kt)("p",null,"The main goal of the project is to have a chatbot that can answer questions,\nadapting a ",(0,i.kt)("strong",{parentName:"p"},"Large Language Model (LLM)")," to better follow instructions. For\nthis, the project uses the approach proposed by the\n",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2203.02155"},"InstructGPT paper"),", which is based on\n",(0,i.kt)("strong",{parentName:"p"},"Reinforcement Learning with Human Feedback (RLHF)"),". InstructGPT's proposal\nbasically consists in three steps (see the figure below):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Collect demonstration data and train a supervised policy.")," The idea is\nhaving a lot of examples of conversations between an assistant and a human\nthat gives instructions, so that they can be used as examples to train an\nexisting LLM with supervised learning, what is called Supervised Fine-Tuning\n(SFT). Thus, this training is called ",(0,i.kt)("strong",{parentName:"p"},'"SFT training"')," and we will call the\nresulting model the ",(0,i.kt)("strong",{parentName:"p"},'"SFT model"'),"."),(0,i.kt)("p",{parentName:"li"},'These sample conversations are generated by humans acting as prompters and\nalso humans acting as assistants. It\'s important to note that a prompt can be\nanswered by different humans, so that there are different examples of how an\nassistant could respond to a given prompt, which will be fundamental for the\nnext step. From an initial prompt, an assistant answer is created, and then\nnew prompts to this answer are created, and so on. This generates\n"conversation trees".'),(0,i.kt)("p",{parentName:"li"},"The LLM can also be further fine-tuned using ",(0,i.kt)("strong",{parentName:"p"},'"instruction datasets"'),",\nwhich are a set of examples of conversations in the form of instruction and\nresponse obtained from websites like StackOverflow or Reddit.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Collect comparison data and train a reward model.")," Here, conversations are\nsampled from the conversations obtained in the previous step, and a human\n",(0,i.kt)("strong",{parentName:"p"},"ranks")," the different assistant answers for each prompt that were created\nby different humans in the previous step. This data is used to train a\n",(0,i.kt)("strong",{parentName:"p"},"reward model (RM)")," that favors good answers, and the corresponding task is\ncalled ",(0,i.kt)("strong",{parentName:"p"},'"RM training"'),"."),(0,i.kt)("p",{parentName:"li"},"In the future, this ranking step could be done not only for human generated\nanswers from step 1, but also to samples generated by the SFT model.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optimize a policy against the reward model using reinforcement learning\n(RL).")," A proximal policy optimization (PPO) algorithm is used to generate a\nnew model from the fine-tuned model. To optimize this PPO, the reward model\nobtained in the previous step is used with the SFT model, so the generated\n",(0,i.kt)("strong",{parentName:"p"},"RL model")," is better at following instructions. This task is called ",(0,i.kt)("strong",{parentName:"p"},'"RL\ntraining"'),"."))),(0,i.kt)("p",null,"With all this we have a RL model that can be used to create an assistant. The\nprocess of answering prompts with this RL model is called ",(0,i.kt)("strong",{parentName:"p"},'"the inference"'),"."),(0,i.kt)("p",null,"The whole Open Assistant approach is summarized in this figure:"),(0,i.kt)("mermaid",{value:'flowchart TD\n    classDef model fill:#FAD34B,stroke:#AD8B11,color:black\n\n    P1[Prompt] --\x3e HA[Human assistant] --\x3e Answers --\x3e CT[Conversation trees]\n    Answers --\x3e P1\n\n    ID[Instruction datasets] --\x3e FT\n    LLM(("Large Language <br> Model (LLM)")):::model --\x3e FT(Supervised Fine-Tuning)\n    CT --\x3e FT\n    FT --\x3e SFT(("SFT Model")):::model\n\n    CT --\x3e R("RM training <br> (Ranking)") --\x3e RM(("Reward <br> Model (RM)")):::model\n    SFT --\x3e RL("RL training <br> (Reinforcement Learning with PPO)") --\x3e RLModel((RL model)):::model\n    RM --\x3e RL\n\n    RLModel --\x3e OA("Inference <br> (Open Assistant)")\n    P2[Prompt] --\x3e OA --\x3e A2[Answer]'}),(0,i.kt)("p",null,"One of the goals of the project is being able to run this RL model in consumer\nhardware: current models require very powerful GPUs that are out of reach for\nnormal users. The project aims high: after a basic assistant is obtained, the\nproject wants to do more and to be able to connect it to external tools. This is\na research field called\n",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2302.07842"},"Augmented Language Models"),". In addition, it\nwants to give the users the ability to fine-tune their own models, so that they\ncan create their own custom assistants."),(0,i.kt)("h2",{id:"the-tools"},"The tools"),(0,i.kt)("p",null,"A web application, usually referred to as ",(0,i.kt)("strong",{parentName:"p"},'"the web frontend"'),", has been\ncreated. It supports the first two steps of the process outlined in the previous\nsection, which require humans creating conversations (step 1) and ranking\nanswers (step 2). It also supports the inference step, creating a chat\ninterface."),(0,i.kt)("p",null,"For data gathering, two discord bots were created, one using Python and the\nother using Javascript. The latter also supports the inference process."),(0,i.kt)("p",null,"For doing the inference, an ",(0,i.kt)("strong",{parentName:"p"},'"inference service"')," has been created."),(0,i.kt)("p",null,"In addition, for collecting the instruction dataset, a set of ",(0,i.kt)("strong",{parentName:"p"},"scripts and\nnotebooks")," is being developed."),(0,i.kt)("p",null,"There's also a ",(0,i.kt)("strong",{parentName:"p"},"FastAPI backend")," that stores the conversation trees and its\nmetadata (labels and ranking)."),(0,i.kt)("h2",{id:"the-technologies"},"The technologies"),(0,i.kt)("h3",{id:"the-web-frontend"},"The web frontend"),(0,i.kt)("p",null,"The web frontend is a ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," application, so it uses\nTypescript, HTML, CSS and node.js. Some libraries it uses are\n",(0,i.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI")," for the UI elements and\n",(0,i.kt)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18-next")," for the internationalization. Its source\ncode is in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/website"},"website directory"),".\nThe\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/blob/main/website/README.md"},"README in that directory"),"\nhas more information about the frontend."),(0,i.kt)("p",null,"The container in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/blob/main/docker-compose.yaml"},"dockerfile"),"\nis called ",(0,i.kt)("inlineCode",{parentName:"p"},"web"),' with a comment that refers to it as the "oassist web service".\nThe node.js server is "the backend of the frontend", not to be confused with the\n"FastAPI backend" that will be discussed later.'),(0,i.kt)("p",null,"The web frontend also uses a Postgres database for authentication and caching.\nThis is called the ",(0,i.kt)("inlineCode",{parentName:"p"},"webdb")," in the Dockerfile. ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma"),"\nis used as an ORM for this Postgres database."),(0,i.kt)("p",null,"When you run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," in the website directory, it starts the Next.js\napplication in the node server. The Next.js application is available at\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,i.kt)("p",null,"In the Dockerfile, there's also a ",(0,i.kt)("inlineCode",{parentName:"p"},"maildev")," container that is used to be able to\nsent emails for registration, although for local development there are fake\nusers pre-created and this is not required. There is a fake user called ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),"\nand it can be assigned a role during log in."),(0,i.kt)("p",null,"There are other scripts related to the frontend in the directory\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/scripts/frontend-development"},"scripts/frontend-development"),"."),(0,i.kt)("p",null,"Another included tool that can be interesting during development is\n",(0,i.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"storybook"),": it allows you to test UI components\nwithout having to run the whole application."),(0,i.kt)("h3",{id:"the-discord-bots"},"The Discord bots"),(0,i.kt)("p",null,"These are the Discord bots mentioned above. Their source code is in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/discord-bots"},"discord-bots"),"\ndirectory."),(0,i.kt)("h3",{id:"the-fastapi-backend"},"The FastAPI backend"),(0,i.kt)("p",null,"This provides an API that's used by the web frontend and the Discord bots to\nstore conversation trees and their metadata. It's written in Python using\nFastAPI as framework and its source code is in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/backend"},"backend directory"),".\nIt's called ",(0,i.kt)("inlineCode",{parentName:"p"},"backend")," in the Dockerfile."),(0,i.kt)("p",null,'It has another Postgres database, the "backend database", called just ',(0,i.kt)("inlineCode",{parentName:"p"},"db")," in\nthe Dockerfile."),(0,i.kt)("p",null,"There's also a Redis database, called ",(0,i.kt)("inlineCode",{parentName:"p"},"redis")," in the Dockerfile, for caching API\nrequests."),(0,i.kt)("p",null,"In the Dockerfile, there are also two containers with development support tools\nfor the databases: ",(0,i.kt)("inlineCode",{parentName:"p"},"adminer"),", which can be used to inspect the Postgres\ndatabases, and ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-insights")," to inspect the Redis database."),(0,i.kt)("p",null,"Although there's some data already in the Postgres backend database, more can be\ngenerated using the automation script called\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/blob/main/text-frontend/auto_main.py"},"auto_main.py"),"."),(0,i.kt)("p",null,"There's\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1iaX_nxasVWlvPiSNs0cllR9L_1neZq0RJxd6MFEalUY/edit#slide=id.g1c26e0a54b8_0_948"},"a presentation"),"\nthat explains the main data structures used in the backend, basically, the\nconversation tree and the work package."),(0,i.kt)("h3",{id:"the-inference-service"},"The inference service"),(0,i.kt)("p",null,"The inference service is the component that answers prompts using a model, i.e.,\nit is the assistant itself. It's written in Python and its source code is in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/inference"},"inference"),"\ndirectory. It has a server and several workers. It also has its own Postgres\ndatabase in a container called ",(0,i.kt)("inlineCode",{parentName:"p"},"inference-db")," in the Dockerfile, and a Redis\ndatabase in the ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-inference")," container. There's another container for\nsafety called ",(0,i.kt)("inlineCode",{parentName:"p"},"inference-safety"),"."),(0,i.kt)("p",null,"The server is a FastAPI application that communicates via websockets with the\nworkers, which are the ones that use the model to carry out the inference."),(0,i.kt)("h3",{id:"model-training-tools"},"Model training tools"),(0,i.kt)("p",null,"The tools to train the different models are in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/model"},"model")," directory.\nThey are scripts written in Python that use libraries such as PyTorch and\nTransformers from Hugging Face."),(0,i.kt)("h3",{id:"the-instruction-dataset-scripts-and-notebooks"},"The instruction dataset scripts and notebooks"),(0,i.kt)("p",null,"The collection of the instruction datasets is organized in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/data"},"data")," directory.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/blob/main/data/datasets/README.md"},"This guide"),"\nexplains how to contribute a new dataset."),(0,i.kt)("p",null,"There's also a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/notebooks"},"notebooks"),"\ndirectory with different notebooks for data scraping and augmentation, but it's\nbeing deprecated in favor of the directory\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/blob/main/data/datasets"},"data/datasets"),"."),(0,i.kt)("h3",{id:"the-docs"},"The docs"),(0,i.kt)("p",null,"The documentation is in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/docs"},"docs")," directory.\nIt's written in Markdown and it uses Docosaurus 2 as the static site generator."),(0,i.kt)("h3",{id:"the-deployment"},"The deployment"),(0,i.kt)("p",null,"The deployment is done with containers, using V2 of ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose")," (not to be\nconfused with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose"),", with hyphen, see this\n",(0,i.kt)("a",{parentName:"p",href:"https://projects.laion.ai/Open-Assistant/docs/faq#docker-compose-instead-of-docker-compose"},"FAQ"),").\nIt is based on profiles. These are the ones that are currently available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"frontend-dev"),". It includes these containers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"redis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"webdb"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"adminer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"maildev"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"backend"))))),(0,i.kt)("p",null,"Notice that it doesn't include the oassist web service (",(0,i.kt)("inlineCode",{parentName:"p"},"web")," container): during\nfrontend development, you are supposed to launch it with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," in the\nwebsite directory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"backend-dev"),". It includes these containers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"redis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"redis-insights"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"adminer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"backend")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ci"),". It's basically both the backend and the frontend without the development\ntools. It includes these containers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"redis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"webdb"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"maildev"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"backend"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"inference"),". It includes these containers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inference-db"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"inference-server"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"inference-worker"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"inference-redis")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"inference-dev"),". It includes these containers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"web-db"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"backend")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"inference-safety"),". It includes these containers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inference-safety")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"observability"),". It includes tools to monitor the application. It includes\nthese containers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prometheus"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"netdata"))))),(0,i.kt)("p",null,"Notice that you can combine profiles, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"ci")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"observability"),"."),(0,i.kt)("p",null,"The following figure shows containers in circles, grouped in boxes that\ncorrespond with roles, not with actual profiles:"),(0,i.kt)("mermaid",{value:'flowchart TD\n    browser[browser]\n    subgraph frontend\n        web(("web <br> (node.js)")) --\x3e\n        webdb(("webdb <br> (Postgres)"))\n    end\n    subgraph backend\n        backend-c(("backend <br> (FastAPI)")) --\x3e db(("db <br> (Postgres)"))\n        backend-c --\x3e redis((redis))\n    end\n    subgraph observability\n        pro((prometheus))\n        grafana((grafana))\n        netdata((netdata))\n    end\n    subgraph ci\n        frontend\n        backend\n    end\n    subgraph inference\n        infworker1((inference-worker <br> 1))\n        infworker2((inference-worker <br> ...))\n        infworkerN((inference-worker <br> n))\n        infserv(("inference-server <br> (FastAPI)")) --\x3e infdb(("inference-db <br> (Postgres)"))\n        infsafety((inference-safety))\n        infserv --\x3e infworker1\n        infserv --\x3e infworker2\n        infserv --\x3e infworkerN\n        infserv --\x3e infsafety\n    end\n    subgraph support[Dev support tools]\n        adminer((adminer))\n        redisinsights((redis-insights))\n        maildev((maildev))\n    end\n    web -- API calls --\x3e backend-c\n    web -- API calls --\x3e infserv\n    browser --\x3e web'}),(0,i.kt)("p",null,"There are ansible playbooks in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/tree/main/ansible"},"ansible"),"\ndirectory."),(0,i.kt)("p",null,"In addition to the production deployment, available at the project website,\n",(0,i.kt)("a",{parentName:"p",href:"https://open-assistant.io/"},"https://open-assistant.io/"),", there's also a staging deployment at\n",(0,i.kt)("a",{parentName:"p",href:"https://web.staging.open-assistant.io/"},"https://web.staging.open-assistant.io/"),"."),(0,i.kt)("h2",{id:"the-teams"},"The teams"),(0,i.kt)("p",null,"The major contributors, founders and initiators are Yannic Kilcher\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yk"},"yk")," on GitHub), who has a\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/@YannicKilcher"},"YouTube channel")," with a large\ncommunity, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andreaskoepf"},"Andreas K\xf6pf"),", who is the Tech\nLead, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/christophschuhmann"},"Christoph Schumann"),", who is the\nOrganizational Lead and a founder of ",(0,i.kt)("a",{parentName:"p",href:"https://laion.ai/"},"LAION"),", and Huu Nguyen,\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ontocord"},"Ontocord"),"."),(0,i.kt)("p",null,"There's a ",(0,i.kt)("a",{parentName:"p",href:"https://open-assistant.io/team"},"Teams page")," and a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/blob/main/CODEOWNERS"},"CODEOWNERS"),"\nfile that lists the code owners of different parts of the project. However,\nthere are many\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant/graphs/contributors"},"other contributors"),",\norganized in teams, which use\n",(0,i.kt)("a",{parentName:"p",href:"https://ykilcher.com/open-assistant-discord"},"the Discord server")," for\ncoordination."))}c.isMDXComponent=!0}}]);