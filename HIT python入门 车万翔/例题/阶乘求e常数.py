# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 20:19:35 2016

@author: lee
"""
e = 1
factorial = 1

for i in range(1, 100):
    factorial *= i    
    e += 1. / factorial
    
print 'e is', e