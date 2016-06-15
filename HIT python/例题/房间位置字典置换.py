# -*- coding: utf-8 -*-
"""
Created on Wed Oct 21 16:55:55 2015

@author: lenovo
"""

d1 = {'Zhang':123, 'Wang' : 456, 'Li' : 123, 'Zhao': 456}
d2 = {}

for name, room in d1.items():
    if room in d2:
        d2[room].append(name)
    else:
        d2[room] = [name]
        
print d2