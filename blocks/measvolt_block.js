Blockly.Blocks['measvolt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MEAS:VOLT");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("MEAS:VOLT");
 this.setHelpUrl("http://www.kikusui.co.jp");
  }
};