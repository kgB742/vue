const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      'vue.kundk.local'
    ],
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws', // Configure WebSocket URL
    },
    webSocketServer: 'ws', // Use WebSocket server
  }
})