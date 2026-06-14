import { Section } from "../../types/roadmap";

export const fundamentals: Section = {
  id: "sql-fundamentals",
  title: "SQL Fundamentals",

  groups: [

    {
      id: "introduction",
      title: "Introduction",

      topics: [
        {
          id: "what-is-sql",
          title: "What is SQL?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "why-sql",
          title: "Why SQL Matters",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "sql-in-ai",
          title: "SQL in AI & Data Engineering",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "rdbms",
          title: "Relational Database Systems",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "database-concepts",
      title: "Core Database Concepts",

      topics: [
        {
          id: "database",
          title: "Database",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "table",
          title: "Tables",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "row-column",
          title: "Rows & Columns",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "schema",
          title: "Schema",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "relationships",
          title: "Relationships",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "data-types",
      title: "SQL Data Types",

      topics: [
        {
          id: "numeric-types",
          title: "Numeric Types",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "string-types",
          title: "String Types",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "date-types",
          title: "Date & Time Types",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "boolean-types",
          title: "Boolean Types",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-sql",
          title: "Why SQL is Still Relevant",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-rdbms",
          title: "DBMS vs RDBMS",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};