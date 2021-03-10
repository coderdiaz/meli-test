module.exports = {
  purge: ['./src/**/*.{tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#00000',
      yellow: '#FFE600',
      blue: '#3483FA',
      gray: {
        200: '#EEEEEE',
        300: '#999999',
        400: '#666666',
        500: '#333333',
      },
    },
    extend: {
      width: {
        45: '11.25rem',
      }
    }
  },
};
