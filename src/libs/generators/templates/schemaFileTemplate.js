const SchemaFileContentTemplate = `# -*- mode: ruby -*-
# vi: set ft=ruby :

create_table "{{ model.tableName }}", charset: "utf8mb4", collation: "utf8mb4_unicode_ci", force: :cascade do |t|
{%- for attribute in model.attributes %}
  {{ attribute | attributeSchemaLine }}
{%- endfor %}
  t.timestamps
end`

const AttributeLineTemplate = `t.{{type}} :{{name}}, default: {{default}}, {{nullable}}`

export { SchemaFileContentTemplate, AttributeLineTemplate }
