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
  "NestJS",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "AWS (CDK, ECS/Fargate, RDS, CloudWatch, S3)",
  "OpenAPI",
  "Docker",
  "GitHub Actions",
  "Redis",
  "OpenAI Embeddings",
];

const RatePerfectDetails = () => {
  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        Mortgage/finance platform — full-stack development across 6+ repos.
        March 2025 – February 2026.
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
        title="Backend & API"
        items={[
          "Built Lender Communications backend: email domain, artifact/attachment workflows, Gmail polling integration, S3 storage — 20+ API endpoints",
          "Implemented system mode management (NORMAL / MAINTENANCE / INGESTION) with cron scheduling and guard-enforced access control",
          "Built AI-powered guideline semantic search — embeddings pipeline, streaming cache (~350 MB, 27k+ vectors), async warm-up, 3–6× faster scoring",
          "Implemented rate grid endpoint with LRU cache, product filters (LTV, GDS, TDS, regions, amortization), bidirectional field derivation",
          "Built service-to-service API key management and BOSS SSO integration (OAuth, token handling, user mapping)",
          "Implemented RBAC (Standard, Data Admin, Admin, Ingestion roles) with JWT auth, refresh tokens, impersonation",
          "Delivered dozens of Prisma migrations for major platform features",
        ]}
      />

      <Section
        title="AWS / Infrastructure"
        items={[
          "Implemented CloudWatch monitoring: 17 staging + 21 production alarms (anomaly detection, composites) with Slack notifications",
          "Reduced alert noise by focusing on actionable server-side failure signals",
          "Designed deployment fan-out verification — API deploys trigger smoke checks across consumer repos via GitHub Actions",
          "Migrated Gmail poller from scheduled runs to long-running ECS service with 429 rate-limit handling",
        ]}
      />

      <Section
        title="Contract / OpenAPI"
        items={[
          "Maintained contract-first architecture with modular OpenAPI spec and strict Redocly linting",
          "Automated spec flattening + TypeScript client generation (typescript-fetch) and publishing to private registry",
          "Implemented release/versioning automation with backwards-compatibility guardrails",
        ]}
      />

      <Section
        title="Frontend (Next.js)"
        items={[
          "Built admin dashboard tooling: feedback management, lender communications, ingestion workflow UI",
          "Built broker portal features: rate sheets tab, scenario/rate exploration, guideline search, bilingual/i18n support",
          "Implemented chat widget v1 — floating launcher, feedback-backed threads, polling for agent replies",
        ]}
      />

      <Section
        title="Data Pipelines & Ingestion"
        items={[
          "Enhanced multi-step ingestion pipeline: parse → map → policy match → logos → translate → ingest → embeddings",
          "Implemented Gmail poller reliability improvements including rate sheet detection + Slack alerts",
        ]}
      />

      <Section
        title="Automation & Testing"
        items={[
          "Authored 94+ reusable curl scripts (local/staging/production) for smoke tests and operational validation",
          "Built API waterfall runner for OpenAPI-driven endpoint discovery and CloudWatch request-trace joins",
          "Wrote 47+ system-mode validation tests covering roles, permissions, and maintenance behavior",
        ]}
      />
    </Box>
  );
};

export default RatePerfectDetails;
