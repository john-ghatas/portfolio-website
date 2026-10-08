import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <div className="border-accent/20 flex w-max items-center gap-2 overflow-hidden rounded-lg border bg-white px-4 py-3 text-sm shadow-xs sm:text-base md:px-6 md:py-3 md:text-lg dark:bg-zinc-800">
      <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
      <span className="font-medium">{name}</span>
    </div>
  );
}
