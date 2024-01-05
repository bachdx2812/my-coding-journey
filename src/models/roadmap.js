import BaseDbModel from './baseDbModel'

export default class Roadmap extends BaseDbModel {
  static apiEndpoint = '/roadmaps'

  constructor(title, done) {
    super()

    this.title = title
    this.done = done
  }

  static fromJson(jsonData) {
    const list = []

    jsonData['list'].forEach((item) => list.push(new Roadmap(item.title, item.done)))

    return {
      list: list,
      latestUpdatedAt: jsonData['updatedAt']
    }
  }
}
