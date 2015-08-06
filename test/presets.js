/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var digital = require('../src/linear-presets-digital-information');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('digital information presets', function() {
  it('should convert correctly', function() {
    (760217600).should.be.exactly(convert(6081740800, invert(digital.byteToBit)), 'byteToBit')
      .and.exactly(convert(742400, invert(digital.byteToKibibyte)), 'byteToKibibyte')
      .and.exactly(convert(725, invert(digital.byteToMebibyte)), 'byteToMebibyte')
      .and.exactly(convert(0.7080078125, invert(digital.byteToGibibyte)), 'byteToGibibyte')
      .and.exactly(convert(0.0006914138793945312, invert(digital.byteToTebibyte)), 'byteToTebibyte')
      .and.exactly(convert(6.752088665962219e-7, invert(digital.byteToPebibyte)), 'byteToPebibyte')
      .and.exactly(convert(6.59383658785373e-10, invert(digital.byteToExbibyte)), 'byteToExbibyte')
      .and.exactly(convert(6.439293542825908e-13, invert(digital.byteToZebibyte)), 'byteToZebibyte')
      .and.exactly(convert(6.288372600415926e-16, invert(digital.byteToYobibyte)), 'byteToYobibyte');

    (0).should.be.exactly(convert(0, digital.byteToBit), 'byteToBit')
      .and.exactly(convert(0, digital.byteToKibibyte), 'byteToKibibyte')
      .and.exactly(convert(0, digital.byteToMebibyte), 'byteToMebibyte')
      .and.exactly(convert(0, digital.byteToGibibyte), 'byteToGibibyte')
      .and.exactly(convert(0, digital.byteToTebibyte), 'byteToTebibyte')
      .and.exactly(convert(0, digital.byteToPebibyte), 'byteToPebibyte')
      .and.exactly(convert(0, digital.byteToExbibyte), 'byteToExbibyte')
      .and.exactly(convert(0, digital.byteToZebibyte), 'byteToZebibyte')
      .and.exactly(convert(0, digital.byteToYobibyte), 'byteToYobibyte');
  });
});
