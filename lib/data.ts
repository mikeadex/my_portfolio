import { Project, SocialLink, Skill, BlogPost, Education, Tool } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Wáàlá | Coding Learning Platform',
    description: 'A full-stack web application built with modern technologies. Features include user authentication, real-time updates, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://waala.dev',
    imageUrl: '/projects/waala.dev.jpg'
  },
  {
    id: '2',
    title: 'HeyLokal | South East London Directory',
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

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Starting and Growing a Career in Web Development',
    description: 'As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.',
    date: 'Apr 8, 2022',
    readTime: '6min read',
    url: '#'
  },
  {
    id: '2',
    title: 'Create a Landing Page That Performs Great',
    description: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.',
    date: 'Mar 15, 2022',
    readTime: '6min read',
    url: '#'
  },
  {
    id: '3',
    title: 'How to Optimize Your Website for Better Performance',
    description: 'Website performance is crucial for user experience and SEO. Learn the best practices and techniques to make your website lightning fast.',
    date: 'Feb 20, 2022',
    readTime: '8min read',
    url: '#'
  }
];

export const educationJourney: Education[] = [
  {
    id: '1',
    institution: 'Code Institute',
    description: 'Full Stack Software Development Certificate. Comprehensive program covering frontend and backend technologies. (Phew... Glad I finished!)',
    period: 'Completed 2023',
    url: '#'
  },
  {
    id: '2',
    institution: '42 London',
    description: 'Peer-to-peer learning in software engineering. Great foundation and invaluable experience, but decided to pursue a different path.',
    period: '2021 - 2022',
    url: '#'
  },
  {
    id: '3',
    institution: 'Self-Taught Journey',
    description: 'Started my programming journey through online platforms including Udemy and Coursera. Built strong fundamentals in web development, JavaScript, and modern frameworks.',
    period: '2018 - 2021',
    url: '#'
  }
];

export const tools: Tool[] = [
  { id: '1', name: 'Python', category: 'Programming Language', iconUrl: '/icons/python.png' },
  { id: '2', name: 'Django', category: 'Backend Framework', iconUrl: '/icons/django.png' },
  { id: '3', name: 'ReactJS', category: 'Frontend Library', iconUrl: '/icons/react.png' },
  { id: '4', name: 'Next.js', category: 'React Framework', iconUrl: '/icons/nextjs.png' },
  { id: '5', name: 'PostgreSQL', category: 'Database', iconUrl: '/icons/postgresql.png' },
  { id: '6', name: 'APIs', category: 'Integration', iconUrl: '/icons/api.png' },
  { id: '7', name: 'Stripe', category: 'Payment Integration', iconUrl: '/icons/stripe.png' },
  { id: '8', name: 'AI Tools', category: 'Machine Learning', iconUrl: '/icons/ai.png' },
  { id: '9', name: 'E-comm', category: 'Solutions', iconUrl: '/icons/ecommerce.png' },
  { id: '10', name: 'WordPress', category: 'CMS Platform', iconUrl: '/icons/wordpress.png' },
  { id: '11', name: 'HTML/CSS', category: 'Frontend', iconUrl: '/icons/html-css.png' },
  { id: '12', name: 'JavaScript', category: 'Programming Language', iconUrl: '/icons/javascript.png' }
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
