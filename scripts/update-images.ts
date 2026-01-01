import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function updateImages() {
  console.log('Updating images...');

  // Update blog posts with featured images
  await prisma.blogPost.update({
    where: { slug: 'starting-career-web-development' },
    data: { 
      featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop' 
    },
  });
  console.log('✓ Updated blog post 1');

  await prisma.blogPost.update({
    where: { slug: 'create-landing-page' },
    data: { 
      featuredImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop' 
    },
  });
  console.log('✓ Updated blog post 2');

  await prisma.blogPost.update({
    where: { slug: 'optimize-website-performance' },
    data: { 
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop' 
    },
  });
  console.log('✓ Updated blog post 3');

  // Update projects with images
  const projects = await prisma.project.findMany();
  
  for (const project of projects) {
    let imageUrl = '';
    
    if (project.title.includes('Wáàlá')) {
      imageUrl = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop';
    } else if (project.title.includes('HeyLokal')) {
      imageUrl = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop';
    } else {
      imageUrl = 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=400&fit=crop';
    }
    
    await prisma.project.update({
      where: { id: project.id },
      data: { imageUrl },
    });
    console.log(`✓ Updated project: ${project.title}`);
  }

  console.log('\n✨ All images updated!');
}

updateImages()
  .catch((e) => {
    console.error('Error updating images:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
