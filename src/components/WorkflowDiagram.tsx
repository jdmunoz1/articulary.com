/* Reusable workflow / process-diagram graphic component. */

export interface WorkflowStep {
  label: string;
  detail?: string;
  icon?: string;
}

export function WorkflowDiagram({
  title,
  steps,
}: {
  title?: string;
  steps: { icon?: string; label: string; detail?: string }[];
}) {
  return (
    <figure className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--brand-soft)]/40 p-6">
      {title && (
        <figcaption className="mb-5 text-sm font-bold uppercase tracking-wide text-[var(--brand-ink)]">
          {title}
        </figcaption>
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-1 items-center gap-2 sm:flex-col sm:gap-0">
            <div className="flex flex-1 flex-col items-center rounded-xl border border-[var(--border)] bg-white p-4 text-center shadow-sm sm:flex-1">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--violet)] text-sm font-bold text-white">
                {step.icon ?? i + 1}
              </div>
              <div className="mt-2 text-sm font-semibold text-[var(--ink)]">{step.label}</div>
              {step.detail && <div className="mt-1 text-xs text-[var(--muted)]">{step.detail}</div>}
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className="hidden text-[var(--brand)] sm:block sm:mt-5 sm:text-xl">→</span>
            )}
          </div>
        ))}
      </div>
    </figure>
  );
}
