import { Mail, Linkedin, ArrowRight, Sparkles, MoveRight, Star, Zap, TrendingUp, Clock, Tag, ChevronRight } from "lucide-react";
import Link from "next/link";

// ── Email Card Sub-component ─────────────────────────────────────────────────
function EmailCard({
  number,
  tag,
  tagColor,
  subject,
  preview,
  body,
  cta,
  ctaColor,
  delay,
}: {
  number: string;
  tag: string;
  tagColor: string;
  subject: string;
  preview: string;
  body: React.ReactNode;
  cta: string;
  ctaColor: string;
  delay: string;
}) {
  return (
    <div
      className={`animate-reveal flex flex-col rounded-[2rem] overflow-hidden premium-shadow border border-neutral-200/60 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2`}
      style={{ animationDelay: delay }}
    >
      {/* Email client chrome */}
      <div className="bg-neutral-100 px-5 py-3 flex items-center gap-3 border-b border-neutral-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-neutral-400 font-mono truncate">
          inbox — sandysukumaran@gmail.com
        </div>
      </div>

      {/* Email header metadata */}
      <div className="bg-white px-8 pt-7 pb-5 border-b border-neutral-100 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${tagColor}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {tag}
          </span>
          <span className="text-[10px] text-neutral-400 font-mono">Email {number} of 3</span>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.15em]">Subject Line</p>
          <h3 className="font-serif text-xl md:text-2xl font-black text-neutral-900 leading-snug">{subject}</h3>
        </div>
        <div className="flex items-center gap-3 pt-1">
          <div className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-white text-[10px] font-black font-serif flex-shrink-0">
            M
          </div>
          <div className="text-xs text-neutral-500 font-medium leading-tight">
            <span className="font-bold text-neutral-800">Matcha Ritual</span>
            <span className="text-neutral-400"> &lt;hello@matcharitual.com&gt;</span>
            <br />
            <span className="text-neutral-400 text-[10px]">to: subscribers@list.com</span>
          </div>
        </div>
        <p className="text-xs text-neutral-400 italic font-medium border-l-2 border-orange-300 pl-3">
          Preview: {preview}
        </p>
      </div>

      {/* Email body */}
      <div className="bg-white flex-1 px-8 py-8 space-y-5 text-sm text-neutral-700 leading-relaxed font-medium">
        {body}
      </div>

      {/* CTA */}
      <div className={`px-8 py-6 flex items-center justify-between border-t border-neutral-100 ${ctaColor}`}>
        <span className="text-xs text-neutral-400 font-medium">Matcha Ritual · Unsubscribe</span>
        <button className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs font-black tracking-wide px-5 py-3 rounded-xl hover:bg-neutral-700 transition-colors group">
          {cta}
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Decorative Blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-[10s]" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-slate-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-[8s]" />

      <div className="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 py-12 md:py-24">

        {/* ── Navigation ───────────────────────────────────────────────────── */}
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
            <Link href="mailto:sandysukumaran@gmail.com" className="p-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all group" aria-label="Email">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://linkedin.com/in/sandhya-sukumaran-611732214" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-neutral-900 hover:text-white transition-all group" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          <div className="sm:hidden flex-shrink-0">
            <Link href="mailto:sandysukumaran@gmail.com" className="w-12 h-12 flex items-center justify-center bg-neutral-900 text-white rounded-full shadow-lg transition-transform active:scale-90" aria-label="Email">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </nav>

        <main className="space-y-48 md:space-y-64">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
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
                </span>{" "}<br />
                That Convert.
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <p className="text-xl md:text-3xl text-neutral-600 font-medium leading-[1.4] animate-reveal [animation-delay:0.3s]">
                  Marketing Copywriter for brands who value precision. Transforming complex value props into high-converting ROI.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-reveal [animation-delay:0.4s]">
                  <Link href="mailto:sandysukumaran@gmail.com" className="group relative inline-flex items-center justify-center gap-4 bg-neutral-900 text-white px-10 py-6 rounded-2xl font-bold transition-all hover:bg-neutral-800 hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-lg">
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

          {/* ── Featured Work: Email Campaign ▼ NEW ──────────────────────── */}
          <section className="space-y-20">

            {/* Section header */}
            <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Featured Work · Spec Project
                </div>
                <h2 className="font-serif text-5xl md:text-7xl font-black text-neutral-900 leading-none tracking-tight">
                  E-mail <br />
                  <span className="text-orange-500 italic">Campaign.</span>
                </h2>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-lg">
                  A 3-email product launch sequence for a premium ceremonial matcha brand — built to move subscribers from anticipation to purchase.
                </p>
              </div>

              {/* Strategy snapshot cards */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { icon: Tag, label: "Brand", value: "Premium Matcha D2C" },
                  { icon: TrendingUp, label: "Goal", value: "Drive Conversions" },
                  { icon: Zap, label: "Strategy", value: "Tease → Launch → Urgency" },
                  { icon: Clock, label: "Sequence", value: "3-Email Series" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="glass p-5 rounded-2xl border border-neutral-200/50 space-y-2 hover:border-orange-200 transition-colors">
                    <div className="flex items-center gap-2 text-orange-500">
                      <Icon className="w-3.5 h-3.5" />
                      <span className="text-[9px] font-black uppercase tracking-[0.25em] text-neutral-400">{label}</span>
                    </div>
                    <p className="text-sm font-black text-neutral-900 leading-tight">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy bar */}
            <div className="glass rounded-2xl border border-neutral-200/50 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400 sm:w-40 flex-shrink-0">Strategy Flow</p>
              <div className="flex items-center gap-0 flex-wrap sm:flex-nowrap">
                {["Anticipation", "Value Education", "Urgency + Social Proof"].map((step, i) => (
                  <div key={step} className="flex items-center gap-0">
                    <span className="text-xs font-black text-neutral-800 bg-neutral-100 px-4 py-2 rounded-full whitespace-nowrap">{step}</span>
                    {i < 2 && <ChevronRight className="w-4 h-4 text-orange-400 mx-1 flex-shrink-0" />}
                  </div>
                ))}
              </div>
              <p className="sm:ml-auto text-[10px] text-neutral-400 font-medium italic hidden lg:block">
                Emotional &amp; functional triggers layered across each email
              </p>
            </div>

            {/* Email mockup cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

              {/* Email 1 — Teaser */}
              <EmailCard
                number="01"
                tag="Tease · Build Anticipation"
                tagColor="bg-amber-50 text-amber-700"
                subject="Your morning deserves better than a caffeine crash."
                preview="We've been working on something special — a ceremonial-grade matcha..."
                cta="Notify Me First"
                ctaColor="bg-amber-50/30"
                delay="0.1s"
                body={
                  <>
                    <p>We&apos;ve been working on something special — a ceremonial-grade matcha sourced from shade-grown Japanese tea leaves and stone-ground for vibrant color and smooth flavor.</p>
                    <div className="space-y-2 py-2">
                      {["No jitters.", "No sudden crash.", "Just calm, focused energy."].map((line) => (
                        <p key={line} className="flex items-center gap-2 font-bold text-neutral-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                          {line}
                        </p>
                      ))}
                    </div>
                    <p className="font-black text-neutral-900 text-base">Launching soon.</p>
                    <p className="text-neutral-500">Stay tuned — your new ritual is almost here.</p>
                  </>
                }
              />

              {/* Email 2 — Launch */}
              <EmailCard
                number="02"
                tag="Launch Day"
                tagColor="bg-emerald-50 text-emerald-700"
                subject="It's finally here."
                preview="Our ceremonial-grade matcha is now available — crafted from the youngest tea leaves..."
                cta="Shop Now"
                ctaColor="bg-emerald-50/30"
                delay="0.25s"
                body={
                  <>
                    <p>Our ceremonial-grade matcha is now available — crafted from the youngest tea leaves, shade-grown and stone-ground to preserve its vibrant green color and rich umami taste.</p>
                    <div className="space-y-2 py-2 border-l-2 border-emerald-200 pl-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-3">Why you&apos;ll love it</p>
                      {[
                        "Smooth, sustained energy",
                        "High antioxidant content",
                        "Naturally calming L-theanine",
                        "Perfect for traditional tea or creamy lattes",
                      ].map((item) => (
                        <p key={item} className="flex items-start gap-2 text-neutral-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          {item}
                        </p>
                      ))}
                    </div>
                    <p className="text-neutral-500 italic">This isn&apos;t just another matcha. It&apos;s a daily ritual worth slowing down for.</p>
                  </>
                }
              />

              {/* Email 3 — Urgency */}
              <EmailCard
                number="03"
                tag="Urgency · Social Proof"
                tagColor="bg-rose-50 text-rose-700"
                subject="Our first ceremonial matcha batch is selling faster than expected."
                preview="If you've been meaning to upgrade your morning routine, this is your sign..."
                cta="Get Yours Today"
                ctaColor="bg-rose-50/30"
                delay="0.4s"
                body={
                  <>
                    <p>If you&apos;ve been meaning to upgrade your morning routine, this is your sign.</p>
                    <p className="font-bold text-neutral-800">Customers are already loving it:</p>
                    <div className="space-y-3 py-2">
                      {[
                        { quote: "Smoothest matcha I've ever tasted.", stars: 5 },
                        { quote: "No crash — just steady focus.", stars: 5 },
                      ].map(({ quote, stars }) => (
                        <div key={quote} className="bg-rose-50 rounded-xl p-4 space-y-1.5">
                          <div className="flex gap-0.5">
                            {Array.from({ length: stars }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="text-neutral-700 font-medium italic text-xs">&ldquo;{quote}&rdquo;</p>
                        </div>
                      ))}
                    </div>
                    <p className="font-black text-neutral-900">Secure your tin before we sell out.</p>
                  </>
                }
              />
            </div>

            {/* Strategy note */}
            <div className="glass rounded-[2rem] border border-neutral-200/50 p-8 md:p-12 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/3 blur-3xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center text-white flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Strategy Note</p>
              </div>
              <p className="text-neutral-600 font-medium leading-relaxed max-w-3xl">
                The sequence moves from <span className="font-black text-neutral-900">anticipation</span> → <span className="font-black text-neutral-900">value education</span> → <span className="font-black text-neutral-900">urgency</span>. Emotional (ritual, calm) and functional (energy, antioxidants) triggers are layered to increase conversion probability across audience segments.
              </p>
            </div>
          </section>

          {/* ── Conversion Optimization: Before / After ▼ NEW ────────────── */}
          <section className="space-y-20">

            {/* Section header */}
            <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-[10px] font-black tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                  Featured Work · Optimization Sample
                </div>
                <h2 className="font-serif text-5xl md:text-7xl font-black text-neutral-900 leading-none tracking-tight">
                  Before<span className="text-orange-500 italic"> →</span><br />
                  <span className="text-orange-500 italic">After.</span>
                </h2>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed max-w-lg">
                  Rewriting weak, generic copy into high-converting narratives — across product pages, real estate listings, and local brand sites.
                </p>
              </div>
              <div className="lg:w-1/2 glass rounded-2xl border border-neutral-200/50 p-6 space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">The Approach</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Add Specificity", "Lead with Benefits", "Remove Vague Adjectives", "Strengthen the CTA"].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs font-bold text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 Before/After Pairs */}
            <div className="space-y-16">

              {/* Example 1 — Matcha Product Page */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-neutral-200" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 flex-shrink-0">Example 01 · Matcha Product Page</span>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  {/* BEFORE mockup */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">
                        <span className="text-base leading-none">✗</span> Before — Original
                      </span>
                    </div>
                    {/* Browser mockup */}
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                      <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-300" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-300" /><div className="w-2.5 h-2.5 rounded-full bg-green-300" /></div>
                        <div className="flex-1 bg-white/60 rounded px-2 py-0.5 text-[9px] text-neutral-400 font-mono">shop.matcha.com/product</div>
                      </div>
                      <div className="bg-white p-8 space-y-4" style={{ fontFamily: "Arial, sans-serif" }}>
                        <div className="flex gap-6">
                          <div className="w-28 h-28 bg-neutral-100 border border-neutral-200 rounded flex-shrink-0 flex items-center justify-center text-neutral-300 text-xs">Image</div>
                          <div className="space-y-3 flex-1">
                            <p className="text-sm font-bold text-neutral-800">Matcha Powder — 100g</p>
                            <p className="text-xs text-neutral-600 leading-relaxed">Premium matcha made from high-quality tea leaves. Healthy and delicious.</p>
                            <p className="text-base font-bold text-neutral-900">$24.99</p>
                            <button className="text-[11px] bg-blue-600 text-white px-4 py-1.5 rounded font-normal">Buy Now</button>
                          </div>
                        </div>
                        <hr className="border-neutral-200" />
                        <p className="text-[10px] text-neutral-400 leading-loose">Product may vary. See full description below.</p>
                      </div>
                    </div>
                    {/* Why it fails */}
                    <div className="space-y-2">
                      {["Vague adjectives (premium, high-quality)", "No proof or specificity", "Generic CTA", "Zero emotional hook"].map(f => (
                        <p key={f} className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                          <span className="text-red-400">✗</span> {f}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* AFTER mockup */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
                        <span className="text-base leading-none">✓</span> After — Optimized
                      </span>
                    </div>
                    {/* Browser mockup */}
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
                      <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
                        <div className="flex-1 bg-white/80 rounded px-2 py-0.5 text-[9px] text-neutral-500 font-mono">matcharitual.com/ceremonial</div>
                      </div>
                      <div className="bg-[#faf9f6] p-8 space-y-5">
                        <div className="flex gap-6">
                          <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-green-100 to-emerald-200 flex-shrink-0 flex items-center justify-center text-emerald-600 text-3xl">🍵</div>
                          <div className="space-y-3 flex-1">
                            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-600">Ceremonial Grade · Japanese Origin</p>
                            <p className="font-serif text-sm font-black text-neutral-900 leading-snug">Stone-ground ceremonial matcha from shade-grown Japanese tea leaves — smooth, sustained energy without the crash.</p>
                            <div className="space-y-1">
                              {["No jitters.", "No sudden crash.", "Calm, focused energy."].map(b => (
                                <p key={b} className="flex items-center gap-1.5 text-[10px] text-neutral-600 font-bold">
                                  <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />{b}
                                </p>
                              ))}
                            </div>
                            <div className="flex items-center gap-3">
                              <button className="text-[11px] bg-neutral-900 text-white px-5 py-2 rounded-lg font-black tracking-wide">Shop Now →</button>
                              <p className="text-sm font-black text-neutral-900">$24.99</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Why it works */}
                    <div className="space-y-2">
                      {["Stone-ground + shade-grown = specificity", "Unique mechanism highlighted", "Benefit-led: no crash", "Sensory language (smooth, sustained)"].map(p => (
                        <p key={p} className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                          <span className="text-emerald-500">✓</span> {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2 — Real Estate Landing Page */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-neutral-200" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 flex-shrink-0">Example 02 · Real Estate Landing Page</span>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  {/* BEFORE */}
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">
                      <span className="text-base leading-none">✗</span> Before — Original
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                      <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-300" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-300" /><div className="w-2.5 h-2.5 rounded-full bg-green-300" /></div>
                        <div className="flex-1 bg-white/60 rounded px-2 py-0.5 text-[9px] text-neutral-400 font-mono">torontocondomls.com</div>
                      </div>
                      <div className="bg-white p-8 space-y-4" style={{ fontFamily: "Times New Roman, serif" }}>
                        <h3 className="text-base font-bold text-neutral-800">Condos For Sale — Toronto</h3>
                        <p className="text-xs text-neutral-600 leading-relaxed">Beautiful condos in a great location. Book a viewing today.</p>
                        <button className="text-[11px] bg-blue-600 text-white px-4 py-1.5 rounded-none">Book a Viewing</button>
                        <p className="text-[9px] text-neutral-400">Contact us for details.</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["'Beautiful' and 'great' — meaningless", "No location specificity", "Weak CTA ('viewing' is clinical)", "No lifestyle appeal"].map(f => (
                        <p key={f} className="flex items-center gap-2 text-xs text-neutral-500 font-medium"><span className="text-red-400">✗</span> {f}</p>
                      ))}
                    </div>
                  </div>
                  {/* AFTER */}
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
                      <span className="text-base leading-none">✓</span> After — Optimized
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
                      <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
                        <div className="flex-1 bg-white/80 rounded px-2 py-0.5 text-[9px] text-neutral-500 font-mono">harbourviewresidences.ca</div>
                      </div>
                      <div className="bg-[#f8f7f4] p-8 space-y-4">
                        <div className="w-full h-16 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 flex items-center px-5">
                          <p className="text-white text-[10px] font-black uppercase tracking-[0.25em] opacity-70">Downtown Toronto · New Development</p>
                        </div>
                        <p className="font-serif text-sm font-black text-neutral-900 leading-snug">Own a light-filled downtown Toronto residence just steps from transit, dining, and the waterfront.</p>
                        <div className="flex gap-3 flex-wrap">
                          {["📍 King West", "🚇 Steps to TTC", "🌊 Waterfront Views"].map(t => (
                            <span key={t} className="text-[9px] font-bold bg-white border border-neutral-200 px-2.5 py-1 rounded-full text-neutral-600">{t}</span>
                          ))}
                        </div>
                        <button className="text-[11px] bg-neutral-900 text-white px-5 py-2 rounded-lg font-black tracking-wide">Schedule Your Private Tour →</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["Sensory language (light-filled)", "Geographic specificity (King West, waterfront)", "Premium CTA (private tour)", "Lifestyle + convenience appeal"].map(p => (
                        <p key={p} className="flex items-center gap-2 text-xs text-neutral-500 font-medium"><span className="text-emerald-500">✓</span> {p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 3 — Health Food Store */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-neutral-200" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 flex-shrink-0">Example 03 · Health Food Store Website</span>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  {/* BEFORE */}
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full">
                      <span className="text-base leading-none">✗</span> Before — Original
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                      <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-300" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-300" /><div className="w-2.5 h-2.5 rounded-full bg-green-300" /></div>
                        <div className="flex-1 bg-white/60 rounded px-2 py-0.5 text-[9px] text-neutral-400 font-mono">greenjuicetoronto.com</div>
                      </div>
                      <div className="bg-white p-8 space-y-4" style={{ fontFamily: "Arial, sans-serif" }}>
                        <p className="text-lg font-bold text-green-700">Welcome to Green Juice!</p>
                        <p className="text-xs text-neutral-600 leading-relaxed">We make fresh juices and healthy food every day. Come visit us!</p>
                        <button className="text-[11px] bg-green-600 text-white px-4 py-1.5 rounded font-normal">Order Now</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["'Every day' — vague process", "No proof of quality", "No local targeting", "No trust signal"].map(f => (
                        <p key={f} className="flex items-center gap-2 text-xs text-neutral-500 font-medium"><span className="text-red-400">✗</span> {f}</p>
                      ))}
                    </div>
                  </div>
                  {/* AFTER */}
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
                      <span className="text-base leading-none">✓</span> After — Optimized
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
                      <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
                        <div className="flex-1 bg-white/80 rounded px-2 py-0.5 text-[9px] text-neutral-500 font-mono">rootandpress.ca</div>
                      </div>
                      <div className="bg-[#f4faf4] p-8 space-y-4">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-green-600">Cold-Pressed · Organic · In-House Daily</p>
                        <p className="font-serif text-sm font-black text-neutral-900 leading-snug">Every juice is cold-pressed in-house each morning, crafted from organic produce and served fresh to your Toronto neighbourhood.</p>
                        <div className="flex gap-3 flex-wrap">
                          {["🌿 Organic Produce", "⏰ Pressed Mornings", "📍 Toronto Local"].map(t => (
                            <span key={t} className="text-[9px] font-bold bg-white border border-green-100 px-2.5 py-1 rounded-full text-neutral-600">{t}</span>
                          ))}
                        </div>
                        <button className="text-[11px] bg-neutral-900 text-white px-5 py-2 rounded-lg font-black tracking-wide">Order Fresh Today →</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["In-house cold-pressed = process credibility", "Organic produce = quality signal", "Toronto neighbourhood = local trust", "Daily freshness = urgency + care"].map(p => (
                        <p key={p} className="flex items-center gap-2 text-xs text-neutral-500 font-medium"><span className="text-emerald-500">✓</span> {p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Summary note */}
            <div className="glass rounded-[2rem] border border-neutral-200/50 p-8 md:p-12 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/3 blur-3xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center text-white flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Optimization Philosophy</p>
              </div>
              <p className="text-neutral-600 font-medium leading-relaxed max-w-3xl">
                This sample demonstrates my approach to improving weak or generic copy by increasing{" "}
                <span className="font-black text-neutral-900">specificity</span>, adding{" "}
                <span className="font-black text-neutral-900">sensory detail</span>, sharpening{" "}
                <span className="font-black text-neutral-900">benefit clarity</span>, and aligning to{" "}
                <span className="font-black text-neutral-900">audience intent</span> — to meaningfully enhance conversion potential.
              </p>
            </div>

          </section>

          {/* ── Career Impact ────────────────────────────────────────────── */}
          <section className="animate-reveal [animation-delay:0.5s]">
            <div className="flex flex-col lg:flex-row gap-24">
              <div className="lg:w-1/3 space-y-8">
                <h2 className="font-serif text-5xl md:text-6xl font-black text-neutral-900">Carrier <br />Impact.</h2>
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
                      { val: "30+", label: "Email Series", desc: "Conversion sequences and newsletters." },
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

          {/* ── Toolkit ──────────────────────────────────────────────────── */}
          <section className="space-y-24">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl font-black text-neutral-900">The Toolkit.</h2>
              <p className="text-neutral-500 font-bold tracking-[0.3em] uppercase text-[10px]">Methodology Meets Technology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Core Skills", icon: Sparkles, items: ["Marketing Copywriting", "SEO Copywriting", "Brand Voice", "Content Strategy", "Landing Page Optimization"] },
                { title: "Platforms", icon: MoveRight, items: ["Meta Ads Manager", "Google Ads", "LinkedIn Ads", "Google Analytics", "Search Console"] },
                { title: "Internal Tools", icon: Star, items: ["Figma", "Canva", "Notion", "Asana", "Slack", "Google Workspace"] },
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

        {/* ── Footer ───────────────────────────────────────────────────────── */}
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
                  Designed for Excellence —{" "}
                  <Link href="https://spiceflow-tech.com" target="_blank" className="hover:text-orange-500 transition-colors underline decoration-neutral-200 decoration-1 underline-offset-4">Spiceflow Tech</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
