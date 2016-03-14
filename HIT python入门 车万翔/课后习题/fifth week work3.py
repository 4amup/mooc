# -*- coding: utf-8 -*-
"""
Created on Tue Jan 12 21:30:02 2016

@author: lee
"""

#依次计算一系列给定字符串的字母值，字母值为字符串中每个字母对应的编号值
#（A对应1，B对应2，以此类推，不区分大小写字母，非字母字符对应的值为0）的总和。例如，Colin 的字母值为 3 + 15 + 12 + 9 + 14 = 53

#输入格式:
#一系列字符串，每个字符串占一行。

#输出格式：
#计算并输出每行字符串的字母值。

#输入样例：
#Colin
#ABC

#输出样例：
#53
#6

import re
d = {}
# d = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'}
word = 'abcdefghijklmnopqrstuvwxyz'
for index, alph in enumerate(word):
    # dd = zip(index, alph)
    d[alph] = index+1
# print d['a']

l = []#定义了一个空的集合
while True:
    s = raw_input()
    s = s.lower()
    if s == '':
        break
    else:
        l.append(s)

for word in l:
    n = 0
    for alph in word:
        if re.match('[a-z]', alph):
            n += d[alph]
    print n