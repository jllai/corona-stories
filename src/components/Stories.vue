<template>
  <div>
    <v-card class="vcard-inner" v-for="(story, idx) in stories" :key="idx">
        <v-card-title class="headline">{{ story.title }}</v-card-title>
    <v-card-subtitle class="vcard-subtitle">{{ story.content }}</v-card-subtitle>
    <v-card-footer class="footer">
    <span class="footer-left">{{ story.createdAt }}</span>
    <span class="footer-right">{{ story.title }}</span>
    </v-card-footer>
        <v-card-actions>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import { db } from '../main'

// Read from Firebase database.
export default {
  name: 'Stories',
  data () {
    return {
      stories: []
    }
  },
  firestore () {
    return {
      stories: db.collection('stories').orderBy('createdAt')
    }
  }
}

// Add data to Firebase database.
// export default {
//   name: 'Stories',
//   data () {
//     return {
//       stories: [],
//       title: '',      // <-- New story title
//       createdAt: ''      // <-- New story creation date
//     }
//   },
//   firestore () {
//     return {
//       stories: db.collection('stories').orderBy('createdAt')
//     }
//   },
//   methods: { 
//     addStory (title, createdAt) { 
//       const createdAt = new Date()
//       db.collection('stories').add({ title, createdAt })
//     }
//   }
// }

</script>
