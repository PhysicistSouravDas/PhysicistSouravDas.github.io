<template>
  <div>
    <v-card>
      <v-card-title>
        {{ page.title }}
      </v-card-title>
      <v-card-text>
        {{ page.description }}
        <v-chip>
          {{ convertDate(page.createdAt) }}
        </v-chip>
        {{ page.slug }}
        <nuxt-content :document="page" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'hello'
    console.log(error)
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
  methods: {
    convertDate(date) {
      return new Date(date).toDateString()
    },
  },
}
</script>

<style></style>
