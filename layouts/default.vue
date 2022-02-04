<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      :expand-on-hover="false"
      bottom
      disable-resize-watcher
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title id="site-title" v-text="title" />
      <v-spacer />
      <v-btn
        href="https://github.com/PhysicistSouravDas/PhysicistSouravDas.github.io"
        target="_blank"
        icon
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer id="site-footer" app inset absolute outlined>
      <span>&copy; {{ new Date().getFullYear() }} PhysicistSouravDas</span>
      <v-spacer></v-spacer>
      Made with ❤️ using Nuxt 🔥
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-human-greeting-variant',
          title: 'Hello',
          to: '/hello',
        },
        {
          icon: 'mdi-book-open-outline',
          title: 'Blog',
          to: '/blog',
        },
      ],
      miniVariant: false,
      title: 'PhysicistSouravDas',
    }
  },
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap'); */
#site-title {
  font-family: 'VT323', monospace;
}
#site-footer {
  font-family: 'Courier New', Courier, monospace;
}
</style>
