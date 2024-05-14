<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ JSON.stringify(loginUserStore.loginUser) }}
  </div>
</template>

<script setup lang="ts">
import { useLoginUserStore } from "@/store/userStore";

const loginUserStore = useLoginUserStore();
</script>
