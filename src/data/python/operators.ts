import { Section } from "../../types/roadmap";

export const operators: Section = {
  id: "operators",
  title: "Operators",

  groups: [
    {
      id: "arithmetic",
      title: "Arithmetic Operators",

      topics: [
        {
          id: "addition",
          title: "Addition (+)",
          estimatedMinutes: 10,
          interviewImportance: 4,
        },
        {
          id: "subtraction",
          title: "Subtraction (-)",
          estimatedMinutes: 10,
          interviewImportance: 4,
        },
        {
          id: "multiplication",
          title: "Multiplication (*)",
          estimatedMinutes: 10,
          interviewImportance: 4,
        },
        {
          id: "division",
          title: "Division (/)",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "floor-division",
          title: "Floor Division (//)",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "modulus",
          title: "Modulus (%)",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "power",
          title: "Exponentiation (**)",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "comparison",
      title: "Comparison Operators",

      topics: [
        {
          id: "equal",
          title: "Equal (==)",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "not-equal",
          title: "Not Equal (!=)",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "greater",
          title: "Greater Than (>)",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "less",
          title: "Less Than (<)",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "greater-equal",
          title: "Greater Than or Equal (>=)",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "less-equal",
          title: "Less Than or Equal (<=)",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "comparison-chaining",
          title: "Comparison Chaining",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "logical",
      title: "Logical Operators",

      topics: [
        {
          id: "logical-and",
          title: "and",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "logical-or",
          title: "or",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "logical-not",
          title: "not",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "short-circuit",
          title: "Short Circuit Evaluation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "assignment",
      title: "Assignment Operators",

      topics: [
        {
          id: "assignment",
          title: "=",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "augmented-assignment",
          title: "Augmented Assignment (+=, -=, *=, ...)",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "walrus",
          title: "Walrus Operator (:=)",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "identity",
      title: "Identity Operators",

      topics: [
        {
          id: "is",
          title: "is",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "is-not",
          title: "is not",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "is-vs-equals",
          title: "== vs is",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "membership",
      title: "Membership Operators",

      topics: [
        {
          id: "in",
          title: "in",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "not-in",
          title: "not in",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "bitwise",
      title: "Bitwise Operators",

      topics: [
        {
          id: "bitwise-and",
          title: "&",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "bitwise-or",
          title: "|",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "bitwise-xor",
          title: "^",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "bitwise-not",
          title: "~",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "left-shift",
          title: "<<",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "right-shift",
          title: ">>",
          estimatedMinutes: 20,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "precedence",
      title: "Operator Precedence",

      topics: [
        {
          id: "precedence",
          title: "Operator Precedence",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "associativity",
          title: "Associativity",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "evaluation-order",
          title: "Expression Evaluation Order",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "operators-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-is-vs-eq",
          title: "Difference between == and is",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-floor-division",
          title: "Difference between / and //",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-short-circuit",
          title: "Explain Short Circuit Evaluation",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-walrus",
          title: "Explain Walrus Operator",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-operator-precedence",
          title: "Operator Precedence Examples",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }
  ]
};