export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  projectType?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  role?: string;
  featured?: boolean;
  order?: number;
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
  slug: string;
  title: string;
  description: string;
  featuredImage?: string;
  date: string;
  readTime: string;
  content: string;
  tags?: string[];
  author?: string;
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
