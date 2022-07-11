<template>
  <div>
    <p>This is {{ $route.name }} 's Index page.</p>
    <v-container :key="blog.id" v-for="blog in blogposts">
      <v-card nuxt :to="blog.path">
        <v-card-title>{{ blog.title }}</v-card-title>
        <v-card-subtitle>{{ blog.author.name }}</v-card-subtitle>
        <v-card-text>
          <nuxt-content :document="{ body: blog.excerpt }"></nuxt-content>
          <v-btn class="mx-auto">Read More</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
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
