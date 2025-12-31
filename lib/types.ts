export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  url?: string;
}

export interface Education {
  id: string;
  institution: string;
  description: string;
  period: string;
  url?: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  icon?: string;
  iconUrl?: string;
}
