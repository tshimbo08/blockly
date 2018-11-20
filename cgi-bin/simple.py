#!/usr/bin/env python
# -*- coding: utf-8 -*-

import cgi, cgitb
import tos9300

cgitb.enable()

form = cgi.FieldStorage()
text = form.getfirst("text")
n = form.getfirst("number")
sequence_list = []
tos = tos9300.tos9300('192.168.29.2')
if "?" in text:
    pass
else:
    commands=text.split(';')
    for command in commands:
        tos.Write(command)
print('Content-type: text/html\nAccess-Control-Allow-Origin: *\n')
print("<p>Sending Number: {}</p>".format(text))
if "?" in text:
    print("<p>Sending Text: {}</p>".format(tos.Ask(text)))
else:
    print("<p>Sending Text: {}</p>".format(tos.Ask("*IDN?")))
