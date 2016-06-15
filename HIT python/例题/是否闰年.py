# -*- coding: utf-8 -*-
"""
Created on Tue Jan 05 16:13:02 2016

@author: lenovo
"""

#判断是否是闰年的
#算法
#能被4整除，但不能被100整除，或者能被400整除，则是闰年
year = int(raw_input('Enter a year number:'))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print year, 'is a leap year.'
else:
    print year, 'is not a leap year.'