/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5366AE',
          hover: '#455a94',
        },
        ink: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#0a0a0a',
          950: '#060606',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        cloudA: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '30%': { transform: 'translate(18px, -12px) scale(1.02)' },
          '65%': { transform: 'translate(-12px, 16px) scale(.98)' },
          '100%': { transform: 'translate(20px, 6px) scale(1.03)' },
        },
        cloudB: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '40%': { transform: 'translate(-20px, 14px) scale(1.03)' },
          '75%': { transform: 'translate(16px, -10px) scale(.97)' },
          '100%': { transform: 'translate(8px, 18px) scale(1.02)' },
        },
        orbPulse: {
          '0%, 100%': { opacity: '0.75', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1.15)' },
        },
        orbPulse2: {
          '0%, 100%': { opacity: '0.6', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '0.9', transform: 'translate(-50%, -50%) scale(1.2)' },
        },
        heroIn: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        megaIn: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(6px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'cloud-a': 'cloudA 20s ease-in-out infinite alternate',
        'cloud-b': 'cloudB 26s ease-in-out infinite alternate',
        'orb-pulse': 'orbPulse 6s ease-in-out infinite',
        'orb-pulse-2': 'orbPulse2 8s ease-in-out infinite',
        'hero-in': 'heroIn .9s cubic-bezier(.22,1,.36,1) both',
        'mega-in': 'megaIn .18s ease-out',
        'fade-up': 'fadeUp .3s ease',
        marquee: 'marquee 48s linear infinite',
        'bounce-y': 'bounceY 2s ease-in-out infinite',
        'spin-slow': 'spinSlow 24s linear infinite',
      },
      backgroundImage: {
        'hero-sky': [
          'radial-gradient(ellipse 130% 90% at 10% 20%, rgba(56,189,248,.13) 0%, transparent 50%)',
          'radial-gradient(ellipse 90% 70% at 85% 15%, rgba(167,139,250,.18) 0%, transparent 48%)',
          'radial-gradient(ellipse 110% 80% at 50% 90%, rgba(37,99,235,.14) 0%, transparent 55%)',
          'radial-gradient(ellipse 70% 50% at 70% 55%, rgba(99,102,241,.12) 0%, transparent 45%)',
          'linear-gradient(155deg,#04060f 0%,#080e22 22%,#060d1f 45%,#090619 70%,#050510 100%)',
        ].join(','),
        'cloud-a': [
          'radial-gradient(ellipse 340px 160px at 18% 38%, rgba(255,255,255,.055) 0%, transparent 65%)',
          'radial-gradient(ellipse 260px 120px at 72% 18%, rgba(255,255,255,.048) 0%, transparent 60%)',
          'radial-gradient(ellipse 300px 110px at 52% 68%, rgba(255,255,255,.04) 0%, transparent 60%)',
          'radial-gradient(ellipse 220px 90px at 88% 55%, rgba(255,255,255,.035) 0%, transparent 55%)',
          'radial-gradient(ellipse 180px 80px at 30% 75%, rgba(255,255,255,.03) 0%, transparent 55%)',
          'radial-gradient(ellipse 400px 140px at 60% 42%, rgba(147,197,253,.06) 0%, transparent 65%)',
        ].join(','),
        'cloud-b': [
          'radial-gradient(ellipse 500px 200px at 25% 30%, rgba(99,179,237,.09) 0%, transparent 60%)',
          'radial-gradient(ellipse 400px 180px at 78% 22%, rgba(167,139,250,.1) 0%, transparent 60%)',
          'radial-gradient(ellipse 460px 170px at 48% 75%, rgba(59,130,246,.07) 0%, transparent 60%)',
          'radial-gradient(ellipse 350px 130px at 12% 60%, rgba(139,92,246,.08) 0%, transparent 55%)',
        ].join(','),
        'hero-overlay':
          'linear-gradient(to bottom, rgba(4,6,15,.55) 0%, rgba(4,6,15,.28) 35%, rgba(4,6,15,.32) 60%, rgba(4,6,15,.82) 100%), linear-gradient(to right, rgba(4,6,15,.35) 0%, transparent 40%, transparent 60%, rgba(4,6,15,.35) 100%)',
        'orb-purple':
          'radial-gradient(circle, rgba(83,102,174,.28) 0%, rgba(83,102,174,.14) 30%, rgba(59,130,246,.06) 60%, transparent 75%)',
        'orb-blue':
          'radial-gradient(circle, rgba(56,189,248,.18) 0%, rgba(37,99,235,.08) 50%, transparent 75%)',
        'promo-card':
          'linear-gradient(135deg,#0d0420 0%,#160830 100%)',
        'banner-card':
          'linear-gradient(135deg,#07021a 0%,#110726 60%,#06020e 100%)',
        'marquee-mask':
          'linear-gradient(to right,transparent,black 7%,black 93%,transparent)',
      },
      boxShadow: {
        nav: '0 2px 16px rgba(0,0,0,.1)',
        mega: '0 24px 48px rgba(0,0,0,.13)',
        hero: '0 4px 24px rgba(0,0,0,.3)',
        'hero-hover': '0 8px 32px rgba(0,0,0,.4)',
        pill: '0 2px 8px rgba(83,102,174,.4)',
      },
    },
  },
  plugins: [],
}
