Blockly.JavaScript['pcrwecontrol'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_visaaddr = Blockly.JavaScript.valueToCode(block, 'VISAADDR', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name + 'console.log("pcrwecontrol1");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "PCR"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log("response");\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'        });\n';
  return code;
};
