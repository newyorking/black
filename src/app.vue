<template>
    <div class='app'>
       
        <mt-header fixed title="黑马"></mt-header>
        <transition>
           
                <router-view></router-view>
           
        </transition>
        

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>
    .mint-header-title{
        z-index: 99;
    }
    .app{
        padding-top:40px;
        padding-bottom:50px;
        // height: 2000px;
        overflow-x: hidden;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%)
    }
     .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute
    }
    .v-enter-active,.v-leave-active{
        transition: transform 1s ease
    }
// ....
    .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    }
     .mui-bar-tab .mui-tab-item1 .mui-icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
    }

</style>