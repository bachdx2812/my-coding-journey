import { Liquid } from 'liquidjs'
import { AttributeLineTemplate } from '../templates/schemaFileTemplate'
import { GraphqlInputLineTemplate } from '../templates/graphqlInputTemplate'
import { GraphqlTypeLineTemplate } from '../templates/graphqlTypeTemplate'
import { v4 as uuidv4 } from 'uuid'
import types from './types'

class ModelAttribute {
  constructor(name, type) {
    this.id = uuidv4()
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

  generateGraphqlInputLine() {
    const engine = new Liquid()
    const tpl = engine.parse(GraphqlInputLineTemplate)

    this.graphqlType = ModelAttribute.toGraphqlType(this.type)
    return engine.render(tpl, { name: this.name, graphqlType: this.graphqlType })
  }

  generateGraphqlTypeLine() {
    const engine = new Liquid()
    const tpl = engine.parse(GraphqlTypeLineTemplate)

    this.graphqlType = ModelAttribute.toGraphqlType(this.type)
    return engine.render(tpl, { name: this.name, graphqlType: this.graphqlType })
  }

  static toGraphqlType(type) {
    const found = types.find((t) => t.type == type)

    return found ? found.graphqlType : 'Types::BaseScalar'
  }
}

export default ModelAttribute
