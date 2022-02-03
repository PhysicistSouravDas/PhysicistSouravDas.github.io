<template>
  <div>
    <v-card class="mx-auto ma-4" max-width="inherit" color="info">
      <v-card-title>
        <v-avatar size="56">
          <img :src="author.image">
        </v-avatar>
        <p class="ml-3">{{ author.name }}</p>
      </v-card-title>
      <v-card-text>{{ author.bio }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
