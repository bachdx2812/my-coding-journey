import TipsAndTricksView from '../views/TipsAndTricksView.vue'

import tipsAndTricks from '../constants/tipsAndTricks'

export default [
  {
    path: '/tips_and_tricks',
    name: 'tips_and_tricks',
    component: TipsAndTricksView
  },
  ...tipsAndTricks
]
