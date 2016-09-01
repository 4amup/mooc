# -*- coding: utf-8 -*-
"""
Created on Tue Jan 05 16:08:34 2016

@author: lenovo
"""

#根据下列信息计算在1901年1月1日至2000年12月31日间共有多少个星期天落在每月的第一天上？
#a)  1900.1.1是星期一
#b)  1月，3月，5月，7月，8月，10月和12月是31天
#c)  4月，6月，9月和11月是30天
#d)  2月是28天，在闰年是29天
#e)  公元年数能被4整除且又不能被100整除是闰年
#f)  能直接被400整除也是闰年

#输出格式：
#一个正整数
countday = 1
total = 0

for year in range(1900, 2001):
    for month in range(1, 13):
        if month == 1:
            day = 31
        elif month == 2:
            if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
                day = 29
            else:
                day = 28
        elif month == 3:
            day = 31
        elif month == 4:
            day = 30
        elif month == 5:
            day = 31
        elif month == 6:
            day = 30
        elif month == 7:
            day = 31
        elif month == 8:
            day = 31
        elif month == 9:
            day =30
        elif month ==10:
            day =31
        elif month == 11:
            day = 30
        else:
            day = 31
        countday += day
        
        if (countday % 7 == 0) and year > 1900:
            total += 1

print total