import { Section } from "../../types/roadmap";

export const indexingSelection: Section = {
  id: "indexing-selection",
  title: "Indexing & Selection",

  groups: [

    {
      id: "selection",
      title: "Selecting Data",

      topics: [
        {
          id: "select-columns",
          title: "Selecting Columns",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "select-rows",
          title: "Selecting Rows",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "loc",
          title: ".loc",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iloc",
          title: ".iloc",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "boolean-indexing",
      title: "Filtering",

      topics: [
        {
          id: "boolean-indexing",
          title: "Boolean Indexing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "multiple-conditions",
          title: "Multiple Conditions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "query-method",
          title: "query()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "index-management",
      title: "Managing Index",

      topics: [
        {
          id: "set-index",
          title: "set_index()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "reset-index",
          title: "reset_index()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "multi-index",
          title: "MultiIndex",
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
          id: "iq-loc-iloc",
          title: ".loc vs .iloc",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-multiindex",
          title: "Why MultiIndex?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};