# -*- coding: utf-8 -*-
"""
Created on Thu Jan 21 09:35:17 2016

@author: lenovo
"""
d = {'Zhang':123, 'Wang':456, 'Li':123, 'Zhao':456}
def invert_dict(d):
    inverse = {}
    for key in d:
        val = d[key]
        if val in inverse:
            inverse[val].append(key)
        else:
            inverse[val] = [key]
    return inverse
print invert_dict(d)