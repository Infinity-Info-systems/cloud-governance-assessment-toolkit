export type AssessmentDomain = {
  id: string;
  name: string;
  purpose: string;
  evidenceSources: string[];
  typicalRisks: string[];
  priority: "High" | "Medium" | "Low";
};

export const assessmentDomains: AssessmentDomain[] = [
  {
    id: "cloud-governance",
    name: "Cloud Governance",
    purpose: "Assess whether control ownership, policy execution, and approval paths are working.",
    evidenceSources: ["Policies", "RACI", "Exception logs", "Approval records"],
    typicalRisks: ["Policy execution inconsistency", "Unclear ownership", "Exceptions without expiry"],
    priority: "High",
  },
  {
    id: "sre-maturity",
    name: "SRE Maturity",
    purpose: "Assess service ownership, alert quality, and reliability operating discipline.",
    evidenceSources: ["Alert data", "Runbooks", "Incident reviews", "SLO reports"],
    typicalRisks: ["Incomplete SLO coverage", "Noisy alerts", "Weak incident learning"],
    priority: "High",
  },
  {
    id: "dr-readiness",
    name: "DR Readiness",
    purpose: "Assess recovery objectives, test cadence, and validated failover posture.",
    evidenceSources: ["Recovery plans", "Test records", "RTO/RPO targets", "Approval logs"],
    typicalRisks: ["Test gaps", "Unvalidated objectives", "Recovery ownership ambiguity"],
    priority: "Medium",
  },
  {
    id: "finops-readiness",
    name: "FinOps Readiness",
    purpose: "Assess spend visibility, allocation quality, and optimization discipline.",
    evidenceSources: ["Cost dashboards", "Tagging reports", "Forecasts", "Savings validation"],
    typicalRisks: ["Tagging gaps", "Commitment governance drift", "Unclear spend ownership"],
    priority: "High",
  },
  {
    id: "security-compliance",
    name: "Security and Compliance",
    purpose: "Assess controls, exceptions, and evidence readiness for assurance reviews.",
    evidenceSources: ["Control matrices", "Audit evidence", "Exception approvals", "Attestations"],
    typicalRisks: ["Incomplete evidence", "Exception handling gaps", "Unclear control mapping"],
    priority: "Medium",
  },
];

export type AssessmentScore = {
  domainId: string;
  maturity: number;
  risk: number;
  confidence: number;
  notes: string;
};

export function scoreBand(score: number) {
  if (score >= 85) return "Strong";
  if (score >= 70) return "Developing";
  if (score >= 55) return "Moderate";
  return "Needs Attention";
}

export function calculateAssessmentReadiness(scores: AssessmentScore[]) {
  const average =
    scores.reduce((sum, item) => sum + item.maturity, 0) / Math.max(scores.length, 1);
  const riskAverage =
    scores.reduce((sum, item) => sum + item.risk, 0) / Math.max(scores.length, 1);
  const confidenceAverage =
    scores.reduce((sum, item) => sum + item.confidence, 0) / Math.max(scores.length, 1);

  return {
    averageMaturity: Number(average.toFixed(1)),
    averageRisk: Number(riskAverage.toFixed(1)),
    averageConfidence: Number(confidenceAverage.toFixed(1)),
    readinessBand: scoreBand(average),
  };
}

export function buildAssessmentSummary(scores: AssessmentScore[]) {
  return scores.map((score) => {
    const domain = assessmentDomains.find((item) => item.id === score.domainId);

    return {
      domain: domain?.name ?? score.domainId,
      priority: domain?.priority ?? "Medium",
      maturity: score.maturity,
      risk: score.risk,
      confidence: score.confidence,
      notes: score.notes,
    };
  });
}
