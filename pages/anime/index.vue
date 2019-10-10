<template>
  <v-container>
    <section class="cards">
      <div class="card" v-for="anim in anime" :key="anim.id" :class="anim.title">
        <AnimeCard v-bind="anim" class="card"/>
      </div>
    </section>
    <section class="search-panel">

    </section>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </v-container>
</template>

<script>
    import AnimeCard from '@/components/anime-card.vue'

    export default {
        components: {
            AnimeCard
        },
        data () {
            return {
                current: 1,
                anime: [],
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
                const response = await this.$axios.$get('/anime');
                this.anime = response.anime;
                this.totalPages = response.meta.total_pages
            },
            infiniteHandler($state) {
                this.$axios.get('/anime', {
                    params: {
                        page: this.current + 1,
                    },
                }).then(({ data }) => {
                    console.log(this.current)
                    if (data.anime.length > 0) {
                        this.current += 1;
                        this.anime.push(...data.anime);
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                });
            },
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
  flex: 0 1 calc(50% - 1em)
}
.card {
  flex: 1 0 500px;
  box-sizing: border-box;
  margin: 0.3rem .25em;
}

@media screen and (min-width: 40em) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    flex: 0 1 calc(20% - 1em);
  }
}

@media screen and (min-width: 60em) {
  .card {
    flex: 0 1 calc(20% - 1em);
  }
}
</style>
