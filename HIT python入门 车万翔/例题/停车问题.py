# -*- coding: utf-8 -*-
"""
Created on Fri Oct 02 10:26:01 2015

@author: lenovo
'ping jun ting che shu liang'
"""
import random
def parking(low, high):
    if high - low < 1:
        return 0
    else:
        x = random.uniform(low, high - 1)
        return parking(low, x) + 1 + parking(x+1, high)
s = 0
for i in range(10000):
    s += parking(0, 5)
print s / 10000.

#停车常数的问题
print s / 10000. / 5