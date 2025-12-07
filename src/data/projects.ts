import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Generic Helm Charts",
    href: "https://github.com/john-ghatas/helmhub",
    tags: ["Kubernetes", "Helm", "Automation"],
    image: {
      LIGHT: "/images/projects/helm.png",
      DARK: "/images/projects/helm.png",
    },
  },
  {
    index: 1,
    title: "Ansible Playbooks",
    href: "https://github.com/john-ghatas/ansible-collection",
    tags: ["Ansible", "Automation"],
    image: {
      LIGHT: "/images/projects/ansible.png",
      DARK: "/images/projects/ansible.png",
    },
  },
  {
    index: 2,
    title: "Ansible Roles",
    href: "https://github.com/jg-ansible",
    tags: ["Ansible", "Automation"],
    image: {
      LIGHT: "/images/projects/ansible-roles.png",
      DARK: "/images/projects/ansible-roles.png",
    },
  },
  {
    index: 3,
    title: "Immutable Linux Repo",
    href: "https://github.com/john-ghatas/immutable-setup",
    tags: ["Fedora", "Open Source", "Automation"],
    image: {
      LIGHT: "/images/projects/immutable.png",
      DARK: "/images/projects/immutable.png",
    },
  },
  {
    index: 4,
    title: "GH Actions Starter",
    href: "https://github.com/john-ghatas/github-actions-prep",
    tags: ["CI/CD", "Linux", "Bash", "Github Actions"],
    image: {
      LIGHT: "/images/projects/gha.png",
      DARK: "/images/projects/gha.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Ansible Playbooks",
    favicon: "/images/projects/logos/ansible.png",
    imageUrl: ["/images/projects/ansible.png"],
    description:
      "A set of automated maintenance and setup tasks for Debian and RHEL 9 installations.",
    sourceCodeHref: "https://github.com/john-ghatas/ansible-collection",
    liveWebsiteHref: "https://github.com/john-ghatas/ansible-collection",
  },
  {
    name: "Generic Helm Charts",
    favicon: "/images/projects/logos/github.png",
    imageUrl: ["/images/projects/helm.png"],
    description:
      "A set of helm charts to be used for deployments - this repository includes my own Helm repo hosted via GitHub Pages.",
    sourceCodeHref: "https://github.com/john-ghatas/helmhub",
    liveWebsiteHref: "https://john-ghatas.github.io/helmhub/index.yaml",
  },
  {
    name: "Ansible Roles",
    favicon: "/images/projects/logos/ansible.png",
    imageUrl: ["/images/projects/ansible-roles.png"],
    description:
      "A set of ansible roles to automate initial host installs for RHEL and Debian machines.",
    sourceCodeHref: "https://github.com/jg-ansible",
    liveWebsiteHref: "https://github.com/jg-ansible",
  },
  {
    name: "Portfolio Website",
    favicon: "/images/projects/logos/github.png",
    imageUrl: ["/static/homepage.png"],
    description:
      "The source code to the Portfolio website including multi-arch Docker builds used to deploy on a mixed arch cluster.",
    sourceCodeHref: "https://github.com/john-ghatas/portfolio-website",
    liveWebsiteHref: "https://johnghatas.com",
  },
  {
    name: "GH Actions Starter",
    favicon: "/images/projects/logos/github.png",
    imageUrl: ["/images/projects/gha.png"],
    description:
      "A quickstart repo to get started with using GitHub Actions in combination with a baremetal hosted website.",
    sourceCodeHref: "https://github.com/john-ghatas/github-actions-prep",
    liveWebsiteHref: "https://github.com/john-ghatas/github-actions-prep",
  },
  {
    name: "Immutable Linux Repo",
    favicon: "/images/projects/logos/github.png",
    imageUrl: ["/images/projects/immutable.png"],
    description:
      "A set of personal scripts and containerfiles that I used to setup my equipment, mainly focused on Fedora Atomic and Distrobox made available.",
    sourceCodeHref: "https://github.com/john-ghatas/immutable-setup",
    liveWebsiteHref: "https://github.com/john-ghatas/immutable-setup",
  },
];
