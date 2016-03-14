# -*- coding: utf-8 -*-
"""
Created on Mon Jan 18 07:54:13 2016

@author: lenovo
"""

"""倒排索引（Inverted index），也常被称为反向索引，是一种索引方法，用来存储某个单词存在于哪些文档之中。
是信息检索系统中最常用的数据结构。通过倒排索引，可以根据单词快速获取包含这个单词的文档列表。

本作业主要完成以下四个功能：

(1). 建立索引：首先输入100行字符串，用于构建倒排索引，每行字符串由若干不含标点符号的、全部小写字母组成的单词构成，每个单词
之间以空格分隔。依次读入每个单词，并组成一个由<单词, 每个单词出现的行号集合>构成的字典，其中行号从1开始计数。

(2). 打印索引：按照字母表顺序依次输出每个单词及其出现的位置，每个单词出现的位置则按行号升序输出。
例如，如果“created”出现在第3, 20行，“dead”分别出现在14, 20, 22行。
则输出结果如下（冒号和逗号后面都有一个空格，行号不重复）：

…
created: 3, 20
dead: 14, 20, 22
…

(3). 检索：接下来输入查询(Query)字符串，每行包含一个查询，每个查询由若干关键字(Keywords)组成，每个关键字
用空格分隔且全部为小写字母单词。要求输出包含全部单词行的行号（升序排列），每个查询输出一行。
若某一关键字在全部行中从没出现过或没有一行字符串包含全部关键字，则输出“None”。遇到空行表示查询输入结束。
如对于上面创建的索引，当查询为“created”时，输出为“3, 20”；当查询为“created dead”时，输出为“20”；
当查询为“abcde dead”时，输出为“None”；

(4). 高级检索：当输入的Query以“AND: ”开始，则执行“与”检索，即要求输出包含全部关键字的行；
如果输入的Query以“OR:”开始，则执行“或”检索，即某行只要出现了一个关键字就满足条件。默认情况（不以“AND: ”或“OR: ”开始），
执行“与”检索。

输入格式:
首先输入100行字符串，每行字符串由若干不含标点符号的、全部小写字母组成的单词构成，每个单词之间以空格分隔。
若干个查询，每个查询占一行，既可能是普通检索，也可能是高级检索。

输出格式：
首先打印索引，然后将每个查询的结果输出到一行。"""
from string import punctuation
#初始化函数各个变量，我的line没有采用手工输入的方式，太麻烦。我从虎扑上弄了一篇英文文档，命名成‘seventh’，放到了文件夹下。
f = open('seventh.txt')
row = 0
word_dict = {}
#这一块是做初始化索引的，主要功能是实现（1）
for line in f:
    row += 1
    for word in line.lower().translate(None, punctuation).strip().split():#这一大堆括号我查了资料才码出来的。里面的translate函数。
        if word in word_dict:
            if not (row in word_dict[word]):   #这一句是用来去掉重复的行数的
                word_dict[word].append(row)
        else:
            word_dict[word] = [row]
#这一块是做了一个输入的待检索关键词的列表储存起来       
search_word = []
while True:
    keyword = input('Enter a string:')
    if keyword ==' ':
        break
    search_word.append(keyword)

word_index = word_dict.keys()
word_index.sort()       #重新生成一个存储着键的有序列表，以供循环时候使用

for word in word_index:
    print word + ': ' + str(word_dict[word])[1:-1]      #尾部的【1：-1】作用是去掉中括号，真是聪明啊！
#=========================================以上代码实现了（1）和（2）============================================
for keyword in search_word:
    result_search = []
    if keyword[:3] == 'OR: ':
        for word in keyword[3:].split():
            if word in word_dict:
                result_search = list(set(result_search)|set(word_dict[word]))       #中间的“|”是并集符号
        if len(result_search) == 0:
            print 'None'
        else:
           print str(result_search.sort())[1:-1]
    else:
        if keyword[:4] == 'AND: ':
            keyword = keyword[4:]
        word_search = keyword.split()
        if word_search[0] in word_dict:
            result_search = word_dict[word_search[0]]            
            for word in word_search:
                if word in word_search:
                    result_search = list(set(result_search)&set(word_dict[word]))
                else:
                    result = []
                    break
            if len(result_search) == 0:
                print 'None'
            else:
                result_search.sort()
                print str(result_search)[1:-1]
               