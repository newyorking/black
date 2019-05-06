<template>
    <div>
         <mt-swipe :auto="4000">
            <mt-swipe-item v-for='list in lunboList' :key='list.img'>
                <img :src="list.img" alt="">
            </mt-swipe-item>
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:['lunboList']
}
</script>

<style lang="scss" scope>
    
</style>