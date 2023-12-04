import LiquidTemplate from '../liquid'

import { SchemaFileContentTemplate } from '../templates/schemaFileTemplate'

class SchemaGenerator {
  constructor(model) {
    this.model = model
    this.content = ''
  }

  async build() {
    const template = new LiquidTemplate(SchemaFileContentTemplate, {
      model: this.model
    })

    return await template.render()
  }
}

export default SchemaGenerator
