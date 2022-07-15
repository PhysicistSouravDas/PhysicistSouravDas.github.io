<template>
  <div>
    <p>This is {{ $route.name }} 's Index page.</p>
    <v-container :key="blog.id" v-for="blog in blogposts">
      <v-card nuxt :to="blog.path">
        <v-card-title>{{ blog.title }}</v-card-title>
        <v-card-subtitle>
          {{ blog.author.name }}
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip label outlined small :attrs="attrs" v-on="on">
                {{ daysAgo(blog.createdAt) }}
              </v-chip>
            </template>
            <span>{{ formatDate(blog.createdAt) }}</span>
          </v-tooltip>
        </v-card-subtitle>
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
    const blogposts = await $content('blog', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()
    // console.log(blogposts)

    return { blogposts }
  },
  methods: {
    daysAgo(postDate) {
      // https://day.js.org/docs/en/plugin/relative-time
      var relativeTime = require('dayjs/plugin/relativeTime')
      this.$dayjs.extend(relativeTime)

      const dateToDisplay = this.$dayjs().to(postDate)
      // const dateToDisplay = this.$dayjs(postDate).fromNow();
      return dateToDisplay
    },
    formatDate(postDate) {
      const dateToDisplay = this.$dayjs(postDate)
      return dateToDisplay
    },
  },
  // created() {
  //   console.log(this.$route)
  // },
}
</script>
