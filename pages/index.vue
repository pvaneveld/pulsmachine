<template>
  <div>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <div class="border-image">
          <h1>
            <span>Praagse Puls Machine</span>
          </h1>

          <div class="description">
            <p>Welkom bij de Praagse Puls Machine. De machine die elke karavaan volledig laat ontsporen. Gebruik de machine voor elk rondje. Komt je hoofd 2 keer voor? Dan ligt er een mooie taak op je te wachten. Deze kun je afkopen met een lokaal shotje. Succes!</p>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <div class="bg">
      <slot-machine/>
    </div>
    <h1 style="margin-top: 2rem;">
      <span>Regels</span>
    </h1>
    <rule-panel/>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('~assets/img/slot.png');
  background-size: cover;
  padding-top: 100px;
  background-position: center center;
}

.description {
  background: #424242;
  padding: 1rem;
  max-width: 600px;
  display: block;
  margin: 2rem auto;
  border-radius: 5px;
}

h1 {
  background: #424242;
  font-size: calc(var(--text-xl) * 3);
  text-align: center;
  font-weight: bold !important;
  padding: 1rem;
  border-radius: 5px;
}

h1 span {
  letter-spacing: 0;
  padding: 0.25em 0 0.325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  /* Clip Background Image */
  background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png)
    repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  /* Animate Background Image */
  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 80s linear infinite;
  /* Activate hardware acceleration for smoother animations */
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
}

/* Animate Background Image */
@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@media only screen and (max-width: 500px) {
  h1 {
    font-size: var(--text-xxxl);
  }
}
</style>

<script>
import SlotMachine from '@/components/SlotMachine.vue'
import RulePanel from '@/components/RulePanel.vue'

export default {
  components: {
    SlotMachine,
    RulePanel
  }
}
</script>
