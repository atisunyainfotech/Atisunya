"use client";

import {
  BarChart3,
  Boxes,
  GitBranch,
  LifeBuoy,
  Settings,
  ShoppingCart,
} from "lucide-react";
import ServiceDetailPage from "../_components/service-detail-page";

export default function OdooPage() {
  return (
    <ServiceDetailPage
      title="Odoo"
      highlight="ERP"
      theme="odoo"
      stats={[
        { value: "Apps", label: "Modular ERP" },
        { value: "Fast", label: "Deployment" },
        { value: "Custom", label: "Workflows" },
      ]}
      services={[
        {
          title: "Odoo Setup",
          desc: "Configure the right Odoo apps, companies, users, permissions, and business workflows.",
          icon: Settings,
        },
        {
          title: "CRM & Sales",
          desc: "Automate leads, quotations, sales orders, invoicing, and customer follow-ups.",
          icon: ShoppingCart,
        },
        {
          title: "Inventory",
          desc: "Track stock, warehouses, replenishment, barcode flows, and fulfillment operations.",
          icon: Boxes,
        },
        {
          title: "Customization",
          desc: "Extend Odoo with custom fields, reports, workflows, automations, and modules.",
          icon: GitBranch,
        },
        {
          title: "Analytics",
          desc: "Build practical dashboards and reports for teams, managers, and leadership.",
          icon: BarChart3,
        },
        {
          title: "Support",
          desc: "Keep Odoo stable with troubleshooting, training, upgrades, and ongoing enhancements.",
          icon: LifeBuoy,
        },
      ]}
      benefits={[
        "Modular ERP that grows with business needs",
        "Lower operational friction across sales and inventory",
        "Custom workflows without unnecessary complexity",
        "Unified view across CRM, accounting, and operations",
      ]}
      modules={[
        "CRM",
        "Sales",
        "Accounting",
        "Inventory",
        "Manufacturing",
        "Projects",
      ]}
      appShowcase={{
        eyebrow: "Odoo App Suite",
        title: "All Your Business Apps in One Connected Platform",
        description:
          "Bring finance, CRM, service, website, projects, documents, subscriptions, and reporting into one flexible Odoo workspace.",
        apps: [
          {
            name: "Accounting",
            symbol: "accounting",
            colors: ["#f0ad4e", "#00a09d", "#714B67", "#875A7B"],
          },
          {
            name: "Knowledge",
            symbol: "knowledge",
            colors: ["#008784", "#00a09d", "#714B67", "#875A7B"],
          },
          {
            name: "Sign",
            symbol: "sign",
            colors: ["#017e84", "#2b9ecb", "#017e84", "#2b9ecb"],
          },
          {
            name: "CRM",
            symbol: "crm",
            colors: ["#00a09d", "#017e84", "#714B67", "#875A7B"],
          },
          {
            name: "Studio",
            symbol: "studio",
            colors: ["#714B67", "#2b9ecb", "#875A7B", "#1e88b8"],
          },
          {
            name: "Subscriptions",
            symbol: "subscriptions",
            colors: ["#f08a24", "#00a09d", "#f08a24", "#00a09d"],
          },
          {
            name: "AI",
            symbol: "ai",
            colors: ["#714B67", "#f0ad4e", "#875A7B", "#f0ad4e"],
          },
          {
            name: "Point of Sale",
            symbol: "pos",
            colors: ["#f0ad4e", "#714B67", "#875A7B", "#e7a13d"],
          },
          {
            name: "Discuss",
            symbol: "discuss",
            colors: ["#f08a24", "#d86232", "#f08a24", "#d86232"],
          },
          {
            name: "Documents",
            symbol: "documents",
            colors: ["#2b9ecb", "#f0ad4e", "#714B67", "#d86232"],
          },
          {
            name: "Project",
            symbol: "project",
            colors: ["#714B67", "#00a09d", "#875A7B", "#00a09d"],
          },
          {
            name: "Timesheets",
            symbol: "timesheets",
            colors: ["#d96575", "#017e84", "#d96575", "#2b9ecb"],
          },
          {
            name: "Field Service",
            symbol: "field",
            colors: ["#714B67", "#f0ad4e", "#875A7B", "#f0ad4e"],
          },
          {
            name: "Planning",
            symbol: "planning",
            colors: ["#f0ad4e", "#00a09d", "#714B67", "#2b9ecb"],
          },
          {
            name: "Helpdesk",
            symbol: "helpdesk",
            colors: ["#00a09d", "#017e84", "#00a09d", "#017e84"],
          },
          {
            name: "eCommerce",
            symbol: "ecommerce",
            colors: ["#714B67", "#875A7B", "#714B67", "#875A7B"],
          },
          {
            name: "Website",
            symbol: "website",
            colors: ["#00a09d", "#2b9ecb", "#00a09d", "#017e84"],
          },
          {
            name: "Email Marketing",
            symbol: "email",
            colors: ["#2b9ecb", "#714B67", "#2b9ecb", "#714B67"],
          },
          {
            name: "Inventory",
            symbol: "inventory",
            colors: ["#00a09d", "#714B67", "#017e84", "#875A7B"],
          },
          {
            name: "Manufacturing",
            symbol: "cube",
            colors: ["#f0ad4e", "#d86232", "#714B67", "#875A7B"],
          },
          {
            name: "Sales",
            symbol: "sales",
            colors: ["#00a09d", "#d86232", "#f0ad4e", "#017e84"],
          },
          {
            name: "Dashboards",
            symbol: "sales",
            colors: ["#714B67", "#d86232", "#f0ad4e", "#00a09d"],
          },
          {
            name: "Employees",
            symbol: "people",
            colors: ["#714B67", "#f0ad4e", "#00a09d", "#00a09d"],
          },
          {
            name: "Expenses",
            symbol: "expenses",
            colors: ["#714B67", "#2b9ecb", "#d96575", "#00a09d"],
          },
        ],
      }}
    />
  );
}
