# CasaLinda Full-Stack Project

This project uses a modern tech stack with React (Vite) frontend and Django backend.

## Tech Stack

### Frontend
- Vite + React
- TailwindCSS
- shadcn/ui
- Axios (for API calls)

### Backend
- Django
- Django REST Framework
- PostgreSQL
- Python 3.x

## Project Structure
```
CasaLinda/
├── frontend/           # Vite + React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/           # Django backend
    ├── manage.py
    ├── requirements.txt
    └── .env
```

## Setup Instructions

### Backend Setup

1. Create and activate virtual environment:
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
.\venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
Create a `.env` file in the backend directory with:
```
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@localhost:5432/casalinda
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

4. Initialize database:
```bash
python manage.py migrate
python manage.py createsuperuser
```

5. Run development server:
```bash
python manage.py runserver
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Install TailwindCSS and shadcn/ui:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @shadcn/ui
```

4. Configure TailwindCSS:
Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

5. Run development server:
```bash
npm run dev
```

## Deployment Notes

### Backend (Heroku)
- Add `Procfile` with: `web: gunicorn your_project.wsgi`
- Add `gunicorn` to requirements.txt
- Set environment variables in Heroku dashboard
- Configure PostgreSQL add-on

### Frontend (Netlify)
- Add `netlify.toml` configuration
- Set build command: `npm run build`
- Set publish directory: `dist`
- Configure environment variables in Netlify dashboard

## Development Workflow

1. Start backend server (runs on http://localhost:8000)
2. Start frontend server (runs on http://localhost:5173)
3. Make API calls from frontend to backend using Axios

## Important Notes

- Backend CORS is configured to allow requests from frontend development server
- Use environment variables for sensitive information
- Keep frontend and backend in separate repositories for deployment
- Use proper version control with .gitignore files 