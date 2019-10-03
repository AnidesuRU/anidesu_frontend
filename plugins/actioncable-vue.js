import Vue from 'vue'
import ActionCableVue from 'actioncable-vue'

if (process.client) {
  Vue.use(ActionCableVue, {
    debug: true,
    debugLevel: 'all',
    connectionUrl: 'ws://localhost:8080/api/v1/cable',
    connectImmediately: true
  });
}
