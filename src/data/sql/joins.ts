import { Section } from "../../types/roadmap";

export const joins: Section = {
  id: "joins",
  title: "Joins",

  groups: [

    {
      id: "join-fundamentals",
      title: "Join Fundamentals",

      topics: [
        {
          id: "why-joins",
          title: "Why Joins Exist",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "join-execution",
          title: "How SQL Executes Joins",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "join-conditions",
          title: "Join Conditions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "join-types",
      title: "Join Types",

      topics: [
        {
          id: "inner-join",
          title: "INNER JOIN",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "left-join",
          title: "LEFT JOIN",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "right-join",
          title: "RIGHT JOIN",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "full-outer-join",
          title: "FULL OUTER JOIN",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cross-join",
          title: "CROSS JOIN",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "self-join",
          title: "SELF JOIN",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-joins",
      title: "Advanced Joins",

      topics: [
        {
          id: "multi-table-joins",
          title: "Joining Multiple Tables",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "join-null",
          title: "NULL Handling in Joins",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "duplicate-rows",
          title: "Duplicate Rows after Joins",
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
          id: "star-schema-joins",
          title: "Star Schema Joins",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "fact-dimension",
          title: "Fact & Dimension Table Joins",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "join-performance",
          title: "Join Performance",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Problems",

      topics: [
        {
          id: "customers-without-orders",
          title: "Customers Without Orders",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "employees-manager",
          title: "Employee Manager Hierarchy",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "join-vs-subquery",
          title: "JOIN vs Subquery",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};