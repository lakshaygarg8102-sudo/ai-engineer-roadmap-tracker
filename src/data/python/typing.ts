import { Section } from "../../types/roadmap";

export const typing: Section = {
  id: "typing",
  title: "Typing & Type Hints",

  groups: [
    {
      id: "typing-basics",
      title: "Type Hint Basics",

      topics: [
        {
          id: "what-is-type-hinting",
          title: "What are Type Hints?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "why-type-hints",
          title: "Why Use Type Hints?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "variable-type-hints",
          title: "Variable Type Hints",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "function-type-hints",
          title: "Function Type Hints",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "return-type-hints",
          title: "Return Type Hints",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "builtin-types",
      title: "Built-in Generic Types",

      topics: [
        {
          id: "list-type",
          title: "list[T]",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "dict-type",
          title: "dict[K, V]",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "tuple-type",
          title: "tuple[...]",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "set-type",
          title: "set[T]",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "typing-module",
      title: "typing Module",

      topics: [
        {
          id: "any",
          title: "Any",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "union",
          title: "Union",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "optional",
          title: "Optional",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "literal",
          title: "Literal",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "final",
          title: "Final",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "typealias",
          title: "TypeAlias",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "annotated",
          title: "Annotated",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "advanced-typing",
      title: "Advanced Typing",

      topics: [
        {
          id: "typevar",
          title: "TypeVar",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "generic",
          title: "Generic",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "protocol",
          title: "Protocol",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "typeddict",
          title: "TypedDict",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "newtype",
          title: "NewType",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "self",
          title: "Self",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "callable",
          title: "Callable",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "special-types",
      title: "Special Types",

      topics: [
        {
          id: "never",
          title: "Never",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "noreturn",
          title: "NoReturn",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "classvar",
          title: "ClassVar",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "forward-reference",
          title: "Forward References",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "type-checking",
      title: "Static Type Checking",

      topics: [
        {
          id: "mypy",
          title: "mypy",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pyright",
          title: "Pyright",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "cast",
          title: "typing.cast()",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "runtime-vs-static",
          title: "Runtime vs Static Type Checking",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "typing-best-practices",
      title: "Best Practices",

      topics: [
        {
          id: "clean-type-hints",
          title: "Writing Clean Type Hints",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "avoid-any",
          title: "Avoid Overusing Any",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "api-design",
          title: "Designing Typed APIs",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "typing-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-union-vs-optional",
          title: "Union vs Optional",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-protocol",
          title: "Protocol vs ABC",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-generic",
          title: "Generics in Python",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-typeddict",
          title: "TypedDict vs dict",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-mypy",
          title: "How mypy Works",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};