import { remove, snakeCase } from 'lodash'
import pluralize from 'pluralize'

import SchemaGenerator from './schemaGenerator'

import ModelAttribute from './modelAttribute'

class Model {
  constructor(name, attributes) {
    this.attributes = attributes
    this.setName(name)
    // TODO: add table charset, default: "utf8mb4"
    // TODO: add table collation, default: "utf8mp4_unicode_ci"
    // TODO: add indexes

    this.schemaScript = null
  }

  setName(name) {
    this.name = name
    this.tableName = snakeCase(pluralize(this.name))
  }

  addNewAttribute() {
    this.attributes.push(new ModelAttribute())
  }

  removeAttribute(attribute) {
    let removeIndex = this.attributes.findIndex((a) => a.id == attribute.id)
    this.attributes.splice(removeIndex, 1)
  }

  async generateSchemaFile() {
    const schemaGenerator = new SchemaGenerator(this)
    this.schemaScript = await schemaGenerator.build()
  }
}

export default Model
