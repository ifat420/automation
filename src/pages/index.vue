<template>
    <div class="">
        <app-header/>
        <div class="sidebar-container">
            <app-sidebar/>
        </div>
        <div class="main-content">
            <router-view/>
            <a href="#" @click.prevent="logout">
                <div class="user-settings d-flex justify-content-center align-items-center"> 
                    <i class="fas fa-cog fa-2x slow-spin"></i>
                </div>
            </a>
        </div>
    </div>
</template>


<script>

import sidebar from '../components/home/sidebar'
import header from '../components/home/header'
export default {
    components: {
        'app-sidebar': sidebar,
        'app-header': header
    },
    methods: { 
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'login'
            })
        }
    }
}
</script>
