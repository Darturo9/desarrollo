export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f172a]">
      <picture className="absolute inset-0 z-0 block">
        <source
          media="(min-width: 768px)"
          srcSet="/images/hero-bg-desktop.webp"
          type="image/webp"
        />
        <img
          src="/images/hero-bg-mobile.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </main>
  );
}
