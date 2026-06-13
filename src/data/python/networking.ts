import { Section } from "../../types/roadmap";

export const networking: Section = {
  id: "networking",
  title: "Networking",

  groups: [
    {
      id: "http",
      title: "HTTP Clients",

      topics: [
        {
          id: "requests-library",
          title: "requests",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "httpx",
          title: "httpx",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "session-management",
          title: "Sessions & Connection Pooling",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "timeouts-retries",
          title: "Timeouts & Retries",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "apis",
      title: "REST APIs",

      topics: [
        {
          id: "rest-clients",
          title: "Building REST Clients",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "authentication",
          title: "API Authentication",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "streaming-responses",
          title: "Streaming Responses",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sockets",
      title: "Sockets",

      topics: [
        {
          id: "socket-module",
          title: "socket Module",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "tcp-server-client",
          title: "TCP Client & Server",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "udp",
          title: "UDP Communication",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "websockets",
      title: "Real-Time Communication",

      topics: [
        {
          id: "websocket-basics",
          title: "WebSockets",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "async-websockets",
          title: "Async WebSockets",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "real-time-ai",
          title: "Streaming LLM Responses",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Networking",

      topics: [
        {
          id: "rate-limiting",
          title: "Rate Limiting",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "resilience",
          title: "Retries, Backoff & Circuit Breakers",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "network-best-practices",
          title: "Networking Best Practices",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-httpx",
          title: "requests vs httpx",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-sockets",
          title: "TCP vs UDP",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-websockets",
          title: "HTTP vs WebSockets",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};