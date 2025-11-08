import {
  SiPacker,
  SiAnsible,
  SiGnubash,
  SiPuppet,
  SiOpnsense,
  SiPfsense,
  SiUbiquiti,
  SiWireguard,
  SiOpenvpn,
  SiProxmox,
  SiKubernetes,
} from "react-icons/si";

import { FcLinux } from "react-icons/fc";

import { FaGithub, FaGitlab, FaMailBulk, FaDocker } from "react-icons/fa";

import { GiSquidHead } from "react-icons/gi";

import { MdOutlineDns } from "react-icons/md";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Tooling",
    skills: [
      {
        name: "RedHat Enterprise Linux",
        icon: FcLinux,
      },
      {
        name: "Ansible",
        icon: SiAnsible,
      },
      {
        name: "HashiCorp Packer",
        icon: SiPacker,
      },
      {
        name: "ArgoCD",
        icon: GiSquidHead,
      },
      {
        name: "Bash",
        icon: SiGnubash,
      },
      {
        name: "Gitlab CI",
        icon: FaGitlab,
      },
      {
        name: "Github Actions",
        icon: FaGithub,
      },
      {
        name: "Puppet",
        icon: SiPuppet,
      },
    ],
  },
  {
    sectionName: "Networking",
    skills: [
      {
        name: "OPNSense",
        icon: SiOpnsense,
      },
      {
        name: "pfSense",
        icon: SiPfsense,
      },
      {
        name: "Unifi",
        icon: SiUbiquiti,
      },
      {
        name: "Wireguard",
        icon: SiWireguard,
      },
      {
        name: "OpenVPN",
        icon: SiOpenvpn,
      },
    ],
  },
  {
    sectionName: "Infrastructure",
    skills: [
      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },
      {
        name: "Proxmox",
        icon: SiProxmox,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
    ],
  },
  {
    sectionName: "Supporting skills",
    skills: [
      {
        name: "Mailing",
        icon: FaMailBulk,
      },
      {
        name: "DNS",
        icon: MdOutlineDns,
      },
    ],
  },
];
