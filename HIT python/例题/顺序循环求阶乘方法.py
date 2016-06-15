# -*- coding: utf-8 -*-
"""
Created on Fri Jan 08 11:10:28 2016

@author: lenovo
"""
n = int(raw_input('n='))
def p(n):
    x = 1
    i = 1
    while i <= n:
        x = x * i
        i += 1
    return x
print 'n!=', p(n)