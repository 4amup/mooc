# -*- coding: utf-8 -*-
"""
Created on Tue Oct 27 08:54:59 2015

@author: lenovo
"""

def load_dict(filename):
    word_dict = set()
    max_len = 1
    f = open(filename)
    for line in f:
        word = unicode(line.strip(),'utf-8')
        word_dict.add(word)
        if len(word) > max_len:
            max_len = len(word)
        
        return max_len, word_dict
        
def fmm_word_seg(sent, max_len, word_dict):
    begin = 0
    words = []
    sent = unicode(sent, 'utf-8')
    
    while begin < len(sent):
        for end in range(begin +max_len, begin, -1):
            if sent[begin:end] in word_dict:
                words.append(sent[begin:end])
                break
        begin = end
        
    return words
    
max_len, word_dict = load_dict('lexicon.dic')
sent = raw_input('input a sententce')
words = fmm_word_seg(sent, max_len, word_dict)

for word in words:
    print word