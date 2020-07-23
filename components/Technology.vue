<template>
  <v-row>
    <v-col
      cols="12"
      v-for="(technology, index) in technologies"
      :key="index"
    >
      <h3 class="headline teal--text text--lighten-2 mb-4">{{ technology.category }}</h3>
      <v-row dense>
        <v-col
          v-for="(list, i) in technology.lists"
          :key="i"
          cols="6"
          sm="4"
          md="2"
        >
          <v-card
            class="mx-auto mb-3 pa-2"
            max-width="140"
            height="140"
          >
            <v-img
              :lazy-src="assets_url+''+list.img"
              :src="assets_url+''+list.img"
              :contain="true"
              class="white--text"
              max-width="128px"
              max-height="128px"
            >

            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      technologies: [
        {
          category: 'Languages',
          lists: [
            {
              name: 'CSS3',
              img: 'images/tech-icons/css3.png'
            },
            {
              name: 'HTML5',
              img: 'images/tech-icons/html5.png'
            },
            {
              name: 'Javascript',
              img: 'images/tech-icons/javascript.png'
            },
            {
              name: 'ES6',
              img: 'images/tech-icons/es6.png'
            },
            {
              name: 'PHP',
              img: 'images/tech-icons/php.png'
            },
            {
              name: 'Typescript',
              img: 'images/tech-icons/typescript.png'
            },
            {
              name: 'Node',
              img: 'images/tech-icons/nodejs.png'
            },
            {
              name: 'SQL',
              img: 'images/tech-icons/sql.png'
            },
            {
              name: 'GraphQL',
              img: 'images/tech-icons/graphql.png'
            }
          ]
        },
        {
          category: 'Preprocessors',
          lists: [
            {
              name: 'Babel',
              img: 'images/tech-icons/babel.png'
            },
            {
              name: 'Less',
              img: 'images/tech-icons/less.png'
            },
            {
              name: 'Sass',
              img: 'images/tech-icons/sass.png'
            }
          ]
        },
        {
          category: 'Frameworks',
          lists: [
            {
              name: 'Codeigniter',
              img: 'images/tech-icons/codeigniter.png'
            },
            {
              name: 'Express',
              img: 'images/tech-icons/expressjs.png'
            },
            {
              name: 'Laravel',
              img: 'images/tech-icons/laravel.png'
            },
            {
              name: 'Vue',
              img: 'images/tech-icons/vue.png'
            },
            {
              name: 'Nuxt',
              img: 'images/tech-icons/nuxt.png'
            }
          ]
        },
        {
          category: 'Tools',
          lists: [
            {
              name: 'Composer',
              img: 'images/tech-icons/composer.png'
            },
            {
              name: 'Docker',
              img: 'images/tech-icons/docker.png'
            },
            {
              name: 'Git',
              img: 'images/tech-icons/git.png'
            },
            {
              name: 'Gulp',
              img: 'images/tech-icons/gulp.png'
            },
            {
              name: 'VS Code',
              img: 'images/tech-icons/vsonline.png'
            },
            {
              name: 'Webpack',
              img: 'images/tech-icons/webpack.png'
            }
          ]
        },
        {
          category: 'Data and Storage',
          lists: [
            {
              name: 'PostgreSQL',
              img: 'images/tech-icons/postgresql.png'
            },
            {
              name: 'Redis',
              img: 'images/tech-icons/redis.png'
            },
            {
              name: 'S3',
              img: 'images/tech-icons/s3.png'
            }
          ]
        }
      ]
    }
  },
  computed: mapState([
    'assets_url'
  ])
}
</script>