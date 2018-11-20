
/**
 * @fileoverview Math blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

/*
goog.provide('Blockly.Blocks.math');  // Deprecated
goog.provide('Blockly.Constants.Math');

goog.require('Blockly.Blocks');
goog.require('Blockly');
*/

/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['MATH_HUE']. (2018 April 5)
 */
Blockly.Constants.Math.HUE = 230;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for numeric value.
  {
  "type": "tos9300_block",
  "message0": "TOS9300 %1 ADDR %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "ADDR",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "STATEMENT"
    }
  ],
  "previousStatement": "Array",
  "nextStatement": null,
  "colour": 230,
  "tooltip": "TOS9300",
  "helpUrl": "http://www.kikusui.co.jp"
},

{
  "type": "acw_block",
  "message0": "ACW %1 ACVOLT %2 %3 FREQ %4 %5 TIME %6 %7 UPPER %8 %9",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "ACVOLTVAL",
      "value": 100,
      "min": 10,
      "max": 2000
    },
    {
      "type": "input_value",
      "name": "ACVOLT",
      "check": "Number"
    },
    {
      "type": "field_number",
      "name": "FREQVAL",
      "value": 50,
      "min": 50,
      "max": 60
    },
    {
      "type": "input_value",
      "name": "FREQ",
      "check": "Number"
    },
    {
      "type": "field_number",
      "name": "TIMEVAL",
      "value": 0.1,
      "min": 0.1,
      "max": 1000
    },
    {
      "type": "input_value",
      "name": "TIME",
      "check": "Number"
    },
    {
      "type": "field_number",
      "name": "UPPERVAL",
      "value": 0.01,
      "min": 0.00001,
      "max": 0.2
    },
    {
      "type": "input_value",
      "name": "UPPER",
      "check": "Number"
    }
  ],
  "previousStatement": "Array",
  "nextStatement": null,
  "colour": 330,
  "tooltip": "ACW",
  "helpUrl": "http://www.kikusui.co.jp"
},

{
  "type": "dcw_block",
  "message0": "DCW %1 DCVOLT %2 %3 TIME %4 %5 UPPER %6 %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "DCVOLYVAL",
      "value": 10,
      "min": 10,
      "max": 2000
    },
    {
      "type": "input_value",
      "name": "DCVOLT",
      "check": "Number"
    },
    {
      "type": "field_number",
      "name": "TIMEVAL",
      "value": 0.1,
      "min": 0.1,
      "max": 1000
    },
    {
      "type": "input_value",
      "name": "TIME",
      "check": "Number"
    },
    {
      "type": "field_number",
      "name": "UPPERVAL",
      "value": 0.01,
      "min": 0.0001,
      "max": 0.2
    },
    {
      "type": "input_value",
      "name": "UPPER",
      "check": "Number"
    }
  ],
  "previousStatement": "Array",
  "nextStatement": null,
  "colour": 15,
  "tooltip": "DCV",
  "helpUrl": "http://www.kikusui.co.jp"
},
  {
  "type": "getresult_block",
  "message0": "RESULT",
  "output": "String",
  "colour": 345,
  "tooltip": "RESULT",
  "helpUrl": "http://www.kikusui.co.jp"
},
]);  // END JSON EXTRACT (Do not delete this comment.)
