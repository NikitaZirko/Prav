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
            <div class="board">
            <img :src="ticket.telegramUrl">
            <!-- <img :src="req + ticket.telegramUrl"> -->
            <!-- <h1>{{ new Date(ticket.date) }}</h1> -->
            <h1>{{ ticket.desc }}</h1>
            <!-- <h1>{{ ticket.geo }}</h1> -->
            <h1>{{ ticket.tag }}</h1>
            <h1>Id клиента {{ ticket.userId }}</h1>
            <button class="red_" @click="deleteticket(ticket.id)">Удалить
            </button>
            <button @click="add(ticket.id)">Одобрить
            </button>
            <!-- <button><router-link to="/single">Просмотр</router-link>
            </button> -->
            </div>
          </article>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db } from '../main'
var request = require('request')
/* eslint-disable */
let req = request.get('https://us-central1-prav-bot-231604.cloudfunctions.net/getHttpFormGs?gsUrl=')
/* eslint-enable */
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
    },
    add (id) {
      const updateRef = db.collection('tickets').doc(id)
      updateRef.update({
        модерация: 'успешно'
      })
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 400px;
  }
  button {
    margin: 0 10px 20px 10px;
  }
  .red_ {
    color: red;
  }
  .board {
    background-image: linear-gradient(297deg, #f69acc, #f69acc 22%, #9bdafc);
    width: 450px;
    display: block;
    margin: 0 auto 20px;
    padding: 20px;
  }
</style>
