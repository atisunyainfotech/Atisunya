"use client";

import {
  BarChart3,
  Database,
  GitBranch,
  LifeBuoy,
  Settings,
  ShieldCheck,
} from "lucide-react";
import ServiceDetailPage from "../_components/service-detail-page";

export default function OracleNetSuitePage() {
  return (
    <ServiceDetailPage
       eyebrow="Oracle NetSuite Services"
      title="Oracle"
      highlight="NetSuite"
      description="End-to-end Oracle NetSuite consulting, implementation, customization, integration, data migration, reporting, and managed support for growing businesses."
      stats={[
        { value: "360°", label: "ERP Coverage" },
        { value: "24/7", label: "Support" },
        { value: "Cloud", label: "Native ERP" },
      ]}
      services={[
        {
          title: "Implementation",
          desc: "Configure NetSuite around finance, procurement, inventory, order management, and operations.",
          icon: Settings,
        },
        {
          title: "Customization",
          desc: "Build tailored workflows, roles, scripts, forms, approvals, and business-specific processes.",
          icon: GitBranch,
        },
        {
          title: "Data Migration",
          desc: "Move masters, transactions, balances, and historical data with validation and reconciliation.",
          icon: Database,
        },
        {
          title: "Reporting",
          desc: "Create dashboards, saved searches, KPIs, and executive reports for real-time visibility.",
          icon: BarChart3,
        },
        {
          title: "Compliance",
          desc: "Strengthen controls, permissions, audit trails, and finance governance inside NetSuite.",
          icon: ShieldCheck,
        },
        {
          title: "Managed Support",
          desc: "Post-go-live support, enhancements, troubleshooting, and continuous optimization.",
          icon: LifeBuoy,
        },
      ]}
      benefits={[
        "Single source of truth across finance and operations",
        "Faster month-end closing and better reporting visibility",
        "Scalable workflows for multi-location businesses",
        "Reduced manual effort through automation and integrations",
      ]}
      modules={[
        "Financial Management",
        "Order Management",
        "Inventory Control",
        "Procurement",
        "SuiteAnalytics",
        "Integration Support",
      ]}
    />
  );
}
