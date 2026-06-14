import { Section } from "../../types/roadmap";

export const filteringSorting: Section = {
  id: "filtering-sorting",
  title: "Filtering & Sorting",

  groups: [

    {
      id: "select",
      title: "SELECT",

      topics: [
        {
          id: "select",
          title: "SELECT",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "distinct",
          title: "DISTINCT",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "alias",
          title: "Aliases",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "filtering",
      title: "Filtering",

      topics: [
        {
          id: "where",
          title: "WHERE",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "comparison",
          title: "Comparison Operators",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "between",
          title: "BETWEEN",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "in",
          title: "IN",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "like",
          title: "LIKE",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "is-null",
          title: "NULL Handling",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sorting",
      title: "Sorting",

      topics: [
        {
          id: "order-by",
          title: "ORDER BY",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "limit",
          title: "LIMIT",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "offset",
          title: "OFFSET",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Queries",

      topics: [
        {
          id: "pagination",
          title: "Pagination",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "efficient-filtering",
          title: "Efficient Filtering",
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
          id: "iq-null",
          title: "NULL vs Empty String",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-order",
          title: "Execution Order of SQL Query",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};