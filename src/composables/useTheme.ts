import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';

export const useTheme = () => {
  const themeStore = useThemeStore();

  const { isDarkTheme } = storeToRefs(themeStore);

  return { isDarkTheme };
};
