import { lowerCase, snakeCase, upperFirst } from 'lodash'
import pluralize from 'pluralize'

import SchemaGenerator from './schemaGenerator'
import ModelGenerator from './modelGenerator'
import GraphqlInputGenerator from './graphqlInputGenerator'
import GraphqlTypeGenerator from './graphqlTypeGenerator'

import ModelAttribute from './modelAttribute'

class Model {
  constructor(name, attributes) {
    this.attributes = attributes

    // TODO: add table charset, default: "utf8mb4"
    // TODO: add table collation, default: "utf8mp4_unicode_ci"
    // TODO: add indexes

    this.schemaScript = null
    this.modelScript = null

    this.graphqlInputFileName = null
    this.graphqlInputScript = null

    this.graphqlTypeFileName = null
    this.graphqlTypeScript = null

    this.setNames(name)
  }

  setNames(name) {
    this.name = name

    this.schemaFileName = `${snakeCase(lowerCase(pluralize(this.name)))}.schema`
    this.tableName = `${snakeCase(lowerCase(pluralize(this.name)))}`

    this.modelFileName = `${lowerCase(pluralize(this.name, 1))}.rb`
    this.modelClassName = upperFirst(pluralize(this.name, 1))

    this.graphqlInputFileName = `${snakeCase(pluralize(this.name, 1))}_input.rb`
    this.graphqlInputClassName = `${this.className}Input`

    this.graphqlTypeFileName = `${snakeCase(pluralize(this.name, 1))}_type.rb`
    this.graphqlTypeClassName = `${this.className}Type`
  }

  addNewAttribute() {
    this.attributes.push(new ModelAttribute())
  }

  removeAttribute(attribute) {
    let removeIndex = this.attributes.findIndex((a) => a.id == attribute.id)
    this.attributes.splice(removeIndex, 1)
  }

  async generateSchemaScript() {
    const schemaGenerator = new SchemaGenerator(this)
    this.schemaScript = await schemaGenerator.build()
  }

  async generateModelScript() {
    const modelGenerator = new ModelGenerator(this)
    this.modelScript = await modelGenerator.build()
  }

  async generateGraphqlInputScript() {
    const graphqlInputGenerator = new GraphqlInputGenerator(this)
    this.graphqlInputScript = await graphqlInputGenerator.build()
  }

  async generateGraphqlTypeScript() {
    const graphqlTypeGenerator = new GraphqlTypeGenerator(this)
    this.graphqlTypeScript = await graphqlTypeGenerator.build()
  }
}

export default Model
