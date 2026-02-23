import { Mail, Linkedin, ArrowRight, Sparkles, MoveRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Decorative Blobs for Depth */}
      <div className="fixed top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-[10s]" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-slate-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-[8s]" />

      <div className="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 py-12 md:py-24">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-32 animate-reveal">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-neutral-900 leading-none">
                Sandhya Sukumaran
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mt-1">
                Portfolio {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 glass p-1 rounded-full premium-shadow border border-neutral-200/50">
            <Link
              href="mailto:sandysukumaran@gmail.com"
              className="p-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all group"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://linkedin.com/in/sandhya-sukumaran-611732214"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          <div className="sm:hidden flex-shrink-0">
            <Link
              href="mailto:sandysukumaran@gmail.com"
              className="w-12 h-12 flex items-center justify-center bg-neutral-900 text-white rounded-full shadow-lg transition-transform active:scale-90"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </nav>

        <main className="space-y-48 md:space-y-64">
          {/* Hero Section - Super Responsive Typography */}
          <section className="relative">
            <div className="max-w-6xl space-y-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-orange-200/50 text-orange-700 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase animate-reveal [animation-delay:0.1s]">
                <Sparkles className="w-3 h-3 fill-orange-500/20" />
                Proven Marketing Expertise
              </div>

              <h1 className="font-serif text-[clamp(3.5rem,10vw,10rem)] font-bold leading-[0.85] tracking-tighter text-neutral-900 animate-reveal [animation-delay:0.2s] text-balance">
                High-Impact <br />
                <span className="text-orange-500 italic relative">
                  Narratives
                  <Star className="absolute -top-4 -right-8 w-8 h-8 md:w-16 md:h-16 text-orange-200 animate-spin-slow" />
                </span> <br />
                That Convert.
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <p className="text-xl md:text-3xl text-neutral-600 font-medium leading-[1.4] animate-reveal [animation-delay:0.3s]">
                  Marketing Copywriter for brands who value precision. Transforming complex value props into high-converting ROI.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-reveal [animation-delay:0.4s]">
                  <Link
                    href="mailto:sandysukumaran@gmail.com"
                    className="group relative inline-flex items-center justify-center gap-4 bg-neutral-900 text-white px-10 py-6 rounded-2xl font-bold transition-all hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-lg"
                  >
                    Discuss a project
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif font-black text-neutral-900">25+</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Partnered Brands</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Grid - Highly Readable & Structured */}
          <section className="animate-reveal [animation-delay:0.5s]">
            <div className="flex flex-col lg:flex-row gap-24">
              <div className="lg:w-1/3 space-y-8">
                <h2 className="font-serif text-5xl md:text-6xl font-black text-neutral-900">Carrier <br /> Impact.</h2>
                <div className="h-1 w-24 bg-orange-500 rounded-full" />
                <p className="text-lg text-neutral-500 leading-relaxed font-medium">
                  3+ years navigating fast-paced agency environments, managing multi-client deliverables with zero compromise on quality.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="group relative glass p-8 md:p-16 rounded-[3rem] premium-shadow border border-neutral-200/50 hover:border-orange-200 transition-all duration-500">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <div className="space-y-2">
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">Agency Experience</span>
                      <h3 className="text-4xl font-serif font-black text-neutral-900">Manyfox Media</h3>
                      <p className="text-neutral-400 font-bold tracking-widest text-xs">TORONTO, CANADA • 2022 — 2025</p>
                    </div>
                    <div className="bg-neutral-900 text-white px-6 py-3 rounded-xl text-xs font-black tracking-widest uppercase shadow-xl">
                      Creative Copywriter
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
                    {[
                      { val: "25+", label: "Client Projects", desc: "End-to-end multi-channel campaign execution." },
                      { val: "150+", label: "Paid Ad Copies", desc: "Strategic copy for Meta, Google, & LinkedIn Ads." },
                      { val: "40+", label: "Web Assets", desc: "Landing pages, homepages, & product pages." },
                      { val: "30+", label: "Email Series", desc: "Conversion sequences and newsletters." }
                    ].map((stat, i) => (
                      <div key={i} className="group/item space-y-4">
                        <div className="flex items-baseline gap-2">
                          <p className="text-5xl font-serif font-black text-neutral-900 group-hover/item:text-orange-500 transition-colors">{stat.val}</p>
                          <div className="w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-800">{stat.label}</p>
                        <p className="text-sm text-neutral-500 leading-relaxed font-medium">{stat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Section - Responsive Flex/Grid */}
          <section className="space-y-24">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl font-black text-neutral-900">The Toolkit.</h2>
              <p className="text-neutral-500 font-bold tracking-[0.3em] uppercase text-[10px]">Methodology Meets Technology</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Core Skills", icon: Sparkles, items: ["Marketing Copywriting", "SEO Copywriting", "Brand Voice", "Content Strategy", "Landing Page Optimization"] },
                { title: "Platfroms", icon: MoveRight, items: ["Meta Ads Manager", "Google Ads", "LinkedIn Ads", "Google Analytics", "Search Console"] },
                { title: "Internal Tools", icon: Star, items: ["Figma", "Canva", "Notion", "Asana", "Slack", "Google Workspace"] }
              ].map((box, i) => (
                <div key={i} className="glass p-10 rounded-[2.5rem] space-y-8 flex flex-col hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-white shadow-lg">
                    <box.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-black text-neutral-900">{box.title}</h3>
                  <ul className="space-y-4 flex-grow">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-center gap-4 text-neutral-600 text-sm font-bold">
                        <div className="w-2 h-2 rounded-full bg-orange-500/20 border border-orange-500/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-48 md:mt-64 pt-32 border-t border-neutral-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
            <div className="space-y-10 max-w-2xl">
              <h2 className="font-serif text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-none">
                Let&apos;s build <br />
                <span className="text-orange-500 italic">momentum.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-neutral-400">Primary Contact</p>
                <Link
                  href="mailto:sandysukumaran@gmail.com"
                  className="text-2xl md:text-4xl font-serif font-black text-neutral-800 hover:text-orange-500 transition-colors underline decoration-neutral-200 decoration-4 underline-offset-8 hover:decoration-orange-500"
                >
                  sandysukumaran@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-12">
              <div className="flex gap-12">
                <Link href="https://linkedin.com/in/sandhya-sukumaran-611732214" target="_blank" className="font-black uppercase tracking-widest text-xs hover:text-orange-500 transition-colors">LinkedIn</Link>
                <Link href="mailto:sandysukumaran@gmail.com" className="font-black uppercase tracking-widest text-xs hover:text-orange-500 transition-colors">Contact</Link>
              </div>
              <div className="text-left lg:text-right space-y-1">
                <p className="text-neutral-400 text-[10px] font-black uppercase tracking-[0.2em]">© {new Date().getFullYear()} Sandhya Sukumaran</p>
                <p className="text-neutral-300 text-[9px] font-medium tracking-widest uppercase">
                  Designed for Excellence — <Link href="https://spiceflow-tech.com" target="_blank" className="hover:text-orange-500 transition-colors underline decoration-neutral-200 decoration-1 underline-offset-4">Spiceflow Tech</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
