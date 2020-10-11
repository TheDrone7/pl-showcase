<template>
  <div class="winner-app">
    <div id="top">
      <winner-page>
        <div class="section">
          <div class="page-title">Basil</div>
          <div class="page-subtitle">
            <b>The winner of the language jam is Basil.</b><br/>The goal of Basil is to try to have it all - high-level language features like macros, dynamic code evaluation, minimal type annotations - without any of the runtime costs normally associated with high-level languages - large runtime systems, slow performance, high memory use.
          </div>
        </div>
        <div class="page-footer">
          <a href="#freshness">Check out the category winners<br/>&#9660;</a>
        </div>
      </winner-page>
    </div>
    <div id="freshness">
      <winner-page>
        <div class="section">
          <div class="page-title">Roman</div>
          <div class="page-subtitle">
            <b>The freshest of the language jam submissions is Roman.</b><br/>Roman is a lisp like programming language based on a very simple premise.
          </div>
        </div>
        <div class="page-footer">
          <a href="#top">Go to top<br/>&#9650;</a>
          <a href="#value">Show more<br/>&#9660;</a>
        </div>
      </winner-page>
    </div>
    <div id="value">
      <winner-page>
        <div class="section">
          <div class="page-title">Browse</div>
          <div class="page-subtitle">
            <b>Most valuable of the language jam submissions is Browse</b><br />Browse is a language used to build powerful libraries while keeping the end-user experience as simple as possible (think bash).
          </div>
        </div>
        <div class="page-footer">
          <a href="#top">Go to top<br/>&#9650;</a>
          <a href="#polish">Show more<br/>&#9660;</a>
        </div>
      </winner-page>
    </div>
    <div id="polish">
      <winner-page>
        <div class="section">
          <div class="page-title">Codeflow</div>
          <div class="page-subtitle">
            <b>Most polished of the language jam submissions is Codeflow</b><br />Codeflow incorporates chatbots and natural language to create an algorithmic conversation experience.
          </div>
        </div>
        <div class="page-footer">
          <a href="#top">Go to top<br/>&#9650;</a>
          <a href="#technical">Show more<br/>&#9660;</a>
        </div>
      </winner-page>
    </div>
    <div id="technical">
      <winner-page>
        <div class="section">
          <div class="page-title">Volant</div>
          <div class="page-subtitle">
            <b>Most technically difficult of the language jam submissions is Volant</b><br />Volant is a general-purpose data-oriented high-level programming language with a focus on speed, power, asynchronicity, and concurrency. Volant is designed with simplicity in mind, allowing both low-level and high-level features with simple and easy to use syntax.
          </div>
        </div>
        <div class="page-footer">
          <a href="#top">Go to top<br/>&#9650;</a>
        </div>
      </winner-page>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    openBlog() {
      window.open('https://blog.repl.it/langjam', '_blank')
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oxanium&display=swap');
.winner-app {
  overflow-y: auto;
  height: 100vh;
}
.page-title {
    font-size: 4rem;
    font-family: 'Oxanium', cursive;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0 0 12px white;
}
.page-subtitle {
  margin-top: 0;
  font-size: 1.5rem;
}
.section {
  width: 90%;
  max-width: 720px;
}

.page-footer {
  position: absolute;
  bottom: 4rem;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  line-height: 1.5em;
}

b {
  color: #FFFF99;
  font-weight: normal;
}

.page-footer > * {
  margin: 0 1rem;
}
</style>
