import { Section } from "../../types/roadmap";

export const collections: Section = {
  id: "collections",
  title: "Collections",

  groups: [
    {
      id: "list",
      title: "List",

      topics: [
        {
          id: "list-introduction",
          title: "What is a List?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "list-creation",
          title: "Creating Lists",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "list-indexing",
          title: "Indexing",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "list-slicing",
          title: "Slicing",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "list-methods",
          title: "List Methods",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "list-copy",
          title: "Copying Lists",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "nested-lists",
          title: "Nested Lists",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "list-memory",
          title: "Internal Working of Lists",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "list-complexity",
          title: "Time Complexity",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "tuple",
      title: "Tuple",

      topics: [
        {
          id: "tuple-introduction",
          title: "What is a Tuple?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "tuple-creation",
          title: "Creating Tuples",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "single-element-tuple",
          title: "Single Element Tuple",
          estimatedMinutes: 15,
          interviewImportance: 4,
        },
        {
          id: "tuple-unpacking",
          title: "Tuple Unpacking",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "tuple-immutability",
          title: "Tuple Immutability",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "namedtuple",
          title: "namedtuple",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "dictionary",
      title: "Dictionary",

      topics: [
        {
          id: "dict-introduction",
          title: "What is Dictionary?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "dict-creation",
          title: "Creating Dictionaries",
          estimatedMinutes: 15,
          interviewImportance: 5,
        },
        {
          id: "dict-methods",
          title: "Dictionary Methods",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "dict-iteration",
          title: "Iterating Dictionary",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "dict-order",
          title: "Dictionary Ordering",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "dict-hashing",
          title: "Hash Tables",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "dict-internals",
          title: "Dictionary Internal Working",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "defaultdict",
          title: "defaultdict",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "ordereddict",
          title: "OrderedDict",
          estimatedMinutes: 20,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "set",
      title: "Set",

      topics: [
        {
          id: "set-introduction",
          title: "What is Set?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "set-methods",
          title: "Set Methods",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "set-operations",
          title: "Union, Intersection, Difference",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "frozenset",
          title: "frozenset",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "set-internals",
          title: "Internal Working",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sorting",
      title: "Sorting",

      topics: [
        {
          id: "sorted",
          title: "sorted()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "sort",
          title: "list.sort()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "key",
          title: "key Parameter",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "reverse",
          title: "reverse Parameter",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "custom-sorting",
          title: "Custom Sorting",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "packing",
      title: "Packing & Unpacking",

      topics: [
        {
          id: "packing",
          title: "Packing",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "unpacking",
          title: "Unpacking",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "extended-unpacking",
          title: "Extended Unpacking",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "collections-module",
      title: "collections Module",

      topics: [
        {
          id: "counter",
          title: "Counter",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "deque",
          title: "deque",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "chainmap",
          title: "ChainMap",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "userdict",
          title: "UserDict",
          estimatedMinutes: 15,
          interviewImportance: 2,
        }
      ]
    },

    {
      id: "collections-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-list-vs-tuple",
          title: "List vs Tuple",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-dict-vs-set",
          title: "Dictionary vs Set",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-hash-table",
          title: "How Dictionary Works Internally?",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-list-complexity",
          title: "Time Complexity of List Operations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-counter",
          title: "When to Use Counter?",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "iq-deque",
          title: "deque vs List",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-sort-vs-sorted",
          title: "sort() vs sorted()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        }
      ]
    }
  ]
};