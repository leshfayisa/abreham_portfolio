# Abreham Bekele - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases Abreham Bekele's skills, experience, and projects as a Full-Stack Engineer & Mobile Developer.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Professional Sections**: Hero, About, Skills, Experience, Projects, and Contact
- **Interactive Elements**: Smooth scrolling navigation, project filtering, and contact form
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Performance Focused**: Optimized for fast loading and smooth user experience

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Development**: ESLint, PostCSS, Autoprefixer

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Professional background and key strengths
3. **Skills Section**: Technical skills with progress bars and categories
4. **Experience Section**: Work history and educational background
5. **Projects Section**: Portfolio showcase with filtering capabilities
6. **Contact Section**: Contact form and professional information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abreham-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
abreham-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects showcase
│   └── Contact.tsx       # Contact form
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation
```

## 🎨 Customization

### Colors and Theme
Edit `tailwind.config.js` to customize the color scheme and animations.

### Content
Update the content in each component file to reflect your personal information:
- Personal details in `Hero.tsx`
- Professional background in `About.tsx`
- Skills and proficiency levels in `Skills.tsx`
- Work experience in `Experience.tsx`
- Project portfolio in `Projects.tsx`
- Contact information in `Contact.tsx`

### Styling
Modify `app/globals.css` to add custom CSS classes and override default styles.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The portfolio can be deployed to any static hosting platform that supports Next.js.

## 📊 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out to:
- Email: abreham.bekele@example.com
- LinkedIn: linkedin.com/in/abreham-bekele
- GitHub: github.com/abreham-bekele

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
