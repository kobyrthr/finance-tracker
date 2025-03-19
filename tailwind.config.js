/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: 'hsl(var(--card))',
        'color-01': 'hsl(var(--01))',
        'color-02': 'hsl(var(--02))',
        'color-03': 'hsl(var(--03))',
        'color-04': 'hsl(var(--04))',
        'color-05': 'hsl(var(--05))',
        'color-06': {
          DEFAULT: 'hsl(var(--06))',
          base: 'hsl(var(--06-base))',
          hover: 'hsl(var(--06-hover))',
        },
        'color-07': {
          DEFAULT: 'hsl(var(--07))',
          base: 'hsl(var(--07-base))',
        },
        'color-08': 'hsl(var(--08))',
        'color-09': 'hsl(var(--09))',
        'color-10': 'hsl(var(--10))',
        'color-11': 'hsl(var(--11))',
        'color-12': 'hsl(var(--12))',
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
