import LiquidTemplate from '../liquid'

import { ModelFileContentTemplate } from '../templates/modelFileTemplate'

class ModelGenerator {
  constructor(model) {
    this.model = model
    this.content = ''
  }

  async build() {
    // TODO: add relations
    const template = new LiquidTemplate(ModelFileContentTemplate, {
      model: this.model
    })

    return await template.render()
  }
}

export default ModelGenerator
