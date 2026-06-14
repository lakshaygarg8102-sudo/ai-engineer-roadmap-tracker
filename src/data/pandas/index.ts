import { Module } from "../../types/roadmap";

import { fundamentals } from "./fundamentals";
import { seriesDataframe } from "./series_dataframe";
import { dataLoading } from "./data_loading";
import { indexingSelection } from "./indexing_selection";
import { missingData } from "./missing_data";
import { dataCleaning } from "./data_cleaning";
import { dataTransformation } from "./data_transformation";
import { groupby } from "./groupby";
import { mergeJoin } from "./merge_join";
import { aggregation } from "./aggregation";
import { timeSeries } from "./time_series";
import { visualization } from "./visualization";
import { performance } from "./performance";
import { bestPractices } from "./best_practices";
import { advancedTopics } from "./advanced_topics";
import { interviewMaster } from "./interview_master";

export const pandasModule: Module = {
  id: "pandas",

  title: "Pandas",

  sections: [
    fundamentals,
    seriesDataframe,
    dataLoading,
    indexingSelection,
    missingData,
    dataCleaning,
    dataTransformation,
    groupby,
    mergeJoin,
    aggregation,
    timeSeries,
    visualization,
    performance,
    bestPractices,
    advancedTopics,
    interviewMaster
  ],
};