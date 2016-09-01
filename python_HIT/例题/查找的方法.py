# -*- coding: utf-8 -*-
"""
Created on Wed Oct 07 09:57:41 2015

@author: lenovo
"""

def search(lst, x):
    for i in range(len(lst)):
        if lst[i] == x:
            return i
            
    return -1
    
lst = [10, 5, 8, 13]
print lst.index(7)