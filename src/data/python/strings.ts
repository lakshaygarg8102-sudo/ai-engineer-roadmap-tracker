import { Section } from "../../types/roadmap";

export const strings: Section = {
  id: "strings",
  title: "Strings",

  groups: [
    {
      id: "introduction",
      title: "Introduction",

      topics: [
        {
          id: "what-is-string",
          title: "What is a String?",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "string-creation",
          title: "Creating Strings",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "single-double-triple",
          title: "Single, Double & Triple Quotes",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "multiline-string",
          title: "Multiline Strings",
          estimatedMinutes: 10,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "memory",
      title: "Memory & Internal Working",

      topics: [
        {
          id: "string-immutable",
          title: "String Immutability",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "string-interning-review",
          title: "String Interning",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "string-storage",
          title: "String Storage in Memory",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "string-concatenation-cost",
          title: "String Concatenation Cost",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "access",
      title: "Accessing Characters",

      topics: [
        {
          id: "indexing",
          title: "Indexing",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "negative-indexing",
          title: "Negative Indexing",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "slicing",
          title: "Slicing",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "slice-step",
          title: "Slice Step",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "reverse-string",
          title: "Reverse using Slicing",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "methods",
      title: "String Methods",

      topics: [
        {
          id: "upper",
          title: "upper()",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "lower",
          title: "lower()",
          estimatedMinutes: 10,
          interviewImportance: 3,
        },
        {
          id: "strip",
          title: "strip(), lstrip(), rstrip()",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "split",
          title: "split()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "join",
          title: "join()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "replace",
          title: "replace()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "find",
          title: "find()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "index-method",
          title: "index()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "count",
          title: "count()",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "startswith",
          title: "startswith()",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "endswith",
          title: "endswith()",
          estimatedMinutes: 15,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "formatting",
      title: "Formatting",

      topics: [
        {
          id: "f-string",
          title: "f-Strings",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "format-method",
          title: "format()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "percent-formatting",
          title: "% Formatting",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "format-specifiers",
          title: "Format Specifiers",
          estimatedMinutes: 20,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "encoding",
      title: "Encoding",

      topics: [
        {
          id: "ascii",
          title: "ASCII",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "unicode",
          title: "Unicode",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "utf8",
          title: "UTF-8",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "encode",
          title: "encode()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "decode",
          title: "decode()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "join-vs-plus",
          title: "join() vs '+'",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "stringbuilder-python",
          title: "Efficient String Building",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "time-complexity-string",
          title: "Time Complexity of String Operations",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "strings-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-string-immutable",
          title: "Why are Strings Immutable?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-join",
          title: "Why is join() Faster?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-find-vs-index",
          title: "find() vs index()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "iq-slicing",
          title: "Explain String Slicing",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-fstring",
          title: "f-string vs format()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-unicode",
          title: "Unicode vs ASCII",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }
  ]
};