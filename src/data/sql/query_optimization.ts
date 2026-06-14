import { Section } from "../../types/roadmap";

export const queryOptimization: Section = {
  id: "query-optimization",
  title: "Query Optimization",

  groups: [

    {
      id: "fundamentals",
      title: "Optimization Fundamentals",

      topics: [
        {
          id: "why-query-slow",
          title: "Why Queries Become Slow",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "query-optimizer",
          title: "How the Query Optimizer Works",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "cost-based-optimizer",
          title: "Cost-Based Optimization",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "writing-efficient-sql",
      title: "Writing Efficient SQL",

      topics: [
        {
          id: "avoid-select-star",
          title: "Avoid SELECT *",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "filter-early",
          title: "Filter Early",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "join-order",
          title: "Join Order",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "predicate-pushdown",
          title: "Predicate Pushdown",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimization-techniques",
      title: "Optimization Techniques",

      topics: [
        {
          id: "covering-indexes",
          title: "Using Covering Indexes",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "avoid-functions",
          title: "Avoid Functions on Indexed Columns",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "exists-vs-in-performance",
          title: "EXISTS vs IN Performance",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "union-vs-union-all",
          title: "UNION vs UNION ALL",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Optimization",

      topics: [
        {
          id: "large-table-optimization",
          title: "Optimizing Large Tables",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "partitioning-intro",
          title: "Partitioning Concepts",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "materialized-views",
          title: "Materialized Views",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "slow-query",
          title: "Optimize a Slow Query",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "optimization-case-study",
          title: "Query Optimization Case Study",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },
    {
  id: "optimizer-rules",
  title: "Optimizer Rules",

  topics: [
    {
      id: "sargable-queries",
      title: "SARGable Queries",
      estimatedMinutes: 45,
      interviewImportance: 5,
    },
    {
      id: "predicate-rewrite",
      title: "Predicate Rewriting",
      estimatedMinutes: 40,
      interviewImportance: 5,
    },
    {
      id: "join-elimination",
      title: "Join Elimination",
      estimatedMinutes: 40,
      interviewImportance: 5,
    }
  ]
},

  ]
};