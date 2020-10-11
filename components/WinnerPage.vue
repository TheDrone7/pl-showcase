<template>
    <div class="winner-page">
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'winner-page',
}
</script>

<style scoped>
.winner-page {
    position: relative;
    height: 100vh;
    margin: 0 0;
    padding: 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    color: #ccc;
}

.content {
    margin: 4rem 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.winner-page a {
    text-decoration: none;
    color: #6499E3;
    transition: all linear 200ms;
}
.winner-page a:hover {
    color: #bad2f2;
}
</style>