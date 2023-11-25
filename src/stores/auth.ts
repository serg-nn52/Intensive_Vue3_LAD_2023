import { ref } from 'vue';
import { defineStore } from 'pinia';
import { $api } from '@/api';
import type { ILogin } from '@/api/authApi/authApi.type';
import { useRouter } from 'vue-router';
import { PathNames } from '@/constants/route.constants';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false);
  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);

  const router = useRouter();

  //methods

  const login = async (data: ILogin) => {
    isLoading.value = true;

    try {
      const response = await $api.sendLoginForm(data);
      if (response) isAuth.value = true;
      router.push({ name: PathNames.HOME });
      isError.value = false;
    } catch (error) {
      isError.value = true;
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => {
    try {
      const response = await $api.sendLogoutForm();
      if (response) isAuth.value = false;
      await router.push({ name: PathNames.LOGIN });
      setTimeout(() => {
        alert('Logout!');
      }, 0);
      isError.value = false;
    } catch (error) {
      isError.value = true;
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { isAuth, isError, isLoading, login, logout };
});
