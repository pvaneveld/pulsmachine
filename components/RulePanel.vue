<template>
  <div>
    <div class="d-flex justify-between align-center mb-3" dark>
      <v-btn @click="all">All die dingen</v-btn>
      <v-btn @click="none">Ham and eggs</v-btn>
    </div>

    <v-expansion-panel v-model="panel" expand>
      <v-expansion-panel-content v-for="(rule,i) in rules" :key="i">
        <div class="flexcontainer" slot="header">
          <div class="avatar" :style="{ backgroundImage: `url('${rule.img}')!important` }"/>
          <h3>{{rule.name}}</h3>
        </div>
        <v-card>
          <v-card-text>{{rule.rule}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<style>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  margin-right: 1rem;
}

.flexcontainer {
  display: flex;
  align-items: center;
}
</style>



<script>
export default {
  data() {
    return {
      panel: [],
      rules: [
        {
          name: 'Paul',
          img: '/paul.jpg',
          rule: 'Roep uit volle borst "kom hieeeer and suck it!"'
        },
        {
          name: 'Specht',
          img: '/leon.jpg',
          rule: 'Tik een willekeurig object aan met de snavel'
        },
        {
          name: 'Tim',
          img: '/tim.jpg',
          rule: 'Vraag welke bieren er op tap zijn, in den lokale tongval'
        },
        {
          name: 'Doek',
          img: '/bas.jpg',
          rule: 'Salueer richting een lokal'
        },
        {
          name: 'Zeus',
          img: '/jim.jpg',
          rule: 'Doe je signature dance, midden in de pub'
        },
        {
          name: 'Baap 1',
          img: '/joris.jpg',
          rule: 'Drink de komende 2 pivos met de elleboog hoog in de lucht'
        },
        {
          name: 'Willem',
          img: '/pim.jpg',
          rule: 'Val uit de komende dagen een keer uit een taxi'
        },
        {
          name: 'Baap 2',
          img: '/eric.jpg',
          rule: 'Krijg het een de stok met de lokale dienstdoeners'
        },
        {
          name: 'Dwergje',
          img: '/dennis.jpg',
          rule:
            'Zeg voor elk slokje van je komende biertje dat je een kaboutertje bent'
        },
        {
          name: 'Stom',
          img: '/tom.jpg',
          rule:
            'Ga een dag zonder onderbroek op stap. Wie weet kom je Isrid tegen!'
        },
        {
          name: 'Rus',
          img: '/quint.jpg',
          rule: 'Spreek een local aan in het russisch'
        },
        {
          name: 'Don L',
          img: '/dion.jpg',
          rule: 'Zeg tegen de oberin: "Nice picture you have!"'
        }
      ]
    }
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...this.rules.keys()].map(_ => true)
    },
    // Reset the panel
    none() {
      this.panel = []
    }
  }
}
</script>
