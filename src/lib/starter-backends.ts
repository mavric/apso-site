export type StarterCategory = "essential" | "popular" | "industry";

export interface StarterBackend {
  id: string;
  title: string;
  description: string;
  category: StarterCategory;
  entities: string[];
}

export const STARTER_CATEGORIES: Record<StarterCategory, string> = {
  essential: "SaaS essentials",
  popular: "Application patterns",
  industry: "Industry systems",
};

// Mirrors the quick-start catalog in apso-client-v2/src/data/quick-start-prompts.json.
export const STARTER_BACKENDS: StarterBackend[] = [
  {
    id: "user-auth-teams",
    title: "User Auth & Teams",
    description: "User accounts, organizations, memberships, invitations, roles, and sessions.",
    category: "essential",
    entities: ["Users", "Organizations", "Members", "Invitations"],
  },
  {
    id: "subscription-billing",
    title: "Subscription Billing",
    description: "Plans, subscriptions, invoices, payments, usage records, and coupons.",
    category: "essential",
    entities: ["Plans", "Subscriptions", "Invoices", "Payments"],
  },
  {
    id: "crm",
    title: "Customer CRM",
    description: "Contacts, companies, deals, pipeline stages, activities, and follow-up tasks.",
    category: "essential",
    entities: ["Contacts", "Companies", "Deals", "Activities"],
  },
  {
    id: "multi-tenant-workspaces",
    title: "Multi-Tenant Workspaces",
    description: "Tenant workspaces, scoped members, invitations, billing, keys, and limits.",
    category: "essential",
    entities: ["Workspaces", "Members", "API Keys", "Audit Logs"],
  },
  {
    id: "notifications",
    title: "Notification System",
    description: "Templates, preferences, delivery records, digests, and channel configuration.",
    category: "essential",
    entities: ["Notifications", "Templates", "Preferences", "Channels"],
  },
  {
    id: "webhooks-integrations",
    title: "Webhook Management",
    description: "Subscriptions, signed deliveries, retries, event types, and OAuth connections.",
    category: "essential",
    entities: ["Webhooks", "Deliveries", "Events", "Integrations"],
  },
  {
    id: "audit-logs",
    title: "Audit Logs & Compliance",
    description: "Audit events, retention policies, consent records, and access reviews.",
    category: "essential",
    entities: ["Audit Events", "Retention", "Consent", "Access Reviews"],
  },
  {
    id: "file-management",
    title: "File Upload & Media",
    description: "Files, folders, versions, shares, transformations, and storage buckets.",
    category: "essential",
    entities: ["Files", "Folders", "Versions", "Buckets"],
  },
  {
    id: "feature-flags",
    title: "Feature Flags & A/B Testing",
    description: "Flags, targeting rules, user segments, experiments, and overrides.",
    category: "essential",
    entities: ["Flags", "Rules", "Segments", "Experiments"],
  },
  {
    id: "waitlist-launch",
    title: "Waitlist & Early Access",
    description: "Campaigns, queue positions, referral codes, rewards, and invitation batches.",
    category: "essential",
    entities: ["Waitlists", "Entries", "Referrals", "Invitations"],
  },
  {
    id: "support-ticketing",
    title: "Support Ticketing",
    description: "Tickets, threaded replies, agents, teams, SLAs, and saved views.",
    category: "essential",
    entities: ["Tickets", "Replies", "Agents", "SLA Policies"],
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Projects, tasks, milestones, dependencies, sprints, boards, and time entries.",
    category: "popular",
    entities: ["Projects", "Tasks", "Sprints", "Boards"],
  },
  {
    id: "issue-tracking",
    title: "Issue Tracking",
    description: "Issues, projects, comments, labels, history, sprints, and time tracking.",
    category: "popular",
    entities: ["Issues", "Projects", "Comments", "Sprints"],
  },
  {
    id: "knowledge-base",
    title: "Knowledge Base",
    description: "Articles, categories, revisions, authors, feedback, and search analytics.",
    category: "popular",
    entities: ["Articles", "Categories", "Revisions", "Feedback"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Store",
    description: "Products, variants, carts, orders, payments, inventory, and promotions.",
    category: "popular",
    entities: ["Products", "Carts", "Orders", "Inventory"],
  },
  {
    id: "lms",
    title: "Learning Platform",
    description: "Courses, lessons, instructors, enrollments, quizzes, and certificates.",
    category: "popular",
    entities: ["Courses", "Lessons", "Enrollments", "Quizzes"],
  },
  {
    id: "survey-feedback",
    title: "Survey & Feedback",
    description: "Surveys, question types, responses, answer logic, and distribution channels.",
    category: "popular",
    entities: ["Surveys", "Questions", "Responses", "Answers"],
  },
  {
    id: "job-board",
    title: "Job Board & ATS",
    description: "Jobs, candidates, applications, interviews, scorecards, and hiring stages.",
    category: "popular",
    entities: ["Jobs", "Candidates", "Applications", "Interviews"],
  },
  {
    id: "event-management",
    title: "Event Management",
    description: "Events, sessions, speakers, attendees, tickets, sponsors, and venues.",
    category: "popular",
    entities: ["Events", "Sessions", "Attendees", "Tickets"],
  },
  {
    id: "blog-cms",
    title: "Blog & CMS",
    description: "Posts, authors, categories, media, revisions, comments, and SEO metadata.",
    category: "popular",
    entities: ["Posts", "Authors", "Media", "Revisions"],
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Products, warehouses, stock levels, purchase orders, and stock movements.",
    category: "industry",
    entities: ["Products", "Warehouses", "Stock", "Purchase Orders"],
  },
  {
    id: "property-management",
    title: "Property Management",
    description: "Properties, units, tenants, leases, maintenance requests, and rent payments.",
    category: "industry",
    entities: ["Properties", "Units", "Leases", "Maintenance"],
  },
  {
    id: "point-of-sale",
    title: "Point of Sale",
    description: "Menus, modifiers, tables, orders, payments, staff, and reservations.",
    category: "industry",
    entities: ["Menu Items", "Orders", "Payments", "Reservations"],
  },
  {
    id: "patient-records",
    title: "Patient Records",
    description: "Patients, appointments, providers, clinical records, prescriptions, and billing.",
    category: "industry",
    entities: ["Patients", "Appointments", "Records", "Prescriptions"],
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Properties, rooms, rates, reservations, guests, payments, and housekeeping.",
    category: "industry",
    entities: ["Rooms", "Rates", "Reservations", "Guests"],
  },
  {
    id: "fitness-membership",
    title: "Gym Membership",
    description: "Members, plans, classes, trainers, bookings, attendance, and payments.",
    category: "industry",
    entities: ["Members", "Plans", "Classes", "Bookings"],
  },
  {
    id: "fleet-management",
    title: "Fleet Management",
    description: "Vehicles, drivers, trips, maintenance, fuel logs, inspections, and routes.",
    category: "industry",
    entities: ["Vehicles", "Drivers", "Trips", "Maintenance"],
  },
];

export const FEATURED_STARTER_IDS = [
  "multi-tenant-workspaces",
  "crm",
  "ecommerce",
  "subscription-billing",
  "project-management",
  "blog-cms",
] as const;
