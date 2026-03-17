import React from "react";
import { Box, Typography, Chip, Divider } from "@mui/material";

const Section = ({ title, items }) => (
  <Box sx={{ mb: 2.5 }}>
    <Typography
      variant="subtitle1"
      sx={{ fontWeight: 700, mb: 1, color: "#1a1a2e" }}
    >
      {title}
    </Typography>
    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
      {items?.map((item, i) => (
        <Typography
          component="li"
          variant="body2"
          key={i}
          sx={{ mb: 0.5, lineHeight: 1.6 }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  </Box>
);

const techStack = [
  "Next.js 15",
  "NestJS 11",
  "TypeScript",
  "PostgreSQL 16",
  "pgvector",
  "Drizzle ORM",
  "Turborepo",
  "AI SDK 6",
  "Google Gemini",
  "Anthropic Claude",
  "Stripe Connect",
  "Clerk Auth",
  "Redis",
  "BullMQ",
  "Cloudflare R2",
  "Vercel",
  "Railway",
  "Neon",
  "Docker",
  "GitHub Actions",
  "Tailwind CSS",
  "Shadcn/UI",
];

const ProGigDetails = () => {
  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 1, color: "text.secondary" }}>
        Multi-tenant SaaS platform for DJs, Venues, Event Companies &
        Musicians. Built from scratch — 100% fresh codebase, no legacy
        migration.
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 2, color: "text.secondary", fontStyle: "italic" }}
      >
        Currently on staging — 47 DB tables, 22 API controllers, 80+ endpoints,
        96.6% QA pass rate. Production launch coming soon.
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
        {techStack?.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="small"
            variant="outlined"
            sx={{ fontSize: "0.75rem" }}
          />
        ))}
      </Box>

      <Divider sx={{ mb: 2.5 }} />

      <Section
        title="Architecture & Infrastructure"
        items={[
          "Turborepo monorepo with shared packages (@platform/types, config, utils, database, email)",
          "Zero-Ops infrastructure: Vercel (frontend) + Railway (NestJS API + Redis) + Neon (serverless PostgreSQL) + Cloudflare R2 (media storage with zero egress fees)",
          "Multi-tenant architecture supporting dynamic entity types (DJ, Venue, Event Company, Musician/Band) defined in config — no hardcoded enums",
          "Multi-organization per user — one user can own multiple orgs of any type",
          "Feature flag system — toggleable at global, tier, and per-user levels",
          "CI/CD via GitHub Actions with approval gates, staging and production environments",
          "Monitoring: Sentry (errors), Axiom (logs), Bull Board (job queue dashboard)",
        ]}
      />

      <Section
        title="AI & Vector Search (Multi-Model)"
        items={[
          "AI SDK 6 with config-driven multi-model registry — swap models per feature with one config line",
          "Google Gemini 2.5 Flash (classification, extraction), Gemini Flash Lite (categorization, moderation)",
          "Anthropic Claude Haiku 4.5 (emails, bios, replies), Claude Sonnet 4.5 (proposals, complex analysis)",
          "RAG pipeline: document parsing → Google gemini-embedding-001 (512 dimensions) → PostgreSQL pgvector with HNSW index → sub-10ms cosine similarity queries",
          "Embeddings for profiles, reviews, forum posts, audio metadata, FAQ, public events via BullMQ background jobs",
          "AI provider fallback chains per feature with circuit breaker (5 failures → 2min skip)",
          "AI daily limits enforced via Redis counters with tier-based quotas and upgrade CTAs",
          "AI features: email drafts, profile bio generation, smart replies, RAG docs, contract summaries, event timelines, content moderation, email classification",
          "Global AI assistant with role-aware context (public visitor, logged-in DJ, Venue, Platform Admin)",
        ]}
      />

      <Section
        title="Backend & API"
        items={[
          "NestJS 11 with Drizzle ORM — TypeScript schema IS the database schema, first-class pgvector support",
          "22 API controllers, 80+ endpoints with Swagger/OpenAPI documentation",
          "47 database tables covering organizations, events, bookings, media, documents, messaging, reviews, forums, analytics",
          "RBAC with Clerk authentication — multi-org switching, team members, route-level permissions",
          "Tier system (Free/Standard/Pro/Premium) with Stripe Billing, Customer Portal, Smart Retries, automatic tax, proration",
          "Promotion & reward system — admin-managed promo codes, tier upgrades with expiry, effective tier resolution (promo > subscription > Free)",
          "BullMQ job queue for background processing: embeddings, email sending, file processing, promo expiry checks",
          "Base classes (BaseService, BaseRepository, BaseQueryDto) for standardized CRUD patterns",
          "Rate limiting via @nestjs/throttler, request ID middleware, global exception filter",
        ]}
      />

      <Section
        title="Frontend"
        items={[
          "Next.js 15 (App Router, Turbopack, React 19) — two apps: main platform (progig.io) + admin dashboard (admin.progig.io)",
          "Tailwind CSS + Shadcn/UI component library with Radix primitives",
          "React Query (TanStack v5) for server state, Zustand for client state",
          "Registration & onboarding wizard (multi-step, state persistence, abandoned flow reminders)",
          "Public profile pages — configurable per entity type, SEO optimized with structured data",
          "BrandConfig system — themes, colors, fonts, dark mode per organization",
        ]}
      />

      <Section
        title="Platform Features"
        items={[
          "Booking & quote flow — request, quote, accept/decline, expiry handling",
          "Internal messaging with SSE (Server-Sent Events) and heartbeat auth",
          "Notification system — in-app + email, urgency-based batching (instant/batched/digest)",
          "Event management — single, recurring, multi-date events with status workflow",
          "Document generation — invoices, contracts, riders (PDF)",
          "Media management — gallery, audio library with waveform, video links, R2 storage with per-tier limits",
          "Review system — platform verified + unverified + external reviews with dispute flow",
          "Community forums per geographic area",
          "Analytics module (Basic for all, Advanced for Pro/Premium)",
          "Custom domain mapping per entity via Cloudflare for SaaS",
          "Geo-location system for service area management",
          "Verification flow — AI pipeline with weighted scoring, industry-specific prompts",
        ]}
      />

      <Section
        title="Email System"
        items={[
          "React Email templates — TypeScript, composable, version-controlled in monorepo",
          "Resend for transactional email (booking confirmations, notifications, invoices, verification updates)",
          "14+ email templates with shared layout, preview mode, and Vitest snapshot tests",
          "Gmail integration designed and architecture-ready (feature-flagged OFF for initial launch)",
        ]}
      />

      <Section
        title="Payments (Stripe)"
        items={[
          "Stripe Billing with Checkout flow, Customer Portal, subscription management",
          "Stripe webhooks with signature verification, idempotency via StripeEvent table",
          "Dunning flow — PAST_DUE banner, Smart Retries, CANCELLED fallback",
          "Stripe Connect (optional per entity, commission dormant)",
          "Invoice generation (PDF, no payment processing — client pays externally, DJ marks paid)",
          "Stripe Tax integration with automatic tax calculation",
        ]}
      />
    </Box>
  );
};

export default ProGigDetails;
