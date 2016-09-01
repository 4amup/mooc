# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 22:31:57 2016

@author: lee
"""

num = 13431
num_prime = 0
num_temp = num

while num_temp != 0:
    num_prime = num_prime * 10 + num_temp % 10
    num_temp /= 10
    
if num == num_prime:
    print 'The number', num, 'is a palindrome.'
else:
    print 'The number', num, 'is NOT a palindrome.'