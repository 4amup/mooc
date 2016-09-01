# -*- coding: utf-8 -*-
"""
Created on Wed Nov 04 10:54:03 2015

@author: lenovo
"""

#Problem Set 1
#Name:Micheal Lee
#Collaborators:None
#Time:2015.11.04

def prime(x):
    candidate = 3
    count = 1
    prime = 2
    for i in range(2, candidate):
        while candidate % i != 0:
            count += 1
            
        candidate += 2
            
        if candidate == x:
            print candidate

prime(20)
                    
        
