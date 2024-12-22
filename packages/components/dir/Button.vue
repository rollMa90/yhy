<template>
    <el-button v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-button>
</template>

<script setup>
import { ElButton } from "element-plus"
</script>

<style scoped>
.yhy-button {
    display: inline-block;
    padding: 10px;
    background-color: aquamarine;
}
</style>