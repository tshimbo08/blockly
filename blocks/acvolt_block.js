Blockly.Blocks['acvolt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ACVOLT");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldNumber(0, 0, 230), "ACVOLT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("ACVOLT");
 this.setHelpUrl("http://www.kikusui.co.jp");
  }
};