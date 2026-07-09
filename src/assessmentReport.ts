import {
  buildAssessmentSummary,
  calculateAssessmentReadiness,
  type AssessmentScore,
} from "./assessmentRegistry";

export function buildToolkitAssessmentReport(scores: AssessmentScore[]) {
  const readiness = calculateAssessmentReadiness(scores);
  const domains = buildAssessmentSummary(scores);
  const highestRiskDomain = [...domains].sort((a, b) => b.risk - a.risk)[0];
  const lowestMaturityDomain = [...domains].sort((a, b) => a.maturity - b.maturity)[0];

  return {
    readiness,
    domains,
    highestRiskDomain,
    lowestMaturityDomain,
  };
}
