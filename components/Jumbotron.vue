<template>
    <div class="jumbotron">
        <div class="jumbo-content">
            <div class="jumbo-title">{{ title }}</div>
            <div class="jumbo-sub" v-html="subtitle"></div>
        </div>
        <div class="jumbo-buttons">
            <vs-button size="large" gradient square @click="openPost()">Show on repl talk</vs-button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'link'],
    methods: {
        openPost() {
            window.open(this.link, '_blank');
        }
    }
}
</script>

<style scoped>
.jumbotron {
    background-color: #ffffff;
    margin: 2rem;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0 0 16px 4px #0003;
}

.jumbo-content {
    padding: 3rem 4rem;
}

.jumbo-buttons {
    display: flex;
    justify-content: flex-end;
}

.jumbo-title {
    font-family: 'Comfortaa', cursive;
    font-size: 2.5rem;
    font-weight: bold;
}

.jumbo-sub {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    font-style: oblique;
    color: #444;
}
</style>