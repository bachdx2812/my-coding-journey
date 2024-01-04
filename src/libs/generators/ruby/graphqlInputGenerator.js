import LiquidTemplate from '../liquid'

import { GraphqlInputTemplate } from '../templates/graphqlInputTemplate'

class GraphqlInputGenerator {
  constructor(model) {
    this.model = model
    this.content = ''
  }

  async build() {
    const template = new LiquidTemplate(GraphqlInputTemplate, {
      model: this.model
    })

    return await template.render()
  }
}

export default GraphqlInputGenerator
