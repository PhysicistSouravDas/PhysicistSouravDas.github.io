<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="16">
          <v-card-title>
            Welcome to the Webpage of PhysicistSouravDas.
          </v-card-title>

          <v-card-subtitle>
            Hi! I am
            <client-only>
              <vue-typer
                :text="[
                  'an aspiring physicist.',
                  'a web developer.',
                  'an animal lover.',
                  'interested in computer science.',
                  'a wikipedian.',
                ]"
                :repeat="Infinity"
                :shuffle="true"
                initial-action="typing"
                :pre-type-delay="70"
                :pre-erase-delay="2000"
                :erase-delay="100"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="blink"
              >
              </vue-typer>
            </client-only>
          </v-card-subtitle>
          <v-card-text>
            I generally go by the pseudonym "PhysicistSouravDas". This is my
            personal website. Here, I will keep adding many resources, blog
            posts, related to physics, mathematics, programming, computer
            science &amp; and my projects. <br /><br />
            These things will definitely help me in future, because I tend to
            forget things, and I hope that somebody else will be benefitted too!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- <img src="/v.png" alt="Vuetify.js" class="mb-5" /> -->
</template>

<script>
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

export default {
  name: 'HomeHeader',
  components: {
    VueTyper,
  },
}
</script>

<style scoped>
/* https://github.com/cngu/vue-typer/issues/26#issuecomment-722376277 */
::v-deep .vue-typer .custom.char.typed {
  color: orange;
  font-family: 'Courier New', Courier, monospace;
}

::v-deep .vue-typer .custom.caret {
  background-color: red;
}

* {
  user-select: none;
  cursor: pointer;
}

/* not using the below class till now in the document */
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
/* 
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
} */

/* The typewriter cursor effect */
/* 
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
} */
</style>
