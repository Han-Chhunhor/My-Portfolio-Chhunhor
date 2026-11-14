import React from "react";

function SectionHeading({
  as: Heading = "h2",
  id,
  eyebrow,
  children,
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className={`mt-0.5 ${eyebrow ? "h-12" : "h-9"} w-1.5 shrink-0 rounded-r bg-purple-500`}
      />
      <div>
        {eyebrow ? (
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
            {eyebrow}
          </p>
        ) : null}
        <Heading
          id={id}
          className="!text-2xl font-bold tracking-tight text-slate-800 sm:!text-3xl"
        >
          {children}
        </Heading>
      </div>
    </div>
  );
}

export default SectionHeading;
