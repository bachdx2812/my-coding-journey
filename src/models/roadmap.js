import request from '@/libs/api'

export default class Roadmap {
  constructor(content) {
    this.content = content
  }

  static async fetchList() {
    return this.fromJson(await request('/roadmaps'))
  }

  static fromJson(jsonData) {
    const result = []

    jsonData.forEach((item) => result.push(item))

    return result
  }
}
