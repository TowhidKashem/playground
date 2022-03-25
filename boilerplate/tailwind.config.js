module.exports = {
  content: ['**/*.ts(x)', '**/*.scss'],
  theme: {
    extend: {
      colors: {
        'danger-text': '#721c24',
        'danger-border': '#f5c6cb',
        'danger-background': '#f8d7da'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
