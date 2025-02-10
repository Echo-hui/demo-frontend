<script lang="ts" setup>
import { ElMain, ElContainer, ElHeader, ElScrollbar, ElAside } from 'element-plus';
</script>
<template>
  <ElContainer class="layout-container-demo" style="height: 100%">
    <ElHeader height="60px">
      <HeaderSlot></HeaderSlot>
    </ElHeader>
    <ElMain :style="{ height: 'calc(100vh - 70px)' }">
      <ElContainer style="height: 100%; display: flex; flex-direction: row;" direction="horizontal">
        <!-- 左侧区域：带滚动条 -->
        <ElAside width="200px" style="height: 100%">
          你好
          <SideSlot />
        </ElAside>
        <!-- 右侧区域：带滚动条 -->
        <ElMain style="height: 100%; flex: 1;">
          <ElScrollbar style="height: 100%">
            <RouterView></RouterView>
          </ElScrollbar>
        </ElMain>
      </ElContainer>
    </ElMain>
  </ElContainer>
</template>

<style scoped></style>
