const fs = require('fs');
const BufferWrapper = require('../utils/buffer-wrapper');

const fsp = fs.promises;
const RANKS_VERSION = 11;

class CSStatsService {
  constructor(config = {}) {
    this.config = config;
  }

  async players() {
    const file = await fsp.readFile(this.config.path);
    const data = new BufferWrapper(file);
    const entities = [];

    if (data.readInt16LE() !== RANKS_VERSION) {
      throw new Error('Bad stats version');
    }

    let num = data.readUInt16LE();

    while (num !== 0) {
      entities.push(this.toEntity(data, num));

      num = data.readUInt16LE();
    }

    return entities;
  }

  async top(parameter = 'kills') {
    const stats = await this.players();

    const players = stats.sort((a, b) => ((a[parameter] < b[parameter]) ? 1 : -1));
    const length = players.length >= 10 ? 9 : players.length;

    return players.slice(0, length);
  }

  toEntity(data, offset) {
    const name = data.readBytes(offset);
    const newOffset = data.readUInt16LE();

    const entity = {
      name,
      unique: data.readBytes(newOffset),
      tks: data.readUInt32LE(),
      dmg: data.readUInt32LE(),
      deaths: data.readUInt32LE(),
      kills: data.readInt32LE(),
      shots: data.readUInt32LE(),
      hits: data.readUInt32LE(),
      hs: data.readUInt32LE(),
      bodyHits: new Array(9),
      bDefusions: data.readUInt32LE(),
      bDefused: data.readUInt32LE(),
      bPlants: data.readUInt32LE(),
      bExplosions: data.readUInt32LE(),
    };

    for (let i = 0; i < entity.bodyHits.length; i += 1) {
      entity.bodyHits[i] = data.readUInt32LE();
    }

    return entity;
  }
}

module.exports = CSStatsService;
