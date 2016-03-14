# -*- coding: utf-8 -*-
"""
Created on Wed Oct 07 09:36:52 2015

@author: lenovo
"""

def swap(lst, a, b):
    tmp = lst[a]
    lst[a] = lst[b]
    lst[b] = tmp
    
x = [10, 20, 30]

swap(x, 0, 1)
print x