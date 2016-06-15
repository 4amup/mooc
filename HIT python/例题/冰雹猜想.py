# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 20:44:18 2016

@author: lee
"""

n = 50

while n != 1:
    if n % 2 == 0:
        n /= 2
    else:
        n = 3 * n + 1
    print n