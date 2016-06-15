# -*- coding: utf-8 -*-
"""
Created on Sun Jan 10 20:02:02 2016

@author: lee
"""

f = open('names.txt')
def is_panlindrom_rec(name):
    if len(name) <= 1:
        return True
    else:
        if name[0] != name[-1]:
            return False
        else:
            return is_panlindrom_rec(name[1: -1])
def is_panlindrom(name):
    low = 0
    high = len(name) - 1
    
    while low < high:
        if name[low] != name[high]:
            return False
        low += 1
        high -= 1
    return True
def is_ascending(name):
    p = name[0]
    
    for c in name:
        if p > c:
            return False
        p = c
        
    return True
for line in f:
    line = line.strip()
    if is_ascending(line):
        print line,
        
f.close()