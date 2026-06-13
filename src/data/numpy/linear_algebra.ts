import { Section } from "../../types/roadmap";

export const linearAlgebra: Section = {
  id: "linear-algebra",
  title: "Linear Algebra",

  groups: [

    {
      id: "fundamentals",
      title: "Core Concepts",

      topics: [
        {
          id: "vectors-matrices",
          title: "Vectors & Matrices",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "matrix-shapes",
          title: "Matrix Shapes & Dimensions",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "matrix-operations",
          title: "Element-wise vs Matrix Operations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "matrix-operations",
      title: "Core Matrix Operations",

      topics: [
        {
          id: "dot-matmul",
          title: "dot() vs matmul() (@ Operator)",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "transpose-linalg",
          title: "Transpose in Linear Algebra",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "matrix-multiplication-performance",
          title: "Efficient Matrix Multiplication",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "decompositions",
      title: "Matrix Decompositions",

      topics: [
        {
          id: "inverse",
          title: "Matrix Inverse",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "determinant",
          title: "Determinant",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "rank",
          title: "Matrix Rank",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "svd",
          title: "Singular Value Decomposition (SVD)",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "eigenvalues",
          title: "Eigenvalues & Eigenvectors",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "solvers",
      title: "Linear System Solvers",

      topics: [
        {
          id: "solve",
          title: "Solving Linear Systems",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "least-squares",
          title: "Least Squares",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pseudo-inverse",
          title: "Pseudo Inverse",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "ml-applications",
      title: "AI & ML Applications",

      topics: [
        {
          id: "linear-algebra-ml",
          title: "Linear Algebra in Machine Learning",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "embeddings",
          title: "Embeddings & Vector Spaces",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "similarity",
          title: "Cosine Similarity",
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
          id: "iq-dot-matmul",
          title: "dot() vs matmul()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-svd",
          title: "Why SVD is Important",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-cosine",
          title: "Cosine Similarity",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};