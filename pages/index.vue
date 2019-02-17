<template>
  <div>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <h1>Praagse Puls Machine</h1>
        <v-alert
        style="margin-bottom: 2em"
        :value="true"
        type="info"
      >
        Praag, de stad van hoeren, puls en ... gokmachines. Het bier vloeit op dit moment waarschijnlijk rijkelijk, maar niemand heeft zin om de refill te halen. Waag daarom een gokje! De regels zijn als volgt.

        <ol>
          <li>Komt je rotkop 2 x voorbij? Bier halen!</li>
          <li>Komt je rotkop 3 x voorbij? Bier halen plus een tequilla voor jezelf</li>
          <li>Komt de kop van de gokker voorbij? Dan haalt hij evenveel tequilla voor zichzelf als hij terugkomt in de magische puls machine</li>
        </ol>
      </v-alert>
      </v-flex>
    </v-layout>
    <div class="bg">
      <slot-machine />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('~assets/img/slot.png');
  background-size: cover;
  padding-top: 100px;
  background-position: center center;
}
h1 {
  font-size: calc(var(--text-xl) * 3);
  text-align: center;
  font-weight: bold !important;
}
@media only screen and (max-width: 500px) {
  h1 {
    font-size: var(--text-xxxl);
  }
}
</style>

<script>
import SlotMachine from '@/components/SlotMachine.vue'

export default {
  components: {
    SlotMachine
  }
}
</script>
