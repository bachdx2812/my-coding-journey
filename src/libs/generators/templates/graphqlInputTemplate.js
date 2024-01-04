const GraphqlInputTemplate = `class {{ model.graphqlInputFileName }} < ::Types::BaseInputObject
  graphql_name "{{ model.graphqlInputFileName }}"
  description "{{ model.graphqlInputFileName }}"

{%- for attribute in model.attributes %}
  {{ attribute | attributeGraphqlInputLine }}
{%- endfor %}
end
`

const GraphqlInputLineTemplate = `argument :{{name}}, {{graphqlType}}, required: false, description: "{{name}}"`

export { GraphqlInputTemplate, GraphqlInputLineTemplate }
