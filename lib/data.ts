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
    slug: 'starting-career-web-development',
    title: 'Starting and Growing a Career in Web Development',
    description: 'As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.',
    date: 'Apr 8, 2022',
    readTime: '6min read',
    tags: ['Career', 'Web Development', 'Beginner'],
    author: 'Your Name',
    content: `
# Starting and Growing a Career in Web Development

As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%—significantly faster than average.

## Why Choose Web Development?

Web development offers a unique combination of creativity and technical challenge. Every day brings new problems to solve and new technologies to learn. The field is constantly evolving, which means you'll never stop learning.

### Getting Started

The journey into web development can seem daunting at first, but it's more accessible than ever before. Here are some key steps to get started:

1. **Learn the Fundamentals**: Start with HTML, CSS, and JavaScript. These are the building blocks of the web.
2. **Build Projects**: Theory is important, but nothing beats hands-on experience. Build real projects, even if they're simple at first.
3. **Join Communities**: Connect with other developers through online forums, local meetups, or coding bootcamps.
4. **Stay Current**: The web development landscape changes rapidly. Follow industry blogs, attend conferences, and continuously learn new technologies.

## Career Paths in Web Development

Web development offers various career paths:

- **Frontend Developer**: Focus on the user interface and user experience
- **Backend Developer**: Work on server-side logic and databases
- **Full Stack Developer**: Handle both frontend and backend development
- **DevOps Engineer**: Bridge development and operations

## Conclusion

Starting a career in web development is an exciting journey filled with opportunities. With dedication, continuous learning, and a passion for creating amazing web experiences, you can build a successful and fulfilling career in this dynamic field.
    `,
    url: '#'
  },
  {
    id: '2',
    slug: 'create-landing-page-performs-great',
    title: 'Create a Landing Page That Performs Great',
    description: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.',
    date: 'Mar 15, 2022',
    readTime: '6min read',
    tags: ['Design', 'Marketing', 'Conversion'],
    author: 'Your Name',
    content: `
# Create a Landing Page That Performs Great

Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.

## What Makes a Great Landing Page?

A high-performing landing page combines several key elements:

### 1. Clear Value Proposition

Your visitors should understand what you're offering within seconds of landing on your page. Make your headline compelling and your value proposition crystal clear.

### 2. Strong Call-to-Action

Every landing page needs a clear CTA that tells visitors exactly what you want them to do. Whether it's "Sign Up", "Get Started", or "Download Now", make it prominent and action-oriented.

### 3. Social Proof

Include testimonials, reviews, case studies, or logos of well-known clients. Social proof builds trust and credibility.

### 4. Mobile Optimization

With more than 50% of web traffic coming from mobile devices, your landing page must look and function perfectly on all screen sizes.

## Design Best Practices

- **Keep it simple**: Remove distractions and focus on your main goal
- **Use whitespace effectively**: Give your content room to breathe
- **Choose colors wisely**: Use contrasting colors for your CTA buttons
- **Optimize load time**: Every second counts in keeping visitors engaged

## Testing and Optimization

The best landing pages are constantly tested and refined. Use A/B testing to experiment with different headlines, CTAs, images, and layouts. Track your metrics and make data-driven decisions.

## Conclusion

Creating a landing page that converts is both an art and a science. By following these principles and continuously testing and optimizing, you can create landing pages that not only look great but also deliver real business results.
    `,
    url: '#'
  },
  {
    id: '3',
    slug: 'optimize-website-performance',
    title: 'How to Optimize Your Website for Better Performance',
    description: 'Website performance is crucial for user experience and SEO. Learn the best practices and techniques to make your website lightning fast.',
    date: 'Feb 20, 2022',
    readTime: '8min read',
    tags: ['Performance', 'SEO', 'Optimization'],
    author: 'Your Name',
    content: `
# How to Optimize Your Website for Better Performance

Website performance is crucial for user experience and SEO. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load. Let's explore how to make your website lightning fast.

## Why Performance Matters

Website performance affects:

- **User Experience**: Faster sites provide better user experiences
- **SEO Rankings**: Google considers page speed as a ranking factor
- **Conversion Rates**: Faster sites convert better
- **Bounce Rates**: Slow sites have higher bounce rates

## Key Optimization Techniques

### 1. Optimize Images

Images are often the largest assets on a page. Here's how to optimize them:

- Use modern formats like WebP
- Implement lazy loading
- Compress images without losing quality
- Use responsive images with srcset

### 2. Minimize HTTP Requests

Each file your page loads requires an HTTP request. Reduce them by:

- Combining CSS and JavaScript files
- Using CSS sprites for icons
- Inlining critical CSS

### 3. Enable Caching

Browser caching stores static files locally, reducing load times for returning visitors:

\`\`\`nginx
Cache-Control: public, max-age=31536000
\`\`\`

### 4. Use a Content Delivery Network (CDN)

CDNs distribute your content across multiple servers worldwide, serving files from the location closest to your users.

### 5. Optimize JavaScript

- Minify and compress JavaScript files
- Remove unused code
- Defer non-critical JavaScript
- Use code splitting for large applications

### 6. Implement Server-Side Rendering

For React/Next.js applications, SSR can significantly improve initial load times and SEO.

## Monitoring Performance

Use tools like:

- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- Chrome DevTools

## Conclusion

Website performance optimization is an ongoing process. By implementing these techniques and regularly monitoring your site's performance, you can ensure your users have the best possible experience.

Remember: every millisecond counts!
    `,
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
  { id: '1', name: 'Python', category: 'Automation, APIs, data workflows', iconUrl: '/icons/python.png' },
  { id: '2', name: 'Django', category: 'Secure backends, dashboards, admin systems', iconUrl: '/icons/django.png' },
  { id: '3', name: 'ReactJS', category: 'Interactive UIs and component systems', iconUrl: '/icons/react.png' },
  { id: '4', name: 'Next.js', category: 'SEO-ready web apps, fast performance', iconUrl: '/icons/nextjs.png' },
  { id: '5', name: 'PostgreSQL', category: 'Reliable data modeling and reporting', iconUrl: '/icons/postgresql.png' },
  { id: '6', name: 'APIs', category: 'Integrations (payments, CRM, forms, analytics)', iconUrl: '/icons/api.png' },
  { id: '7', name: 'Stripe', category: 'Checkout, subscriptions, payment flows', iconUrl: '/icons/stripe.png' },
  { id: '8', name: 'AI Tools', category: 'Content workflows, productivity, automation', iconUrl: '/icons/ai.png' },
  { id: '9', name: 'E-comm', category: 'Product pages, funnels, conversion optimisation', iconUrl: '/icons/ecommerce.png' },
  { id: '10', name: 'WordPress', category: 'Marketing sites, landing pages, CMS builds', iconUrl: '/icons/wordpress.png' },
  { id: '11', name: 'HTML/CSS', category: 'Responsive UI, accessibility-first layouts', iconUrl: '/icons/html-css.png' },
  { id: '12', name: 'JavaScript', category: 'Modern web development foundations', iconUrl: '/icons/javascript.png' }
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
    url: 'https://github.com/mikeadex',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/michaeladeleye1',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/247mediauk',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:support@creativemikestudios.com',
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
