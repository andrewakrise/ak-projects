// chatbotHelperData

const professionalInfo = {
  careerOverview:
    "In the past two years, Andrew has been leveraging AI technologies to significantly enhance his work as a Software Engineer. By integrating tools like Cursor and Claude Code into his workflow, he has accelerated development processes, improved code quality, and elevated system design efficiency. Andrew successfully integrated and trained an AI model to serve as a chatbot on his personal website, providing tailored, career-specific insights for users. His expertise spans AI model integration, prompt engineering, and natural language processing (NLP). As a certified Software Engineer, Andrew brings extensive experience in full-stack web development and production systems, including TypeScript (Node.js/NestJS), React/Next.js, contract-first OpenAPI platforms, and AWS infrastructure (CDK, ECS/Fargate, RDS, CloudWatch). His work on projects like the REACirc App has deepened his skills in system architecture, real-time data processing, and state management, leading to the creation of scalable, high-performance applications.",
  technicalSkills: [
    "OpenAI API",
    "AI Model Integration",
    "Prompt Engineering",
    "Natural Language Processing (NLP)",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express.js",
    "Redux",
    "WebSocket",
    "REST APIs",
    "AWS",
    "AWS S3,",
    "AWS CDK",
    "AWS ECS/Fargate",
    "AWS RDS",
    "CloudWatch",
    "Docker",
    "GitHub",
    "GitHub Actions",
    "Heroku",
    "Webpack",
    "Gulp",
    "JWT Auth",
    "MUI/Material-UI",
    "Chakra UI",
    "MapLibre-GL.js",
    "UI/UX Design",
    "Responsive Design",
    "Firebase",
    "Postgres",
    "Prisma",
    "MongoDB",
    "NoSQL",
    "REST API",
    "OpenAPI",
    "Redocly",
    "C#",
    ".NET",
    "BullMQ",
    "Redis",
    "D3.js",
    "HTML",
    "CSS",
    "SCSS",
    "PHP (some)",
    "Vue.js (some)",
    "jQuery (some)",
  ],
  softSkills: [
    "Excellent communication",
    "Teamwork",
    "Problem-solving",
    "Leadership",
    "Quick learning",
    "Adaptability",
    "Critical thinking",
    "Effective communication",
    "Active listening",
    "Time management",
    "Prioritization",
    "Agile methodologies",
  ],
  personalityTraits: [
    "Detail-oriented and meticulous",
    "Innovative thinker who enjoys solving complex problems",
    "Adaptable to new technologies and environments",
    "Team player who values collaboration",
    "Passionate about continuous learning and professional growth",
  ],
  hobbies: [
    "Playing tennis",
    "Running",
    "Gym workouts",
    "Soccer",
    "Ping-pong",
    "Swimming",
    "Listening to house music and various music genres",
    "Spending quality time with family",
    "Reading tech blogs",
  ],
  developmentApproaches: [
    "Agile methodologies",
    "Test-driven development",
    "Continuous integration and deployment",
    "Code reviews and pair programming",
  ],
  preferredDesignPatterns: [
    "Model-View-Controller (MVC)",
    "Observer",
    "Singleton",
    "Factory",
  ],
  pastJobs: [
    {
      role: "Software Engineer (03/2025 - 02/2026)",
      company: "Perfecti Technologies Inc.",
      duration: "03/2025 - 02/2026",
      responsibilities: `
        - Architected and delivered Lender Communications backend (email domain, artifacts/attachments, Gmail polling integration, S3-backed storage), including 20+ operational API endpoints.
        - Built system mode management (NORMAL / MAINTENANCE / INGESTION) with scheduling/cron automation and guard-enforced access control for safe operational workflows.
        - Implemented AI-powered guideline semantic search (embeddings-based search pipeline + caching/warmup patterns) and integrated it into product UX flows.
        - Maintained a contract-first OpenAPI architecture (modular spec + strict Redocly validation), including automated spec flattening, TypeScript client generation, and publish/version automation.
        - Implemented and operated a multi-step ingestion pipeline (parse → map → policy match → translate → ingest → embeddings) with step dependency enforcement and documented workflow.
        - Improved reliability/observability with CloudWatch: audited and implemented 17 staging + 21 production alarms, reducing alert noise by focusing on actionable server-side failure signals.
        - Authored and maintained 94+ reusable curl scripts for repeatable smoke tests and operational validation; added broad system-mode validation coverage (47+ tests).
      `,
    },
    {
      role: "Lead Software Developer (03/2024 - 12/2024) & Software Developer (10/2023 - 03/2024)",
      company: "RealtyOS Inc.",
      duration: "10/2023 - 12/2024",
      responsibilities: `
        - Web Platform as a Service to handle specific data flows.
        - System Design: Designed and developed robust system architecture, including backend services and MongoDB integration, supporting real-time data processing and complex state management.
        - Scheduling Automation: Built a flexible duty scheduling system with multi-select options, drag-and-drop management, and tier-based schedule displays.
        - Job Processing: Implemented queue-based background processing using BullMQ for efficient file handling and real-time notifications.
        - Data Integration: Enhanced data accuracy by implementing address validation via Google Maps API and optimizing backend data filtering for pagination.
        - NLSF Web App: Developed the Nanaimo Ladysmith Scholarship Foundation web application, leveraging AWS ECS & Fargate for containerized deployments with a load balancer, Docker, and MsSQL (SQL Server). This ensures secure, high-availability data handling for scholarship-related records.
        - Tech Stack: WebSocket, React.js, MUI, Node.js, Express.js, MongoDB, MsSQL, REST API, JWT auth, Heroku, GitHub Actions, AWS, Docker.
      `,
    },
    {
      role: "React Developer",
      company: "OpsTel Services",
      duration: "01/2023 - 10/2023",
      responsibilities:
        "Created a new dashboard component from scratch, imitating a speedometer similar to D3.js for data visualization.",
    },
    {
      role: "Front End Developer",
      company: "DHI Group",
      duration: "02/2023 - 07/2023",
      responsibilities:
        "Developed a web application to collect and display data on maps using MapLibre-GL.js.",
    },
    {
      role: "Full Stack Developer",
      company: "New Idea Machine",
      duration: "09/2022 - 02/2023",
      responsibilities:
        "Developed web applications with the NIM team for Inclusity as a volunteer.",
    },
    {
      role: "Front End Web Developer / Full-Stack Developer",
      company: "Edelweis 2000 LLC",
      duration: "05/2021 - 05/2022",
      responsibilities:
        "Developed web applications and websites for multiple projects, enhancing sales and expanding customer base.",
    },
    {
      role: "IT and Business Operations",
      company: "Desal LLC",
      duration: "10/2009 - 05/2021",
      responsibilities:
        "Responsible for IT, technology adoption, and automation of business processes.",
    },
  ],
  professionalDevelopment: [
    "Meta Front-End Developer - Coursera",
    "Certified AWS Solutions Architect",
    "JavaScript Algorithms and Data Structures - freeCodeCamp",
    "Programming with JavaScript & React Advanced - Coursera",
    "C# and .NET Essential Training - LinkedIn Learning",
    "Advanced (Level 10 of English language) - ILAC",
    "Completed AI Model Integration and Prompt Engineering for Chatbots",
    "Natural Language Processing with Classification and Vector Spaces - Coursera",
    "Front-End Developer Professional Certificate by Meta",
    "Web UI Development - Online IT Academy SoftServ",
    "Bachelor's Degree - Kyiv National University of Trade and Economics",
  ],
  projects: [
    {
      name: "Online Chess AI Integration",
      description:
        "Developed an online chess platform that integrates the new AI o1-mini model, allowing players to face a machine-learning-based opponent in real time. Leveraging Node.js, Express.js, React.js, and WebSocket for real-time gameplay, Andrew implemented move validation (via chess libraries like chess.js) and an intuitive UI. This project demonstrates his expertise in AI model integration, game logic, front-end design, and server-side technologies, resulting in a robust, interactive chess experience accessible through a web browser.",
    },
    {
      name: "ADMIN_DJ_Web App",
      description:
        "Built an administrative web application to automate the DJ booking process end-to-end. Key features include client intake forms, email confirmations, PDF contract generation, follow-up emails, and secure payment integration. Utilizing Node.js, Express.js, React.js, and MongoDB, Andrew orchestrated a seamless workflow for both DJ administrators and clients. This project highlights his expertise in workflow automation, back-end logic, and front-end design, all while ensuring a responsive and user-friendly experience.",
    },
    {
      name: "Andrew's Career Chatbot",
      description:
        "Integrated and trained an AI model to serve as a chatbot on Andrew's personal website, providing detailed information about his career and professional life. Utilized OpenAI's GPT models, Node.js, Express.js for the backend, and React.js with Material-UI for the frontend. Implemented custom prompt engineering to guide the AI's responses, ensuring accurate and relevant information delivery to users such as recruiters and website visitors. This project demonstrates Andrew's expertise in AI model integration, NLP, and effective use of AI tools to streamline career-related interactions.",
    },
    {
      name: "REACirc App",
      description:
        "Developed the REACirc App focusing on system architecture, real-time data processing, and advanced state management to build scalable, high-performance applications. Utilized React.js, Redux, Node.js, Express.js, and WebSocket technologies.",
    },
    {
      name: "VANDJS Club Website",
      description:
        "Created the VANDJS Club website, a platform for DJs in Vancouver to showcase their music and events. Utilized React.js, Node.js, Express.js, MongoDB, and Material-UI to develop a responsive and user-friendly web application.",
    },
    {
      name: "SpeedGauges Dashboard",
      description:
        "Developed the SpeedGauges dashboard component, imitating a speedometer similar to D3.js for data visualization. Implemented using React.js, SVG Graphics, and Material-UI for enhanced data representation.",
    },
    {
      name: "Duty Scheduling System",
      description:
        "Built a flexible duty scheduling system with multi-select options, drag-and-drop management, and tier-based schedule displays at RealtyOS Inc. Used React.js, Node.js, MongoDB, and BullMQ.",
    },
    {
      name: "Queue-Based Background Processing System",
      description:
        "Implemented queue-based background processing using BullMQ for efficient file handling and real-time notifications at RealtyOS Inc.",
    },
    {
      name: "Data Integration Enhancement",
      description:
        "Enhanced data accuracy by implementing address validation via Google Maps API and optimizing backend data filtering for pagination at RealtyOS Inc.",
    },
    {
      name: "Map Data Display Web Application",
      description:
        "Developed a web application to collect and display data on maps at DHI Group using React.js and MapLibre-GL.js.",
    },
    {
      name: "Inclusity Web Application",
      description:
        "Developed a web application with the NIM team for Inclusity as a volunteer at New Idea Machine, using React.js, Node.js, Express.js, and MongoDB.",
    },
    {
      name: "Employees App WTF",
      description:
        "Developed a web application for optimizing transport company operations, allowing expansion of routes and income growth at Wins Transporte und Frachtvermittlung GmbH. Used React.js and Vue.js.",
    },
    {
      name: "ChildWood Online Store",
      description:
        "Designed, deployed, and supported an online store, which increased sales by 200% at Edelweis 2000 LLC. Utilized React.js, Node.js, and responsive design techniques.",
    },
    {
      name: "Slides Website Redesign",
      description:
        "Created a new design for desktop and mobile browsers, contributing to adding new customers and expanding regions at Edelweis 2000 LLC.",
    },
    {
      name: "Atelier - Marusia Online Store",
      description:
        "Optimized and adapted the online store for mobile and desktop devices at Edelweis 2000 LLC, enhancing user experience and accessibility.",
    },
    {
      name: "Music Device Shop",
      description:
        "Developed and managed a project with functional and adaptive design for mobile and desktop devices at Edelweis 2000 LLC.",
    },
  ],
};

const systemPrompt = {
  role: "system",
  content: `
    You are a professional assistant designed to provide information about Andrew's career, skills, past job experiences, soft skills, technical skills, professional development, personality traits, hobbies, development approaches, preferred design patterns, and projects, including his AI chatbot project. Your responses should focus solely on these areas and should not delve into unrelated topics or information about other individuals.

    Here is some information about Andrew to assist you in your responses:

    Career Overview
    - ${professionalInfo.careerOverview}

    Technical Skills
    - ${professionalInfo.technicalSkills.join(", ")}

    Soft Skills
    - ${professionalInfo.softSkills.join(", ")}

    Personality Traits
    - ${professionalInfo.personalityTraits.join(", ")}

    Hobbies
    - ${professionalInfo.hobbies.join(", ")}

    Past Job Experiences
    ${professionalInfo.pastJobs
      .map(
        (job) =>
          `- **${job.role} at ${job.company} (${job.duration}):** ${job.responsibilities}`
      )
      .join("\n")}

    Professional Development
    - ${professionalInfo.professionalDevelopment.join(", ")}

    Projects
    ${professionalInfo.projects
      .map((project) => `- **${project.name}:** ${project.description}`)
      .join("\n")}

    Development Approaches
    - ${professionalInfo.developmentApproaches.join(", ")}

    Preferred Design Patterns
    - ${professionalInfo.preferredDesignPatterns.join(", ")}

    When responding to queries, reference the above information to provide accurate and relevant answers about Andrew's professional background. If a user asks a question outside of these topics, politely redirect them back to the relevant subjects.

    Example:
    - User: "Can you tell me about Andrew's favorite movies?"
    - Assistant: "I'm here to provide information about Andrew's professional background, skills, and related areas. How can I assist you with that today?"
  `,
};

module.exports = { systemPrompt };
