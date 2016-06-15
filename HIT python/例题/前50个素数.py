# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 22:26:43 2016

@author: lee
"""

#计数器的思想
import math

count = 0
num = 2

while count < 50:
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            # print 'x is not a prime'
            break
    else:
        print num, 'is a prime'
        count += 1
    num += 1