# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 20:37:59 2016

@author: lee
"""

pi = 0
sign = 1
divisor = 1

for i in range (1, 10000000):
    pi += 4.0 * sign / divisor
    sign *= -1
    divisor += 2
    
print 'pi is', pi