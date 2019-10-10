<template>
  <v-card height="100%" width="190px">
    <v-img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></v-img>
    <v-card-title class="anime-titles">
      <p class="en-title">
        {{ title }}
      </p>
    </v-card-title>
    <v-card-text>
      <v-row class="ml-0">
        <v-rating :value="4.5" color="amber" half-increments dense size="14" readonly></v-rating>
        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>
    </v-card-text>
    <v-card-text>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        props: ['title', 'description', 'type', 'status', 'id', 'created_at', 'updated_at', 'duration', 'aired_from']
    }
</script>

<style>
  .anime-titles {
    font-size: 13px;
  }
  .anime-titles p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
