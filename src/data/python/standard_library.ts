import { Section } from "../../types/roadmap";

export const standardLibrary: Section = {
  id: "standard-library",
  title: "Python Standard Library",

  groups: [

    {
      id: "collections",
      title: "Collections",

      topics: [
        {
          id: "collections-module",
          title: "collections Module Overview",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "deque",
          title: "deque",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "counter",
          title: "Counter",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "defaultdict",
          title: "defaultdict",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "ordereddict",
          title: "OrderedDict",
          estimatedMinutes: 20,
          interviewImportance: 3,
        },
        {
          id: "chainmap",
          title: "ChainMap",
          estimatedMinutes: 20,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "functional",
      title: "Functional Programming Libraries",

      topics: [
        {
          id: "functools",
          title: "functools",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "lru-cache",
          title: "lru_cache & cache",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "partial",
          title: "partial",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "singledispatch",
          title: "singledispatch",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cached-property",
          title: "cached_property",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "itertools",
      title: "itertools",

      topics: [
        {
          id: "itertools-module",
          title: "itertools Overview",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "infinite-iterators",
          title: "Infinite Iterators",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "combinatoric-iterators",
          title: "Combinatoric Iterators",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iterator-recipes",
          title: "Iterator Recipes",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "filesystem",
      title: "Filesystem",

      topics: [
        {
          id: "pathlib",
          title: "pathlib",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "os-module",
          title: "os",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "shutil",
          title: "shutil",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "tempfile",
          title: "tempfile",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "system",
      title: "System Programming",

      topics: [
        {
          id: "sys-module",
          title: "sys",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "subprocess",
          title: "subprocess",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "argparse",
          title: "argparse",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "utilities",
      title: "Utilities",

      topics: [
        {
          id: "datetime",
          title: "datetime",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "uuid",
          title: "uuid",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "decimal",
          title: "decimal",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "heapq",
          title: "heapq",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "bisect",
          title: "bisect",
          estimatedMinutes: 25,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-deque",
          title: "deque vs list",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-counter",
          title: "Counter vs Dictionary",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-pathlib",
          title: "pathlib vs os.path",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }

  ]
};