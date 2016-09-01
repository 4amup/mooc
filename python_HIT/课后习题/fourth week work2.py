# -*- coding: utf-8 -*-
"""
Created on Sun Jan 10 11:13:06 2016

@author: lenovo
"""

#若已知1800年1月1日为星期3，则对于一个给定的年份和月份，输出这个月的最后一天是星期几。

#输入格式:
#两行整数，分别代表年份和月份

#输出格式：
#星期数，0代表星期日

#输入样例：
#2033
#12

#输出样例：
#6

def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        return True
    else:
        return False
        
def get_num_of_days_in_month(year, month):
    if month in (1, 3, 5, 7, 8, 10, 12):
        return 31
    elif month in (4, 6, 9, 11):
        return 30
    elif is_leap_year(year):
        return 29
    else:
        return 28
def get_total_num_of_days(year,month):
    days = 0
    for y in range(1800, year):
        if is_leap_year(y):
            days += 366
        else:
            days += 365
    for m in range(1, month + 1):
        days += get_num_of_days_in_month(year, m)
        
    return days
def get_end_day(year, month):
    return (3 + (get_total_num_of_days(year, month) - 1) % 7) % 7
    #中间数字有减一的操作是因为计数的差别，1到10是有10天的，10-1=9，必须消除这个影响。

year = int(raw_input('Enter the year:'))
month = int(raw_input('Enter the month:'))
print get_end_day(year, month)