# -*- coding: utf-8 -*-
"""
Created on Wed Jan 13 19:50:38 2016

@author: lee
"""

def search(lst, x):
    for i in range(len(lst)):
        if lst[i] == x:
            return i
            
    return - 1
    
lst = [10, 5, 8, 13]
print search(lst, 8)

def bi_seach(lst, x):
    low = 0
    high = len(lst) - 1
    
    while low <= high:
        mid = (low + high) / 2
        if lst[mid] == x:
            return mid
        elif lst[mid] > x:
            high = mid - 1
        else:
            low = mid + 1
            
    return -1
    
lst = [5, 8, 10, 13]
print bi_seach(lst, 8)
#时间复杂度是log2 n