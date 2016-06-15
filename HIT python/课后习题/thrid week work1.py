# -*- coding: utf-8 -*-
"""
Created on Fri Jun 12 15:33:09 2015

@author: lenovo
"""
#如果列出10以内自然数中3或5的倍数，则包括3,5,6,9。
#那么这些数字的和为23。要求计算得出任意正整数n以内中3或5的倍数的自然数之和。
#输入格式:
#一个正整数n。
#输出格式：
#n以内中3或5的倍数的自然数之和。
n = int(raw_input('please input a number:'))
s = 0
i = 0
while i <= n:
    if i % 3 == 0 or i % 5 == 0:
        print i
        s += i
    i += 1
print 's is', s