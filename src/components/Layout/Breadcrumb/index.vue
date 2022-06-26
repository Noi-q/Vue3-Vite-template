<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item,index) in headerBreadcrumb" :key="index"  :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import {reactive} from 'vue'
const router = useRouter()
const headerBreadcrumb = reactive(router.currentRoute.value.matched)

</script>