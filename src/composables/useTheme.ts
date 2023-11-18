import { computed, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export const useTheme = () => {
  const route = useRoute();

  const { query } = toRefs(route);

  const isDarkTheme = computed(() => {
    return !!query.value.theme;
  });

  return { isDarkTheme };
};
