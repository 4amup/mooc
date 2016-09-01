# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 10:37:00 2015

@author: lenovo
"""
#装饰、排序、反装饰
#decorate，sort，undecorate
words = ['abc', 'fijojrio', 'fiejngn', 'sjfhskhf']

lst = []
for word in words:
    lst.append((len(word), word))
#decorate    

lst.sort(reverse = True)
#sort

res = []
for length, word in lst:
    res.append(word)
#undecorate
    
print res

words.sort(key = lambda x: len(x), reverse = True)
print words