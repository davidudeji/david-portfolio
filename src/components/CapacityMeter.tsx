type CapacityMeterProps = {
  percentage: number;
};

export default function CapacityMeter({ percentage }: CapacityMeterProps) {
  const value = Math.min(100, Math.max(0, Math.round(percentage)));
  const totalBlocks = 10;
  const filledBlocks = Math.round((value / 100) * totalBlocks);
  const blocks = Array.from({ length: totalBlocks }, (_, index) =>
    index < filledBlocks ? "█" : "░",
  ).join("");

  return (
    <div
      className="capacity-meter"
      role="meter"
      aria-label="Availability"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <span className="capacity-meter__blocks" aria-hidden="true">
        [{blocks}]
      </span>
      <span className="capacity-meter__value">{value}%</span>
      <span className="capacity-meter__label">Availability</span>
    </div>
  );
}
