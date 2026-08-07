export default function QuickAnswerBox({ points }: { points: string[] }) {
  return (
    <div className="rounded-md border-l-4 border-authority bg-authority-soft p-5 md:p-6">
      <div className="font-display text-base font-semibold text-authority-dark">
        Quick Answer
      </div>
      <ul className="mt-3 space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ink">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-signal" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
