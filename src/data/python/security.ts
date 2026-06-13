import { Section } from "../../types/roadmap";

export const security: Section = {
  id: "security",
  title: "Python Security",

  groups: [

    {
      id: "fundamentals",
      title: "Security Fundamentals",

      topics: [
        {
          id: "secure-coding",
          title: "Secure Coding Principles",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "common-vulnerabilities",
          title: "Common Python Vulnerabilities",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "owasp-python",
          title: "OWASP for Python Developers",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "cryptography",
      title: "Cryptography Basics",

      topics: [
        {
          id: "hashlib",
          title: "hashlib",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "hmac",
          title: "HMAC",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "secrets-module",
          title: "secrets Module",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "authentication",
      title: "Authentication",

      topics: [
        {
          id: "password-hashing",
          title: "Password Hashing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "jwt-basics",
          title: "JWT Fundamentals",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "api-keys",
          title: "API Keys & Secrets Management",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "network-security",
      title: "Network Security",

      topics: [
        {
          id: "ssl-tls",
          title: "SSL/TLS",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "https-clients",
          title: "Secure HTTP Clients",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "certificate-validation",
          title: "Certificate Validation",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Production Security",

      topics: [
        {
          id: "dependency-scanning",
          title: "Dependency Scanning",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "secret-management",
          title: "Secrets Management",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "security-best-practices",
          title: "Security Best Practices",
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
          id: "iq-hashing",
          title: "Hashing vs Encryption",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-secrets",
          title: "Why Use secrets Instead of random?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-pickle-security",
          title: "Python Security Best Practices",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};