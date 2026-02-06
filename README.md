# Laxmi Engineering Equipments - Company Website

A production-ready company website built with Next.js (App Router), React, and modern UI principles. This website showcases agricultural and industrial equipment manufacturing company's products and services.

## 🚀 Features

- **Modern Design**: Clean, professional industrial look inspired by Fieldking.com
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Smooth Animations**: Framer Motion powered transitions and entrance animations
- **SEO Optimized**: Built-in SEO metadata, sitemap, and robots.txt
- **Fast Performance**: Optimized for production with Next.js Image component
- **Product Catalog**: Complete product listing with individual detail pages
- **Contact Form**: Interactive contact form with validation
- **Production Ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd laxmi
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

The easiest way to deploy this website is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain URL
4. Deploy!

The project is configured with `vercel.json` for optimal deployment settings.

## 📄 Pages

- **Home** (`/`) - Hero carousel, features, and product highlights
- **About Us** (`/about`) - Company history, values, and certifications
- **Products** (`/products`) - Product listing with category filters
- **Product Detail** (`/products/[slug]`) - Individual product pages
- **Contact Us** (`/contact`) - Contact form and company information

## 🎨 Design System

- **Primary Colors**: Red (#DC2626), White (#FFFFFF), Black (#000000)
- **Typography**: System fonts with clean hierarchy
- **Spacing**: Consistent spacing using Tailwind's scale
- **Animations**: Smooth transitions and hover effects

## 📱 Products

The website includes 11 products:

1. 2-Wheel Trolley (2 variants)
2. 2-Wheel Water Tanker (2 variants)
3. 4-Wheel Trolley (2 variants)
4. 4-Wheel Water Tanker with Pump (2 variants)
5. Mini Tractor Trolley
6. Trailer Only Platform (14-24 Ft)
7. Truck Mounted Water Tanker (6KL-30KL)
8. M.S. Storage Tanks (5KL-50KL)
9. Bitumen Storage Tank with Burner (10KL-35KL)
10. Polymer Storage Tank (5KL-50KL)
11. M.S. Casing (3mm-30mm)

## 🔧 Customization

- **Product data**: Edit `lib/products.ts`
- **Styling**: Modify `tailwind.config.ts` and `app/globals.css`
- **Components**: Update components in `components/` directory
- **Pages**: Modify pages in `app/` directory
- **SEO**: Update metadata in `app/layout.tsx` and page-specific metadata files

## 📝 Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📊 Performance

- Optimized images with Next.js Image component
- Automatic code splitting
- Static generation for product pages
- Compressed assets
- Minimal JavaScript bundle

## 🔒 Security

- No console logs in production
- Secure headers configuration
- Input validation on forms
- Type-safe code with TypeScript

## 📝 License

This project is proprietary and confidential.

## 👤 Company Information

**Laxmi Engineering Equipments**
- Established: 1996
- Location: Plot No.1, Dipti Signal Road, Chikhali Layout, Sakharkar Wadi, Nagpur, Maharashtra – 440035, India
- Phone: +91 98222 21937 / +91 95032 90443
- Email: info@thelaxmiengineering.com
- Certification: ISO 9001:2015
- Owner: Mr. Pitambar Lute

---

Built with ❤️ using Next.js and modern web technologies.
