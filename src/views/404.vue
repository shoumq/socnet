<template>
    <div class="lg:container mx-auto mt-10">
        <div class="col-content rounded-lg p-4 drop-shadow-xl">
            <div class="text-7xl text-center mt-20">Ничего не найдено</div>
        </div>
    </div>
</template>

<script>
export default {
    name: '404',
    mounted() {
        document.title = "404";
    },
};  
</script>

<style>
body {
    background:
        linear-gradient(rgba(240, 240, 240, 0.7),
            rgba(250, 250, 250, 0.7)),
        url(../assets/img/bg.jpg) no-repeat fixed;
    background-size: cover;
    height: 100%;
}

.row {
    display: grid;
    grid-template-columns: 18% 80%;
    gap: 2%;
}

.col-nav {
    background-color: rgba(255, 255, 255, 0.6);
    height: 100%;
    min-height: 100vh;
}

.col-content {
    background-color: rgba(255, 255, 255, 0.6);
    height: 100%;
    min-height: 100vh;
}

.lg\:container {
    max-width: 1100px;
}

.avatar {
    object-fit: cover;
}
</style>