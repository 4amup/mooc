# -*- coding: utf-8 -*-
"""
Created on Thu Oct 08 19:53:03 2015

@author: lenovo
"""
def swap(lst, i, j):
    tmp = lst[i]
    lst[i] = lst[j]
    lst[j] = tmp
    
def bubble_sort(lst):
    top = len(lst) - 1
    is_exchange = False    
    while is_exchange:
        for i in range(top):
            if lst[i] > lst[i + 1]:
                is_exchange = True
                swap(lst, i , i + 1)                
        top -= 1
lst = [5, 323, 45, 13, 20]


lst.sort()
print lst