<template>
  <div>
    <vs-navbar text-white dark fixed center-collapsed square :color="active" v-model="active">
      <vs-navbar-item :active="active == 'home'" id="home" to="/">
        Home
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'all'" id="all" to="/all">
        All Submissions
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'random'" id="random" @click="random()">
        Random submission
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'winners'" id="winners" to="/winners">
        Winners
      </vs-navbar-item>
    </vs-navbar>
    <Nuxt />
  </div>
</template>

<script>
import posts from '../posts';
let myPosts = posts.flat();
export default {
  data() {
    return {
      active: 'home',
      myPosts
    }
  },
  methods: {
    random() {
      window.open('/post/' + myPosts[Math.floor(Math.random() * myPosts.length)].id, '_self');
    }
  },
  mounted() {
    this.active = window.location.pathname.substr(1);
    if (this.active === '') this.active = 'home';
    if (this.active.startsWith('post')) this.active = 'all';
  }
}
</script>

<style>
button {
  font-size: 1rem !important;
}
#banner {
  padding: 0;
  width: 100%;
  height: 40vh;
  margin: 0;
  background-image: url('https://blog.repl.it/images/jam.png');
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}

#banner-content {
  background-color: #0006;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
}

.title {
  font-size: 2rem;
  margin: 2rem 3rem
}

button > a {
  all: unset;
  color: #fff;
}

.app {
  margin: 1.75rem 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app a {
  text-decoration: none;
  margin: 1rem 1rem;
  color: #3077D9;
  transition: all linear 200ms;
}
.app a:hover {
  color: #4727B9;
}
</style>
