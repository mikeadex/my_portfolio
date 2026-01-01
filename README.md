# 🎨 Mike Adeleye Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-7.2.0-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, full-stack portfolio website showcasing creative work and technical expertise**

[Live Demo](https://mikeadeleye.dev)

</div>

---

## 📖 Overview

This portfolio website serves as a digital showcase for creative and technical projects, combining clean design principles with modern web technologies. The platform features a blog for sharing insights, a project showcase, and direct contact capabilities, all built with performance and user experience at the forefront.

---

## 🎯 Design Philosophy

### Visual Design
- **Minimalist Aesthetic** - Clean, distraction-free interface that puts content first
- **Typography-Focused** - Clear hierarchy using Geist Sans and Geist Mono typefaces
- **Color Palette** - Bold primary red (#ef233c) contrasted with dark backgrounds for visual impact
- **Smooth Transitions** - Subtle animations and rolling circle loader for polished feel
- **Responsive Layout** - Mobile-first approach ensuring seamless experience across all devices

### User Experience
- **Fast Loading** - Optimized assets and server-side rendering for instant page loads
- **Intuitive Navigation** - Fixed header with smooth scroll navigation
- **Accessibility** - Semantic HTML and proper ARIA labels throughout
- **Progressive Enhancement** - Core content accessible even without JavaScript

### Content Structure
- **Hero Section** - Strong introduction with call-to-action
- **About** - Personal story and professional background
- **Skills** - Technical capabilities organized by category
- **Projects** - Portfolio pieces with technology tags and live links
- **Blog** - Written thoughts with full markdown support
- **Contact** - Direct communication channel with email integration

---

## ✨ Key Features

- **Dynamic Blog System** - Markdown-powered blog with rich text formatting
- **Project Showcase** - Interactive project cards with technology tags
- **Contact Form** - Email integration for direct inquiries
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data
- **Analytics Ready** - Google Analytics 4 integration
- **Content Management** - Backend system for updating portfolio content
- **Pagination** - Clean navigation for browsing multiple posts and projects

---

## 🛠️ Technology Stack

### Frontend Architecture
| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 16.1.1 | Server-side rendering, routing, and optimization |
| **UI Library** | React 19.2.3 | Component-based user interface |
| **Language** | TypeScript 5 | Type-safe development |
| **Styling** | Tailwind CSS 4 | Utility-first responsive design |
| **Markdown** | react-markdown + remark-gfm | Blog content rendering |

### Backend Infrastructure
| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Database** | PostgreSQL (Neon) | Persistent data storage |
| **ORM** | Prisma 7.2.0 | Type-safe database queries |
| **Authentication** | bcryptjs + Cookies | Secure access control |
| **Email** | Resend API | Contact form delivery |
| **File Storage** | Local file system | Image uploads |

### SEO & Analytics
| Tool | Purpose |
|------|---------|
| **Metadata API** | Dynamic meta tags and Open Graph |
| **JSON-LD** | Structured data for search engines |
| **Sitemap** | Auto-generated from content |
| **Robots.txt** | Crawler instructions |
| **Google Analytics 4** | User behavior tracking |

---

## 📁 Project Structure

```
mikeadex/
├── app/
│   ├── blog/              # Blog post pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Crawler configuration
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── LoadingAnimation.tsx  # Page loader
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills grid
│   └── Thoughts.tsx       # Blog preview
├── lib/
│   ├── data.ts           # Static content
│   ├── prisma.ts         # Database client
│   └── types.ts          # TypeScript definitions
├── prisma/
│   └── schema.prisma     # Database schema
└── public/
    ├── blog/             # Blog images
    ├── projects/         # Project images
    └── animations/       # Animation assets
```

---

## 🎨 Design System

### Color Palette
```css
Primary:   #ef233c  /* Vibrant Red */
Secondary: #2b2d42  /* Dark Navy */
Background: #0a0a0a /* Near Black */
Text:      #ffffff  /* Pure White */
```

### Typography
- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

### Spacing Scale
- Mobile: 16px base padding
- Tablet: 24px base padding
- Desktop: 32px base padding

### Animations
- **Duration**: 300ms for UI interactions, 1500ms for loaders
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Effects**: Fade-ins, slide-ins, rolling circle loader

---

## 🌐 Technical Highlights

### Performance Optimizations
- Server-side rendering with Next.js App Router
- Image optimization with automatic format detection
- Code splitting for faster initial loads
- Turbopack for fast development builds

### Database Design
- **User** - Authentication credentials
- **BlogPost** - Articles with markdown, images, publish status
- **Project** - Portfolio items with technologies, links, images

### API Architecture
- RESTful endpoints for content operations
- File upload handling with validation
- Email delivery through Resend service
- Authentication middleware for protected routes

---

## 📧 Contact

**Mike Adeleye**

- Website: [mikeadeleye.dev](https://mikeadeleye.dev)
- Email: support@creativemikestudios.com

---

<div align="center">

Made with ❤️ by [Mike Adeleye](https://mikeadeleye.dev)

</div>
