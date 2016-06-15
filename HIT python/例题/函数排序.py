# -*- coding: utf-8 -*-
"""
Created on Thu Jan 14 19:08:28 2016

@author: lenovo
"""
students = [['zhang', 84], ['wang', 89], ['li', 77], ['zhao', 53]]

students.sort(key = lambda x: x[1], reverse = True)

print students