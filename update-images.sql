-- Update blog posts with featured images (using placeholder images)
UPDATE "BlogPost"
SET "featuredImage" = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
WHERE slug = 'starting-career-web-development';
UPDATE "BlogPost"
SET "featuredImage" = 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop'
WHERE slug = 'create-landing-page';
UPDATE "BlogPost"
SET "featuredImage" = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
WHERE slug = 'optimize-website-performance';
-- Update projects with images (using placeholder images)
UPDATE "Project"
SET "imageUrl" = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop'
WHERE title LIKE 'Wáàlá%';
UPDATE "Project"
SET "imageUrl" = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop'
WHERE title LIKE 'HeyLokal%';
UPDATE "Project"
SET "imageUrl" = 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=400&fit=crop'
WHERE title = 'Project Three';