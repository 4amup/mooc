# -*- coding: utf-8 -*-
"""
Created on Fri Oct 02 09:20:43 2015

@author: lenovo
"""
count = 0
def hanoi(n, A, B, C):
    global count
    if n == 1:
        print 'Move', n, 'from', A, 'to', C
        count += 1
    else:
        hanoi(n-1, A, C, B)
        #利用B柱子把盘子从A柱子移动到B柱子
        print 'Move', n, 'from', A, 'to', C
        count += 1
        hanoi(n-1, B, A, C)
        #利用C柱子把盘子从B柱子移动到A柱子
        
hanoi (50, 'left', 'mid' ,'right')
print count