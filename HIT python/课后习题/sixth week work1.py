# -*- coding: utf-8 -*-
"""
Created on Fri Jan 15 10:31:10 2016

@author: lenovo
"""
#定义一个 prime() 函数求整数 n 以内（不包括n）的所有素数（1不是素数），并返回一个按照升序排列的素数列表。
#使用递归来实现一个二分查找算法函数bi_search()，该函数实现检索任意一个整数在 prime() 函数生成的素数列表中位置（索引）的功能，
#并返回该位置的索引值，若该数不存在则返回 -1。

#输入格式:
#第一行为正整数 n
#接下来若干行为待查找的数字，每行输入一个数字

#输出格式：
#每行输出相应的待查找数字的索引值

#输入样例：
#10
#2
#4
#6
#7

#输出样例：
#0
#-1
#-1
#3
primes = []#定义一个空列表
def prime(n):#求素数列表的自定义函数
    if n == 1:
        return primes
    elif n == 2:
        return primes.append(2)
    else:
        i = 2
        while i < n:
            for j in range(2, i):
                if i % j == 0:
                    break           
            else:
                primes.append(i)
            i += 1
        return primes
def bi_search(lst, x):#二分查找的自定义函数
    low = 0
    high = len(lst) - 1
    while low <= high:
        mid = (low + high) / 2
        if lst[mid] == x:
            return mid
        elif lst[mid] > x:
            high = mid - 1
        else:
            low = mid + 1
    return -1
#以下是正常的函数执行过程
x = int(raw_input())
prime(x)
candicates = []
while True:
    s = raw_input()
    if s == '':
        break
    else:
        candicates.append(int(s))
for i in candicates:
    print bi_search(primes, i)