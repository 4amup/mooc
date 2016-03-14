# -*- coding: utf-8 -*-
"""
Created on Tue Jul 14 08:02:41 2015

@author: lenovo
"""
#题目内容：
#10以内的素数2,3,5,7的和为17。要求计算得出任意正整数n以内的所有素数的和。

#输入格式:
#一个正整数n。

#输出格式：
#n以内的所有素数的和。

#输入样例：
#10

#输出样例：
#17
n = int(raw_input('number='))
s = 2
i = 3
if n < 2:
    s = 0
else:
    while i <= n:
        for j in range(2, i):
            if i % j == 0:
                break
            
        else:
            print i            
            s += i
        i += 1
    
print 'The sum is', s
