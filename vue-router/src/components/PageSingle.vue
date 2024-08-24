<template>
    <h1>Parametr : {{ id }}</h1>
</template>

<script>
export default{
    data() {
        return {
            id:this.$route.params.id
        }
    }
}
</script>