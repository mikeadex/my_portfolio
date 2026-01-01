# 🎨 Mike Adeleye Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-7.2.0-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, full-stack portfolio website with admin dashboard, blog, and contact management**

[Live Demo](https://mikeadeleye.dev) • [Report Bug](https://github.com/username/mikeadex/issues) • [Request Feature](https://github.com/username/mikeadex/issues)

</div>

---

## ✨ Features

### 🎯 Frontend

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Intersection observer animations and transitions
- **Markdown Blog** - Full markdown support with syntax highlighting
- **Project Showcase** - Interactive project cards with technology tags
- **Contact Form** - Integrated email sending with Resend
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data
- **Google Analytics** - GA4 integration for visitor tracking
- **Dynamic Sitemap** - Auto-generated from blog posts
- **Loading Animation** - Smooth rolling circle transition effect

### 🔐 Admin Dashboard

- **Authentication** - Cookie-based secure authentication
- **Blog Management** - Create, edit, delete blog posts with markdown editor
- **Project Management** - CRUD operations for portfolio projects
- **File Upload** - Image upload for featured images (5MB limit)
- **Live Preview** - Markdown preview toggle in editor
- **Draft Support** - Publish/unpublish content
- **Pagination** - Clean pagination for managing content

### 🗄️ Database & API

- **PostgreSQL** - Neon serverless PostgreSQL database
- **Prisma ORM** - Type-safe database client
- **RESTful API** - Clean API routes for all operations
- **Image Storage** - File system storage in `/public` directory

---

## 🛠️ Tech Stack

| Category           | Technologies                               |
| ------------------ | ------------------------------------------ |
| **Framework**      | Next.js 16.1.1 with App Router & Turbopack |
| **Frontend**       | React 19, TypeScript, Tailwind CSS 4       |
| **Database**       | PostgreSQL (Neon), Prisma ORM              |
| **Authentication** | Cookie-based auth with bcryptjs            |
| **Email**          | Resend API                                 |
| **Markdown**       | react-markdown, remark-gfm                 |
| **Analytics**      | Google Analytics 4                         |
| **SEO**            | Next.js Metadata API, JSON-LD              |
| **Deployment**     | Vercel (recommended)                       |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Neon account)
- Resend account for email functionality
- Google Analytics 4 property (optional)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/username/mikeadex.git
cd mikeadex
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"

# Admin Authentication
ADMIN_PASSWORD="your-secure-password"

# Email Service (Resend)
RESEND_API_KEY="re_your_api_key_here"

# Site Configuration
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

4. **Set up the database**

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed the database (optional)
npx prisma db seed
```

5. **Start the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio! 🎉

---

## 📁 Project Structure

```
mikeadex/
├── app/
│   ├── admin/              # Admin dashboard pages
│   │   ├── blog/          # Blog editor
│   │   ├── project/       # Project editor
│   │   └── page.tsx       # Dashboard home
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication
│   │   ├── blog/          # Blog CRUD
│   │   ├── contact/       # Contact form
│   │   ├── projects/      # Projects CRUD
│   │   └── upload/        # File upload
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt config
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── LoadingAnimation.tsx  # Loading animation
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills section
│   └── Thoughts.tsx       # Blog preview
├── lib/
│   ├── data.ts           # Static data
│   ├── prisma.ts         # Prisma client
│   └── types.ts          # TypeScript types
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed data
├── public/
│   ├── blog/             # Blog images
│   ├── projects/         # Project images
│   └── animations/       # Lottie animations
└── middleware.ts         # Route protection
```

---

## 🎯 Usage

### Admin Access

1. Navigate to `/admin`
2. Enter the admin password (from `.env`)
3. Manage your blog posts and projects

### Creating Blog Posts

1. Go to Admin Dashboard → Blog tab
2. Click "New Post"
3. Fill in title, slug, date, and content (markdown supported)
4. Upload a featured image (optional)
5. Toggle "Published" to make it live
6. Click "Create Post"

### Managing Projects

1. Go to Admin Dashboard → Projects tab
2. Click "New Project" or edit existing ones
3. Add title, description, technologies, and links
4. Upload a project image
5. Save changes

### Email Configuration

Get your Resend API key:

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add it to `.env` as `RESEND_API_KEY`
4. Verify your domain (for production)

---

## 📝 Scripts

| Command                  | Description                             |
| ------------------------ | --------------------------------------- |
| `npm run dev`            | Start development server with Turbopack |
| `npm run build`          | Build for production                    |
| `npm start`              | Start production server                 |
| `npm run lint`           | Run ESLint                              |
| `npx prisma studio`      | Open Prisma Studio (database GUI)       |
| `npx prisma migrate dev` | Create and apply migrations             |
| `npx prisma db seed`     | Seed the database                       |

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy!

3. **Environment Variables for Production**
   - `DATABASE_URL` - Your production PostgreSQL URL
   - `ADMIN_PASSWORD` - Secure admin password
   - `RESEND_API_KEY` - Production Resend key
   - `NEXT_PUBLIC_BASE_URL` - Your domain (e.g., https://mikeadeleye.dev)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID

### Post-Deployment Checklist

- [ ] Run database migrations in production
- [ ] Verify Resend domain/email
- [ ] Test contact form
- [ ] Submit sitemap to Google Search Console
- [ ] Test admin authentication
- [ ] Check Google Analytics tracking
- [ ] Verify OG images and social cards

---

## 🔧 Configuration

### SEO Optimization

Edit metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Name - Portfolio",
    template: "%s | Your Name",
  },
  description: "Your description",
  // ... more metadata
};
```

### Google Analytics

Add your GA4 Measurement ID to `.env`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### Contact Email

Configure recipient in `app/api/contact/route.ts`:

```typescript
to: 'your-email@example.com',
```

---

## 🎨 Customization

### Colors

Edit Tailwind colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#ef233c',
  secondary: '#2b2d42',
  // Add your colors
}
```

### Typography

Update font in `app/layout.tsx`:

```typescript
const geistSans = localFont({
  src: "./fonts/YourFont.woff2",
  // ...
});
```

### Animations

Modify loading animation in `components/LoadingAnimation.tsx`

---

## 📊 Database Schema

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model BlogPost {
  id             String   @id @default(uuid())
  title          String
  slug           String   @unique
  content        String
  excerpt        String?
  featuredImage  String?
  published      Boolean  @default(false)
  publishedAt    DateTime
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}

model Project {
  id            String   @id @default(uuid())
  title         String
  description   String
  image         String?
  technologies  String[]
  liveUrl       String?
  githubUrl     String?
  featured      Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

---

## 🐛 Troubleshooting

### Build Errors

**Prisma Client not found:**

```bash
npx prisma generate
npm run build
```

**Database connection issues:**

- Check `DATABASE_URL` in `.env`
- Ensure database is accessible
- Verify SSL mode for Neon

### Image Upload Issues

- Check file size (5MB limit)
- Verify `/public/blog` and `/public/projects` directories exist
- Ensure proper write permissions

### Contact Form Not Sending

- Verify `RESEND_API_KEY` is set
- Check Resend domain verification
- Test with Resend dashboard

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Mike Adeleye**

- Website: [mikeadeleye.dev](https://mikeadeleye.dev)
- Email: support@creativemikestudios.com
- GitHub: [@username](https://github.com/username)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/username)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Resend](https://resend.com/) - Email API for developers
- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Mike Adeleye](https://mikeadeleye.dev)

</div>

3. **Environment Variables for Production**
   - `DATABASE_URL` - Your production PostgreSQL URL
   - `ADMIN_PASSWORD` - Secure admin password
   - `RESEND_API_KEY` - Production Resend key
   - `NEXT_PUBLIC_BASE_URL` - Your domain (e.g., https://mikeadeleye.dev)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID

### Post-Deployment Checklist

- [ ] Run database migrations in production
- [ ] Verify Resend domain/email
- [ ] Test contact form
- [ ] Submit sitemap to Google Search Console
- [ ] Test admin authentication
- [ ] Check Google Analytics tracking
- [ ] Verify OG images and social cards

---

## 🔧 Configuration

### SEO Optimization

Edit metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Name - Portfolio",
    template: "%s | Your Name",
  },
  description: "Your description",
  // ... more metadata
};
```

### Google Analytics

Add your GA4 Measurement ID to `.env`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### Contact Email

Configure recipient in `app/api/contact/route.ts`:

```typescript
to: 'your-email@example.com',
```

---

## 🎨 Customization

### Colors

Edit Tailwind colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#ef233c',
  secondary: '#2b2d42',
  // Add your colors
}
```

### Typography

Update font in `app/layout.tsx`:

```typescript
const geistSans = localFont({
  src: "./fonts/YourFont.woff2",
  // ...
});
```

### Animations

Modify loading animation in `components/LoadingAnimation.tsx`

---

## 📊 Database Schema

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model BlogPost {
  id             String   @id @default(uuid())
  title          String
  slug           String   @unique
  content        String
  excerpt        String?
  featuredImage  String?
  published      Boolean  @default(false)
  publishedAt    DateTime
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}

model Project {
  id            String   @id @default(uuid())
  title         String
  description   String
  image         String?
  technologies  String[]
  liveUrl       String?
  githubUrl     String?
  featured      Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

---

## 🐛 Troubleshooting

### Build Errors

**Prisma Client not found:**

```bash
npx prisma generate
npm run build
```

**Database connection issues:**

- Check `DATABASE_URL` in `.env`
- Ensure database is accessible
- Verify SSL mode for Neon

### Image Upload Issues

- Check file size (5MB limit)
- Verify `/public/blog` and `/public/projects` directories exist
- Ensure proper write permissions

### Contact Form Not Sending

- Verify `RESEND_API_KEY` is set
- Check Resend domain verification
- Test with Resend dashboard

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Mike Adeleye**

- Website: [mikeadeleye.dev](https://mikeadeleye.dev)
- Email: support@creativemikestudios.com
- GitHub: [@username](https://github.com/username)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/username)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Resend](https://resend.com/) - Email API for developers
- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Mike Adeleye](https://mikeadeleye.dev)

</div>
```

## 📁 Project Structure

```
mikeade/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero/landing section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx        # Projects gallery
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer component
├── lib/
│   ├── data.ts             # Portfolio content data
│   └── types.ts            # TypeScript type definitions
└── public/
    └── projects/           # Project images (create this folder)
```

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Geist Font](https://vercel.com/font)** - Modern font family

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:

- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback, reach out via the contact section on the website.

---

**Built with ❤️ using Next.js and Tailwind CSS**
