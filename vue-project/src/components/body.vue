<template>
    <div class="users">
        <div class="user" v-for="user in users" :key="user.id" v-on:click="user.jobShow = !user.jobShow">
            <div class="user-data">
                <h2>{{ user.name }} {{ user.surname }}</h2>
                <h4 v-show="user.jobShow">{{ user.job }}</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        var users = [
            { id: 1, name: "Afer", surname: "Rehimov", job: "BackEnd Developer", jobShow: false },
            { id: 2, name: "İzzet", surname: "Rehimov", job: "BackEnd Developer", jobShow: false },
            { id: 3, name: "Aqil", surname: "Kerbiyev", job: "BackEnd Developer", jobShow: false },
            { id: 4, name: "İbrahim", surname: "Rehimov", job: "Mobile Developer", jobShow: false },
            { id: 5, name: "Selver", surname: "Rehimov", job: "FrontEnd Developer", jobShow: false },
            { id: 6, name: "Ramiz", surname: "Selimov", job: "DevOps", jobShow: false }
        ]

        return {
            users: users
        }
    },
}
</script>

<style>
.users {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.user {
    border: 2px solid #222;
    border-radius: 20px;
    height: 250px;
    width: 30%;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.user-data {
    text-align: center;
}
</style>