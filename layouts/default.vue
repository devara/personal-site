<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :temporary="true"
      :mini-variant="miniVariant"
      :expand-on-hover="expandOnHover"
      fixed
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
    <v-app-bar
      elevate-on-scroll
      color="teal lighten-4"
      :clipped-left="clipped"
      :hide-on-scroll="true"
      :light="true"
      fixed
      app
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-flex d-sm-none"
      />
      
      <v-toolbar-title v-text="title"/>
      <v-spacer />
      <v-btn
        text
        color="brown darken-1"
        nuxt
        to="/"
        class="d-none d-sm-flex"
      >
        About
      </v-btn>
      <v-btn
        text
        color="brown darken-1"
        nuxt
        to="/experience"
        class="d-none d-sm-flex"
      >
        Experience
      </v-btn>
      <v-btn
        text
        color="brown darken-1"
        nuxt
        to="/inspire"
        class="d-none d-sm-flex"
      >
        Portofolio
      </v-btn>
      <v-btn
        text
        color="brown darken-1"
        nuxt
        to="/life"
        class="d-none d-sm-flex mr-5"
      >
        Life
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      dark
      padless
      class="d-inline-block"
    >
      <v-card
        flat
        tile
        class="teal lighten-2 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="(icon, i) in icons"
            :key="i"
            class="mx-4 white--text"
            icon
            :href="icon.url"
            :target="'_blank'"
          >
            <v-icon size="30px">{{ icon.name }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Discuss about web development and technology? Just text me 😎
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          © {{ new Date().getFullYear() }} — Devara Eko. All rights reserved.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      expandOnHover: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: 'Dev World',
      icons: [
        {
          name: 'mdi-gmail',
          url: 'mailto:devaraekokm@gmail.com'
        },
        {
          name: 'mdi-twitter',
          url: 'https://twitter.com/devara_eko'
        },
        {
          name: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/devaraeko/'
        },
        {
          name: 'mdi-instagram',
          url: 'https://www.instagram.com/devaraeko/'
        }
      ]
    }
  }
}
</script>
<style>
.hero-title {
  height: 75px;
  max-height: 80px;
}
.hero-text {
  font-family: 'Pacifico', 'cursive';
  font-size: 4rem;
  font-weight: lighter;
  color: #F4A0A0;
}
</style>
