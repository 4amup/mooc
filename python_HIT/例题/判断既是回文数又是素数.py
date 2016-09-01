# -*- coding: utf-8 -*-
"""
Created on Thu Jan 07 16:27:02 2016

@author: lenovo
"""

num = int(raw_input('enter a number:'))

def is_palin(num):
    num_prime = 0
    num_temp = num
    
    while num_temp != 0:
        num_prime = num_prime * 10 + num_temp % 10
        num_temp /= 10
    
    if num == num_prime:
        return True
    else:
        return False

def is_prime(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True
        
if is_palin(num) and is_prime(num):
    print 'YES'
else:
    print'NO'