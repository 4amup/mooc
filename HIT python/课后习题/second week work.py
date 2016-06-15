# -*- coding: utf-8 -*-
"""
Created on Thu Jun 04 11:05:47 2015

@author: lenovo
"""
weight = float (raw_input ('your weight(kg) is:'))
high = float (raw_input('your high(m) is:'))
bim = weight /high **2
print ('{0:.3}'. format (bim) )