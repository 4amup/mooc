# -*- coding: utf-8 -*-
"""
Created on Wed Jan 20 21:14:33 2016

@author: lee
"""
"""
旅行商问题。若干个城市，任何两个城市之间的距离都是确定的,
现要求一旅行商从某城市出发必须经过没一个城市且只能在每个城市逗留一次，最后回到原出发城市。
问事先如何确定好一条最短的路线使其旅行的费用最少。
最有代表性的组合优化问题之一。
"""
import random
#随机路径函数
def randompath(inc):
    allcity = inc[:]
    path = []
    loop = True
    while loop:
        if 1 == len(allcity):
            tmp = random.choice(allcity)
            path.append(tmp)
            loop = False
        else:
            tmp = random.choice(allcity)
            path.append(tmp)
            allcity.remove(tmp)
    return path
#计算距离函数    
def distcal(path, dist):
    sum_dist = 0
    for j in range(0, len(path) - 1):
        di = dist[int(path[j]) - 1][int(path[j + 1]) - 1]
        sum_dist += di
    di = dist[int(path[len(path) - 1]) - 1][path[0] - 1]
    sum_dist += di
    return sum_dist

if __name__=="__main__":        #如果模块是被导入，__name__的值为模块名字；如果模块是被直接执行，__name__的值为‘main’。
    city = [1, 2, 3, 4, 5]
    
    dist = ((0, 1, 3, 4, 5),
            (1, 0, 1, 2, 3),
            (3, 1, 0, 1, 2),
            (4, 2, 1, 0, 1),
            (5, 3, 2, 1, 0))
    for i in range(0, 5):
        print dist[i][:]
        
    print('===============')
    
    num = 100
    #随机产生100条路径
    optimal = 100000
    for i in range(0, num):
        pd = distcal(randompath(city), dist)
        if pd < optimal:
            optimal = pd
            #print pd
            
    print('The length of the optimal path is: %d' %optimal)