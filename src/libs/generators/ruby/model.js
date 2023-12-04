import { snakeCase } from 'lodash'
import pluralize from 'pluralize'

import SchemaGenerator from './schemaGenerator'

class Model {
  constructor(name, attributes) {
    this.name = name
    this.attributes = attributes
    this.tableName = snakeCase(pluralize(this.name))
    // TODO: add table charset, default: "utf8mb4"
    // TODO: add table collation, default: "htf8mp4_unicode_ci"
    // TODO: add indexes
  }

  generateSchemaFile() {
    const schemaGenerator = new SchemaGenerator(this)
    schemaGenerator.build()
  }
}

export default Model
