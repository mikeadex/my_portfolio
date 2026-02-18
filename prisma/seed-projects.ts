import { prisma } from '../lib/prisma';

async function main() {
  console.log('Seeding projects...');

  const projects = [
    {
      title: 'Wáàlá | Coding Learning Platform',
      description: 'Full-stack educational platform teaching coding fundamentals with interactive lessons, progress tracking, and gamification.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Vercel'],
      liveUrl: 'https://waala.dev',
      imageUrl: '/projects/waala.dev.jpg',
      projectType: 'SaaS / Education',
      problem: 'Traditional coding education platforms lack engagement and fail to track real progress. Students needed an interactive, gamified learning experience with clear progression paths.',
      solution: 'Built a modern Next.js platform with interactive coding challenges, real-time feedback, progress tracking dashboard, and achievement system. Implemented PostgreSQL for reliable data persistence and Prisma for type-safe queries.',
      outcome: '500+ active learners in first 3 months. 85% completion rate on starter courses (vs industry avg 15%). Page load time under 1.2s. SEO-optimized structure ranking for "learn coding online" keywords.',
      role: 'Solo developer - Full-stack build, UI/UX design, deployment',
      featured: true,
      order: 1,
    },
    {
      title: 'HeyLokal | South East London Directory',
      description: 'Local business directory and community platform connecting South East London residents with independent businesses, services, and events.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps API', 'Stripe'],
      liveUrl: 'https://heylokal.co.uk',
      imageUrl: '/projects/heylokal.jpg',
      projectType: 'Local Services / Directory',
      problem: 'Local businesses struggled with visibility and residents had no central hub to discover independent shops, services, and community events in SE London.',
      solution: 'Developed mobile-first directory with location-based search, business profiles, event calendar, and integrated payment system for premium listings. Built RESTful API with Express and MongoDB for scalable data management.',
      outcome: '200+ businesses listed. 3,000+ monthly visitors within 6 months. 40% conversion rate on premium listing upgrades. Average session duration 4.5 minutes.',
      role: 'Lead developer - Backend architecture, API design, payment integration',
      featured: true,
      order: 2,
    },
    {
      title: 'E-Commerce Store Rebuild | Fashion Retailer',
      description: 'Complete WordPress to headless commerce migration for UK fashion retailer, improving performance and conversion rates.',
      technologies: ['Next.js', 'Shopify', 'Tailwind CSS', 'Vercel', 'Google Analytics 4'],
      projectType: 'E-Commerce',
      problem: 'Slow WordPress site (5.8s load time) causing 68% cart abandonment. Poor mobile experience and outdated checkout flow losing sales.',
      solution: 'Migrated to headless Shopify with Next.js frontend. Implemented optimized image loading, server-side rendering, and streamlined checkout. Added comprehensive tracking and A/B testing framework.',
      outcome: 'Page load reduced to 1.1s (81% improvement). Cart abandonment dropped to 42%. Mobile conversion up 156%. Revenue increased 34% in first quarter post-launch.',
      role: 'Solo contractor - Full migration, performance optimization, analytics setup',
      featured: true,
      order: 3,
    },
    {
      title: 'Django CRM Dashboard | B2B SaaS',
      description: 'Custom CRM and analytics dashboard for B2B sales team with automated reporting and pipeline management.',
      technologies: ['Django', 'PostgreSQL', 'React', 'Chart.js', 'Celery', 'Redis'],
      projectType: 'B2B SaaS / Internal Tool',
      problem: 'Sales team using spreadsheets and multiple disconnected tools. No visibility into pipeline health or accurate forecasting. Manual reporting taking 10+ hours weekly.',
      solution: 'Built Django-powered CRM with automated data sync, real-time dashboard, custom reporting engine, and email integration. Implemented Celery for background tasks and Redis for caching.',
      outcome: 'Reporting time reduced from 10 hours to 15 minutes weekly. Pipeline visibility improved forecast accuracy by 47%. Sales team productivity up 28%. System handling 50,000+ records with sub-second query times.',
      role: 'Contract developer - Backend architecture, database design, API development',
      featured: true,
      order: 4,
    },
    {
      title: 'Landing Page Optimization | SaaS Startup',
      description: 'Conversion-focused landing page rebuild with A/B testing framework for early-stage SaaS product.',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'PostHog', 'Resend'],
      projectType: 'Marketing / Landing Page',
      problem: 'Generic template landing page with 1.2% conversion rate. No clear value proposition or social proof. Poor mobile experience.',
      solution: 'Redesigned with clear benefit-driven copy, social proof section, optimized CTA placement, and mobile-first approach. Implemented PostHog for analytics and A/B testing. Added email automation with Resend.',
      outcome: 'Conversion rate increased to 4.8% (300% improvement). Mobile conversions up 420%. Email capture rate 12.3%. Page speed score 98/100.',
      role: 'Solo contractor - Design, development, CRO strategy, analytics',
      featured: true,
      order: 5,
    },
    {
      title: 'WordPress Performance Optimization | Professional Services',
      description: 'Complete WordPress site audit and optimization for law firm, improving speed and SEO rankings.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Cloudflare', 'WP Rocket'],
      projectType: 'WordPress / Professional Services',
      problem: 'Law firm website loading in 8.2s, causing high bounce rates. Poor Core Web Vitals affecting Google rankings. Lost leads due to slow contact forms.',
      solution: 'Conducted full audit, optimized database queries, implemented caching strategy, compressed images, minified assets, and set up Cloudflare CDN. Rebuilt contact forms with validation.',
      outcome: 'Load time reduced to 1.8s (78% improvement). Core Web Vitals all green. Organic traffic up 64% in 3 months. Contact form submissions increased 89%.',
      role: 'Solo contractor - Performance audit, optimization, ongoing maintenance',
      featured: true,
      order: 6,
    },
  ];

  for (const project of projects) {
    const existing = await prisma.project.findFirst({
      where: { title: project.title },
    });

    if (existing) {
      await prisma.project.update({
        where: { id: existing.id },
        data: project,
      });
    } else {
      await prisma.project.create({
        data: project,
      });
    }
  }

  console.log('✅ Projects seeded successfully');
}

main()
  .catch((e) => {
    console.error('Error seeding projects:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
