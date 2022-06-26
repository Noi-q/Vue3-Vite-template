<template>
  <div class="topNav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0" style="width:100px;">
        <span>LOGO</span>
        <!-- <img style="width:50px;" src="https://avatars.githubusercontent.com/u/76736117?v=4" alt=""> -->
      </el-menu-item>
      <div class="flex-grow" />
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2" background-color="#545c64">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const activeIndex = ref('2')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style>
.topNav{
  /* width:100%;
  height:150px; */
  /* background-color:red; */
}

.flex-grow {
  flex-grow: 1;
  /* background-color: red; */
}

</style>