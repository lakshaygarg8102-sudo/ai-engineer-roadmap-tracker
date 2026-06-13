import { Section } from "../../types/roadmap";

export const arrayManipulation: Section = {
  id: "array-manipulation",
  title: "Array Manipulation",

  groups: [

    {
      id: "reshaping",
      title: "Reshaping Arrays",

      topics: [
        {
          id: "reshape",
          title: "reshape()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "flatten-vs-ravel",
          title: "flatten() vs ravel()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "resize",
          title: "resize()",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "dimensions",
      title: "Dimension Manipulation",

      topics: [
        {
          id: "expand-squeeze",
          title: "expand_dims() & squeeze()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "newaxis",
          title: "np.newaxis",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "atleast-nd",
          title: "atleast_1d/2d/3d",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "joining-splitting",
      title: "Joining & Splitting",

      topics: [
        {
          id: "concat-stack",
          title: "concatenate(), stack(), hstack(), vstack()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "split-functions",
          title: "split(), hsplit(), vsplit()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "reordering",
      title: "Reordering Data",

      topics: [
        {
          id: "transpose",
          title: "transpose() & T",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "swapaxes-moveaxis",
          title: "swapaxes() & moveaxis()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "reshape-memory",
          title: "Memory Implications of Reshaping",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "copy-vs-view-reshape",
          title: "When Reshape Creates Copies",
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
          id: "iq-ravel-flatten",
          title: "ravel() vs flatten()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-transpose",
          title: "transpose() vs reshape()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};