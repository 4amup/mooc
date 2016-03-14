# -*- coding: utf-8 -*-
"""
Created on Thu Oct 08 19:35:49 2015

@author: lenovo
"""
#找到最小的元素
#和第一个元素交换
#对于剩余的元素，重复上述两个步骤
def selection_sort_v1(lst):
    for i in range(len(lst)):
        min_index = i
        for j in range(i + 1, len(lst)):
            if lst[j] < lst[min_index]:
                min_index = j
        lst.insert(i ,lst.pop(min_index))
        
lst = [5, 3, 16]