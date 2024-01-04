import BaseDbModel from './baseDbModel'

export default class Roadmap extends BaseDbModel {
  static apiEndpoint = '/roadmaps'

  constructor(title, done) {
    super()

    this.title = title
    this.done = done
  }

  static fromJson(jsonData) {
    const result = []

    jsonData.forEach((item) => result.push(new Roadmap(item.title, item.done)))

    return result
  }
}
