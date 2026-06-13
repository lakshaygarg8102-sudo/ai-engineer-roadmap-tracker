import { Section } from "../../types/roadmap";

export const asyncioSection: Section = {
  id: "asyncio",
  title: "AsyncIO",

  groups: [
    {
      id: "fundamentals",
      title: "Async Programming Fundamentals",

      topics: [
        {
          id: "what-is-asyncio",
          title: "What is AsyncIO?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "sync-vs-async",
          title: "Synchronous vs Asynchronous Programming",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "event-loop",
          title: "Event Loop",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "event-driven-programming",
          title: "Event Driven Programming",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "coroutines",
      title: "Coroutines",

      topics: [
        {
          id: "async-def",
          title: "async def",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "await-keyword",
          title: "await",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "coroutine-object",
          title: "Coroutine Objects",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "running-coroutines",
          title: "Running Coroutines",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "tasks",
      title: "Tasks & Futures",

      topics: [
        {
          id: "asyncio-task",
          title: "Task",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "create-task",
          title: "create_task()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "future",
          title: "Future",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "gather",
          title: "asyncio.gather()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "wait",
          title: "asyncio.wait()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "as-completed",
          title: "asyncio.as_completed()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "cancellation",
      title: "Cancellation & Timeouts",

      topics: [
        {
          id: "cancel-task",
          title: "Task Cancellation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "cancelled-error",
          title: "CancelledError",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "timeout",
          title: "asyncio.timeout()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "wait-for",
          title: "asyncio.wait_for()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sync-primitives",
      title: "Synchronization",

      topics: [
        {
          id: "async-lock",
          title: "asyncio.Lock",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "async-event",
          title: "asyncio.Event",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "async-semaphore",
          title: "asyncio.Semaphore",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "async-condition",
          title: "asyncio.Condition",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "queues",
      title: "Queues & Streams",

      topics: [
        {
          id: "async-queue",
          title: "asyncio.Queue",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "priority-queue",
          title: "PriorityQueue",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "stream-reader",
          title: "StreamReader",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "stream-writer",
          title: "StreamWriter",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced AsyncIO",

      topics: [
        {
          id: "async-context-manager",
          title: "Async Context Managers",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "async-generator",
          title: "Async Generators",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "async-iterator",
          title: "Async Iterators",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "aiohttp",
          title: "aiohttp",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "uvloop",
          title: "uvloop",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "real-world",
      title: "Real World Applications",

      topics: [
        {
          id: "api-calls",
          title: "Concurrent API Calls",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "web-scraping",
          title: "Async Web Scraping",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "llm-api-calls",
          title: "Parallel LLM API Calls",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "async-rag",
          title: "Async RAG Pipelines",
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
          id: "iq-event-loop",
          title: "Explain Event Loop",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-task-vs-thread",
          title: "Task vs Thread",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-gather",
          title: "gather() vs wait()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-async-await",
          title: "async vs await",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-aiohttp",
          title: "aiohttp Interview Questions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};