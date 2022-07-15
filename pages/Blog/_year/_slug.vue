<template>
  <div class="blog-post">
    <v-alert
      v-show="false"
      color="red darken-4"
      rounded=""
      elevation="24"
      dismissible
      max-width="700"
      class="mx-auto"
    >
      Year: {{ $route.params.year }} Slug: {{ $route.params.slug }} Path:
      {{ $route.path }}
    </v-alert>
    <v-card max-width="700" class="mx-auto pa-4">
      <h1>{{ blogpost.title }}</h1>
      <p>{{ blogpost.description }}</p>
      <p>Posted on: {{ formatDate(blogpost.createdAt) }}</p>
      <p v-show="blogpost.createdAt !== blogpost.updatedAt">
        Updated on: {{ formatDate(blogpost.updatedAt) }}<br />
        <!-- {{ blogpost.createdAt }} -->
      </p>
      <v-row v-show="blogpost.tags">
        <v-col cols="auto" v-bind:key="tag.id" v-for="tag in blogpost.tags">
          <v-chip small>{{ tag }}</v-chip>
        </v-col>
      </v-row>
      <author :author="blogpost.author"></author>
      <nuxt-content :document="blogpost"></nuxt-content>
    </v-card>
    <nuxt-link to="/blog">Back to Blog Home</nuxt-link>
  </div>
</template>

<script>
import Author from '../../../components/Author.vue'
export default {
  components: {
    Author,
  },
  async asyncData({ $content, params }) {
    const blogpost = await $content('blog', params.year, params.slug).fetch()

    return { blogpost }
  },
  methods: {
    formatDate(date) {
      // method to format date nicely
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  // created() {
  //   console.log(this.$route)
  // },
  head() {
    return {
      title: this.blogpost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogpost.description,
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
div.blog-post {
  font-family: 'Lato', sans-serif;
}
</style>
