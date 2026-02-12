export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location?: string;
  description?: string;
  achievements: string[];
  isHighlight?: boolean;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  duration: string;
  gpa?: string;
  courses?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
