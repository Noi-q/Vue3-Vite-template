<template>
  <div class="layout">
    <el-container>
      <el-header>
        <topNav></topNav>
      </el-header>
    </el-container>
    <el-container>
      <el-aside>
        <Navigation></Navigation>
      </el-aside>
      <el-main>
        <Breadcrumb></Breadcrumb>
        <div class="router-view-route">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.layout{
  height:100%;
}
.breadcrumb{
  /* background-color: skyblue; */
  height:50px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  /* font-size: 40px; */
}
</style>
<script setup lang="ts">
import Navigation from './Navigation/index.vue'
import topNav from './topNav/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import {useRoute,useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>