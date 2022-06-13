const BufferWrapper = function BufferWrapper(buffer) {
  this._offset = 0;
  this.buffer = buffer;
};

BufferWrapper.prototype.setOffset = function setOffset(offset) {
  this._offset = offset;
  return this._offset;
};

BufferWrapper.prototype.getOffset = function getOffset() {
  return this._offset;
};

BufferWrapper.prototype.readInt16LE = function readInt16LE() {
  const ret = this.buffer.readInt16LE(this._offset);
  this._offset += 2;
  return ret;
};

BufferWrapper.prototype.readUInt16LE = function readUInt16LE() {
  const ret = this.buffer.readUInt16LE(this._offset);
  this._offset += 2;
  return ret;
};

BufferWrapper.prototype.readUInt32LE = function readUInt32LE() {
  const ret = this.buffer.readUInt32LE(this._offset);
  this._offset += 4;
  return ret;
};

BufferWrapper.prototype.readInt32LE = function readInt32LE() {
  const ret = this.buffer.readInt32LE(this._offset);
  this._offset += 4;
  return ret;
};

BufferWrapper.prototype.readBytes = function readBytes(bufferLength) {
  const ret = this.buffer.toString('utf-8', this._offset, bufferLength + this._offset).trim();
  this._offset += bufferLength;
  return ret;
};

module.exports = BufferWrapper;
