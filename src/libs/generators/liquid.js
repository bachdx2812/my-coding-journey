import { Liquid } from 'liquidjs'

class LiquidTemplate {
  constructor(template, renderers) {
    this.engine = new Liquid()
    this.registerFilter()

    this.tpl = this.engine.parse(template)
    this.renderers = renderers
  }

  registerFilter() {
    this.engine.registerFilter('attributeSchemaLine', (v) => v.generateSchemaLine())
    this.engine.registerFilter('attributeGraphqlInputLine', (v) => v.generateGraphqlInputLine())
    this.engine.registerFilter('attributeGraphqlTypeLine', (v) => v.generateGraphqlTypeLine())
  }

  render() {
    return this.engine.render(this.tpl, { ...this.renderers })
  }
}

export default LiquidTemplate
