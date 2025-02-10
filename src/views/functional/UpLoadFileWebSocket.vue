<template>
    <el-upload ref="uploadRef" :show-file-list="true" :auto-upload="true" multiple :before-upload="handleBeforeUpload">
        <el-button type="primary" icon="el-icon-upload">选择文件</el-button>
    </el-upload>

    <el-button type="success" @click="uploadFiles" :disabled="fileList.length === 0">开始上传</el-button>

    <el-table :data="fileList" border style="margin-top: 20px;">
        <el-table-column prop="name" label="文件名" />
        <el-table-column label="进度">
            <template #default="{ row }">
                <el-progress :percentage="row.progress" :status="row.status" />
            </template>
        </el-table-column>
        <el-table-column label="状态">
            <template #default="{ row }">
                <span v-if="row.status === 'success'" style="color: green;">上传成功</span>
                <span v-else-if="row.status === 'exception'" style="color: red;">上传失败</span>
                <span v-else-if="row.status === 'warning'" style="color: blue;">待上传</span>
                <span v-else style="color: blue;">上传中...</span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

const uploadRef = ref(null);
const wsSessionId = ref();
const fileList = ref([]);
const ws = ref(null);

const uploadUrl = "/api/file/fileUploadWebSocket";

// WebSocket 连接
const connectWebSocket = () => {
    ws.value = new WebSocket("ws://localhost:8080/upload-progress");

    ws.value.onmessage = (event) => {
        try {
            console.log("WebSocket 进度更新:", event.data);
            const data = JSON.parse(event.data);
            // 如果是 WebSocket 连接的 sessionId，则存储
            if (data.sessionId && !data.progress) {
                wsSessionId.value = data.sessionId;
                console.log("WebSocket sessionId:", wsSessionId.value);
            }

            fileList.value.forEach((file) => {
                if (file.fileId === data.fileId) { // 只更新对应文件的进度
                    file.progress = data.progress;
                }
            });
        } catch (error) {
            console.error("WebSocket 数据解析错误:", error);
        }
    };

    ws.value.onclose = () => {
        console.log("WebSocket 连接关闭");
    };

    ws.value.onerror = (error) => {
        console.error("WebSocket 发生错误", error);
    };
};

onMounted(() => {
    connectWebSocket();
});

onBeforeUnmount(() => {
    if (ws.value) ws.value.close();
});

// 选择文件
const handleBeforeUpload = (file) => {
    const fileId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`; // 生成唯一 fileId
    fileList.value.push({
        file,
        fileId,
        name: file.name,
        progress: 0,
        status: "warning",
    });
    return false;
};

// 上传文件
const uploadFiles = () => {
    fileList.value.forEach((fileItem) => {
        if (fileItem.status === "success" || fileItem.status === "exception") return;
        fileItem.status = "";

        const formData = new FormData();
        formData.append("file", fileItem.file);
        formData.append("fileId", fileItem.fileId); // 发送 fileId
        formData.append("sessionId", wsSessionId.value); // 传给后端

        axios.post(uploadUrl, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(() => {
                fileItem.status = "success";
                ElMessage.success(`${fileItem.name} 上传成功`);
            })
            .catch(() => {
                fileItem.status = "exception";
                ElMessage.error(`${fileItem.name} 上传失败`);
            });
    });
};
</script>
