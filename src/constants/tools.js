import RoRCodeGeneratorView from '../views/tools/RoRCodeGeneratorView.vue'
import DockerfileGeneratorView from '../views/tools/DockerfileGeneratorView.vue'

export default [
  {
    name: 'Ruby On Rails Code Generators',
    shortName: 'Code Generators',
    icon: 'mdi-language-ruby-on-rails',
    tags: ['ruby', 'rails', 'tools'],
    component: RoRCodeGeneratorView,
    path: '/tools/ruby_on_rails_code_generator',
    color: '#E0115F',
    description:
      'Some Code Generators for Ruby On Rails. Can Help you create useful files with few simple steps',
    author: {
      name: 'bachdx',
      github: 'https://github.com/bachdx2812'
    }
  },
  {
    name: 'Dockerfile Generator',
    shortName: 'Dockerfile Generator',
    icon: 'mdi-docker',
    tags: ['docker', 'tools'],
    component: DockerfileGeneratorView,
    path: '/tools/dockerfile_generator',
    color: '#0db7ed',
    description: 'Using OpenAI to generate ready-to-use Dockerfile',
    author: {
      name: 'phucnm',
      github: 'https://github.com/minhphuc429'
    }
  }
]
