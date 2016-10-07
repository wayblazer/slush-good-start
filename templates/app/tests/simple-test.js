/* eslint-disable import/no-extraneous-dependencies */

const expect = require('chai').expect;
const moment = require('moment');
const sinon = require('sinon');
const fs = require('fs');

describe('simple test', () => {

  it('should pass a non equality test', () => {
    expect(1).to.not.equal(2);
  });

  it('faketimers should work', () => {

    const time = new Date(2011, 9, 1).getTime();
    expect(moment().toDate().getTime()).to.not.equal(time);

    const clock = sinon.useFakeTimers(time);
    expect(moment().toDate().getTime()).to.equal(time);

    clock.restore();
    expect(moment().toDate().getTime()).to.not.equal(time);

  });

  it('stubs should work', (done) => {

    const stub = sinon.stub(fs, 'readFile', (path, encoding, cb) => {
      cb(null, path);
    });

    const path = 'path';
    fs.readFile(path, 'utf8', (cb, data) => {
      expect(data).to.equal(path);
      done();
    });

    stub.restore();

  });

  it('mocks should work', () => {

    const mock = sinon.mock(fs);
    const path = 'path';
    const encoding = 'encoding';

    mock.expects('readFile').once().withArgs(path, encoding);

    fs.readFile(path, encoding);

    mock.verify();
    mock.restore();

  });


});
