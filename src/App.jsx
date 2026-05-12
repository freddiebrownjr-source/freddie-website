import React from "react";

export default function App() {
  const authority = ["AI Execution Strategy", "Enterprise PMO Leadership", "Portfolio Transformation", "Executive Advisory", "Author of Moving Marbles"];

  const services = [
    ["AI Execution Advisory", "Move AI from scattered experiments into governed, measurable business execution."],
    ["PMO & Portfolio Transformation", "Create clarity across priorities, teams, dependencies, governance, and executive decisions."],
    ["Executive Workshops & Speaking", "High-impact sessions on AI adoption, enterprise execution, leadership rhythm, and strategy-to-action."]
  ];

  const outcomes = ["Clearer executive visibility", "Less portfolio noise", "Better decision rhythm", "Stronger delivery predictability", "Practical AI adoption", "Aligned teams and leaders"];

  return (
    <div className="min-h-screen bg-[#f6f6f4] text-[#101010] antialiased">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f6f4]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">Freddie L. Brown Jr.</a>
          <nav className="hidden items-center gap-8 text-sm text-black/55 md:flex">
            <a href="#advisory" className="hover:text-black">Advisory</a>
            <a href="#outcomes" className="hover:text-black">Outcomes</a>
            <a href="#media" className="hover:text-black">Media</a>
            <a href="#book" className="hover:text-black">Book</a>
          </nav>
          <a href="mailto:freddiebrownjr@gmail.com" className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-black/80">Contact Freddie</a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-6 py-24 md:py-36">
          <div className="relative mx-auto grid max-w-7xl">
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-7 w-fit rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-black/60 shadow-sm lg:mx-0">Enterprise execution for the AI era</div>
              <h1 className="mx-auto max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl lg:mx-0 lg:text-8xl">From AI strategy to real execution.</h1>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-black/65 md:text-xl lg:mx-0">I help enterprise leaders turn complex priorities into measurable outcomes through disciplined execution, portfolio clarity, and practical AI adoption.</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="mailto:freddiebrownjr@gmail.com" className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-black/80">Work With Me →</a>
                <a href="#advisory" className="rounded-full border border-black/15 bg-white/70 px-8 py-3 text-sm font-semibold text-black hover:bg-white">Explore My Work</a>
              </div>
            </div>

          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {authority.map((item) => <div key={item} className="rounded-3xl border border-black/5 bg-white/80 px-5 py-5 text-center text-sm font-medium text-black/65 shadow-sm">{item}</div>)}
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div className="relative overflow-hidden rounded-[2.25rem] bg-black p-8 text-white shadow-2xl md:p-12 lg:p-14">
              <p className="mb-5 text-sm uppercase tracking-[0.26em] text-white/45">Positioning</p>
              <h2 className="relative max-w-4xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Most organizations do not have an idea problem. They have an execution problem.</h2>
              <p className="relative mt-8 max-w-2xl text-lg leading-8 text-white/65">Strategy fails when priorities are unclear, teams are overloaded, governance is noisy, and AI becomes another disconnected experiment. My work brings structure, rhythm, and executive-level clarity to the work that matters most.</p>
            </div>

            <div className="rounded-[2.25rem] bg-white/85 p-8 shadow-xl md:p-12">
              <p className="mb-8 text-4xl">✓</p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em]">Built for serious leaders.</h3>
              <p className="mt-5 text-lg leading-8 text-black/60">This is not generic coaching. It is advisory work for executives, founders, and transformation leaders who need measurable movement, not more noise.</p>
              <div className="mt-8 space-y-4 text-black/70">
                <p>✓ Executive-ready communication</p>
                <p>✓ Enterprise operating discipline</p>
                <p>✓ Outcome-centered execution</p>
              </div>
            </div>
          </div>
        </section>

        <section id="advisory" className="scroll-mt-24 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.26em] text-black/40">Advisory offers</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Clean offers. High-value problems.</h2>
              <p className="mt-6 text-lg leading-8 text-black/60">Each engagement is built around one goal: helping leadership teams create the clarity, rhythm, and accountability needed to move important work forward.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map(([title, desc]) => (
                <div key={title} className="rounded-[2.25rem] bg-white/85 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1f1ee] text-xl">●</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-4 leading-7 text-black/58">{desc}</p>
                  <a href="mailto:freddiebrownjr@gmail.com" className="mt-8 inline-block text-sm font-medium text-black">Learn more →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="outcomes" className="scroll-mt-24 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.26em] text-black/40">Outcomes</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Less theater. More traction.</h2>
              <p className="mt-6 text-lg leading-8 text-black/60">The best leaders need cleaner decisions, visible priorities, sharper accountability, and a reliable way to turn strategy into movement.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="rounded-3xl bg-white/80 p-6 shadow-sm">
                  <p className="mb-8 text-2xl">↗</p>
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="media" className="scroll-mt-24 px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white/85 p-8 shadow-xl md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.26em] text-black/40">Media</p>
                <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Ideas worth hearing.</h2>
                <p className="mt-6 text-lg leading-8 text-black/60">A curated hub for talks, interviews, essays, and podcast episodes on leadership, execution, AI, and meaningful progress.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {["Executive talks", "Podcast appearances", "YouTube interviews", "Medium essays"].map((item) => (
                  <div key={item} className="rounded-[2rem] bg-[#f6f6f4] p-7 transition hover:bg-black hover:text-white">
                    <p className="mb-10 text-3xl">▶</p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">{item}</h3>
                    <p className="mt-3 text-sm leading-6 opacity-60">Add a clean thumbnail, one-sentence description, and direct link.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="scroll-mt-24 px-6 py-20">
          <div className="mx-auto overflow-hidden rounded-[2.5rem] bg-black text-white shadow-2xl md:grid md:max-w-7xl md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="mb-8 text-4xl">◐</p>
              <p className="mb-4 text-sm uppercase tracking-[0.26em] text-white/40">Book</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Moving Marbles</h2>
              <p className="mt-6 text-lg leading-8 text-white/65">A practical framework for awareness, focus, momentum, execution, and legacy. Built for people who are ready to stop carrying ideas and start moving them.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:freddiebrownjr@gmail.com?subject=Moving%20Marbles%20Inquiry" className="rounded-full bg-white px-8 py-3 text-center text-sm font-semibold text-black hover:bg-white/85">Ask About the Book</a>
                <a href="mailto:freddiebrownjr@gmail.com?subject=Speaking%20Inquiry" className="rounded-full border border-white/20 px-8 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">Invite Freddie to Speak</a>
              </div>
            </div>
            <div className="relative flex min-h-[380px] items-center justify-center bg-[#151515] p-12">
              <div className="relative h-72 w-72 rounded-full border border-white/15 bg-white/5 shadow-2xl">
                <div className="absolute left-9 top-12 h-20 w-20 rounded-full bg-white/90" />
                <div className="absolute bottom-10 right-8 h-28 w-28 rounded-full bg-white/20" />
                <div className="absolute bottom-20 left-20 h-16 w-16 rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white/85 p-8 text-center shadow-xl md:p-14">
            <p className="mx-auto max-w-3xl text-2xl font-medium leading-10 tracking-[-0.035em] text-black/80 md:text-4xl md:leading-[1.2]">“Don’t worry about being remembered. Worry about being impossible to forget once someone’s life is better because you existed.”</p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-black/35">Freddie L. Brown Jr.</p>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-4xl">✉</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Let’s build what actually moves.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">For advisory work, executive workshops, speaking, interviews, or strategic partnerships, start with a short note.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:freddiebrownjr@gmail.com" className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-black/80">Contact Freddie →</a>
              <a href="mailto:freddiebrownjr@gmail.com?subject=AI%20Execution%20Playbook" className="rounded-full border border-black/15 bg-white px-8 py-3 text-sm font-semibold text-black">Request AI Execution Playbook</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/80 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-black/45 md:flex-row">
          <p>© 2026 Freddie L. Brown Jr. All rights reserved.</p>
          <p>Atlanta • AI Execution • PMO Transformation • Executive Advisory</p>
        </div>
      </footer>
    </div>
  );
}
