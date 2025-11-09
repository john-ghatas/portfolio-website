import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE, PROJECTS, CERTIFICATES } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About John Ghatas | Platform Engineer"
        description="John Ghatas is a Platform Engineer building robust, enterprise-like infrastructure from the ground up. Experienced with RHEL, Terraform, Packer, Proxmox, Debian, and pfSense, he’s expanding into Kubernetes to create scalable, automated environments that bridge homelabs and production-grade setups."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About John Ghatas - Platform Engineer",
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
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer portfolio, Software Developer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Certificates" details={CERTIFICATES} />
      <ExperienceShowcaseList title="Projects" details={PROJECTS} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
