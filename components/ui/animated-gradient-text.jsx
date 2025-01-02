import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className
}) {
  return (
    (<div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-shadow duration-1000 ease-out [--bg-size:300%] dark:bg-black/40",
        className
      )}>
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)]`} />
      {children}
    </div>)
  );
}
