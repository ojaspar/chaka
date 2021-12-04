module.exports = {
     purge: {
      enabled: true,
      content: ['./src/**/*.{html,ts}']
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        healthCare: "url('https://cloudinary.hbs.edu/hbsit/image/upload/s--sFv3MZbN--/f_auto,c_fill,h_375,w_750,/v20200101/D730ED9CC0AF1A0C18B3499EF75E86D7.jpg')",
        industry: "url('https://www.engie.com/sites/default/files/assets/images/2021-02/Header_industrie.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

