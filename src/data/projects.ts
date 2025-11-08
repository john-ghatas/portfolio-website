import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Ansible Playbooks",
    href: "https://github.com/john-ghatas/ansible-collection",
    tags: ["Ansible", "Automation"],
    image: {
      LIGHT: "/images/projects/ansible.png",
      DARK: "/images/projects/ansible.png",
    },
  },
  {
    index: 1,
    title: "GH Actions Starter",
    href: "https://github.com/john-ghatas/github-actions-prep",
    tags: ["CI/CD", "Linux", "Bash", "Github Actions"],
    image: {
      LIGHT: "/images/projects/gha.png",
      DARK: "/images/projects/gha.png",
    },
  },
  {
    index: 2,
    title: "Immutable Linux Repo",
    href: "https://github.com/john-ghatas/immutable-setup",
    tags: ["Fedora", "Open Source", "Automation"],
    image: {
      LIGHT: "/images/projects/immutable.png",
      DARK: "/images/projects/immutable.png",
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
