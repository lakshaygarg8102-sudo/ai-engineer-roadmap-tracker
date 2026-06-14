import { Section } from "../../types/roadmap";

export const dataTransformation: Section = {
  id: "data-transformation",
  title: "Data Transformation",

  groups: [

    {
      id: "column-operations",
      title: "Column Operations",

      topics: [
        {
          id: "create-columns",
          title: "Creating New Columns",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "modify-columns",
          title: "Modifying Existing Columns",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "rename-columns",
          title: "Renaming Columns",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "drop-columns",
          title: "Dropping Columns",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "reorder-columns",
          title: "Reordering Columns",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "transform-functions",
      title: "Transformation Functions",

      topics: [
        {
          id: "map",
          title: "map()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "apply",
          title: "apply()",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "applymap",
          title: "applymap()",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "transform",
          title: "transform()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "replace",
          title: "replace()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sorting",
      title: "Sorting & Ranking",

      topics: [
        {
          id: "sort-values",
          title: "sort_values()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "sort-index",
          title: "sort_index()",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "rank",
          title: "Ranking Data",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "feature-engineering",
      title: "Feature Engineering",

      topics: [
        {
          id: "derived-features",
          title: "Creating Derived Features",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "conditional-columns",
          title: "Conditional Columns",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "binning",
          title: "Binning & Categorization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Best Practices",

      topics: [
        {
          id: "vectorized-transformations",
          title: "Vectorized Transformations",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "avoid-row-loops",
          title: "Avoid Row-by-Row Processing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "transformation-pipelines",
          title: "Transformation Pipelines",
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
          id: "iq-map-vs-apply",
          title: "map() vs apply() vs transform()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-feature-engineering",
          title: "Feature Engineering with Pandas",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};