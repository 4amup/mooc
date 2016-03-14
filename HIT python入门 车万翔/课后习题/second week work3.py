# -*- coding: utf-8 -*-
"""
Created on Fri Jun 05 19:18:30 2015

@author: lenovo
"""

a = int (raw_input ('trangle a is:'))
b = int (raw_input ('trangle b is:'))
c = int (raw_input ('trangle c is:'))
import math
C = math.acos (((a ** 2 + b ** 2 - c ** 2  ) /2 * a *b))
print ('{0:1}'. format( C * 180 /math.pi))                         