# EasyRoom 🏠

![EasyRoom Banner](https://i.imgur.com/placeholder.png)

EasyRoom is a modern, frontend-focused room finding and booking platform built with Next.js. It features a clean, responsive UI with AI-powered room recommendations to help users find their perfect living space.

## 🌟 Features

- **Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS
- **Theme Support**: Light and dark mode with system preference detection
- **Room Listings**: Browse available rooms with detailed information
- **Search & Filter**: Find rooms based on location, price, amenities, and more
- **AI Recommendations**: Simulated AI matching to suggest rooms based on preferences
- **Authentication**: Google OAuth integration for easy sign-in
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 📋 Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/easyroom.git
   cd easyroom
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # NextAuth.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret # Generate this using `openssl rand -base64 32`

   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

   > **Note**: To get Google OAuth credentials, visit the [Google Cloud Console](https://console.cloud.google.com/), create a project, and set up OAuth credentials.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
easyroom/
├── app/                  # Next.js app router
│   ├── (auth)/           # Authentication pages
│   ├── dashboard/        # User dashboard
│   ├── rooms/            # Room listings and details
│   ├── search/           # Search functionality
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── auth/             # Authentication components
│   ├── ui/               # UI components (shadcn/ui)
│   └── providers/        # Context providers
├── lib/                  # Utility functions
│   ├── auth.ts           # Auth configuration
│   ├── utils.ts          # Helper functions
│   └── validations/      # Zod schemas
├── public/               # Static assets
│   ├── favicon.ico       # Favicon (multi-size)
│   ├── icon.svg          # SVG icon
│   └── manifest.json     # Web app manifest
└── types/                # TypeScript type definitions
```

## 🔍 Key Features Explained

### Authentication

EasyRoom uses NextAuth.js for authentication with Google OAuth. The frontend-only implementation simulates user sessions with JWT tokens.

### Room Listings

Browse through available rooms with detailed information including:
- Photos
- Price
- Location
- Amenities
- Reviews
- Availability

### Search & Filtering

Find your perfect room by filtering based on:
- Location
- Price range
- Room type
- Amenities
- Availability

### AI Recommendations

The platform includes simulated AI recommendations that match users with rooms based on their preferences and search history.

## 🎨 UI Components

EasyRoom uses [shadcn/ui](https://ui.shadcn.com/), a collection of reusable components built with Radix UI and Tailwind CSS. These components are fully accessible and customizable.

## 📱 Responsive Design

The application is designed to work seamlessly across all device sizes:
- Desktop
- Tablet
- Mobile

## 🌐 Favicon & PWA Suppor

## 🧪 Development

### Code Style

This project uses ESLint and Prettier for code formatting and linting.

```bash
# Run linting
npm run lint

# Format code
npm run format
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🚢 Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Feasyroom)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Vercel](https://vercel.com/)

---

Made with ❤️ by [Your Name](https://github.com/yourusername)
