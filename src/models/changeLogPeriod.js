import BaseDbModel from './baseDbModel'
import ChangeLogItem from './changeLogItem'

export default class ChangeLogPeriod extends BaseDbModel {
  static apiEndpoint = '/change_logs'

  constructor(period, items) {
    super()

    this.period = period
    this.items = items
  }

  static fromJson(jsonData) {
    const list = []

    for (const [key, items] of Object.entries(jsonData['list'])) {
      const changeLogItems = []

      items.forEach((item) => changeLogItems.push(new ChangeLogItem(item)))

      list.push(new ChangeLogPeriod(key, changeLogItems))
    }

    return {
      list: list,
      latestUpdatedAt: jsonData['updatedAt']
    }
  }
}
