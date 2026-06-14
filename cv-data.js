/*
 * cv-data.js — Contenido del CV (bilingüe ES/EN)
 * ------------------------------------------------
 * Editá este archivo para actualizar la información del sitio.
 * Cada texto tiene su versión en español (es) e inglés (en).
 *
 * Para confirmar/ajustar: las FECHAS marcadas con // TODO están estimadas
 * a partir de los CVs viejos. Revisalas y corregí lo que haga falta.
 */

const CV = {
  // --- Datos generales / encabezado ---
  name: "Nicolás Rodrigo Casco",
  title: {
    es: "Senior Infrastructure Engineer",
    en: "Senior Infrastructure Engineer",
  },
  tagline: {
    es: "Infraestructura cloud, automatización (IaC/CaC) y confiabilidad de sistemas. +10 años en redes, seguridad y SRE.",
    en: "Cloud infrastructure, automation (IaC/CaC) and systems reliability. 10+ years across networking, security and SRE.",
  },
  location: {
    es: "Córdoba, Argentina · Remoto",
    en: "Córdoba, Argentina · Remote",
  },

  // --- Contacto / enlaces (links públicos solamente) ---
  contact: {
    email: "nico.nrc@gmail.com",
    linkedin: "https://www.linkedin.com/in/nicolascasco/",
    github: "https://github.com/nickhelmet",
  },

  // --- Sobre mí ---
  about: {
    es: [
      "Ingeniero en Informática con más de 10 años de experiencia en infraestructura, redes y seguridad. Hoy enfocado en ingeniería de infraestructura y confiabilidad (SRE) para plataformas de comunicaciones a escala global.",
      "Diseño, despliego y opero infraestructura en la nube y bare-metal aplicando Infraestructura como Código (Terraform) y gestión de configuración (Ansible). Trabajo con contenedores y orquestación (Docker, Kubernetes) y pongo foco en observabilidad y métricas para diagnosticar y prevenir incidentes.",
      "Me gusta el trabajo en equipo, automatizar todo lo repetible y mejorar de forma continua. Disfruto aprender y adoptar tecnologías nuevas.",
    ],
    en: [
      "Computer Engineer with 10+ years of experience in infrastructure, networking and security. Currently focused on infrastructure engineering and reliability (SRE) for global-scale communications platforms.",
      "I design, deploy and operate cloud and bare-metal infrastructure using Infrastructure as Code (Terraform) and configuration management (Ansible). I work with containers and orchestration (Docker, Kubernetes) and put strong emphasis on observability and metrics to diagnose and prevent incidents.",
      "I enjoy teamwork, automating anything repeatable and continuous improvement. I love learning and adopting new technologies.",
    ],
  },

  // --- Experiencia laboral ---
  // 'current: true' la marca como actual.
  experience: [
    {
      company: "Telnyx",
      url: "https://telnyx.com",
      current: true,
      role: { es: "Senior Infrastructure Engineer", en: "Senior Infrastructure Engineer" },
      period: { es: "2021 — Presente", en: "2021 — Present" }, // TODO: confirmar fecha de inicio
      location: { es: "Remoto", en: "Remote" },
      bullets: {
        es: [
          "Diseño, despliegue y operación de infraestructura cloud y bare-metal para una plataforma global de comunicaciones (voz, mensajería y conectividad).",
          "Infraestructura como Código con Terraform y gestión de configuración con Ansible.",
          "Contenedores y orquestación con Docker y Kubernetes.",
          "Observabilidad, alertas y automatización para mejorar la confiabilidad de los servicios.",
        ],
        en: [
          "Design, deployment and operation of cloud and bare-metal infrastructure for a global communications platform (voice, messaging and connectivity).",
          "Infrastructure as Code with Terraform and configuration management with Ansible.",
          "Containers and orchestration with Docker and Kubernetes.",
          "Observability, alerting and automation to improve service reliability.",
        ],
      },
    },
    {
      company: "SINTyS — Sistema de Identificación Nacional Tributario y Social",
      url: "",
      role: { es: "Administrador de bases de datos / ETL", en: "Database Administrator / ETL" },
      period: { es: "2022 — 2023", en: "2022 — 2023" }, // TODO: confirmar fechas
      location: { es: "Argentina", en: "Argentina" },
      bullets: {
        es: [
          "Administración de bases de datos y procesos de ETL para sistemas de identificación nacional.",
        ],
        en: [
          "Database administration and ETL processes for national identification systems.",
        ],
      },
    },
    {
      company: "AAM Solutions",
      url: "https://aam.solutions/",
      role: { es: "Site Reliability Engineer", en: "Site Reliability Engineer" },
      period: { es: "2020 — 2021", en: "2020 — 2021" },
      location: { es: "Remoto", en: "Remote" },
      bullets: {
        es: [
          "Gestión de instancias y servicios en Google Cloud (GCP).",
          "Despliegue de infraestructura automatizada con Terraform y Ansible.",
          "Mantenimiento de aplicaciones en Docker y monitoreo con Grafana y alertas en Slack.",
        ],
        en: [
          "Management of instances and services on Google Cloud (GCP).",
          "Automated infrastructure deployment with Terraform and Ansible.",
          "Maintenance of Docker applications and monitoring with Grafana and Slack alerts.",
        ],
      },
    },
    {
      company: "Universidad Nacional de Córdoba (UNC)",
      url: "https://www.unc.edu.ar/",
      role: { es: "Ingeniero de Seguridad y Redes / Sysadmin", en: "Network Security Engineer / Sysadmin" },
      period: { es: "2012 — 2021", en: "2012 — 2021" },
      location: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
      bullets: {
        es: [
          "Analista de seguridad: pentesting, auditorías de seguridad y hardening de distribuciones Linux (Ubuntu/Debian/CentOS).",
          "Administración de redes y comunicaciones sobre Cisco/HP/Huawei/Mikrotik, soluciones de virtualización on-premise.",
          "Herramientas de escaneo de vulnerabilidades, IDS/IPS y soluciones de VPN/acceso remoto.",
        ],
        en: [
          "Security analyst: pentesting, security audits and hardening of Linux distros (Ubuntu/Debian/CentOS).",
          "Network and communications administration over Cisco/HP/Huawei/Mikrotik and on-premise virtualization solutions.",
          "Vulnerability scanning tools, IDS/IPS and VPN / remote-access solutions.",
        ],
      },
    },
    {
      company: "Box Custodia y Gestión Documental",
      url: "https://www.boxcustodia.com",
      role: { es: "CISO / Cloud (AWS)", en: "CISO / Cloud (AWS)" },
      period: { es: "2019 — 2020", en: "2019 — 2020" },
      location: { es: "Argentina", en: "Argentina" },
      bullets: {
        es: [
          "Responsable de seguridad de la información (CISO).",
          "Gestión de servicios en AWS (EC2, S3) e infraestructura automatizada con Terraform y Ansible sobre clústeres Proxmox.",
        ],
        en: [
          "Chief Information Security Officer (CISO).",
          "Management of AWS services (EC2, S3) and automated infrastructure with Terraform and Ansible over Proxmox clusters.",
        ],
      },
    },
    {
      company: "HKA — Horovitz, Kravetz y Asociados",
      url: "http://hka.com.ar/",
      role: { es: "CISO / Cloud (Azure)", en: "CISO / Cloud (Azure)" },
      period: { es: "2018 — 2020", en: "2018 — 2020" },
      location: { es: "Argentina", en: "Argentina" },
      bullets: {
        es: [
          "Software factory especializada en aplicaciones bancarias.",
          "Gestión de servicios en Microsoft Azure e infraestructura automatizada con Terraform y Ansible sobre clústeres VMware.",
        ],
        en: [
          "Software factory specialized in banking applications.",
          "Management of Microsoft Azure services and automated infrastructure with Terraform and Ansible over VMware clusters.",
        ],
      },
    },
  ],

  // --- Skills agrupadas ---
  skills: {
    es: [
      { group: "Cloud", items: ["GCP", "AWS", "Azure", "DigitalOcean"] },
      { group: "IaC / Automatización", items: ["Terraform", "Ansible"] },
      { group: "Contenedores / Orquestación", items: ["Docker", "Kubernetes", "Docker Swarm", "Proxmox", "VMware"] },
      { group: "Observabilidad", items: ["Grafana", "Prometheus", "Alertas (Slack)"] },
      { group: "Seguridad", items: ["Hardening Linux", "Pentesting", "IDS/IPS", "VPN", "Escaneo de vulnerabilidades"] },
      { group: "Redes", items: ["Cisco", "HP", "Huawei", "Mikrotik"] },
      { group: "Sistemas Operativos", items: ["Linux (Ubuntu/Debian/CentOS)"] },
    ],
    en: [
      { group: "Cloud", items: ["GCP", "AWS", "Azure", "DigitalOcean"] },
      { group: "IaC / Automation", items: ["Terraform", "Ansible"] },
      { group: "Containers / Orchestration", items: ["Docker", "Kubernetes", "Docker Swarm", "Proxmox", "VMware"] },
      { group: "Observability", items: ["Grafana", "Prometheus", "Alerting (Slack)"] },
      { group: "Security", items: ["Linux hardening", "Pentesting", "IDS/IPS", "VPN", "Vulnerability scanning"] },
      { group: "Networking", items: ["Cisco", "HP", "Huawei", "Mikrotik"] },
      { group: "Operating Systems", items: ["Linux (Ubuntu/Debian/CentOS)"] },
    ],
  },

  // --- Educación ---
  education: [
    {
      title: { es: "Ingeniero en Informática", en: "Computer Engineering Degree" },
      org: { es: "Instituto Universitario Aeronáutico (IUA)", en: "Aeronautic University Institute (IUA)" },
      period: { es: "2006 — 2013", en: "2006 — 2013" },
    },
  ],

  // --- Formación / becas ---
  certifications: [
    {
      title: { es: "Beca de Entrenamiento en Ciberseguridad", en: "Cybersecurity Training Scholarship" },
      org: { es: "Seúl, Corea del Sur (programa Argentina–Corea del Sur)", en: "Seoul, South Korea (Argentina–South Korea program)" },
      period: { es: "2016", en: "2016" },
      detail: {
        es: "Criptografía, autenticación, seguridad de redes, análisis forense digital, análisis de malware, cloud security e ISMS.",
        en: "Cryptography, authentication, network security, digital forensics, malware analysis, cloud security and ISMS.",
      },
    },
  ],

  // --- Idiomas ---
  languages: [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "Avanzado", en: "Advanced" } },
  ],
};
