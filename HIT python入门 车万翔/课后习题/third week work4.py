# -*- coding: utf-8 -*-
"""
Created on Tue Jan 05 16:51:06 2016

@author: lenovo
"""

#数字197可以被称为循环素数，因为197的三个数位循环移位后的数字：197,971,719均为素数。
#100以内这样的数字包括13个，2,3,5,7,11,13,17,31,37,71,73,79,97。要求任意正整数n以内一共有多少个这样的循环素数。
#输入格式:
#一个正整数n。
#输出格式：
#n以内循环素数的数目。
#输入样例：
#100
#输出样例：
#13

n = int(raw_input('Enter a int:'))
s = 0

def is_prime(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

def is_palin(num):
    num_p = 0
    num_t = num
    
    while num != 0:
        num_p = num_p * 10 + num % 10
        num /= 10
        
    if is_prime(num_p):
        return True
    else:
        return False

num = 2
while num <= n:
    if is_palin(num) and is_prime(num):
        s += 1
        print num
    num += 1
print s