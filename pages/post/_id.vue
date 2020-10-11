<template>
    <div class="app">
        <div class="post-body">
            <jumbotron :title="post.name" :subtitle="post.desc + '<br /><br/>&#8212;<a href=\'https://repl.it/@' + post.team + '\'>' + post.team + '</a>'" :link="post.post" />
            <big-card title="Judges remarks" v-if="post.comments">
                <div class="card-alert">
                    <vs-alert color="dark">
                        <p>{{post.comments}}</p>
                    </vs-alert>
                </div>
            </big-card>
            <big-card title="A Sample Program" tooltip="This code is prone to change. Please refer to the official documentation of the language for confirmation.">
                <nuxt-content :document="doc" />
            </big-card>
        </div>
        
    </div>
</template>

<script>
import posts from '../../posts';
export default {
    async asyncData({ $content, params }) {
        let post = posts.flat().find(p => p.id === params.id);
        let doc;
        if (post) {
            doc = await $content(params.id || 'test').fetch();
            if (post.results) post.results['Total'] = post.results['Freshness'] + post.results['Value'] + post.results['Technical'] + post.results['Polish']
        }
        return { post , doc };
    },
    head() {
      return {
        title: this.post.name + ' | Repl.it PL Jam',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: this.post.desc }
        ],
      }
    }
}
</script>

<style scoped>

.post-body {
    margin: 2rem 0;
}
.post-desc {
    font-size: 1rem;
    margin: 2rem 3rem
}

.nuxt-content pre {
    background-color: #f0f0f0;
    box-shadow: 0 0 4px #0006;
}

.nuxt-content code {
    color: #c00;
    font-family: 'Inconsolata', monospace;
}

.nuxt-content a {
    margin: 0 !important;
}

.card-alert {
    margin: 1rem 0;
}
</style>