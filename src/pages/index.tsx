import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="John Ghatas | Platform Engineer"
        description="John Ghatas is a Platform Engineer building robust, enterprise-like infrastructure from the ground up. Experienced with RHEL, Terraform, Packer, Proxmox, Debian, and pfSense, he’s expanding into Kubernetes to create scalable, automated environments that bridge homelabs and production-grade setups."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "John Ghatas - Platform Engineer",
          description:
            "John Ghatas is a Platform Engineer building robust, enterprise-like infrastructure from the ground up. Experienced with RHEL, Terraform, Packer, Proxmox, Debian, and pfSense, he’s expanding into Kubernetes to create scalable, automated environments that bridge homelabs and production-grade setups.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "John Ghatas - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: `
            Platform Engineer, Terraform, Kubernetes, Packer, CI/CD, Infrastructure Automation,
            On-Premise, Private Cloud, Linux, RHEL, Debian, Docker, Podman, Ansible, Proxmox,
            pfSense, Networking, Firewall, Git, GitLab, Python, JavaScript, Homelab,
            Cloud Specialist, Portfolio
            `,
          },
        ]}
      />
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
