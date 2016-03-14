# -*- coding: utf-8 -*-
"""
Created on Thu Jan 21 18:58:16 2016

@author: lenovo
"""
#百度上摘抄的第七周作业的代码
w_dic = {}
for i in range(1,101):
    line = raw_input()
    for w in line.split():
        if w in w_dic:
            if not (i in w_dic[w]):
                w_dic[w].append(i)
        else:
            w_dic[w] = [i]
sr = []
while True:
    qs = raw_input()
    if qs == '':
        break
    sr.append(qs)
 
jh = w_dic.keys()
jh.sort()
 
for w in jh:
    print w+': '+str(w_dic[w])[1:-1]
 
for qs in sr:
    os = []
    if qs[0:3] == 'OR:':
        ws = qs[3:].split()
        for w in ws:
            if w in w_dic:
                os = list(set(os) | set(w_dic[w]))
        if len(os) == 0:
            print 'None'
        else:
            os.sort()
            print str(os)[1:-1]
    else:
        if qs[0:4] == 'AND:':
            qs = qs[4:]
        ws = qs.split()
        if ws[0] in w_dic:
            os = w_dic[ws[0]]
        for w in ws:
            if w in w_dic:
                os = list(set(os) & set(w_dic[w]))
            else:
                os = []
                break
        if len(os) == 0:
            print 'None'
        else:
            os.sort()
            print str(os)[1:-1]