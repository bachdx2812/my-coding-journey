import libraries from './libraries'
import tools from './tools'

export default [
  {
    id: 'toolsAndLibrary',
    title: 'Tools & Libraries',
    description: `In this section, I would like to share some Tools & Libraries that I've made in my free time. 
      Hope some of these will help you with your coding journey`,
    items: [
      {
        title: 'Tools',
        description: 'Useful (maybe) tools to help increase performance for your daily works',
        menus: [...tools]
      },
      {
        title: 'Libraries',
        description: 'Helpful (maybe) libraries to shorten your time with simple tasks',
        menus: [...libraries]
      }
    ]
  }
]
