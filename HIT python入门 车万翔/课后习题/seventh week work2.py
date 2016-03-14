# -*- coding: utf-8 -*-
"""
Created on Fri Jan 22 16:23:30 2016

@author: lenovo
"""

"""实现逆向最大匹配分词算法，即从右向左扫描，找到最长的词并切分。
如句子“研究生命的起源”，逆向最大匹配分词算法的输出结果为“研究 生命 的 起源”。

输入格式:
第一行是以utf-8格式输入的词表，每个词之间以空格分隔。
接下来是若干行以utf-8格式输入的中文句子。

输出格式：
以utf-8格式输出的逆向最大匹配的分词结果，每个词之间使用空格分隔。每个输入对应一行输出。

输入样例：
你 我 他 爱 北京 天安门 研究 研究生 命 生命 的 起源
研究生命的起源
我爱北京天安门

输出样例：
研究 生命 的 起源
我 爱 北京 天安门
"""
#输入词表，以集合的方式储存在内存中供查询
word_dict = set()
while True:
    dct = raw_input('Enter some word:')
    if dct == '':
        break
    else:
        word_dict.add(dct)
# test the set named of 'word_dict'
print word_dict