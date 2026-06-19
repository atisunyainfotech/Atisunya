"use client";

import {
  BarChart3,
  Cloud,
  Database,
  GitBranch,
  LifeBuoy,
  Settings,
} from "lucide-react";
import ServiceDetailPage from "../_components/service-detail-page";

export default function MicrosoftDynamicsPage() {
  return (
    <ServiceDetailPage
      eyebrow="Microsoft Dynamics 365 Services"
      title="Microsoft"
      highlight="Dynamics 365"
      description="Dynamics 365 consulting, implementation, automation, integration, reporting, and support for finance, sales, customer service, supply chain, and operations."
      stats={[
        { value: "D365", label: "Business Apps" },
        { value: "Power", label: "Platform Ready" },
        { value: "Azure", label: "Cloud Scale" },
      ]}
      services={[
        {
          title: "D365 Implementation",
          desc: "Set up Dynamics 365 modules around your finance, sales, service, and operations processes.",
          icon: Settings,
        },
        {
          title: "Power Platform",
          desc: "Create automations, apps, approvals, and dashboards with Power Apps and Power Automate.",
          icon: Cloud,
        },
        {
          title: "Integrations",
          desc: "Connect Dynamics with ERP, CRM, portals, data platforms, and third-party systems.",
          icon: GitBranch,
        },
        {
          title: "Data Migration",
          desc: "Migrate clean business data with mapping, validation, reconciliation, and user testing.",
          icon: Database,
        },
        {
          title: "Analytics",
          desc: "Enable business intelligence through dashboards, reports, KPIs, and operational views.",
          icon: BarChart3,
        },
        {
          title: "Managed Support",
          desc: "Provide post-go-live support, admin help, enhancements, and continuous optimization.",
          icon: LifeBuoy,
        },
      ]}
      benefits={[
        "Connected Microsoft ecosystem for business operations",
        "Better visibility across sales, service, finance, and supply chain",
        "Automation through Dynamics 365 and Power Platform",
        "Scalable cloud foundation for enterprise growth",
      ]}
      modules={[
        "Sales",
        "Customer Service",
        "Finance",
        "Supply Chain",
        "Power Platform",
        "Power BI",
      ]}
    />
  );
}
