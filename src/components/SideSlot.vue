<script setup lang="ts">
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';

</script>
<template>
    <ElScrollbar style="height: 100%">
        <ElMenu default-active="JavaScript" :router="true">
            <ElSubMenu index="JavaScript">
                <template #title>
                    <span>JavaScript</span>
                </template>
                <ElMenuItem index="JavaScript-1">item three</ElMenuItem>
                <ElMenuItem index="JavaScript-2">item three</ElMenuItem>
                <ElMenuItem index="JavaScript-3">item three</ElMenuItem>
                <ElMenuItem index="JavaScript-4">item three</ElMenuItem>
            </ElSubMenu>
            <ElSubMenu index="TypeScript">
                <template #title>
                    <span>TypeScript</span>
                </template>
                <ElMenuItem index="2-1">item three</ElMenuItem>
                <ElMenuItem index="2-2">item three</ElMenuItem>
                <ElMenuItem index="2-3">item three</ElMenuItem>
                <ElMenuItem index="2-4">item three</ElMenuItem>
            </ElSubMenu>
            <ElSubMenu index="Vue">
                <template #title>
                    <span>Vue</span>
                </template>
                <ElMenuItem index="3-1">item three</ElMenuItem>
                <ElMenuItem index="3-2">item three</ElMenuItem>
                <ElMenuItem index="3-3">item three</ElMenuItem>
                <ElMenuItem index="3-4">item three</ElMenuItem>
            </ElSubMenu>
            <ElSubMenu index="Pinia">
                <template #title>
                    <span>Pinia</span>
                </template>
                <ElMenuItem index="4-1">item three</ElMenuItem>
                <ElMenuItem index="4-2">item three</ElMenuItem>
                <ElMenuItem index="4-3">item three</ElMenuItem>
                <ElMenuItem index="4-4">item three</ElMenuItem>
            </ElSubMenu>
            <ElSubMenu index="VueRouter">
                <template #title>
                    <span>VueRouter</span>
                </template>
                <ElMenuItem index="5-1">item three</ElMenuItem>
                <ElMenuItem index="5-2">item three</ElMenuItem>
                <ElMenuItem index="5-3">item three</ElMenuItem>
                <ElMenuItem index="5-4">item three</ElMenuItem>
            </ElSubMenu>
            <ElSubMenu index="Functional">
                <template #title>
                    <span>Functional</span>
                </template>
                <ElMenuItem index="upLoadFile">上传文件</ElMenuItem>
                <ElMenuItem index="UpLoadFileWebSocket">上传文件WebSocket</ElMenuItem>
                <ElMenuItem index="6-2">item three</ElMenuItem>
                <ElMenuItem index="6-3">item three</ElMenuItem>
                <ElMenuItem index="6-4">item three</ElMenuItem>
            </ElSubMenu>
            <ElSubMenu index="Vite">
                <template #title>
                    <span>Vite</span>
                </template>
                <ElMenuItem index="7-1">item three</ElMenuItem>
                <ElMenuItem index="7-2">item three</ElMenuItem>
                <ElMenuItem index="7-3">item three</ElMenuItem>
                <ElMenuItem index="7-4">item three</ElMenuItem>
            </ElSubMenu>
            <ElSubMenu index="NodeJs">
                <template #title>
                    <span>NodeJs</span>
                </template>
                <ElMenuItem index="8-1">item three</ElMenuItem>
                <ElMenuItem index="8-2">item three</ElMenuItem>
                <ElMenuItem index="8-3">item three</ElMenuItem>
                <ElMenuItem index="8-4">item three</ElMenuItem>
            </ElSubMenu>
        </ElMenu>
    </ElScrollbar>
</template>
<style scoped lang="scss">
.sidebar {
    width: 30%;
}
</style>
