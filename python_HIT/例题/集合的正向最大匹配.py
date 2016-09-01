# -*- coding: utf-8 -*-
"""
Created on Sun Jan 17 09:27:33 2016

@author: lee
"""

#中文分词
#算法：正向最大匹配
def load_dict(filename):
    word_dict = set()
    max_len = 1
    f = open(filename)
    for line in f:
        word = unicode(line.strip(), 'utf-8')
        word_dict.add(word)
        if len(word) > max_len:
            max_len = len(word)
            
    return max_len, word_dict
#正向最大匹配分词  
def fmm_word_seg(sentence, word_dict, max_len):
    begin = 0
    words = []
    sentence = unicode(sentence, 'utf-8')
    
    while begin < len(sentence):
        for end in range(min(beg + max_len, len(sentence)), beg, -1)):
            word = sentence[begin: end]
            if word in word_dict or end == begin + 1:
                words.append(word)
                break
        begin = end
    return words
max_len, word_dict = load_dict('lenxicon.txt')
words = fmm_word_seg(raw_input(), word_dict, max_len)
for word in words:
    print word