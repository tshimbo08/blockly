Blockly.JavaScript['acvolt'] = function(block) {
  var number_acvolt = block.getFieldValue('ACVOLT');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("acvolt");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "VOLT:AC ' + value_name + '"\n'+
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
