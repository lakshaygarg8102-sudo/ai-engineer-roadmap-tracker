import { Module } from "../../types/roadmap";

import { fundamentals } from "./fundamentals";
import { ndarray } from "./ndarray";
import { arrayCreation } from "./array_creation";
import { indexingSlicing } from "./indexing_slicing";
import { arrayManipulation } from "./array_manipulation";
import { broadcasting } from "./broadcasting";
import { ufuncs } from "./ufuncs";
import { vectorization } from "./vectorization";
import { linearAlgebra } from "./linear_algebra";
import { statistics } from "./statistics";
import { random } from "./random";
import { memoryInternals } from "./memory_internals";
import { performance } from "./performance";
import { bestPractices } from "./best_practices";
import { advancedTopics } from "./advanced_topics";

export const numpyModule: Module = {
  id: "numpy",
  title: "NumPy",

  sections: [
    // -----------------------------
    // Foundations
    // -----------------------------
    fundamentals,
    ndarray,
    arrayCreation,
    indexingSlicing,
    arrayManipulation,

    // -----------------------------
    // Core NumPy Concepts
    // -----------------------------
    broadcasting,
    ufuncs,
    vectorization,

    // -----------------------------
    // Mathematical Computing
    // -----------------------------
    linearAlgebra,
    statistics,
    random,

    // -----------------------------
    // Internals & Performance
    // -----------------------------
    memoryInternals,
    performance,

    // -----------------------------
    // Production Usage
    // -----------------------------
    advancedTopics,
    bestPractices,
  ],
};