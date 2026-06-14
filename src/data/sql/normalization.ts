import { Section } from "../../types/roadmap";

export const normalization: Section = {
  id: "normalization",
  title: "Normalization & Data Modeling",

  groups: [

    {
      id: "modeling",
      title: "Data Modeling",

      topics: [
        {
          id: "entity",
          title: "Entities",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "attributes",
          title: "Attributes",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "relationships",
          title: "Entity Relationships",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "erd",
          title: "Entity Relationship Diagrams",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "normal-forms",
      title: "Normal Forms",

      topics: [
        {
          id: "first-normal-form",
          title: "1NF",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "second-normal-form",
          title: "2NF",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "third-normal-form",
          title: "3NF",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "bcnf",
          title: "Boyce-Codd Normal Form (BCNF)",
          estimatedMinutes: 40,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "denormalization",
      title: "Denormalization",

      topics: [
        {
          id: "why-denormalize",
          title: "Why Denormalize?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "tradeoffs",
          title: "Normalization vs Denormalization",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "warehouse-modeling",
          title: "OLTP vs OLAP Modeling",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Database Design",

      topics: [
        {
          id: "star-schema",
          title: "Star Schema",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "snowflake-schema",
          title: "Snowflake Schema",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "fact-dimension-design",
          title: "Fact & Dimension Modeling",
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
          id: "normalization-interview",
          title: "Normalize a Database Design",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "star-vs-snowflake",
          title: "Star Schema vs Snowflake Schema",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};