<template>
  <v-app dark>
    <template v-if="error.statusCode === 404">
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12" sm="10" md="10" lg="8">
            <v-img
              src="http://deva.assets.s3-ap-southeast-1.amazonaws.com/gif/404.gif"
              :contain="true"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-else>
      <h1>
        {{ otherError }}
      </h1>
    </template>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
