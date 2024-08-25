<template>
  <footer>
    <Divider />
    <SettingsMenu></SettingsMenu>
    <div class="flex justify-around items-stretch gap-2 mt-2 h-16">
      <Button v-if="isConnected" v-ripple text class="profile-button">
        <Avatar image="/img/avatars/nashor.jpg" shape="circle" />
        <span class="inline-flex flex-col items-start profile-name">
          <span class="font-bold">UaltarH</span>
          <span class="text-sm">Admin</span>
        </span>
      </Button>
      <Button
        v-else
        v-ripple
        text
        class="profile-button"
        @click="isConnected = true"
      >
        <Avatar icon="pi pi-user" class="mr-2" shape="circle" />
        <span class="inline-flex flex-col items-start profile-name">
          <strong>Se connecter</strong>
          <small>Guest</small>
        </span>
      </Button>
      <Button v-if="isConnected" v-ripple type="button" class="bg-transparent p-2 rounded hover:bg-red-100 hover:text-white disconnect-button" @click="isConnected = false">
        <i class="pi pi-sign-out" style="font-size: 1rem"></i>
      </Button>
    </div>
  </footer>
</template>
<script setup lang="ts">
import Divider from 'primevue/divider';
import SettingsMenu from '@/layout/SettingsMenu.vue';
import Button from 'primevue/button';

import { ref } from 'vue';


const isConnected = ref(true);

</script>
