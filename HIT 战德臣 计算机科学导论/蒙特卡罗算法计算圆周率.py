# -*- coding: utf-8 -*-
"""
Created on Sun Jan 31 08:59:09 2016

@author: lee
"""

"蒙特卡罗算法求解圆周率"
"""四分之一内切圆"""
import random
import math

def main():
    print'Please input the number of iterations:',
    n = int(raw_input())    #get the number of interations
    total = 0
    for i in xrange(n):
        x, y = random.random(), random.random()
        if math.sqrt(x ** 2 + y ** 2) < 1.0:
            total += 1
    mypi = 4.0 * total / n
    print 'Estimating pi with', n, 'iterations:', mypi
    print 'Value of math.pi is', math.pi
    print 'Error is', abs(math.pi - mypi) / math.pi
    print
def simple_main():
    from random import random
    n = 10 ** 6
    print sum(1 if random() ** 2 + random() ** 2 < 1 else 0 for i in range(n)) *4.0 / n

main()
simple_main()