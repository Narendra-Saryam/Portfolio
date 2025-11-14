# Portfolio - Next.js

This is a portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Modern portfolio design with dark theme
- Responsive layout for mobile and desktop
- Smooth animations with Framer Motion
- Sections: Home, About, Experience, Projects, Footer/Contact
- Optimized images with Next.js Image component

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Remix Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Narendra-Saryam/Portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Home/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── variants.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   └── [images]
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Deployment

This project can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Next.js

## Author

**Narendra Saryam**
- LinkedIn: [narendra-saryam](https://www.linkedin.com/in/narendra-saryam/)
- GitHub: [Narendra-Saryam](https://github.com/Narendra-Saryam)
- Email: narendrasaryam9459@gmail.com

## License

This project is open source and available under the MIT License.


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
