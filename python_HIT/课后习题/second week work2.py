# -*- coding: utf-8 -*-
"""
Created on Fri Jun 05 18:56:20 2015

@author: lenovo
"""

seconds = int (raw_input('please write seconds:'))
hours = int (seconds / 3600)
minutes = int ( seconds % 3600 /60 )
miao = int ( seconds % 3600 % 60 )
print hours , minutes , miao