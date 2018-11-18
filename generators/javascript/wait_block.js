Blockly.JavaScript['wait'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var startMsec = new Date(); while( new Date() - startMsec < '+value_name+');'

  return code;
};
