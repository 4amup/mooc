# -*- coding: utf-8 -*-
"""
Created on Fri Jan 08 11:15:48 2016

@author: lenovo
"""

def p(n):
    if n == 1 or n == 0:
        return 1
    else:
        return n * p(n - 1)
    
print p(3)