<template>
  <div>
    <p>This is {{ $route.name }} 's Index page.</p>
    <v-card nuxt :to="blog.path" :key="blog.id" v-for="blog in blogposts">
      <v-card-title>{{ blog.title }}</v-card-title>
      <v-card-text>
        <nuxt-content :document="{ body: blog.excerpt }"></nuxt-content>
        <v-btn class="mx-auto">Read More</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogposts = await $content('blog', { deep: true }).fetch()
    // console.log(blogposts)

    return { blogposts }
  },
  // created() {
  //   console.log(this.$route)
  // },
}
</script>
