Blockly.JavaScript['pcrwecontrol'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_visaaddr = Blockly.JavaScript.valueToCode(block, 'VISAADDR', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name + 'console.log("pcrwecontrol");\n';
  return code;
};
