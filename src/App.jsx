import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f6f4] text-[#101010] antialiased">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f6f4]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Freddie L. Brown Jr.
          </a>

          <nav className="hidden items-center gap-8 text-sm text-black/55 md:flex">
            <a href="#advisory" className="hover:text-black">Advisory</a>
            <a href="#outcomes" className="hover:text-black">Outcomes</a>
            <a href="#media" className="hover:text-black">Media</a>
            <a href="#book" className="hover:text-black">Book</a>
          </nav>

          <a
            href="mailto:freddiebrownjr@gmail.com"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-black/80"
          >
            Contact Freddie
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-6 py-24 md:py-36">
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-7 w-fit rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-black/60 shadow-sm lg:mx-0">
                Enterprise execution for the AI era
              </div>

              <h1 className="mx-auto max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl lg:mx-0 lg:text-8xl">
                From AI strategy to real execution.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/65 md:text-xl lg:mx-0">
                I help enterprise leaders turn complex priorities into measurable outcomes through disciplined execution, portfolio clarity, and practical AI adoption.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
                <img
                  src="/freddie-headshot.jpg"
                  alt="Freddie Brown Jr"
                  className="h-[620px] w-[480px] rounded-[2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}