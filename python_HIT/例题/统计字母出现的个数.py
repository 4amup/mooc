# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 14:30:15 2015

@author: lenovo
"""

s = ('sdfjslkjejkaljzwerfwjlfnnmvlsajleinvls')
lst = [0] * 26

for i in s:
    lst[ord(i)-97] += 1
    
print lst