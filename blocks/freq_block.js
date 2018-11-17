Blockly.Blocks['freq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("FREQ");
    this.appendValueInput("FREQ")
        .setCheck("Number")
        .appendField(new Blockly.FieldNumber(50, 1, 500), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("FREQ");
 this.setHelpUrl("http://www.kikusui.co.jp");
  }
};