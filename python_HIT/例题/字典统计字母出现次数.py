# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 15:44:16 2015

@author: lenovo
"""

s = 'fsakaoujioenfajlaljljlkjajfklsajfs'

d = {}

for i in s:
    if i in d:
        d[i] += 1
    else:
        d[i] = 1
print d