import { Section } from "../../types/roadmap";

export const subqueriesCtes: Section = {
  id: "subqueries-ctes",
  title: "Subqueries & CTEs",

  groups: [

    {
      id: "subqueries",
      title: "Subqueries",

      topics: [
        {
          id: "what-is-subquery",
          title: "What is a Subquery?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "scalar-subquery",
          title: "Scalar Subqueries",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "correlated-subquery",
          title: "Correlated Subqueries",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "exists",
          title: "EXISTS",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "not-exists",
          title: "NOT EXISTS",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "cte",
      title: "Common Table Expressions",

      topics: [
        {
          id: "cte-basics",
          title: "CTE (WITH Clause)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "multiple-cte",
          title: "Multiple CTEs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "recursive-cte",
          title: "Recursive CTEs",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "comparison",
      title: "Comparison",

      topics: [
        {
          id: "cte-vs-subquery",
          title: "CTE vs Subquery",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "exists-vs-in",
          title: "EXISTS vs IN",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "cte-performance",
          title: "CTE Performance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Usage",

      topics: [
        {
          id: "complex-reporting",
          title: "Complex Reporting Queries",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "hierarchical-data",
          title: "Hierarchical Data Queries",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "modular-sql",
          title: "Writing Modular SQL",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Problems",

      topics: [
        {
          id: "second-highest-salary",
          title: "Second Highest Salary",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "employees-above-average",
          title: "Employees Above Department Average",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "manager-hierarchy",
          title: "Manager Hierarchy using Recursive CTE",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    }

  ]
};