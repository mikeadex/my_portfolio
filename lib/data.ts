import { Project, SocialLink, Skill } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A full-stack web application built with modern technologies. Features include user authentication, real-time updates, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://project-one.vercel.app',
    imageUrl: '/projects/project1.jpg'
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'An innovative mobile-first application that solves real-world problems with elegant UI/UX design and seamless performance.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://project-two.vercel.app',
    imageUrl: '/projects/project2.jpg'
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'A powerful developer tool that streamlines workflows and increases productivity through automation and intelligent features.',
    technologies: ['Python', 'FastAPI', 'React', 'Docker'],
    githubUrl: 'https://github.com/yourusername/project-three',
    imageUrl: '/projects/project3.jpg'
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD']
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'mail'
  }
];

export const personalInfo = {
  name: 'Michael Adeleye',
  title: 'Software Developer',
  bio: 'Passionate software developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and continuously learning new technologies.',
  email: 'your.email@example.com',
  location: 'Your Location'
};
