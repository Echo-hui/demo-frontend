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
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

const uploadRef = ref(null);
const fileList = ref([]); // 存储所有文件信息

const uploadUrl = "/api/file/fileUpload"; // 后端上传接口


// 选择文件时触发
const handleBeforeUpload = (file) => {
    console.log("选择文件");
    fileList.value.push({
        file, // 原始文件
        name: file.name,
        progress: 0,
        status: "warning", // "success" 成功, "exception" 失败, "" 进行中
    });
    return false; // 阻止 el-upload 组件自动上传
};

// 上传所有文件
const uploadFiles = () => {
    fileList.value.forEach((fileItem) => {
        if (fileItem.status == "success" || fileItem.status == "exception") return; // 避免重复上传
        fileItem.status = "";

        const formData = new FormData();
        formData.append("file", fileItem.file);

        axios
            .post(uploadUrl, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                onUploadProgress: (event) => {
                    if (event.total > 0) {
                        fileItem.progress = Math.round((event.loaded * 100) / event.total);
                    }
                },
            })
            .then((response) => {
                fileItem.status = "success";
                ElMessage.success(`${fileItem.name} 上传成功`);
            })
            .catch((error) => {
                fileItem.status = "exception";
                ElMessage.error(`${fileItem.name} 上传失败`);
            });
    });
};
</script>
