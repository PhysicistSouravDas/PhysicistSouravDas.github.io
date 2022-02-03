<template>
  <div>
    <v-card>
      <v-card-title>
        {{ page.title }}
      </v-card-title>
      <v-card-text>
        {{ page.description }}
        {{ page.createdAt }}
        {{ page.slug }}
        <nuxt-content :document="page"/>
      </v-card-text>
    </v-card>    
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "hello";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  }
}
</script>

<style>

</style>