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
  }

  render() {
    return this.engine.render(this.tpl, { ...this.renderers })
  }
}

export default LiquidTemplate
