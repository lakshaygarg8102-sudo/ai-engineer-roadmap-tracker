import { Section } from "../../types/roadmap";

export const executionPlans: Section = {
  id: "execution-plans",
  title: "Execution Plans",

  groups: [

    {
      id: "execution-plan-basics",
      title: "Execution Plans",

      topics: [
        {
          id: "what-is-explain",
          title: "EXPLAIN",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "explain-analyze",
          title: "EXPLAIN ANALYZE",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "reading-plan",
          title: "Reading Execution Plans",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "scan-types",
      title: "Scan Operations",

      topics: [
        {
          id: "sequential-scan",
          title: "Sequential Scan",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "index-scan",
          title: "Index Scan",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "bitmap-index-scan",
          title: "Bitmap Index Scan",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "index-only-scan",
          title: "Index Only Scan",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "join-algorithms",
      title: "Join Algorithms",

      topics: [
        {
          id: "nested-loop",
          title: "Nested Loop Join",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "hash-join",
          title: "Hash Join",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "merge-join-plan",
          title: "Merge Join",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "cost-analysis",
      title: "Cost Analysis",

      topics: [
        {
          id: "estimated-cost",
          title: "Estimated Cost",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "actual-cost",
          title: "Actual Execution Time",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "rows-estimation",
          title: "Row Estimation Errors",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Analysis",

      topics: [
        {
          id: "diagnosing-production",
          title: "Diagnosing Slow Queries",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "index-recommendation",
          title: "Choosing Better Indexes",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "execution-plan-debugging",
          title: "Execution Plan Debugging",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "read-plan-interview",
          title: "Interpret an Execution Plan",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "scan-vs-index",
          title: "Sequential Scan vs Index Scan",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },
    {
  id: "plan-analysis",
  title: "Advanced Plan Analysis",

  topics: [
    {
      id: "parallel-execution",
      title: "Parallel Execution Plans",
      estimatedMinutes: 45,
      interviewImportance: 5,
    },
    {
      id: "sort-spill",
      title: "Sort & Hash Spills",
      estimatedMinutes: 40,
      interviewImportance: 5,
    },
    {
      id: "memory-grants",
      title: "Memory Grants",
      estimatedMinutes: 40,
      interviewImportance: 5,
    }
  ]
},

  ]
};