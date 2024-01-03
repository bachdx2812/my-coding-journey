import BaseDbModel from './baseDbModel'

export default class Roadmap extends BaseDbModel {
  static apiEndpoint = '/roadmaps'

  constructor(content) {
    super()

    this.content = content
  }

  static fromJson(jsonData) {
    const result = []

    jsonData.forEach((item) => result.push(item))

    return result
  }
}
