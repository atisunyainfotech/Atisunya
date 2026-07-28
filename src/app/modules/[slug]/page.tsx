import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Layers3,
  LineChart,
  LucideIcon,
  ShieldCheck,
  Workflow,
} from "lucide-react";

type ModulePage = {
  title: string;
  kicker: string;
  image: string;
  accent: string;
  intro: string;
  points: string[];
  capabilities: string[];
  delivery: string[];
  outcomes: string[];
};

const pages: Record<string, ModulePage> = {
  "customer-relationship-management": {
    title: "Customer Relationship Management",
    kicker: "Sales, service and customer visibility",
    image: "/images/crm.jpg",
    accent: "#2F7F78",
    intro:
      "AtiSunya Infotech builds CRM workspaces that keep every lead, opportunity, account and follow-up visible for faster sales decisions and stronger customer relationships.",
    points: ["Lead capture", "Pipeline control", "Customer retention"],
    capabilities: [
      "Lead-to-opportunity flow with ownership, source tracking and qualification stages.",
      "Sales planning for calls, meetings, reminders and account follow-ups.",
      "Customer segmentation for campaigns, renewals and service prioritization.",
      "Dashboards for pipeline value, conversion movement and team performance.",
    ],
    delivery: [
      "Map current sales and service journeys.",
      "Configure stages, fields, permissions and reporting views.",
      "Migrate clean customer data with validation checkpoints.",
      "Train teams on daily usage and management review.",
    ],
    outcomes: ["Pipeline confidence", "Shorter response cycles", "Clear accountability", "Better engagement"],
  },
  "financial-management-solutions": {
    title: "Financial Management Solutions",
    kicker: "Accounting control with real-time insight",
    image: "/images/finance.jpg",
    accent: "#C74634",
    intro:
      "AtiSunya Infotech designs finance systems for accuracy, approvals, audit readiness and faster reporting without slowing daily operations.",
    points: ["General ledger", "Approvals", "Cash visibility"],
    capabilities: [
      "Chart of accounts, tax structure, fiscal periods and entity setup.",
      "Accounts payable and receivable workflows with approval routing.",
      "Bank reconciliation, expense controls and payment status visibility.",
      "Management reporting for cash flow, profitability and cost centers.",
    ],
    delivery: [
      "Review accounting policies and reporting formats.",
      "Build transaction workflows with role-based approval rules.",
      "Validate opening balances, master data and financial controls.",
      "Prepare finance users for month-end routines.",
    ],
    outcomes: ["Faster closing", "Cleaner audit trails", "Reduced manual entries", "Sharper cost visibility"],
  },
  "ecommerce-retail-management": {
    title: "Ecommerce & Retail Management",
    kicker: "Connected selling across stores and channels",
    image: "/images/ecommerce.jpg",
    accent: "#714B67",
    intro:
      "AtiSunya Infotech connects product, stock, orders, payments and customer data so retail teams can run online, marketplace and counter sales with fewer gaps.",
    points: ["Product catalog", "Order sync", "Channel reporting"],
    capabilities: [
      "Central product catalog with pricing, variants, taxes and availability rules.",
      "Order capture from web, marketplace and retail counters into one flow.",
      "Promotion, coupon and customer group support for campaigns.",
      "Returns, refunds and fulfillment tracking tied to finance and inventory.",
    ],
    delivery: [
      "Assess commerce channels, payment methods and fulfillment promises.",
      "Configure product data, order states and customer communication points.",
      "Integrate store, ERP, inventory and finance touchpoints.",
      "Test purchase journeys, return cases and exceptions.",
    ],
    outcomes: ["Unified channels", "Better stock accuracy", "Faster fulfillment", "Improved buyer experience"],
  },
  "inventory-order-management": {
    title: "Inventory & Order Management",
    kicker: "Stock movement with dependable fulfillment",
    image: "/images/inventory.jpg",
    accent: "#0078D4",
    intro:
      "AtiSunya Infotech helps businesses manage stock, warehouses, replenishment and order processing with controls that reduce delays and protect service levels.",
    points: ["Warehouse control", "Replenishment", "Fulfillment"],
    capabilities: [
      "Item masters, warehouse locations, bins, lots, serial numbers and units of measure.",
      "Purchase planning, reorder rules, stock transfers and receiving flows.",
      "Sales order allocation, pick-pack-ship processes and delivery tracking.",
      "Inventory valuation, ageing, shortage alerts and movement reporting.",
    ],
    delivery: [
      "Document warehouse layout and order handling patterns.",
      "Configure inventory controls with procurement and sales dependencies.",
      "Run stock migration and opening quantity checks.",
      "Train warehouse users on receiving, picking and adjustments.",
    ],
    outcomes: ["Lower mismatches", "Quicker order handling", "Improved planning", "Warehouse accountability"],
  },
  "supply-chain-management": {
    title: "Supply Chain Management",
    kicker: "Procurement, planning and supplier coordination",
    image: "/images/supplychain.jpg",
    accent: "#0FAAFF",
    intro:
      "AtiSunya Infotech creates supply chain systems that give procurement, operations and leadership a shared view of demand, suppliers, timelines and cost impact.",
    points: ["Demand planning", "Supplier tracking", "Procurement control"],
    capabilities: [
      "Supplier masters, purchase contracts, lead times and approval governance.",
      "Demand planning from forecasts, stock levels and production needs.",
      "Purchase requests, RFQs, purchase orders and goods receipt monitoring.",
      "Supplier performance reporting for cost, quality, delivery and exceptions.",
    ],
    delivery: [
      "Study procurement categories and supplier dependencies.",
      "Define approval thresholds and purchasing controls.",
      "Connect purchasing with inventory, finance and operations reporting.",
      "Support pilot cycles before scaling across departments.",
    ],
    outcomes: ["Reliable purchasing", "Supplier visibility", "Fewer surprises", "Stronger cost control"],
  },
  "data-analytics-management": {
    title: "Data & Analytics Management",
    kicker: "Reporting that leaders can trust",
    image: "/images/analytics.jpg",
    accent: "#002050",
    intro:
      "AtiSunya Infotech turns operational data into usable dashboards, scorecards and reports with clear definitions and dependable sources.",
    points: ["KPI design", "Data quality", "Executive dashboards"],
    capabilities: [
      "KPI libraries for finance, sales, operations, service and inventory.",
      "Data model cleanup across masters, transactions and reporting dimensions.",
      "Role-based dashboards for executives, managers and operational users.",
      "Scheduled reports, drill-down views and exception-based alerts.",
    ],
    delivery: [
      "Define business questions before designing charts.",
      "Audit source data, ownership and reporting frequency.",
      "Build dashboards with filters, definitions and access rules.",
      "Refine reports after users start making decisions.",
    ],
    outcomes: ["Faster reviews", "Consistent KPIs", "Cleaner reports", "Earlier exception detection"],
  },
  "human-capital-management": {
    title: "Human Capital Management",
    kicker: "People operations with structure and care",
    image: "/images/hcm.jpg",
    accent: "#E83E8C",
    intro:
      "AtiSunya Infotech builds HR and workforce systems for employee records, attendance, payroll inputs, approvals and performance workflows.",
    points: ["Employee records", "Attendance", "HR workflows"],
    capabilities: [
      "Employee master data, departments, roles, documents and lifecycle events.",
      "Leave, attendance, shift and approval workflows suited to local operations.",
      "Payroll input preparation with allowances, deductions and compliance references.",
      "Manager and HR dashboards for workforce movement, gaps and pending actions.",
    ],
    delivery: [
      "Capture HR policies, approval chains and payroll dependencies.",
      "Configure records, calendars, shifts and self-service access.",
      "Validate historical data and current-month readiness.",
      "Train HR, managers and employees with practical scenarios.",
    ],
    outcomes: ["Organized employee data", "Fewer approval delays", "Simpler HR admin", "Workforce visibility"],
  },
  "professional-services-automation": {
    title: "Professional Services Automation",
    kicker: "Project delivery, resources and billing alignment",
    image: "/images/services.jpg",
    accent: "#5E5E5E",
    intro:
      "AtiSunya Infotech structures project-based businesses around resource planning, task ownership, timesheets, expenses, milestones and billing readiness.",
    points: ["Resource planning", "Timesheets", "Project billing"],
    capabilities: [
      "Project setup with tasks, milestones, budgets, roles and delivery ownership.",
      "Resource allocation views for capacity, availability and utilization.",
      "Timesheet, expense and approval workflows linked to project economics.",
      "Profitability reporting with billing status and delivery risk signals.",
    ],
    delivery: [
      "Understand service lines, delivery methods and billing models.",
      "Configure project templates, approval paths and resource calendars.",
      "Connect time, cost, invoicing and reporting into one review flow.",
      "Coach delivery managers on weekly project governance.",
    ],
    outcomes: ["Resource utilization", "Cleaner margins", "Timely billing", "Predictable delivery"],
  },
  "industry-specific-netsuite-solutions": {
    title: "Industry-Specific NetSuite Solutions",
    kicker: "Tailored ERP for real operating models",
    image: "/images/industry.jpg",
    accent: "#FBC02D",
    intro:
      "AtiSunya Infotech adapts NetSuite around industry practices so the solution reflects how the business sells, buys, stocks, serves and reports.",
    points: ["Industry fit", "Process design", "NetSuite controls"],
    capabilities: [
      "Industry process mapping for trading, distribution, services and manufacturing.",
      "NetSuite configuration for approvals, roles, workflows and reporting dimensions.",
      "Custom records, saved searches, dashboards and forms for specific departments.",
      "Integrations with ecommerce, logistics, banking, tax, CRM and operations.",
    ],
    delivery: [
      "Study industry requirements, controls and exceptions.",
      "Shape a NetSuite blueprint that protects standard features where they fit.",
      "Build targeted extensions only where the business case is clear.",
      "Support go-live with issue tracking and improvement cycles.",
    ],
    outcomes: ["Operational alignment", "Lower customization waste", "Better adoption", "Stronger governance"],
  },
};

const icons: LucideIcon[] = [Workflow, ClipboardList, BarChart3, ShieldCheck, Layers3, LineChart];

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
    title: page ? `${page.title} | AtiSunya Infotech` : "Module | AtiSunya Infotech",
    description: page?.intro,
  };
}

export default async function ModuleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) notFound();

  const foreground = page.accent === "#FBC02D" ? "#002050" : "#ffffff";

  return (
    <main className="overflow-hidden bg-white text-[#101828]">
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-[#f7f9fc]">
        <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: page.accent }} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(0,32,80,0.10),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(47,127,120,0.12),transparent_30%)]" />

        <div className="container grid min-h-[calc(100vh-82px)] items-center gap-12 py-20 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <Link href="/#our-modules" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[#002050] transition hover:text-[#2F7F78]">
              <ArrowLeft size={17} />
              Back to Modules
            </Link>
            <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: page.accent }}>
              {page.kicker}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] text-[#002050] sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              {page.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {page.points.map((point) => (
                <span key={point} className="rounded-[8px] border border-[#002050]/10 bg-white px-4 py-3 text-sm font-black text-[#002050] shadow-[0_12px_30px_rgba(0,32,80,0.07)]">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[26px] opacity-20 blur-2xl" style={{ backgroundColor: page.accent }} />
            <div className="overflow-hidden rounded-[20px] border border-[#002050]/10 bg-white p-3 shadow-[0_32px_90px_rgba(0,32,80,0.14)]">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[14px]">
                <Image src={page.image} alt={page.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {page.outcomes.slice(0, 3).map((item) => (
                  <div key={item} className="rounded-[8px] px-4 py-3 text-sm font-black" style={{ backgroundColor: page.accent, color: foreground }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: page.accent }}>
              What AtiSunya Infotech Configures
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Practical capabilities for daily business use
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {page.capabilities.map((capability, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={capability} className="group rounded-[10px] border border-[#002050]/10 bg-[#f7f9fc] p-7 shadow-[0_16px_40px_rgba(0,32,80,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_64px_rgba(0,32,80,0.11)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px]" style={{ backgroundColor: page.accent, color: foreground }}>
                    <Icon size={28} />
                  </div>
                  <p className="text-lg font-bold leading-8 text-slate-700">{capability}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#002050] py-24 text-white">
        <div className="container grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: page.accent }}>
              Delivery Method
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              A focused route from discovery to adoption
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Each engagement is shaped around business owners, end users, clean data and measurable operating improvement.
            </p>
          </div>
          <div className="space-y-4">
            {page.delivery.map((step, index) => (
              <div key={step} className="flex gap-5 rounded-[10px] border border-white/12 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] text-sm font-black" style={{ backgroundColor: page.accent, color: foreground }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-lg font-bold leading-7 text-white/86">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <BadgeCheck className="mx-auto mb-6" size={42} style={{ color: page.accent }} />
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Outcomes your teams can measure
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-[10px] border border-[#002050]/10 bg-white p-6 shadow-[0_16px_40px_rgba(0,32,80,0.07)]">
                <CheckCircle2 className="mb-5" size={28} style={{ color: page.accent }} />
                <h3 className="text-xl font-black text-[#002050]">{outcome}</h3>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-[8px] bg-[#fbc02d] px-9 py-4 font-black text-[#002050] shadow-[0_18px_38px_rgba(251,192,45,0.28)] transition hover:-translate-y-1 hover:bg-[#002050] hover:text-white">
              Talk to AtiSunya Infotech
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
