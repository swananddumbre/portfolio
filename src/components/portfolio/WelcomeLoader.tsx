import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function WelcomeLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let frame = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) frame = requestAnimationFrame(tick);
      else window.setTimeout(() => setDone(true), 350);
    };
    frame = requestAnimationFrame(tick);

    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  if (done) return null;

  return (
    <div
      aria-hidden={progress === 100}
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500",
        progress === 100 ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="section-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[image:var(--gradient-glow)]" />

      <div className="relative w-full max-w-md px-6 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-accent)] text-lg font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
          SD
        </span>
        <h1 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
          Welcome To <span className="text-gradient">Portfolio</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Swanand Dumbre</p>

        <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-[image:var(--gradient-accent)] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 font-mono text-xs tabular-nums text-muted-foreground">
          Loading… {progress}%
        </p>
      </div>
    </div>
  );
}