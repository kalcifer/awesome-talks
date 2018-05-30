import remcalc from 'remcalc'

export default {
  main: '#000',
  primary: '#fff',
  secondary: '#666',
  tertiary: '#8A000000',
  cinema: '#d62d22',
  green: '#51b257',
  blue: '#337294',
  shadow: `0 ${remcalc(10)} ${remcalc(20)} rgba(0, 0, 0, 0.1),
    0 ${remcalc(6)} ${remcalc(6)} rgba(0, 0, 0, 0.12);`
}

export const darkTheme = {
  main: '#fff',
  primary: '#000',
  secondary: '#80FFFFFF',
  tertiary: '#1FFFFFFF',
  cinema: '#fa8f88',
  green: '#51b257',
  blue: '#B3FFFFFF',
  shadow: `0 ${remcalc(10)} ${remcalc(20)} rgba(0, 0, 0, 0.1),
    0 ${remcalc(6)} ${remcalc(6)} rgba(0, 0, 0, 0.12);`
}
