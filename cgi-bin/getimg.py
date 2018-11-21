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
tos.write("HCOPY:SDUM:DATA?")
data = tos.read_raw()
f = open("screen.png","wb")
f.write(data[6:])
f.close()
print('Content-type: text/html\nAccess-Control-Allow-Origin: *\n')
print("<p>Sending Number: {}</p>".format(text))
