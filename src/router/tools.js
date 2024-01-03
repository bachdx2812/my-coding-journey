import ToolsAndLibrariesView from '../views/ToolsAndLibrariesView.vue'

import ToolsAndLirabries from '../constants/toolsAndLibraries'

export default [
  {
    path: '/tools_and_libraries',
    name: 'tools_and_libraries',
    component: ToolsAndLibrariesView
  },
  ...ToolsAndLirabries
]
