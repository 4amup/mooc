# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 10:02:05 2015

@author: lenovo
"""

students = [['zhang', 84], ['wang', 89], ['li', 77]]
    
students.sort(key = lambda x: x[1], reverse = True)

print students
