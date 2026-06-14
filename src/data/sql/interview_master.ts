import { Section } from "../../types/roadmap";

export const interviewMaster: Section = {
  id: "interview-master",
  title: "Interview Mastery",

  groups: [

    {
      id: "query-round",
      title: "Coding Round",

      topics: [
        {
          id: "top-n-per-group",
          title: "Top N Records Per Group",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "nth-highest-salary",
          title: "Nth Highest Salary",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "running-total",
          title: "Running Total",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "moving-average",
          title: "Moving Average",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "gaps-and-islands",
          title: "Gaps and Islands",
          estimatedMinutes: 60,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "join-problems",
      title: "Join Problems",

      topics: [
        {
          id: "customers-no-orders",
          title: "Customers Without Orders",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "duplicate-joins",
          title: "Duplicate Join Results",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "employee-manager",
          title: "Employee Manager Hierarchy",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimization-round",
      title: "Performance Round",

      topics: [
        {
          id: "optimize-query",
          title: "Optimize a Slow Query",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "execution-plan-analysis",
          title: "Analyze an Execution Plan",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "index-design",
          title: "Design the Right Index",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "system-design",
      title: "Database Design",

      topics: [
        {
          id: "schema-design",
          title: "Design an E-commerce Schema",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "analytics-schema",
          title: "Design an Analytics Database",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "partition-strategy",
          title: "Partitioning Strategy",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production SQL",

      topics: [
        {
          id: "etl-case-study",
          title: "Build an ETL Pipeline",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "warehouse-case-study",
          title: "Warehouse Optimization",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "billion-row-case",
          title: "Handle a Billion-row Table",
          estimatedMinutes: 60,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "revision",
      title: "Final Revision",

      topics: [
        {
          id: "faang-revision",
          title: "Complete SQL FAANG Revision",
          estimatedMinutes: 120,
          interviewImportance: 5,
        },
        {
          id: "top-100-sql",
          title: "Top 100 SQL Interview Questions",
          estimatedMinutes: 180,
          interviewImportance: 5,
        }
      ]
    }

  ]
};