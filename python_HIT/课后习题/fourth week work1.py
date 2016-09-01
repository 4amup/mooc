# -*- coding: utf-8 -*-
"""
Created on Thu Jul 09 13:28:46 2015

@author: lenovo
"""
#一个斐波那契数列的前10项为：1, 2, 3, 5, 8, 13, 21, 34, 55, 89，对于一个最大项的值
#不超过n的斐波那契数列，求值为偶数的项的和。

#输入格式:
#一个正整数n，如100。

#输出格式：
#值为偶数的项的和，如 2 + 8 + 34 = 44。

#输入样例：
#100

#输出样例：
#44

#偶数 even number 奇数  odd number

n = int(raw_input('Enter a integer:'))

def fib(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)
#斐不那契数列的函数表达式如上
i = 1
sum = 0
while fib(i) < n:
    if fib(i) % 2 == 0:
        sum += fib(i)
    i += 1 #添加一个累加器，计数器在while循环内部加一才行
print 'The sum is', sum