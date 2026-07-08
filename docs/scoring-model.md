# Scoring Model

## Scale

Use a 1 to 5 maturity scale for all domains.

| Score | Meaning |
| --- | --- |
| 1 | Ad hoc or absent |
| 2 | Emerging and inconsistent |
| 3 | Defined and partially adopted |
| 4 | Measured and repeatable |
| 5 | Optimized and continuously improved |

## Scoring Dimensions

- process consistency
- evidence quality
- control execution
- ownership clarity
- measurement discipline
- remediation readiness

## How To Score

1. Read the evidence for the domain.
2. Judge how consistently the practice is applied.
3. Judge whether the control is actually operating.
4. Capture whether the score reflects current state or target state.
5. Note the confidence level in the score.

## Risk Overlay

Use a separate risk rating to avoid confusing maturity with exposure.

| Risk | Meaning |
| --- | --- |
| Low | Limited exposure and manageable impact |
| Medium | Material gap but not immediately critical |
| High | Significant exposure or executive concern |
| Critical | Immediate action required |

## Confidence Rule

If confidence is low, the score should be reviewed more carefully before it is used for executive decisions.

## Confidence Overlay

| Confidence | Meaning |
| --- | --- |
| High | Strong direct evidence |
| Medium | Adequate evidence with minor gaps |
| Low | Weak evidence or heavy reliance on self-reporting |

## Domain Aggregation

- use the average score only as a summary indicator
- do not let the average hide a critical weakness
- call out the lowest-scoring domain as the first remediation focus
- track trend over time rather than only the latest score

## Scoring Summary Table

| Domain | Maturity | Risk | Confidence | Typical Evidence |
| --- | --- | --- | --- | --- |
| Governance | 3/5 | High | Medium | Policies, RACI, approvals |
| SRE | 2/5 | High | Medium | Alerts, runbooks, service ownership |
| DR | 3/5 | Medium | Medium | Test records, recovery evidence |
| FinOps | 2/5 | High | Low | Cost reports, tagging, budgets |
| Security | 4/5 | Medium | High | Controls, exceptions, attestations |

## Interpretation Guidance

- a high score with low confidence should still be reviewed carefully
- a lower score with strong evidence is more trustworthy than a higher score with weak support
- the best roadmap focuses on the highest-risk, most-improvable gaps first

## Score Narratives

- score `1` usually means the practice is not yet operationalized
- score `2` usually means the practice exists but varies by team or platform
- score `3` usually means the practice is defined and partially adopted
- score `4` usually means the practice is repeatable and evidenced
- score `5` usually means the practice is optimized and continuously improved

## Use

Use the scoring model to keep domain scoring consistent and transparent across assessment cycles.
