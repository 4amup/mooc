# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 10:02:05 2015

@author: lenovo
"""

students = [['zhang', 84], ['wang', 89], ['li', 77], ['zhao', 53]]

s = 0                       #一般的实现方法
for student in students:
    s += student[1]
print float(s) / len(students)#一般实现方法

print float(sum([x[1] for x in students])) / len(students)#列表解析（列表的推导）的求法

