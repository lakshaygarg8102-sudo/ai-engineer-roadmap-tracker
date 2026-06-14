import { Section } from "../../types/roadmap";

export const indexes: Section = {
  id: "indexes",
  title: "Indexes",

  groups: [

    {
      id: "fundamentals",
      title: "Index Fundamentals",

      topics: [
        {
          id: "what-is-index",
          title: "What is an Index?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "why-index",
          title: "Why Indexes Improve Performance",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "clustered-index",
          title: "Clustered Index",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "non-clustered-index",
          title: "Non-Clustered Index",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "index-types",
      title: "Index Types",

      topics: [
        {
          id: "composite-index",
          title: "Composite Index",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "covering-index",
          title: "Covering Index",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "unique-index",
          title: "Unique Index",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "partial-index",
          title: "Partial Index",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "internals",
      title: "Index Internals",

      topics: [
        {
          id: "b-tree",
          title: "B-Tree Index",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "hash-index",
          title: "Hash Index",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "index-storage",
          title: "How Indexes are Stored",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "when-indexes-help",
          title: "When Indexes Help",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "when-indexes-hurt",
          title: "When Indexes Hurt",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "index-maintenance",
          title: "Index Maintenance",
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
          id: "designing-indexes",
          title: "Designing Efficient Indexes",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "multi-column-index",
          title: "Multi-column Index Strategy",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "indexing-large-tables",
          title: "Indexing Large Tables",
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
          id: "why-query-slow",
          title: "Why is This Query Slow?",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "choose-index",
          title: "Which Index Would You Create?",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },
    {
  id: "statistics",
  title: "Statistics & Cardinality",

  topics: [
    {
      id: "database-statistics",
      title: "Database Statistics",
      estimatedMinutes: 40,
      interviewImportance: 5,
    },
    {
      id: "cardinality-estimation",
      title: "Cardinality Estimation",
      estimatedMinutes: 45,
      interviewImportance: 5,
    },
    {
      id: "index-selectivity",
      title: "Index Selectivity",
      estimatedMinutes: 40,
      interviewImportance: 5,
    }
  ]
},

  ]
};