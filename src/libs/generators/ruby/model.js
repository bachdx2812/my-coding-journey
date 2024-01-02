import { snakeCase } from 'lodash'
import pluralize from 'pluralize'

import SchemaGenerator from './schemaGenerator'

import ModelAttribute from './modelAttribute'

class Model {
  constructor(name, attributes) {
    this.name = name
    this.attributes = attributes
    this.tableName = snakeCase(pluralize(this.name))
    // TODO: add table charset, default: "utf8mb4"
    // TODO: add table collation, default: "utf8mp4_unicode_ci"
    // TODO: add indexes

    this.schemaScript = null
  }

  addNewAttribute() {
    this.attributes.push(new ModelAttribute())
  }

  async generateSchemaFile() {
    const schemaGenerator = new SchemaGenerator(this)
    this.schemaScript = await schemaGenerator.build()
  }
}

export default Model
