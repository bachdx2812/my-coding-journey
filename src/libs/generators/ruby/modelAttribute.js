import { Liquid } from 'liquidjs'
import { AttributeLineTemplate } from '../templates/schemaFileTemplate'

class ModelAttribute {
  constructor(name, type) {
    this.name = name
    this.type = type
    // TODO: add default
    // TODO: add nullable
  }

  generateSchemaLine() {
    const engine = new Liquid()
    const tpl = engine.parse(AttributeLineTemplate)
    return engine.render(tpl, { name: this.name, type: this.type })
  }
}

export default ModelAttribute
