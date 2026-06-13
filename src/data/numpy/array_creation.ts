import { Section } from "../../types/roadmap";

export const arrayCreation: Section = {
  id: "array-creation",
  title: "Array Creation",

  groups: [

    {
      id: "fundamentals",
      title: "Creating Arrays",

      topics: [
        {
          id: "creating-ndarrays",
          title: "Creating ndarrays",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "array-creation-functions",
          title: "Core Array Creation APIs (array, zeros, ones, full, empty)",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "identity-matrices",
          title: "Identity & Diagonal Arrays",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "sequence-generation",
      title: "Sequence Generation",

      topics: [
        {
          id: "range-generation",
          title: "arange vs linspace vs logspace",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "meshgrid",
          title: "meshgrid & Coordinate Generation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "copying",
      title: "Copying Existing Data",

      topics: [
        {
          id: "array-from-existing",
          title: "Creating Arrays from Existing Data",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "copy-vs-view-intro",
          title: "Copy vs View (Introduction)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "memory",
      title: "Memory Considerations",

      topics: [
        {
          id: "initialization-cost",
          title: "Memory Allocation Cost",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "choosing-dtype",
          title: "Choosing the Correct dtype",
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
          id: "large-array-creation",
          title: "Creating Large Arrays Efficiently",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "array-init-best-practices",
          title: "Array Initialization Best Practices",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-arange-linspace",
          title: "arange vs linspace",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-empty-vs-zeros",
          title: "empty() vs zeros()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-array-memory",
          title: "Efficient Array Creation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }

  ]
};