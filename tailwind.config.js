/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        titilliumweb: ['TitilliumWeb-Regular','sans-serif']
      },
      backgroundImage: {
        'third-sec': "url('../img/img_03.png')",
        'contact-icn': "url('../img/img_icn.png')",
      },
      zIndex: {
        'min-1' : '-1'
      },
    },
  },
  plugins: [],
}

