<template>
  <div class="app">
    <div id="banner">
      <div id="banner-content">
        <vs-button relief size="large" square @click="openBlog()">Show Post</vs-button>
      </div>
    </div>
    <div class="page-headers"><div class="title">Featured posts</div></div>
    <div class="posts">
      <a v-for="lang in featured" :key="lang.name" :href="'post/' + lang.id">
        <vs-tooltip>
          <vs-card type="3">
            <template #title>
              <span class="card-title">{{ lang.name }}</span>
            </template>
            <template #text>
              <p>{{lang.desc}}</p>
            </template>
          </vs-card>
          <template #tooltip>
            Click on the card to view the post!
          </template>
        </vs-tooltip>
      </a>
    </div>
    <div class="footer">
      <nuxt-link prefetch exact to="/all">Show all submissions &raquo;</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featured: [
        {
          id: '51414',
          post: 'https://repl.it/talk/challenge/CookeyLang/51414',
          name: 'CookeyLang',
          desc: 'CookeyLang is a fast interpreted general-purpose dynamic class-based strong language for beginners, but advanced users can use it as well!'
        },
        {
          id: '51884',
          post: 'https://repl.it/talk/challenge/ALIENS-PL-ALS-Aliens-can-also-code/51884',
          name: 'ALIENS PL',
          desc: 'A "space" themed programming lamguage for all which inherits syntax from famous programming languages such as Dart, Python, C#, JavaScript!'
        },
        {
          id: '51574',
          post: 'https://repl.it/talk/challenge/MARVIN/51574',
          name: 'MARVIN',
          desc: 'M.A.R.V.I.N was made with the goal of being able to simulate certain experiments and play around with science on your computer.'
        }
      ]
    };
  },
  methods: {
    openBlog() {
      window.open('https://blog.repl.it/langjam', '_blank');
    }
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 2rem;
}
p {
  font-size: 1.20rem !important;
}
.footer {
  margin: 4rem 2rem;
  font-size: 1.25rem;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2.5rem;
}

@media screen and (max-width: 720px){
  .posts {
    flex-direction: column;
  }
}
</style>
