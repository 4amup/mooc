# -*- coding: utf-8 -*-
"""
Created on Wed Jul 15 08:15:34 2015

@author: lenovo
"""

num = int(raw_input('enter a number:'))
for i in range(2, num):
    if num % i == 0:
        print 'the number is not a prime'
        break
else:
    print 'the number is a prime'#循环非正常结束执行本条语句