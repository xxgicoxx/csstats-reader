const { CSStatsService } = require('../services');

class CSStatsController {
  constructor() {
    this._service = new CSStatsService();
  }

  /**
   * Parse csstats.dat
   *
   * @param {string} path Path
   *
   * @returns {Promise} Promise
   */
  async parse(path) {
    return this._service.parse(path);
  }

  /**
   * Parse csstats.dat and return top 10
   *
   * @param {string} path Path
   * @param {string} [parameter = 'kills'] Parameter of top 10
   *
   * @returns {Promise} Promise
   */
  async top(path, parameter = 'kills') {
    return this._service.top(path, parameter);
  }
}

module.exports = CSStatsController;
