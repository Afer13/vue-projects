<template>
    <h1>Page One {{ gData }}</h1>
    <div>
        <input type="text">
    </div>
</template>

<script>
    export default{
        data() {
            return {
                gData:this.$globalData
            }
        },
    }
</script>