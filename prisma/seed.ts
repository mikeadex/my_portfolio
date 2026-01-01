import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { blogPosts, projects } from '../lib/data';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting database seed...');

  // Seed blog posts
  console.log('Seeding blog posts...');
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        slug: post.slug,
        title: post.title,
        description: post.description,
        content: post.content,
        date: post.date,
        readTime: post.readTime,
        tags: post.tags || [],
        author: post.author || 'Michael Adeleye',
        published: true,
      },
    });
    console.log(`✓ Created/Updated blog post: ${post.title}`);
  }

  // Seed projects
  console.log('\nSeeding projects...');
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: {
        id: project.id,
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl,
        imageUrl: project.imageUrl,
        featured: i === 0, // Make first project featured
        order: i,
      },
    });
    console.log(`✓ Created/Updated project: ${project.title}`);
  }

  console.log('\n✨ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
