# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases your skills, projects, and provides easy ways for potential clients or employers to connect with you.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Project Showcase**: Dynamic project cards with technology tags and links
- **Skills Section**: Organized display of technical skills by category
- **Social Media Integration**: Easy links to GitHub, LinkedIn, Twitter, and email
- **Smooth Navigation**: Fixed header with smooth scroll to sections
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type Safe**: Built with TypeScript for better development experience
- **Fast Performance**: Optimized with Next.js App Router and static generation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd mikeade
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Personal Information

Edit `/lib/data.ts` to customize your portfolio content:

1. **Personal Info**: Update `personalInfo` object with your name, title, bio, email, and location
2. **Projects**: Modify the `projects` array to showcase your work
   - Add project titles, descriptions, technologies used
   - Include GitHub repository links and live demo URLs
   - Add project images (place images in `/public/projects/`)
3. **Skills**: Update the `skills` array with your technical skills organized by category
4. **Social Links**: Customize `socialLinks` with your social media profiles

### Styling

- **Colors**: The site uses Tailwind CSS. Modify colors in the components or extend the theme
- **Fonts**: The project uses Geist Sans and Geist Mono fonts by default
- **Layout**: All components are in `/components/` directory for easy customization

### Adding New Projects

To add a new project, add an object to the `projects` array in `/lib/data.ts`:

```typescript
{
  id: '4',
  title: 'Your Project Name',
  description: 'Project description...',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://your-project.com',
  imageUrl: '/projects/your-image.jpg'
}
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
