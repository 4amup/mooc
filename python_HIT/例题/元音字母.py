# -*- coding: utf-8 -*-
"""
Created on Sun Jan 10 18:59:59 2016

@author: lee
"""

def vowles_count(s):
    count = 0
    for c in s:
        if c in 'aeiouAEIOU'：:
            count += 1
        return count
print vowles_count('hello world')