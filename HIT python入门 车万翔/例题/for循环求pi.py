# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 20:27:56 2016

@author: lee
"""

pi = 0

for i in range(1, 10000):
    pi += 4 * (-1.0)**(i + 1) / (2 * i - 1)
pi * 4
print pi