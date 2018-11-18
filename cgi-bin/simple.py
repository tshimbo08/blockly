#!/usr/bin/env python
# -*- coding: utf-8 -*-

import cgi, cgitb

cgitb.enable()

form = cgi.FieldStorage()
text = form.getfirst("text")
n = form.getfirst("number")
sequence_list = []

print('Content-type: text/html\nAccess-Control-Allow-Origin: *\n')
print("<p>Sending Number: {}</p>".format("None" if n is None else int(n)))
print("<p>Sending Text: {}</p>".format(text))
