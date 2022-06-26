<template>
  <div class="navi">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu v-for="(item,index) in routeArray" :key="index" :index="index + '-1'">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item-group v-for="(child,index) in item.children" :key="index">
          <el-menu-item @click="getCurrentRoute(child)" :index="index+'-2'">{{child.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
    
  </div>
</template>

<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router'
import { ref,reactive,toRaw } from 'vue'

const router = useRouter()
const route = useRoute()
console.log('route',router.currentRoute)

const filterRouter = (router:any)=>{
  let filterRouteValue = router.options.routes
  return filterRouteValue.slice(3)
}
let routeArray = reactive(filterRouter(router))

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 路由跳转
const getCurrentRoute = (child:any)=> {
  console.log(toRaw(route).meta.value.title)
  router.push({
    path:'/'+child.path
  })
}
</script>

<style>

.navi {
  width: 260px;
  background-color: #0080c9;
  overflow: hidden;
 }
.el-menu-vertical-demo {
  background-color: #2f3c4d;
  height: 95vh;
  overflow-y: auto;
  color: #fff;
}
.router-view-route{
  /* background-color: red; */
}
</style>