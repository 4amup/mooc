# -*- coding: utf-8 -*-
"""
Created on Sat Jan 16 09:11:50 2016

@author: lee
"""
#帕斯卡三角形，又称杨辉三角形是二项式系数在三角形中的一种几何排列。帕斯卡三角形通常从第0行开始枚举，并且每一行的数字是
#上一行相邻两个数字的和。在第0行只写一个数字1，然后构造下一行的元素。将上一行中数字左侧上方和右侧上方的数值相加。
#如果左侧上方或者右侧上方的数字不存在，用0替代。下面给出6行的帕斯卡三角形：
#     1
#    1 1
#   1 2 1
#  1 3 3 1
# 1 4 6 4 1
#1 5 10 10 5 1
#编写程序，输入帕斯卡三角形的高度 n，然后生成和上面例子一样风格的三角形。

#输入格式:
#一个正整数 n

#输出格式：
#相应高度的帕斯卡三角形，两个数字之间有一个空格

#输入样例：
#6

#输出样例：
#     1
#    1 1
#   1 2 1
#  1 3 3 1
# 1 4 6 4 1
#1 5 10 10 5 1
def pascalLine(num):
    lst = [1]
    if num == 0:
        return lst
    else:
        for i in range(num):
            lst = [0] + lst[:] + [0]
            lst = [lst[i] + lst[i + 1] for i in range(len(lst) - 1)]#列表解析的实际运用
        return lst

n = int(raw_input())
for i in range(0, n):
    lst = pascalLine(i)
    s = ''
    for j in lst:
        s = s + str(j) + ' '
    print ' ' * (n - i - 1) + s[:-1]