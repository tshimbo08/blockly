Blockly.JavaScript['tos9300_block'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'STATEMENT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log("tos9300");\n'+
  'var tos9300_result;\n'+
  'var tos9300_result_curr;\n'+
  'async function tos9300_block(){'+statements_name+'}'+'await tos9300_block();';
  return code;
};

Blockly.JavaScript['acw_block'] = function(block) {
  var number_acvoltval = block.getFieldValue('ACVOLTVAL');
  var value_acvolt = Blockly.JavaScript.valueToCode(block, 'ACVOLT', Blockly.JavaScript.ORDER_ATOMIC);
  var number_freqval = block.getFieldValue('FREQVAL');
  var value_freq = Blockly.JavaScript.valueToCode(block, 'FREQ', Blockly.JavaScript.ORDER_ATOMIC);
  var number_timeval = block.getFieldValue('TIMEVAL');
  var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  var number_upperval = block.getFieldValue('UPPERVAL');
  var value_upper = Blockly.JavaScript.valueToCode(block, 'UPPER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =
  'function acw_block(){\n'+
  'return new Promise((resolve,reject) => {\n'+
  'console.log("acwin");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "FUNC ACW;ACW:Volt '+value_acvolt+';ACW:Volt:Freq '+value_freq+';ACW:VOLT:Tim '+value_time+';SENS:ACW:Judg '+value_upper+'"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'function acw_block1(){\n'+
'return new Promise((resolve,reject) => {\n'+
'console.log("acwin1");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "ABOR"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'function acw_block2(){\n'+
'return new Promise((resolve,reject) => {\n'+
'console.log("acwin2");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "INIT:TEST"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'function acw_block3(){\n'+
'console.log("acwin3");\n'+
'return new Promise((resolve,reject) => {\n'+
'acw_block31(resolve);\n'+
'});\n'+
'}\n'+
'function acw_block31(resolve){\n'+
'console.log("acwin31");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "STAT:OPER:TEST:COND?"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          if( response.indexOf("+256") != -1 ){\n'+
'               resolve();\n'+
'          }else{\n'+
'               setTimeout(acw_block31, 1000,resolve)};\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'        });\n'+
'}\n'+
'function acw_block4(){\n'+
'return new Promise((resolve,reject) => {\n'+
'console.log("acwin4");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "RES?"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'console.log("acwout");\n'+
'await acw_block()\n'+
'.then(function() {return acw_block1();})\n'+
'.then(function() {return acw_block2();})\n'+
'.then(function() {return acw_block3();})\n'+
'.then(function() {return acw_block4();});\n'
;
  return code;
};

Blockly.JavaScript['dcw_block'] = function(block) {
  var number_dcvolyval = block.getFieldValue('DCVOLYVAL');
  var value_dcvolt = Blockly.JavaScript.valueToCode(block, 'DCVOLT', Blockly.JavaScript.ORDER_ATOMIC);
  var number_timeval = block.getFieldValue('TIMEVAL');
  var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  var number_upperval = block.getFieldValue('UPPERVAL');
  var value_upper = Blockly.JavaScript.valueToCode(block, 'UPPER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =
  'function dcw_block(){\n'+
  'return new Promise((resolve,reject) => {\n'+
  'console.log("dcwin");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "FUNC DCW;DCW:Volt '+value_dcvolt+';DCW:VOLT:Tim '+value_time+';SENS:DCW:Judg '+value_upper+'"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'function dcw_block1(){\n'+
'return new Promise((resolve,reject) => {\n'+
'console.log("dcwin1");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "ABOR"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'function dcw_block2(){\n'+
'return new Promise((resolve,reject) => {\n'+
'console.log("dcwin2");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "INIT:TEST"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'function dcw_block3(){\n'+
'console.log("dcwin3");\n'+
'return new Promise((resolve,reject) => {\n'+
'dcw_block31(resolve);\n'+
'});\n'+
'}\n'+
'function dcw_block31(resolve){\n'+
'console.log("dcwin31");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "STAT:OPER:TEST:COND?"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          if( response.indexOf("+256") != -1 ){\n'+
'               resolve();\n'+
'          }else{\n'+
'               setTimeout(dcw_block31, 1000,resolve)};\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'        });\n'+
'}\n'+
'function dcw_block4(){\n'+
'return new Promise((resolve,reject) => {\n'+
'console.log("dcwin4");\n'+
'$.ajax({\n'+
'          url: "http://localhost:8000/cgi-bin/simple.py",\n'+
'          type: "post",\n'+
'          dataType: "text",\n'+
'          data: {\n'+
'            number: "10",\n'+
'            text: "RES?"\n'+
'          },\n'+
'        })\n'+
'        .done(function(response) {\n'+
'          $("#result").html(response);\n'+
'          console.log(response);\n'+
'          resolve();\n'+
'        })\n'+
'        .fail(function() {\n'+
'          $("#result").html("Failed.");\n'+
'          console.log("fail");\n'+
'          resolve();\n'+
'        });\n'+
'});\n'+
'}\n'+
'console.log("dcwout");\n'+
'await dcw_block()\n'+
'.then(function() {return dcw_block1();})\n'+
'.then(function() {return dcw_block2();})\n'+
'.then(function() {return dcw_block3();})\n'+
'.then(function() {return dcw_block4();});\n'
;
  return code;
};
Blockly.JavaScript['getresult_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
