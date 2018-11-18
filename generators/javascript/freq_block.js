Blockly.JavaScript['freq'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var value_freq = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("freq");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "FREQ "' + value_freq + '\n'+
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
