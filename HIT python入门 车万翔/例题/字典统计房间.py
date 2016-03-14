# -*- coding: utf-8 -*-
"""
Created on Sun Jan 17 09:20:26 2016

@author: lee
"""

d1 = {'Zhang':123, 'Wang':456, 'Li':123, 'Zhao':456}
d2 = {}
for name, room in d1.items():
    if room in d2:
        d2[room].append(name)
    else:
        d2[room] =[name]
print d2   
print d1     