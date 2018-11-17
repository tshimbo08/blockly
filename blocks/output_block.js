Blockly.Blocks['output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("OUTPUT");
    this.appendValueInput("NAME")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("OUTPUT");
 this.setHelpUrl("http://www.kikusui.co.jp");
  }
};