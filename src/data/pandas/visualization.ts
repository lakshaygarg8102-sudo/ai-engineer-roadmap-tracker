import { Section } from "../../types/roadmap";

export const visualization: Section = {
  id: "visualization",
  title: "Visualization",

  groups: [

    {
      id: "basics",
      title: "Visualization Basics",

      topics: [
        {
          id: "plot-method",
          title: "DataFrame.plot()",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "series-plot",
          title: "Series.plot()",
          estimatedMinutes: 25,
          interviewImportance: 3,
        },
        {
          id: "plot-types",
          title: "Supported Plot Types",
          estimatedMinutes: 30,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "chart-types",
      title: "Common Charts",

      topics: [
        {
          id: "line-chart",
          title: "Line Charts",
          estimatedMinutes: 25,
          interviewImportance: 3,
        },
        {
          id: "bar-chart",
          title: "Bar Charts",
          estimatedMinutes: 25,
          interviewImportance: 3,
        },
        {
          id: "histogram",
          title: "Histograms",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "scatter-plot",
          title: "Scatter Plots",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "box-plot",
          title: "Box Plots",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "integration",
      title: "Visualization Libraries",

      topics: [
        {
          id: "matplotlib",
          title: "Using Matplotlib with Pandas",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "seaborn",
          title: "Using Seaborn with Pandas",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "plotly",
          title: "Interactive Charts with Plotly",
          estimatedMinutes: 30,
          interviewImportance: 3,
        }
      ]
    },

    {
      id: "production",
      title: "Production Visualization",

      topics: [
        {
          id: "eda",
          title: "Exploratory Data Analysis",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "dashboard-preparation",
          title: "Preparing Dashboard Data",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "visual-debugging",
          title: "Using Charts for Data Validation",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-eda",
          title: "EDA Workflow",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-visualization",
          title: "Choosing the Right Chart",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    }

  ]
};