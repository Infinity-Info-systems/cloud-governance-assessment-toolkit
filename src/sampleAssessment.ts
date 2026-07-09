import { AssessmentScore } from "./assessmentRegistry";

export const sampleAssessmentScores: AssessmentScore[] = [
  {
    domainId: "cloud-governance",
    maturity: 72,
    risk: 80,
    confidence: 68,
    notes: "Policy execution is improving but exception handling remains uneven.",
  },
  {
    domainId: "sre-maturity",
    maturity: 64,
    risk: 78,
    confidence: 70,
    notes: "SLO coverage is partial and incident learning is not yet fully consistent.",
  },
  {
    domainId: "dr-readiness",
    maturity: 69,
    risk: 66,
    confidence: 72,
    notes: "Recovery objectives are documented but test frequency should increase.",
  },
  {
    domainId: "finops-readiness",
    maturity: 61,
    risk: 81,
    confidence: 62,
    notes: "Allocation is visible but tagging governance needs tighter control.",
  },
  {
    domainId: "security-compliance",
    maturity: 77,
    risk: 60,
    confidence: 82,
    notes: "Control mapping is present; evidence collection discipline is stronger than average.",
  },
];
