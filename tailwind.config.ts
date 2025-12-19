import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
	extend: {
		fontFamily: {
  			sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
  			display: ['var(--font-manrope)', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-mono)', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'monospace'],
  		},
		// Consolidated, predictable color system for the startup theme
		colors: {
			// Base semantic tokens — prefer using CSS vars in `globals.css` for theme swapping
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			surface: 'hsl(var(--card))',
			'surface-foreground': 'hsl(var(--card-foreground))',
			border: 'hsl(var(--border))',

			// Primary (blue -> indigo) used for CTAs and highlights
			primary: {
				DEFAULT: '#3B82F6',
				600: '#2563EB',
				500: '#3B82F6',
				400: '#60A5FA'
			},

			// Accent gradient endpoints for utility classes
			accent: {
				blue: '#3B82F6',
				indigo: '#6366F1'
			},

			// Neutral text palette
			neutral: {
				100: '#F3F4F6',
				300: '#D1D5DB',
				500: '#6B7280',
				700: '#374151'
			},

			// Chart and misc tokens still driven by CSS vars
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
  		spacing: {
  			// 8px baseline grid system
  			'0': '0',
  			'1': '8px',
  			'2': '16px',
  			'3': '24px',
  			'4': '32px',
  			'5': '40px',
  			'6': '48px',
  			'7': '56px',
  			'8': '64px',
  			'9': '72px',
  			'10': '80px',
  			'12': '96px',
  			'16': '128px',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
