Blockly.Blocks['pcrwecontrol'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("PCR-WE");
    this.appendValueInput("VISAADDR")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("ADDR"), "NAME");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("PCR-WE");
 this.setHelpUrl("http://www.kikusui.co.jp");
  }
};