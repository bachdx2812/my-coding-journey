import request from '@/libs/api'

export default class BaseDbModel {
  static async fetchList() {
    return this.fromJson(await request(this.apiEndpoint))
  }
}
