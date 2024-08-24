<template>
    <div class="header">
        <div class="logo-box">
            <!-- <img class="logo" src="" alt=""> -->
            <h2 class="site-name" v-on:click="changeSiteName">{{ siteName }}</h2>
        </div>
        <div class="menu-box">
            <ul class="menu-bar">
                <li v-for="(menu, index) in menus" :key="index">{{ menu }}</li>
            </ul>
        </div>

    </div>

</template>

<script>
export default {
    props:{
        siteName:{
            type:String,
            requared:true
        }
    },
    data() {
        return {
            menus: ["Home", "About Us", "Services", "News", "Contact Us"]
        }
    },
    methods:{
        changeSiteName:function(){
            this.$emit("changeSiteName","MasterSayt");
        }
    }
}
</script>
<style>
*{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.site-name{
    color:lightgreen;
    margin-left: 20px;
}
.header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222;
    height: 60px;
}

.header .logo-box{
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
}

.header .logo-box .logo{
    width: 200px;
    height: 40px;
    object-fit: cover;
}

.header .menu-box{
    width: 50%;
    padding: 0 20px;
}

.menu-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.menu-bar li {
    color: lightgreen;
    list-style: none;
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
}

.menu-bar li:hover{
    border-bottom: 1px solid lightgreen;
    
}

</style>