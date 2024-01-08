const GraphqlTypeTemplate = `class {{ model.graphqlTypeClassName }} < Types::BaseObject
  graphql_name "{{ model.graphqlTypeFileName }}"
  description "{{ model.graphqlTypeFileName }}"

{%- for attribute in model.attributes %}
  {{ attribute | attributeGraphqlTypeLine }}
{%- endfor %}
end
`

const GraphqlTypeLineTemplate = `field :{{name}}, {{graphqlType}}, null: true, description: "{{name}}"`

export { GraphqlTypeTemplate, GraphqlTypeLineTemplate }
