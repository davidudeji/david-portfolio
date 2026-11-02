type SectionLabelProps = {
  number: string;
  label: string;
};

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span aria-hidden="true">/</span>
      <span>{label}</span>
    </p>
  );
}
