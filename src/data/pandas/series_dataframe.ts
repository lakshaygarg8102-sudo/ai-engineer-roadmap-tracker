import { Section } from "../../types/roadmap";

export const seriesDataframe: Section = {
  id: "series-dataframe",
  title: "Series & DataFrame",

  groups: [

    {
      id: "series",
      title: "Series",

      topics: [
        {
          id: "what-is-series",
          title: "What is a Series?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "creating-series",
          title: "Creating Series",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "series-attributes",
          title: "Series Attributes",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "series-methods",
          title: "Important Series Methods",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "dataframe",
      title: "DataFrame",

      topics: [
        {
          id: "what-is-dataframe",
          title: "What is a DataFrame?",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "creating-dataframe",
          title: "Creating DataFrames",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dataframe-attributes",
          title: "Important DataFrame Attributes",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dataframe-methods",
          title: "Important DataFrame Methods",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "internals",
      title: "Internals",

      topics: [
        {
          id: "index-object",
          title: "Index Object",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "columns-object",
          title: "Columns Object",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "memory-layout",
          title: "Internal Memory Layout",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Usage",

      topics: [
        {
          id: "tabular-data",
          title: "Working with Tabular Data",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "schema-design",
          title: "Schema Design",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "efficient-column-selection",
          title: "Efficient Column Selection",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-series-vs-dataframe",
          title: "Series vs DataFrame",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-index-object",
          title: "Why is the Index Important?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};