<template>
  <a-card style="width: 240px">
    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="cover" />
    <a-card-meta :title="title">
      <template slot="description">{{description}}</template>
    </a-card-meta>
  </a-card>
</template>

<script>
    export default {
        props: ['title', 'description']
    }
</script>
