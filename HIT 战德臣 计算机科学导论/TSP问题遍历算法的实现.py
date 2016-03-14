# -*- coding: utf-8 -*-
"""
Created on Wed Jan 20 19:22:07 2016

@author: lee
"""
"""
旅行商问题。若干个城市，任何两个城市之间的距离都是确定的,
现要求一旅行商从某城市出发必须经过没一个城市且只能在每个城市逗留一次，最后回到原出发城市。
问事先如何确定好一条最短的路线使其旅行的费用最少。
最有代表性的组合优化问题之一。
"""

def distcal(path, dist):
    sum_dist = 0
    for j in range(0, len(path) - 1):
        di = dist[int(path[j]) - 1][int(path[j + 1]) - 1]
        sum_dist += di
    di = dist[int(path[len(path) - 1]) - 1][path[0] - 1]
    sum_dist += di
    return sum_dist

def perm(lst):
    if(len(lst)) <= 1:
        return [lst]
    #以上为递归基础
    r = []
    for i in range(len(lst)):
        s = lst[:i] + lst[i+1:]
        p = perm(s)
        for x in p:
            r.append(lst[i:i+1]+x)
    return r

if __name__ == "__main__":
    city = [1, 2, 3, 4, 5]
    
    dist = ((0, 1, 3, 4, 5),
            (1, 0, 1, 2, 3),
            (3, 1, 0, 1, 2),
            (4, 2, 1, 0, 1),
            (5, 3, 2, 1, 0))
    for i in range(0, 5):
        print dist[i][:]
        
    print('===============')
    #print('====')
    
    allpath = perm(city)
    #print allpath
    #print len(allpath)
    
    optimal = 1000000
    index = -1
    for i in range(0, len(allpath)):
        pd = distcal(allpath[i], dist)
        if pd < optimal:
            optimal = pd
            index = i
            
    print('The length of the optimal path is: %d' % optimal)
    print('The optimal path is:'), allpath[index]