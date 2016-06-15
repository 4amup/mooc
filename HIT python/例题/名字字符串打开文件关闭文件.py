# -*- coding: utf-8 -*-
"""
Created on Sun Jan 10 19:13:06 2016

@author: lee
"""

f = open ('names.txt', 'r')

for line in f:
    line = line.strip()
    print line.title()
    
f.close()