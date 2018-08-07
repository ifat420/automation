<template>
    <div class="container-fluid">
        <div class="row err">
            <div class="col d-flex flex-column align-items-center justify-content-center ">
                <h1>
                    <i class="fas fa-exclamation-triangle"></i>
                    Sorry! You don't have access to this page!
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //trying to access this page ..save to db
}
</script>

<style scoped>
.err {
    height: 90vh;
}
.err h1 {
    font-weight: 500;
    text-transform: capitalize;
    color: #E33A59;
}
</style>
