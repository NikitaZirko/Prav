<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center mt-5>
        <img src="../assets/logo.jpg" alt="" >
      </v-flex>
      <v-flex xs12 text-xs-center mt-5>
        <h1>Добро пожаловать <br> в сервис Prav</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          Урбан сообщество твоего города
        </blockquote>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
blockquote {
  padding: 0;
}
h1 {
  text-transform: uppercase;
}
img {
  width: 300px;
}
</style>
