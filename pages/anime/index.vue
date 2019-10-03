<template>
  <a-layout>
    <div class="container browse-anime">
      <section class="cards">
        <div class="card" v-for="anim in anime" :key="anim.id" :class="anim.title">
          <AnimeCard v-bind="anim" class="card"/>
        </div>
      </section>
      <section class="search-panel">
        <a-form class="search-form" :form="form" >
          <a-row :gutter="24">
            <a-col v-for="i in 10" :key="i" :span="24" >
              <a-form-item :label="`Field ${i}`">
                <a-input v-decorator="[
                `field-${i}`,
                {
                  rules: [{
                    required: true,
                    message: 'Input something!',
                  }],
                }
              ]"
                  placeholder="placeholder"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col
              :span="24"
              :style="{ textAlign: 'right' }"
            >
              <a-button
                type="primary"
                html-type="submit"
              >
                Search
              </a-button>
              <a-button
                :style="{ marginLeft: '8px' }"
              >
                Clear
              </a-button>
            </a-col>
          </a-row>
        </a-form>
      </section>
    </div>
  </a-layout>
</template>

<script>
    import AnimeCard from '@/components/anime-card.vue'

    export default {
        components: {
            AnimeCard
        },
        data () {
            return {
                anime: [],
                form: this.$form.createForm(this),
                function () {
                    return {
                        message: "Hello Vue!"
                    }
                }
            }
        },
        channels: {
            BrowseAnimeChannel: {
                connected() {
                    console.log('hi');
                },
                rejected() {},
                received(data) {
                   console.log(data);
                },
                disconnected() {
                    console.log('BYEEEEE');
                }
            }
        },
        methods: {
            async updateAnime() {
                this.anime = await this.$axios.$get('/anime');
            }
        },
        mounted () {
            this.updateAnime();
            this.$cable.subscribe({ channel: 'BrowseAnimeChannel' });
        },
    }
</script>

<style>
.browse-anime {
  display: flex;
  margin-right: auto;
}

.search-panel {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 30em;
}
.search-form {
  margin-right: 75px;
}

.cards {
  margin-left: 75px;
  margin-right: 75px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
}

.cards::after {
  content: "";
  flex: auto;
}
.card {
  flex: 1 0 500px;
  box-sizing: border-box;
  margin: 1rem .25em;
}

@media screen and (min-width: 40em) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    flex: 0 1 calc(50% - 1em);
  }
}

@media screen and (min-width: 60em) {
  .card {
    flex: 0 1 calc(25% - 1em);
  }
}
</style>
