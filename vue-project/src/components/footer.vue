<template>
    <footer>
        <div class="footer">
            <p>{{ footer }}</p>
        </div>
    </footer>
</template>
<script>
    export default{
        data() {
            return {
                footer:"Bütün hüquqlar qorunur (c). 2024"
            }
        },
    }
</script>

<style>
    .footer{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: lightgreen;
        color: #222;
    }
</style>