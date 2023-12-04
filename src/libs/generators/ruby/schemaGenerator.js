import LiquidTemplate from '../liquid'

import { SchemaFileContentTemplate } from '../templates/schemaFileTemplate'

class SchemaGenerator {
  constructor(model) {
    this.model = model
    this.content = ''
  }

  build() {
    const template = new LiquidTemplate(SchemaFileContentTemplate, {
      model: this.model
    })

    template.render().then(console.log)
  }
}

export default SchemaGenerator
