import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs du site WordPress
        primary: {
          DEFAULT: '#dd3333',
          hover: '#c42929',
          light: '#f04545',
        },
        secondary: {
          DEFAULT: '#0eb290',
          hover: '#0a997b',
          light: '#35ccac',
          lighter: '#3be5cc',
          lightest: '#abffee',
        },
        accent: {
          blue: '#387ebb',
          'blue-dark': '#066aab',
          teal: '#81e4cf',
        },
        neutral: {
          900: '#263036',
          800: '#2e3b42',
          600: '#708e9f',
          400: '#9daae0',
          300: '#cccccc',
          200: '#e0e0e0',
          100: '#f6f6f6',
        },
      },
      fontFamily: {
        // Polices du site WordPress
        sans: ['ABeeZee', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'Georgia', 'serif'],
        body: ['ABeeZee', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.05em' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'card': '0.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
