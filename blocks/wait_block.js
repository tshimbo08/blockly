Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WAIT");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("WAIT");
 this.setHelpUrl("http://www.kikusui.co.jp");
  }
};
