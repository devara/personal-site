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
              :lazy-src="list.img"
              :src="list.img"
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
export default {
  data() {
    return {
      technologies: [
        {
          category: 'Languages',
          lists: [
            {
              name: 'CSS3',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/css3.png'
            },
            {
              name: 'HTML5',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/html5.png'
            },
            {
              name: 'Javascript',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/javascript.png'
            },
            {
              name: 'ES6',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/es6.png'
            },
            {
              name: 'PHP',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/php.png'
            },
            {
              name: 'Typescript',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/typescript.png'
            }
          ]
        },
        {
          category: 'Preprocessors',
          lists: [
            {
              name: 'Babel',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/babel.png'
            },
            {
              name: 'Less',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/less.png'
            },
            {
              name: 'Sass',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/sass.png'
            }
          ]
        },
        {
          category: 'Frameworks',
          lists: [
            {
              name: 'Codeigniter',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/codeigniter.png'
            },
            {
              name: 'Express',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/expressjs.png'
            },
            {
              name: 'Laravel',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/laravel.png'
            },
            {
              name: 'Vue',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/vue.png'
            }
          ]
        },
        {
          category: 'Tools',
          lists: [
            {
              name: 'Composer',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/composer.png'
            },
            {
              name: 'Docker',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/docker.png'
            },
            {
              name: 'Git',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/git.png'
            },
            {
              name: 'Gulp',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/gulp.png'
            },
            {
              name: 'Node',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/nodejs.png'
            },
            {
              name: 'VS Code',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/vsonline.png'
            },
            {
              name: 'Webpack',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/webpack.png'
            }
          ]
        },
        {
          category: 'Data and Storage',
          lists: [
            {
              name: 'SQL',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/sql.png'
            },
            {
              name: 'PostgreSQL',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/postgresql.png'
            },
            {
              name: 'S3',
              img: 'http://deva.assets.s3-ap-southeast-1.amazonaws.com/images/tech-icons/s3.png'
            }
          ]
        }
      ]
    }
  }
}
</script>