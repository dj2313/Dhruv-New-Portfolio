import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  return (
    <div className={`relative mx-auto max-w-3xl py-6 ${className || ''}`} {...props}>
      <InfiniteSlider gap={42} reverse speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center px-4"
          >
            <img
              alt={logo.alt}
              className="pointer-events-none h-8 select-none md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity dark:opacity-90 dark:hover:opacity-100 dark:brightness-0 dark:invert"
              height="auto"
              loading="lazy"
              src={logo.src}
              width="auto"
            />
          </div>
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />
    </div>
  );
}

