import LiquidTemplate from '../liquid'

import { GraphqlTypeTemplate } from '../templates/graphqlTypeTemplate'

class GraphqlTypeGenerator {
  constructor(model) {
    this.model = model
    this.content = ''
  }

  async build() {
    const template = new LiquidTemplate(GraphqlTypeTemplate, {
      model: this.model
    })

    return await template.render()
  }
}

export default GraphqlTypeGenerator
