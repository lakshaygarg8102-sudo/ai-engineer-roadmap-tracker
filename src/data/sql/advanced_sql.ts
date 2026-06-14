import { Section } from "../../types/roadmap";

export const advancedSql: Section = {
  id: "advanced-sql",
  title: "Advanced SQL",

  groups: [

    {
      id: "advanced-querying",
      title: "Advanced Querying",

      topics: [
        {
          id: "set-operators",
          title: "UNION, UNION ALL, INTERSECT & EXCEPT",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "conditional-expressions",
          title: "CASE WHEN",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "coalesce-nullif",
          title: "COALESCE() & NULLIF()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "common-functions",
          title: "Common SQL Functions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "json-sql",
      title: "Working with JSON",

      topics: [
        {
          id: "json-columns",
          title: "JSON Data Types",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "json-extraction",
          title: "Extracting JSON Fields",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "json-performance",
          title: "JSON Query Performance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "analytical-sql",
      title: "Analytical SQL",

      topics: [
        {
          id: "pivoting",
          title: "Pivoting Data",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "unpivoting",
          title: "Unpivoting Data",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "percentiles",
          title: "Percentiles & Median",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "warehouse",
      title: "Data Warehouse SQL",

      topics: [
        {
          id: "partitioned-tables",
          title: "Partitioned Tables",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "clustering",
          title: "Clustering",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "incremental-loading",
          title: "Incremental Loading",
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
          id: "json-interview",
          title: "Query Nested JSON",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "warehouse-interview",
          title: "Warehouse SQL Design",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },
    {
  id: "advanced-ddl-dml",
  title: "Advanced DDL & DML",

  topics: [
    {
      id: "merge-into",
      title: "MERGE / UPSERT",
      estimatedMinutes: 45,
      interviewImportance: 5,
    },
    {
      id: "insert-on-conflict",
      title: "INSERT ... ON CONFLICT",
      estimatedMinutes: 35,
      interviewImportance: 5,
    },
    {
      id: "temporary-tables",
      title: "Temporary Tables",
      estimatedMinutes: 35,
      interviewImportance: 5,
    },
    {
      id: "views-vs-materialized",
      title: "Views vs Materialized Views",
      estimatedMinutes: 40,
      interviewImportance: 5,
    }
  ]
    

},
  ]
};