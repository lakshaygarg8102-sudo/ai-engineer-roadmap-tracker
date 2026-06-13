export interface Topic {
  id: string;
  title: string;
  estimatedMinutes: number;
  interviewImportance: 1 | 2 | 3 | 4 | 5;
}

export interface TopicGroup {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Section {
  id: string;
  title: string;
  groups: TopicGroup[];
}

export interface Module {
  id: string;
  title: string;
  sections: Section[];
}