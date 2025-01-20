<script setup lang="ts">
import { ElContainer } from 'element-plus';
</script>

<template>
  <ElContainer style="height: 100vh;width: 100vh;">
    <Header />
    <ElContainer style="display: flex; gap: 10px;">
      <Sidebar />
      <MainContent />
    </ElContainer>
  </ElContainer>
</template>

<style scoped></style>
