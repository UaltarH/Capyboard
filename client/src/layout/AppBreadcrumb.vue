<template>
  <Breadcrumb
    :model="getBreadcrumb()"
  ></Breadcrumb>
</template>
<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const getBreadcrumb = () => {
  const matchedRoutes = route.matched;
  return matchedRoutes.map((route) => {
    return {
      label: route.meta.title,
      url: route.path,
      icon: route.meta.icon,
    };
  });
};
</script>
