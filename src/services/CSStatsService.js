const fs = require('fs');
const BufferWrapper = require('../utils/buffer-wrapper');

const fsp = fs.promises;
const RANKS_VERSION = 11;

class CSStats {
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
      bDefusions: data.readUInt32LE(),
      bDefused: data.readUInt32LE(),
      bPlants: data.readUInt32LE(),
      bExplosions: data.readUInt32LE(),
    };

    entity.bodyHits = new Array(9);

    for (let i = 0, len = entity.bodyHits.length; i < len; i += 1) {
      entity.bodyHits[i] = data.readUInt32LE();
    }

    return entity;
  }

  async parse(path) {
    const file = await fsp.readFile(path);
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

  async top(path) {
    const stats = await this.parse(path);

    const players = stats.sort((a, b) => ((a.kills < b.kills) ? 1 : -1));
    const length = players.length >= 10 ? 9 : players.length;

    return players.slice(0, length);
  }
}

module.exports = CSStats;
