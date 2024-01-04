import { Liquid } from 'liquidjs'
import { AttributeLineTemplate } from '../templates/schemaFileTemplate'
import { GraphqlInputLineTemplate } from '../templates/graphqlInputTemplate'
import { v4 as uuidv4 } from 'uuid'

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

  static toGraphqlType(type) {
    switch (type) {
      case 'string':
        return 'String'
      case 'bigint':
        return 'ID'
      case 'integer':
        return 'Int'
      case 'text':
        return 'String'
      case 'datetime':
        return 'GraphQL::Types::ISO8601DateTime'
      case 'date':
        return 'GraphQL::Types::ISO8601Date'
      default:
        return ''
    }
  }
}

export default ModelAttribute
