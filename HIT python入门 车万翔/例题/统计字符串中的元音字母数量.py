# -*- coding: utf-8 -*-
"""
Created on Fri Oct 02 10:41:28 2015

@author: lenovo
"""

def voice_count(s):
    count = 0
    for c in s:
        if c in 'aeiouAEIOU':
            count += 1   
    return count
    
print voice_count('hello, world')