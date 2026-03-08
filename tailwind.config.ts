import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#0834c4',
					'primary-dark': '#00008b',
					accent: '#22c55e'
				},
				surface: {
					light: '#ffffff',
					dark: '#0d1117'
				}
			},
			fontFamily: {
				heading: ["'Poppins'", 'sans-serif'],
				body: ["'Open Sans'", 'sans-serif']
			},
			animation: {
				'fade-in': 'fadeIn 300ms ease-in forwards',
				'slide-up': 'slideUp 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			}
		}
	},

	plugins: [typography]
} satisfies Config;
