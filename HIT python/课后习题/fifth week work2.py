# -*- coding: utf-8 -*-
"""
Created on Mon Jan 11 20:01:37 2016

@author: lee
"""
#依次判断一系列给定的字符串是否为合法的 Python 标识符。

#输入格式:
#一系列字符串，每个字符串占一行。

#输出格式：
#判断每行字符串是否为合法的 Python 标示符，如果合法则输出 True，否则输出 False。

#输入样例：
#abc
#_def
#21gh

#输出样例：
#True
#True
#False

import re
l = []
while True:
    s = raw_input()
    if s == '':
        break
    else:
        l.append(s)
for s in l:
    if re.match('[A-Za-z_]', s):
        if re.search('[_]|\w', s):
            print 'True'
        else:
            print 'False'
    else:
        print 'False'