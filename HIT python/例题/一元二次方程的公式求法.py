# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 14:19:53 2016

@author: lenovo
"""

import math

a = float(raw_input('input a:'))
b = float(raw_input('input b:'))
c = float(raw_input('input c:'))
if a != 0:
    delta = b ** 2 - 4 * a * c
    if delta < 0:
        print 'No solution'
    elif delta == 0:
        s = -b / 2 * a
        print 's:', s
    else:
        root = math.sqrt(b ** 2 - 4 * a * c)
        s1 = (-b + root) / 2 * a
        s2 = (-b - root) / 2 * a
        print 'The solution are:', s1, s2