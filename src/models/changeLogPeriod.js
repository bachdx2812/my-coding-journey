import request from '@/libs/api'

import ChangeLogItem from './changeLogItem'

export default class ChangeLogPeriod {
  constructor(period, items) {
    this.period = period
    this.items = items
  }

  static async fetchList() {
    return this.fromJson(await request('/change_logs'))
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
