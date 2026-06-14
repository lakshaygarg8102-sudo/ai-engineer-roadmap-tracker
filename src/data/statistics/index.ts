import { Module } from "../../types/roadmap";

import { fundamentals } from "./fundamentals";
import { descriptiveStatistics } from "./descriptive_statistics";
import { probability } from "./probability";
import { probabilityDistributions } from "./probability_distributions";
import { sampling } from "./sampling";
import { hypothesisTesting } from "./hypothesis_testing";
import { confidenceIntervals } from "./confidence_intervals";
import { correlationCovariance } from "./correlation_covariance";
import { linearAlgebraFoundation } from "./linear_algebra_foundation";
import { optimizationMath } from "./optimization_math";
import { calculusFoundation } from "./calculus_foundation";
import { informationTheory } from "./information_theory";
import { productionStatistics } from "./production_statistics";
import { debugging } from "./debugging";
import { interviewMaster } from "./interview_master";

export const statisticsModule: Module = {
  id: "statistics",
  title: "Statistics",

  sections: [
    fundamentals,
    descriptiveStatistics,
    probability,
    probabilityDistributions,
    sampling,
    hypothesisTesting,
    confidenceIntervals,
    correlationCovariance,
    linearAlgebraFoundation,
    optimizationMath,
    calculusFoundation,
    informationTheory,
    productionStatistics,
    debugging,
    interviewMaster,
  ],
};