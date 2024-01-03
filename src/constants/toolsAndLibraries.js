import RoRCodeGeneratorView from '../views/tools/RoRCodeGeneratorView.vue'
import VuejsView from '../views/libraries//VuejsView.vue'

export default [
  {
    name: 'Code Generators',
    icon: 'mdi-language-ruby-on-rails',
    component: RoRCodeGeneratorView,
    path: '/tools/ruby_on_rails_code_generator',
    color: '#E0115F',
    description:
      'Some Code Generators for Ruby On Rails. Can Help you create `useful files` with few simple steps'
  },
  {
    name: 'VueJs Libraries',
    icon: 'mdi-vuejs',
    component: VuejsView,
    path: '/tools/vuejs',
    color: '#3FB883',
    description: 'Some Libraries I made for my development with vuejs'
  }
]
