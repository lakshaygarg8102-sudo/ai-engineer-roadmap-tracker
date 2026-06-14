import { Module } from "../../types/roadmap";

import { fundamentals } from "./fundamentals";
import { filteringSorting } from "./filtering_sorting";
import { joins } from "./joins";
import { aggregations } from "./aggregations";
import { subqueriesCtes } from "./subqueries_ctes";
import { windowFunctions } from "./window_functions";
import { constraintsKeys } from "./constraints_keys";
import { indexes } from "./indexes";
import { transactions } from "./transactions";
import { normalization } from "./normalization";
import { queryOptimization } from "./query_optimization";
import { executionPlans } from "./execution_plans";
import { advancedSql } from "./advanced_sql";
import { productionSql } from "./production_sql";
import { debugging } from "./debugging";
import { interviewMaster } from "./interview_master";

export const sqlModule: Module = {
  id: "sql",
  title: "SQL",

  sections: [
    fundamentals,
    filteringSorting,
    joins,
    aggregations,
    subqueriesCtes,
    windowFunctions,
    constraintsKeys,
    indexes,
    transactions,
    normalization,
    queryOptimization,
    executionPlans,
    advancedSql,
    productionSql,
    debugging,
    interviewMaster,
  ],
};