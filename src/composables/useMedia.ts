import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

export type TDisplayType = 'mobile' | 'tablet' | 'desktop' | 'mobile' | 'fullHD';

export interface IScreenSize {
  device: TDisplayType;
}

export const useMedia = () => {
  const screenWidth = ref<number>(1920);

  onMounted(() => {
    screenWidth.value = window.innerWidth;
  });

  const changeWindowSize = () => {
    screenWidth.value = window.innerWidth;
  };

  window.addEventListener('resize', changeWindowSize);

  const device = computed<TDisplayType>(() => {
    if (screenWidth.value >= 1920) return 'fullHD';
    if (screenWidth.value < 1920 && screenWidth.value >= 1200) return 'desktop';
    if (screenWidth.value < 1200 && screenWidth.value >= 768) return 'tablet';
    return 'mobile';
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', changeWindowSize);
  });

  return { device };
};
