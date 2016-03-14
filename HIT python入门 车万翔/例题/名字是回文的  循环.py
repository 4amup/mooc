# -*- coding: utf-8 -*-
"""
Created on Sun Jan 10 19:47:04 2016

@author: lee
"""
f = open('names.txt')

def is_panlindrom(name):
    low = 0
    high = len(name) - 1
    
    while low < high:
        if name[low] != name[high]:
            return False
        low += 1
        high -= 1
    return True

for line in f:
    line = line.strip()
    if is_panlindrom(line):
        print line,
        
f.close()