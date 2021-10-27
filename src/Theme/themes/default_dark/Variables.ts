import { ThemeColors, ThemeNavigationColors } from '@/Theme/theme.type'

const Colors: ThemeColors = {
  primary: '#dc8035',
  text: 'white',
  url: '#E14032',
  inputBackground: 'gray',
}

const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
}

export default {
  Colors,
  NavigationColors,
}
