# -*- coding: utf-8 -*-
"""
Created on Wed Oct 21 16:41:04 2015

@author: lenovo
"""
from string import punctuation

f = open('emma.txt')

word_freq = {}

for line in f:
    words = line.translate(None, punctuation).strip().split()
    for word in words:
        if word in word_freq:
            word_freq[word] += 1
        else:
            word_freq[word] = 1
#完成后字典储存每个字母出现的频次
print word_freq
freq_word = []
for word, freq in word_freq.items():
    freq_word.append((freq, word))
    
freq_word.sort(reverse = True)

for freq, word in freq_word[:10]:
    print word

f.close()