type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, lead, id }: Props) {
  return (
    <header className="max-w-3xl">
      <p className="eyebrow" data-station>
        {eyebrow}
      </p>
      <h2 id={id} className="display-tight mt-4 text-[clamp(2rem,5vw,3.25rem)]">
        {title}
      </h2>
      {lead && <p className="mt-5 max-w-[60ch] text-stone">{lead}</p>}
    </header>
  );
}
