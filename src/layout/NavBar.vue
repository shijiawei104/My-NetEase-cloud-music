<template>
  <div>
<!--<div class="navbar">
<img src="../assets/image/网易云音乐-01 (1).png"  height="30" width="150"/>-->
  <!--<footer class="menu">
    <router-link to="/" class="menu_div">

      <i class="menu_divi2 menu_divi icon iconfont icon-shouye"></i>
      <p class="menu_divp2 menu_divp">发现音乐</p>
    </router-link>

    <router-link to="/discover"  class="menu_div">
      <i class="menu_divi icon iconfont icon-leimupinleifenleileibie2"></i>
      <p class="menu_divp">分类</p>

    </router-link>
    <router-link to="/Discovery" class="menu_div">
      <div>
        <i class="menu_divi icon iconfont icon-zhinanzhen1"></i>
        <p class="menu_divp">发现</p>
      </div>
    </router-link>
    <router-link to="/ShopCartindex" class="menu_div">
      &lt;!&ndash;<div>&ndash;&gt;
      <i class="menu_divi icon iconfont icon-gouwuche"></i>
      <p class="menu_divp">购物车</p>
      &lt;!&ndash;</div>&ndash;&gt;
    </router-link>

    <router-link to="/Login" class="menu_div">
      &lt;!&ndash;<div>&ndash;&gt;
      <i class="menu_divi icon iconfont icon-wo"></i>
      <p class="menu_divp">我的博库</p>
      &lt;!&ndash;</div>&ndash;&gt;
    </router-link>

  </footer>-->
  <!--<div
    v-for="(item, index) in navbarList"
    :key="item.path"
    @touchstart="changeTab(index, item.path)"
    :class="checkedIndex === index ? 'checked' : ''"
    class="center-tabs"
  >
    {{ item.name }}
  </div>

    <div class="navbar-right" @touchstart="$router.push({ path: '/search' })">

    </div>-->
 <!-- <nav>
    　　<ul>
    　　　　<li v-for="(item, i) in navData" :class="{ nav_li : active === i }" :key="i" @click="$router.push({ path: item.path }), active = i">
    　　　　　　{{item.name}}
    　　　　</li>
  </ul>
  </nav>-->
<!--<el-button type="success" @click="tiaozhuan">跳转</el-button>

</div>-->
    <!--el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="padding-left: 400px"
    >-->
<!--    <img src="../assets/image/网易云音乐-01 (1).png" style="margin-left: -700px" height="30" width="150"/>-->
    <el-menu style="padding-left: 500px"
      :default-active="this.$route.path"
      class="el-menu-demo"
      router
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#ccc"
      active-text-color="#fff"
      >
      <img src="../assets/image/网易云音乐-01 (1).png"  height="30" width="150"/>
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" >
        <template slot="title">
          <!-- <i class="el-icon-s-platform"></i> -->
          <span> {{ item.navItem }}</span>
        </template>
      </el-menu-item>
     <!-- <el-menu-item index="1">发现音乐</el-menu-item>-->

      <!--<el-menu-item index="2">商城</el-menu-item>
      <el-menu-item index="3">音乐人</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">下载客户端</a></el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
export default {
name: "NavBar",
  data() {
    return {
      navList:[
        {name:'/',navItem:'发现音乐'},
        {name:'/components/page1',navItem:'我的音乐'},
        {name:'/components/page2',navItem:'朋友'},

        //路径就是文件所在路径，要把.vue后缀去掉
      ],
      activeIndex2: '1',
      active: 0,
      navData: [
        { name: '1', path: '/' },
        { name: '2', path: '/配置的路由' },
        { name: '3', path: '/配置的路由' },
        { name: '4', path: '/配置的路由' },
        { name: '5', path: '/配置的路由' }
      ],
      navbarList: [
        {
          name: "我的",
          path: "/myself"
        },
        {
          name: "发现",
          path: "/"
        },
        {
          name: "云村"
          // path: "/myself"
        },
        {
          name: "视频"
          // path: "/myself"
        }
      ],
      checkedIndex: 1
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  tiaozhuan(){
    this.$router.push({ path: "/myself",name:"我的" })
  },
    changeTab(index, path) {
      this.checkedIndex = index;
      this.$router.push({ path });
    },
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {}
  },
/*  mounted(){
    let now = this.$route.path;
    console.log(now)
    var nowArr=["/","/discover","/Discovery","/ShopCartindex","/Login"];
    nowArr.forEach(function(item,index){
      console.log(item,index)
      if(now == item){
        $(".menu i").eq(index).addClass("red");
        $(".menu p").eq(index).addClass("red");
        console.log("=")
      }
    })
  }*/
}

</script>

<style scoped>
.navbar{
  width: 100%;
  height: 70px;
  background-color: black;
  position: absolute;
  z-index: -1;
}
img{
  margin: 20px 0px 10px 200px ;
}
.menu{
  display: flex;
  flex-direction: row;
}


</style>
