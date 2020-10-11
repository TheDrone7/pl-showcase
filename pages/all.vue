<template>
  <div class="app">
    <div id="banner">
      <div id="banner-content">
        <vs-button relief size="large" square @click="openBlog()">Show Post</vs-button>
      </div>
    </div>
    <div class="page-headers">
      <div class="title">All posts</div>
      <vs-input dark border v-model="filter" placeholder="Search posts" @input="updatePosts()">
        <template #icon><i class='material-icons'>search</i></template>
      </vs-input>
    </div>
    <div class="posts">
      <div class="post-group" v-for="(pg, index) in filteredPosts" :key="index">
        <a v-for="lang in pg" :key="lang.name" :href="'/post/' + lang.id">
          <vs-tooltip>
            <vs-card type="3">
              <template #title>
                <span class="card-title">{{ lang.name }}</span>
              </template>
              <template #text>
                <p class="card-desc">{{lang.desc}}</p>
              </template>
            </vs-card>
            <template #tooltip>
              Click on the card to view the post!
            </template>
          </vs-tooltip>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import posts from '../posts';
import Fuse from 'fuse.js';
let fuse = new Fuse(posts.flat(), {
  includeScore: false,
  keys: ['name']
});
export default {
  data() {
    return {
      filter: '',
      filteredPosts: posts
    };
  },
  methods: {
    openBlog() {
      window.open('https://blog.repl.it/langjam', '_blank');
    },
    updatePosts() {
      if (this.filter !== '') {
        let newPosts = [];
        let filtered = fuse.search(this.filter);
        for (let i = 0; i < Math.floor(filtered.length / 3); i++) {
          let threePosts = [];
          for (let j = 0; j < 3; j++) {
            threePosts.push(filtered[i].item);
            i++;
          }
          newPosts.push(threePosts);
        }
        this.filteredPosts = newPosts;
      } else {
        this.filteredPosts = posts;
      }
    }
  }
}
</script>

<style scoped>
input {
  background-color: #fff !important;
}
.posts {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2rem 2rem;
}

.post-group {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

.post-group * {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}

p {
  font-size: 1.20rem !important;
  padding-bottom: 1rem;
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

.vs-input {
  font-family: 'Comfortaa', cursive !important;
}

@media screen and (max-width: 720px){
  .post-group {
    flex-direction: column;
    align-items: center;
  }
  .posts {
    align-items: center;
    margin: 2rem 0rem;
  }
}
</style>
