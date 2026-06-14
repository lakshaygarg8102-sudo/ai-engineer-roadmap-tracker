import { Section } from "../../types/roadmap";

export const mergeJoin: Section = {
  id: "merge-join",
  title: "Merge, Join & Concatenate",

  groups: [

    {
      id: "merge-basics",
      title: "Merge Fundamentals",

      topics: [
        {
          id: "why-merge",
          title: "Why Merge Data?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "merge",
          title: "merge()",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "merge-keys",
          title: "Joining on Keys",
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
          title: "Inner Join",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "left-join",
          title: "Left Join",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "right-join",
          title: "Right Join",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "outer-join",
          title: "Outer Join",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-merging",
      title: "Advanced Merging",

      topics: [
        {
          id: "merge-multiple-columns",
          title: "Merging on Multiple Columns",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "merge-index",
          title: "Merging on Index",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "merge-validation",
          title: "Merge Validation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "join-concat",
      title: "join() & concat()",

      topics: [
        {
          id: "join-method",
          title: "join()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "concat-rows",
          title: "Concatenating Rows",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "concat-columns",
          title: "Concatenating Columns",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Usage",

      topics: [
        {
          id: "fact-dimension",
          title: "Fact & Dimension Tables",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "data-integration",
          title: "Data Integration Pipelines",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "merge-performance",
          title: "Merge Performance",
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
          id: "iq-merge-vs-join",
          title: "merge() vs join()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-concat-vs-merge",
          title: "concat() vs merge()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};