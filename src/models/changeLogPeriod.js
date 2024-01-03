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
    const result = []

    for (const [key, items] of Object.entries(jsonData)) {
      const changeLogItems = []

      items.forEach((item) => changeLogItems.push(new ChangeLogItem(item)))

      result.push(new ChangeLogPeriod(key, changeLogItems))
    }

    return result
  }
}
