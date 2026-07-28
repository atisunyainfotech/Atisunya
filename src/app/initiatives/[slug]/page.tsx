import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Leaf,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

type InitiativePage = {
  title: string;
  intro: string;
  accent: string;
  pillars: string[];
  roadmap: string[];
  outcomes: string[];
};

const pages: Record<string, InitiativePage> = {
  "ai-advancement": {
    title: "Artificial Intelligence Advancement",
    intro:
      "AtiSunya Infotech helps teams identify high-value AI use cases, prepare trusted data, and launch automation that improves service speed without losing governance.",
    accent: "#2F7F78",
    pillars: [
      "AI readiness assessment for data, workflows, risk, and adoption gaps.",
      "Machine learning pilots for document handling, citizen queries, and operational forecasting.",
      "Decision dashboards that convert raw records into timely, explainable insights.",
      "Security reviews, access rules, and model governance for responsible scaling.",
    ],
    roadmap: [
      "Discover priority use cases with measurable business or public-service value.",
      "Clean and connect source data before introducing automation.",
      "Prototype AI workflows with users, controls, and review checkpoints.",
      "Scale proven models through training, monitoring, and support.",
    ],
    outcomes: ["Faster reviews", "Cleaner data signals", "Lower manual workload", "Safer AI adoption"],
  },
  "go-green-sustainability": {
    title: "Go Green & Sustainability",
    intro:
      "We build technology programs that reduce paper-heavy work, improve resource visibility, and make sustainability reporting easier to trust.",
    accent: "#6FAF45",
    pillars: [
      "Paperless approval journeys for procurement, HR, finance, and administration.",
      "Cloud and infrastructure optimization to reduce wasteful digital operations.",
      "Sustainability reporting dashboards for energy, assets, spend, and impact metrics.",
      "Workflow automation that keeps compliance evidence organized and easy to audit.",
    ],
    roadmap: [
      "Review high-volume manual processes and reporting obligations.",
      "Digitize forms, approvals, and document trails with role-based access.",
      "Connect operational data into dashboards leaders can track monthly.",
      "Refine adoption through training, usage reviews, and improvement cycles.",
    ],
    outcomes: ["Less paperwork", "Clear impact tracking", "Efficient approvals", "Better audit readiness"],
  },
  "drug-free-awareness": {
    title: "Drug-Free Awareness Programs",
    intro:
      "AtiSunya Infotech supports awareness programs with campaign planning, citizen engagement, event tracking, and reporting systems that keep outreach coordinated.",
    accent: "#FBC02D",
    pillars: [
      "Campaign microsites, forms, and content flows for public awareness drives.",
      "Event, volunteer, and participant tracking with real-time status visibility.",
      "Automated communication for reminders, follow-ups, and education journeys.",
      "Analytics that show reach, engagement, locations, and action trends.",
    ],
    roadmap: [
      "Map audiences, campaign channels, and field execution responsibilities.",
      "Create digital touchpoints for registration, updates, and feedback.",
      "Set dashboards for program teams, sponsors, and reporting authorities.",
      "Improve each campaign using engagement data and field feedback.",
    ],
    outcomes: ["Wider reach", "Better coordination", "Reliable reporting", "Stronger follow-up"],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug];

  return {
    title: page ? `${page.title} | AtiSunya Infotech` : "Initiative | AtiSunya Infotech",
    description: page?.intro,
  };
}

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) notFound();

  const textOnAccent = page.accent === "#FBC02D" ? "#002050" : "#FFFFFF";
  const icons = [Sparkles, Workflow, ShieldCheck, BarChart3];

  return (
    <main className="overflow-hidden bg-white text-[#002050]">
      <section className="relative isolate bg-[#002050] py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(47,127,120,0.36),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(251,192,45,0.26),transparent_24%)]" />

        <div className="container">
          <Link href="/#initiatives" className="mb-10 inline-flex items-center gap-2 text-sm font-black text-white/80 transition hover:text-[#fbc02d]">
            <ArrowLeft size={17} />
            Back to Initiatives
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div>
              <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
                {page.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
                {page.intro}
              </p>
            </div>

            <div className="group rounded-[8px] border border-white/14 bg-white/10 p-6 shadow-[0_26px_70px_rgba(0,0,0,0.20)] transition-all duration-500 hover:-translate-y-2 hover:border-[#fbc02d]/45 hover:bg-white/14 hover:shadow-[0_38px_100px_rgba(0,0,0,0.30)]">
              <div className="grid gap-4">
                {page.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 rounded-[8px] bg-white p-4 font-black text-[#002050] shadow-[0_12px_26px_rgba(0,32,80,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,32,80,0.18)]">
                    <BadgeCheck size={22} style={{ color: page.accent }} />
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Built for action, adoption, and measurable progress
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {page.pillars.map((pillar, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div key={pillar} className="group rounded-[8px] border border-[#002050]/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,32,80,0.07)] ring-1 ring-transparent transition-all duration-500 hover:-translate-y-2 hover:border-[#fbc02d]/55 hover:shadow-[0_28px_70px_rgba(0,32,80,0.15)] hover:ring-[#fbc02d]/25">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] shadow-[0_14px_30px_rgba(0,32,80,0.16)] transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: page.accent, color: textOnAccent }}>
                    <Icon size={28} />
                  </div>
                  <p className="text-lg font-bold leading-8 text-slate-700">{pillar}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              From idea to field-ready digital program
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We keep the process practical: discover, design, launch, measure,
              and improve based on real usage.
            </p>
          </div>

          <div className="space-y-4">
            {page.roadmap.map((step, index) => (
              <div key={step} className="group flex gap-5 rounded-[8px] border border-[#002050]/10 bg-[#f7f9fc] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#fbc02d]/55 hover:bg-white hover:shadow-[0_22px_54px_rgba(0,32,80,0.12)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] text-sm font-black" style={{ backgroundColor: page.accent, color: textOnAccent }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-lg font-bold leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002050] py-24 text-center text-white">
        <div className="container">
          <Leaf className="mx-auto mb-6 text-[#fbc02d]" size={44} />
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Make your next initiative easier to run and easier to measure.
          </h2>
          <div className="mt-10">
            <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-[8px] bg-[#fbc02d] px-9 py-4 font-black text-[#002050] shadow-[0_18px_40px_rgba(251,192,45,0.34)] ring-1 ring-[#fbc02d]/30 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_58px_rgba(251,192,45,0.44)] hover:ring-white/70">
              Discuss This Program
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
