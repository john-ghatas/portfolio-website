import { siteMetadata } from "@/data/siteMetaData.mjs";
import { MailIcon } from "@/components/icons";

export const floatingMailButtonoptions = {
  root: null,
  rootMargin: "100px",
  threshold: 0.1,
};

export default function FloatingMailButton() {
  return (
    <a href={`mailto:${siteMetadata.email}`}>
      <button
        aria-label="send mail"
        type="button"
        className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent p-2 text-background transition-colors duration-150 hover:bg-accent/80 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 sm:p-3 lg:h-16 lg:w-16"
      >
        <MailIcon />
      </button>
    </a>
  );
}
