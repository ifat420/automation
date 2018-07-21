<template>
    <div class="container no-gutters p-0">
        <div class="row no-gutters">
            <div class="col-3">
                <app-sidebar/>
            </div>
            <div class="col-9">
                <router-view/>
            </div>
        </div>
    </div>
</template>


<script>

import sidebar from '../components/home/sidebar'
export default {
    components: {
        'app-sidebar': sidebar
    }
}
</script>
