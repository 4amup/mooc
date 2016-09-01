# -*- coding: utf-8 -*-
"""
Created on Sat Jan 02 10:53:48 2016

@author: lenovo
"""

year = 10
rate = 0.047
x = 0
money = 0
moneys = 0

while x < year:
    money = (money + 1000) * (1 + rate)
    x += 1
    
print money