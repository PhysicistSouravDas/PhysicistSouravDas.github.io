---
title: My first blog post on this site
description: This is a blog post which is my first on this site.
author:
    name: PhysicistSouravDas
    bio: Owner of this site
    image: https://www.gravatar.com/avatar/89ab578e60d83d52fe015a73741629fa?s=200&d=retro
createdAt: 2022-02-03T15:58:28.498Z
updatedAt: 2022-02-03T15:58:28.498Z
---

<!-- <author :author="author"></author> -->

Since many days, I am learning Vuejs, Vuex and Nuxt. I came to know about Git-based headless CMS, which is very easy to integrate with Nuxt projects. It is amazing!
<!--more-->

```markdown
## This is a heading

This is some more info

### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info
```
Now, a code block of HTML

```html
<template>
  <div>
      <v-alert
      color="red darken-4"
      rounded="" elevation="24" dismissible
      max-width="700" class="mx-auto">
        Month-Year: {{ $route.params.month_year }}
        Slug: {{ $route.params.slug }}
        Path: {{ $route.path }}
      </v-alert>
    <v-card max-width="700" class="mx-auto pa-4">
      <h1>{{ blogpost.title }}</h1>
      <p>{{ blogpost.description }}</p>
      <p>Posted on: {{ formatDate(blogpost.createdAt) }}</p>
      <p v-show=" blogpost.createdAt  !== blogpost.updatedAt">
        Updated on: {{ formatDate(blogpost.updatedAt) }}
      </p>
      <nuxt-content :document="blogpost"></nuxt-content>
    </v-card>
    <nuxt-link to="/blog">Back to Blog Home</nuxt-link>
    
  </div>
</template>
```

Now, why leave out `JavaScript` 🔥🔥🔥
```js
export default {
  async asyncData({ $content, params }) {
    const blogpost = await $content('blog', params.month_year, params.slug).fetch()

    return { blogpost }
  },
  methods: {
    formatDate(date)  {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  created() {
    console.log(this.$route)
  }
}
```
