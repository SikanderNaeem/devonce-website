import { cn } from "@/lib/utils";

export function BackgroundAnimation() {
  const shapes = [
    {
      style: "h-32 w-32 rounded-full bg-primary/20",
      position: "top-1/4 left-1/4",
      animation: "animate-float [animation-duration:12s]",
    },
    {
      style: "h-48 w-48 rounded-[3rem] bg-accent/20 rotate-45",
      position: "top-1/2 right-1/4",
      animation: "animate-float [animation-duration:18s] [animation-delay:2s]",
    },
    {
      style: "h-24 w-24 rounded-full bg-primary/10",
      position: "bottom-1/4 left-1/3",
      animation: "animate-float [animation-duration:15s] [animation-delay:1s]",
    },
    {
      style: "h-20 w-20 rounded-2xl bg-accent/10",
      position: "bottom-1/3 right-1/3",
      animation: "animate-float [animation-duration:10s]",
    },
     {
      style: "h-40 w-40 rounded-full bg-primary/15",
      position: "top-20 right-40",
      animation: "animate-float [animation-duration:20s] [animation-delay:3s]",
    }
  ];

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="relative h-full w-full">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className={cn(
              "absolute blur-3xl ease-in-out infinite",
              shape.style,
              shape.position,
              shape.animation
            )}
          />
        ))}i
      </div>
    </div>
  );
}
