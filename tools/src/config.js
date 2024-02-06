const fs = require('fs')
const path = require('path')
const lodash = require('lodash/object')

const defaultConfig = {
  github: {
    token: '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'
  },
  discord: {
    enabled: false,
    id: 'YOUR_DISCORD_WEBHOOK_ID',
    token: 'YOUR_DISCORD_WEBHOOK_TOKEN'
  },
  sonar: {
    enabled: false,
    token: 'YOUR_SONAR_TOKEN',
    args: []
  }
}
