/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var digital = require('linear-preset-factory')(require('../src/index'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice(0).reverse();
}

describe('digital information presets', function() {
  it('should convert correctly', function() {
    (760217600).should.be.exactly(convert(760217600, invert(digital.byte_byte)), 'byte_byte')
      .and.exactly(convert(6081740800, invert(digital.byte_bit)), 'byte_bit')
      .and.exactly(convert(742400, invert(digital.byte_kibibyte)), 'byte_kibibyte')
      .and.exactly(convert(725, invert(digital.byte_mebibyte)), 'byte_mebibyte')
      .and.exactly(convert(0.7080078125, invert(digital.byte_gibibyte)), 'byte_gibibyte')
      .and.exactly(convert(0.0006914138793945312, invert(digital.byte_tebibyte)), 'byte_tebibyte')
      .and.exactly(convert(6.752088665962219e-7, invert(digital.byte_pebibyte)), 'byte_pebibyte')
      .and.exactly(convert(6.59383658785373e-10, invert(digital.byte_exbibyte)), 'byte_exbibyte')
      .and.exactly(convert(6.439293542825908e-13, invert(digital.byte_zebibyte)), 'byte_zebibyte')
      .and.exactly(convert(6.288372600415926e-16, invert(digital.byte_yobibyte)), 'byte_yobibyte');

    (0).should.be.exactly(convert(0, digital.byte_byte), 'byte_byte')
      .and.exactly(convert(0, digital.byte_bit), 'byte_bit')
      .and.exactly(convert(0, digital.byte_kibibyte), 'byte_kibibyte')
      .and.exactly(convert(0, digital.byte_mebibyte), 'byte_mebibyte')
      .and.exactly(convert(0, digital.byte_gibibyte), 'byte_gibibyte')
      .and.exactly(convert(0, digital.byte_tebibyte), 'byte_tebibyte')
      .and.exactly(convert(0, digital.byte_pebibyte), 'byte_pebibyte')
      .and.exactly(convert(0, digital.byte_exbibyte), 'byte_exbibyte')
      .and.exactly(convert(0, digital.byte_zebibyte), 'byte_zebibyte')
      .and.exactly(convert(0, digital.byte_yobibyte), 'byte_yobibyte');
  });
});
