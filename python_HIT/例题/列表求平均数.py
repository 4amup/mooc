# -*- coding: utf-8 -*-
"""
Created on Wed Jan 13 19:35:46 2016

@author: lee
"""

#若干书的平均数
nums = []

for i in range(10):
    nums.append(float(raw_input()))
   
avg = sum(nums) / len(nums)

print avg