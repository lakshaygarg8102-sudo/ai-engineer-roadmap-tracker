import { Section } from "../../types/roadmap";

export const cExtensions: Section = {
  id: "c-extensions",
  title: "Python C Extensions & Native Performance",

  groups: [

    {
      id: "fundamentals",
      title: "Python & C",

      topics: [
        {
          id: "why-c-extensions",
          title: "Why Python Uses C Extensions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cpython-c-api",
          title: "CPython C API",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "native-extensions",
          title: "Native Extension Modules",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interfacing",
      title: "Calling Native Code",

      topics: [
        {
          id: "ctypes",
          title: "ctypes",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cffi",
          title: "cffi",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cython",
          title: "Cython",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance Engineering",

      topics: [
        {
          id: "native-optimization",
          title: "Native Performance Optimization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "gil-release",
          title: "Releasing the GIL",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "numpy-c-api-review",
          title: "NumPy C API",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Real World Usage",

      topics: [
        {
          id: "pytorch-native",
          title: "PyTorch Native Extensions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "tensorflow-kernels",
          title: "TensorFlow Custom Ops",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "choosing-native-code",
          title: "When to Write Native Code",
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
          id: "iq-cython",
          title: "Cython vs Python",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-ctypes",
          title: "ctypes vs cffi",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-gil-native",
          title: "How Native Code Bypasses the GIL",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};