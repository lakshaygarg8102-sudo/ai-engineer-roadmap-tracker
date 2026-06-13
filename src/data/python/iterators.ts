import { Section } from "../../types/roadmap";

export const iterators: Section = {
  id: "iterators",
  title: "Iterators & itertools",

  groups: [
    {
      id: "iterable-basics",
      title: "Iterable Basics",

      topics: [
        {
          id: "what-is-iterable",
          title: "What is an Iterable?",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "what-is-iterator",
          title: "What is an Iterator?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iterable-vs-iterator",
          title: "Iterable vs Iterator",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iterator-protocol",
          title: "Iterator Protocol",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "builtins",
      title: "Built-in Functions",

      topics: [
        {
          id: "iter-function",
          title: "iter()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "next-function",
          title: "next()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "stop-iteration",
          title: "StopIteration",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "custom-iterator",
      title: "Custom Iterators",

      topics: [
        {
          id: "iterator-class",
          title: "Creating Custom Iterators",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "__iter__",
          title: "__iter__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "__next__",
          title: "__next__()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "infinite-iterator",
          title: "Infinite Iterators",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "itertools",
      title: "itertools Module",

      topics: [
        {
          id: "count",
          title: "count()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "cycle",
          title: "cycle()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "repeat",
          title: "repeat()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "chain",
          title: "chain()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "accumulate",
          title: "accumulate()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "compress",
          title: "compress()",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "islice",
          title: "islice()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "tee",
          title: "tee()",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "dropwhile",
          title: "dropwhile()",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "takewhile",
          title: "takewhile()",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "zip-longest",
          title: "zip_longest()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "product",
          title: "product()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "permutations",
          title: "permutations()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "combinations",
          title: "combinations()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "groupby",
          title: "groupby()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "iterator-performance",
      title: "Performance",

      topics: [
        {
          id: "lazy-evaluation",
          title: "Lazy Evaluation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "memory-efficiency",
          title: "Memory Efficiency",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iterator-vs-list",
          title: "Iterator vs List",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "iterator-interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-iterable-vs-iterator",
          title: "Iterable vs Iterator",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-iter-next",
          title: "iter() vs next()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-stopiteration",
          title: "Why StopIteration?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "iq-itertools",
          title: "Most Important itertools Functions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-lazy-evaluation",
          title: "Explain Lazy Evaluation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }
  ]
};