# -*- coding: utf-8 -*-
"""
Created on Mon Jan 04 15:50:32 2016

@author: lenovo
"""

points = int(raw_input('leading points:'))
has_ball = raw_input('The leading team has ball (yes/no)')
seconds = int(raw_input('The remaining seconds:'))

points -= 3

if has_ball == 'yes':
    points += 0.5
else:
    points -= 0.5

if points < 0:
    point = 0

points **= 2

if points > seconds:
    print 'The leading is safe!'
else:
    print 'The leading is not safe!'