<template>
  <div>
    <div class="slot-machine">
      <div v-for="index in 3" :key="index" class="slot">
        <div class="slot__window">
          <div class="slot__wrap">
            <div v-for="opt in slots" :key="opt.id" class="slot__item" :style="{ backgroundImage: `url('${opt}')!important` }">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-container">
      <h2>Druk op die puls knop!</h2>
      <button @click="start" class="push--flat" />
    </div>
  </div>

</template>

<style>
.btn-container {
  display: block;
  margin: 0 auto;
  background-color: #ccc;
  max-width: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}
[class*='push'] {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 0;
  margin: 1em;
  outline: none;
  background-color: #c2290a;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 200ms;
}

.push--flat {
  box-shadow: inset 0 2.5px 0 #da2e0b, inset 0 -2.5px 0 #aa2409,
    inset 0 0 0 2.5px #b32609, inset 0 0 0 6.6666666667px #c2290a,
    inset 0 0 0 8px #611405, inset 0 0 0 8.6956521739px black,
    inset 0 0 0 10.6666666667px rgba(247, 133, 110, 0.7),
    inset 0 0 0 14.5454545455px #c2290a, inset 0 32px 10.6666666667px #aa2409,
    inset 0 0 8px 13.3333333333px #911f08, 0 4px 0 rgba(0, 0, 0, 0.3);
}
.push--flat:after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 8px;
  display: block;
  width: 64px;
  height: 64px;
  border: 5.3333333333px solid rgba(0, 0, 0, 0.3);
  border-width: 0 0 5.3333333333px;
  border-radius: 50%;
  transition-duration: 200ms;
}
.push--flat:active,
.push--flat.is-pushed {
  box-shadow: inset 0 2.5px 0 #da2e0b, inset 0 -2.5px 0 #aa2409,
    inset 0 0 0 2.5px #b32609, inset 0 0 0 6.6666666667px #c2290a,
    inset 0 0 0 8px #611405, inset 0 0 0 9.4117647059px black,
    inset 0 0 0 10.6666666667px rgba(247, 133, 110, 0.2),
    inset 0 0 0 14.5454545455px #b32609, inset 0 32px 10.6666666667px #9b2108,
    inset 0 0 8px 13.3333333333px #791a06, 0 4px 0 rgba(0, 0, 0, 0.3);
  background-color: #b8270a;
}
.push--flat:active:after,
.push--flat.is-pushed:after {
  bottom: 9.3333333333px;
  border-width: 0;
}

.slot-machine {
  display: flex;
  justify-content: center;
}

.slot__window {
  background-color: white;
  border: 2px solid black;
  border-radius: 1rem;
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin-right: 2em;
}

@media only screen and (max-width: 500px) {
  .slot-machine {
    flex-direction: column;
    align-items: center;
  }

  .slot__window {
    margin-right: 0;
    margin-bottom: 1em;
    width: 150px;
    height: 150px;
  }

  .slot__item {
    height: 112px !important;
    line-height: 112px !important;
  }
}

.slot__item {
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 160px;
  padding: 0 10px;

  text-align: center;
  color: black;

  line-height: 160px;
}

.slot__window {
  margin-right: 1em;
  padding: 1em;
}
</style>


<script>
export default {
  data: function() {
    return {
      slots: [
        '/paul.jpeg',
        '/leon.jpeg',
        '/tom.jpeg',
        '/tim.jpeg',
        '/joris.jpeg',
        '/dion.jpeg',
        '/pim.jpeg',
        '/jim.jpeg'
      ],
      opts: false,
      startedAt: null
    }
  },

  methods: {
    next(cb) {
      window.requestAnimationFrame(cb)
    },

    start: function() {
      if (this.opts) {
        return
      }
      this.opts = [...this.$el.querySelectorAll('.slot__wrap')].map((el, i) => {
        const choice = Math.floor(Math.random() * this.slots.length)
        return {
          el,
          finalPos: choice * document.querySelector('.slot__item').clientHeight,
          startOffset: 2000 + Math.random() * 500 + i * 500,
          height:
            this.slots.length *
            document.querySelector('.slot__item').clientHeight,
          duration: 3000 + i * 700, // milliseconds
          isFinished: false,
          choice
        }
      })

      this.next(this.animate)
    },

    animate: function(timestamp) {
      if (this.startedAt == null) {
        this.startedAt = timestamp
      }

      const timeDiff = timestamp - this.startedAt

      this.opts.forEach(opt => {
        if (opt.isFinished) {
          return
        }

        const timeRemaining = Math.max(opt.duration - timeDiff, 0)
        const power = 3
        const offset =
          (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) *
          opt.startOffset

        // negative, such that slots move from top to bottom
        const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height)

        opt.el.style.transform = 'translateY(' + pos + 'px)'

        if (timeDiff > opt.duration) {
          opt.isFinished = true
        }
      })

      if (this.opts.every(o => o.isFinished)) {
        this.opts = null
        this.startedAt = null
      } else {
        this.next(this.animate)
      }
    }
  }
}
</script>
