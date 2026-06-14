import { Section } from "../../types/roadmap";

export const linearAlgebraFoundation: Section = {
  id: "linear-algebra-foundation",
  title: "Linear Algebra Foundation",

  groups: [

    {
      id: "vectors",
      title: "Vectors",

      topics: [
        {
          id: "what-is-vector",
          title: "Vectors",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "vector-operations",
          title: "Vector Operations",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "dot-product",
          title: "Dot Product",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "vector-norms",
          title: "Vector Norms",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "matrices",
      title: "Matrices",

      topics: [
        {
          id: "matrix-basics",
          title: "Matrices",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "matrix-multiplication",
          title: "Matrix Multiplication",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "transpose",
          title: "Transpose",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "identity-matrix",
          title: "Identity Matrix",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced Concepts",

      topics: [
        {
          id: "inverse",
          title: "Matrix Inverse",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "determinant",
          title: "Determinant",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "rank",
          title: "Matrix Rank",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "eigenvalues",
          title: "Eigenvalues & Eigenvectors",
          estimatedMinutes: 60,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ai",
      title: "Linear Algebra in AI",

      topics: [
        {
          id: "embeddings",
          title: "Embeddings as Vectors",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "weight-matrices",
          title: "Weight Matrices",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "tensor-foundation",
          title: "Matrices to Tensors",
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
          id: "dot-product-interview",
          title: "Why Dot Product Matters",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "eigen-interview",
          title: "Eigenvalues in Machine Learning",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    }

  ]
};