const { CSStatsService } = require('../services');

class CSStatsController {
  constructor() {
    this._service = new CSStatsService();
  }

  /**
   * Parse csstats.dat
   *
   * @param {string} path csstats.dat path
   *
   * @returns {Promise} return Promise
   */
  async parse(path) {
    return this._service.parse(path);
  }

  /**
   * Parse csstats.dat and return top 10
   *
   * @param {string} path csstats.dat path
   *
   * @returns {Promise} return Promise
   */
  async top(path) {
    return this._service.top(path);
  }
}

module.exports = CSStatsController;
