import { Section } from "../../types/roadmap";

export const debugging: Section = {
  id: "debugging",
  title: "SQL Debugging & Troubleshooting",

  groups: [

    {
      id: "query-errors",
      title: "Query Errors",

      topics: [
        {
          id: "syntax-errors",
          title: "Syntax Errors",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "logical-errors",
          title: "Logical Errors",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "null-bugs",
          title: "NULL-related Bugs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "duplicate-results",
          title: "Unexpected Duplicate Rows",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance-debugging",
      title: "Performance Debugging",

      topics: [
        {
          id: "slow-query-debugging",
          title: "Debugging Slow Queries",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "missing-index",
          title: "Missing Index Detection",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "bad-join-order",
          title: "Poor Join Order",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "expensive-sort",
          title: "Expensive Sort Operations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "data-debugging",
      title: "Data Validation",

      topics: [
        {
          id: "row-count-validation",
          title: "Row Count Validation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "duplicate-detection",
          title: "Duplicate Detection",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "referential-validation",
          title: "Referential Integrity Validation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Troubleshooting",

      topics: [
        {
          id: "locking-issues",
          title: "Locking Issues",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "deadlock-analysis",
          title: "Deadlock Analysis",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "connection-pool",
          title: "Connection Pool Problems",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "timeout-debugging",
          title: "Query Timeout Debugging",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Scenarios",

      topics: [
        {
          id: "production-outage",
          title: "Production SQL Outage",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "slow-dashboard",
          title: "Dashboard Became Slow Overnight",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "duplicate-orders",
          title: "Duplicate Orders Investigation",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};