<template>
    <div class="">
        <app-header/>
        <div class="sidebar-container">
            <app-sidebar/>
        </div>
        <div class="main-content">
            <router-view/>
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
    }
}
</script>
