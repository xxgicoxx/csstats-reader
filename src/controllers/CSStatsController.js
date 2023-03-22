const { CSStatsService } = require('../services');

class CSStatsController {
  /**
   * @param {Object} config Configs
   * @param {string} config.path csstats.dat path
   */
  constructor(config) {
    this._service = new CSStatsService(config);
  }

  /**
   * Parse csstats.dat
   *
   * @returns {Promise} Promise
   */
  async players() {
    return this._service.players();
  }

  /**
   * Parse csstats.dat and return top 10
   *
   * @param {string} [parameter = 'kills'] Parameter of top 10
   *
   * @returns {Promise} Promise
   */
  async top(parameter) {
    return this._service.top(parameter);
  }
}

module.exports = CSStatsController;
