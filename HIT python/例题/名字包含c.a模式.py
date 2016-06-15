# -*- coding: utf-8 -*-
"""
Created on Sun Jan 10 20:08:21 2016

@author: lee
"""

import re

f = open('names.txt', 'r')

pattern = '(C.A)'

for line in f:
    name = line.strip()
    result = re.search(pattern, line)
    if result:
        print 'Find in {}'.format(line)
        
f.close()