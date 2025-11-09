import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "CI/CD Engineer",
    organisation: {
      name: "Keylane",
      href: "https://keylane.com",
    },
    date: "August 2021 - Present",
    location: "Utrecht",
    description:
      "As a Medior CI/CD Engineer, I’m responsible for lifecycle management, process optimization, and routine maintenance. \
    I also help ensure clients’ platforms run reliably and oversee company-wide changes when required.",
  },
  {
    title: "Full Stack Developer",
    organisation: {
      name: "StatlerBI",
      href: "https://www.statler.bi/",
    },
    date: "March 2021 - June 2021",
    location: "Amsterdam",
    description:
      "For StatlerBI I have developed a full-stack solution to process data and make it accessable to internal tooling. \
    Addtional applications were developed later in the lifecycle to make the output visible to employees who needed access.",
  },
  {
    title: "Intern DevOps",
    organisation: {
      name: "Unc Inc",
      href: "https://www.uncinc.nl/nl",
    },
    date: "September. 2020 ‑ February. 2021",
    location: "Amsterdam",
    description:
      "During the closing internship, research is done on what is needed to add automatic deployment to critical environments. \
    A new workflow of deploying Drupal applications is implemented with excellent legacy support and proper handling of all crucial edge \
    cases.",
  },
  {
    title: "Full Stack Developer - Intern",
    organisation: {
      name: "Hybriq",
      href: "",
    },
    date: "September 2018 - February 2019",
    location: "Amsterdam",
    description:
      "In my period at Hybriq I helped build a questionnaire bulding system built on the React.js",
  },
  {
    title: "Employee Central Student Administration",
    organisation: {
      name: "University of Amsterdam",
      href: "https://uva.nl",
    },
    date: "May 2018 - August 2018 | February 2019 - August 2019",
    location: "Amsterdam",
    description:
      "During my time at the University of Amsterdam’s Department of Student Administration, I contributed to the student vetting process and \
      supported various administrative workflows with accuracy and attention to detail.",
  },
];

export const CERTIFICATES: ExperienceShowcaseListItemProps[] = [
  {
    title: "LFS158",
    organisation: {
      name: "Linux Foundation",
      href: "https://linuxfoundation.org",
    },
    date: "November 2025",
    location: "Introduction to Kubernetes",
    description:
      "Completed an introductory Kubernetes course with advanced aspect to the material taught, supplemented with \
      practical experience gained from deploying (production) applications to my personal Kubernetes cluster(s).",
  },
  {
    title: "LFS101",
    organisation: {
      name: "Linux Foundation",
      href: "https://linuxfoundation.org",
    },
    date: "June 2025",
    location: "Introduction to Linux",
    description: "Completed the LFS101 Course taught by the Linux Foundation.",
  },
];

export const PROJECTS: ExperienceShowcaseListItemProps[] = [
  {
    title: "Homelab Platform Engineer",
    organisation: {
      name: "Home",
      href: "https://johnghatas.com",
    },
    date: "August 2022 - Present",
    location: "Onsite",
    description:
      "Built a Proxmox-based virtualized environment with automated VM deployments using Ansible, Packer, and Terraform. \
    The infrastructure runs behind a dedicated firewall powered by a Sense OS for secure and segmented networking.",
  },
  {
    title: "Developer",
    organisation: {
      name: "CERN",
      href: "https://home.cern/",
    },
    date: "February 2020 - July 2020",
    location: "Remote",
    description:
      "Collaborated in a team of eight on a project commissioned by CERN, delivering a new iteration of the ALICE experiment logbook. \
      The project involved modernizing an existing product with an updated framework and interface, while integrating Docker to achieve \
      OS-agnostic deployment and improved portability.",
  },
  {
    title: "Authorization Portal Blockchain - Full Stack Developer",
    organisation: {
      name: "CGI",
      href: "https://www.cgi.com/nl/nl",
    },
    date: "September 2019 - February 2020",
    location: "Rotterdam",
    description:
      "Developed a blockchain-based authorization portal enabling civilians to manage assigned tasks. Worked in a two-person team, \
      responsible for the frontend and blockchain communication layer. This project also marked my first hands-on experience with Linux \
      system management.",
  },
];
