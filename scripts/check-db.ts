import { prisma } from '../lib/prisma';

async function checkDatabase() {
  try {
    console.log('Checking database...\n');
    
    // Check blogs
    const blogs = await prisma.blogPost.findMany();
    console.log('Blog posts:', blogs.length);
    if (blogs.length > 0) {
      console.log('First blog:', {
        title: blogs[0].title,
        featuredImage: blogs[0].featuredImage,
      });
    }
    
    // Check projects  
    const projects = await prisma.project.findMany();
    console.log('\nProjects:', projects.length);
    if (projects.length > 0) {
      console.log('First project:', {
        title: projects[0].title,
        imageUrl: projects[0].imageUrl,
      });
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
