<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Админ панель Prav</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>Заявки на модерации</p>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-5>
        <div>
          <article v-for="(ticket, idx) in tickets" :key="idx">
            <img :src="ticket.url">
            <h1>{{ ticket.date }}</h1>
            <h1>{{ ticket.desc }}</h1>
            <h1>{{ ticket.geo }}</h1>
            <h1>{{ ticket.tag }}</h1>
            <h1>{{ ticket.userId }}</h1>
            <button @click="deleteticket(ticket.id)">Удалить
            </button>
            <button><router-link to="/single"></router-link>Просмотр
            </button>
          </article>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* import { db } from '../main'

export default {
  name: 'Home',
  data () {
    return {
      tickets: []
    }
  },
  firestore () {
    return {
      tickets: db.collection('tickets')// .orderBy('createdAt')
    }
  },
  methods: {
    deleteticket (id) {
      db.collection('tickets').doc(id).delete()
    }
  }
} */
</script>

<style scoped>
  img {
    max-width: 400px;
  }
  button {
    color: red;
    margin-bottom: 20px;
  }
  a.router-link-active, li.router-link-active>a {
    color: red;
  }
</style>
