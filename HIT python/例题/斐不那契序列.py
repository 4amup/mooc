# -*- coding: utf-8 -*-
"""
Created on Fri Jan 08 11:27:55 2016

@author: lenovo
"""
#斐不那契数列的公式表达如下：
#       1,              if n=1
#f(n)=  1,              if n=2
#       f(n-1)+f(n-2),  if n>2
#1 1 2 3 5 8 13 21 34 55 89
def fib(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)
        
print fib(22)