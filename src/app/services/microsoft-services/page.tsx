"use client";

import {
  BarChart3,
  Cloud,
  GitBranch,
  LifeBuoy,
  Settings,
  ShieldCheck,
} from "lucide-react";
import ServiceDetailPage from "../_components/service-detail-page";

export default function MicrosoftServicesPage() {
  return (
    <ServiceDetailPage
      eyebrow="Microsoft Services"
      title="Microsoft"
      highlight="Services"
      description="Microsoft 365, Azure, Power Platform, collaboration, automation, security, reporting, and managed services to help teams work smarter and scale securely."
      stats={[
        { value: "M365", label: "Productivity" },
        { value: "Azure", label: "Cloud" },
        { value: "Secure", label: "Operations" },
      ]}
      services={[
        {
          title: "Microsoft 365",
          desc: "Improve collaboration, productivity, governance, and user adoption across Microsoft 365.",
          icon: Settings,
        },
        {
          title: "Azure Services",
          desc: "Plan, deploy, and optimize secure cloud infrastructure, workloads, and integrations.",
          icon: Cloud,
        },
        {
          title: "Power Platform",
          desc: "Build business apps, automations, forms, approvals, and low-code operational tools.",
          icon: GitBranch,
        },
        {
          title: "Power BI",
          desc: "Create dashboards, reporting models, and executive analytics from business data.",
          icon: BarChart3,
        },
        {
          title: "Security",
          desc: "Strengthen identity, access, compliance, governance, and security best practices.",
          icon: ShieldCheck,
        },
        {
          title: "Managed Services",
          desc: "Support users, maintain environments, resolve issues, and continuously improve systems.",
          icon: LifeBuoy,
        },
      ]}
      benefits={[
        "Modern workplace enablement with Microsoft 365",
        "Automated business processes using Power Platform",
        "Secure cloud operations with Azure and governance",
        "Better reporting and decisions through Power BI",
      ]}
      modules={[
        "Microsoft 365",
        "Azure",
        "Power Apps",
        "Power Automate",
        "Power BI",
        "Security",
      ]}
    />
  );
}
