cap = 1000
rate = 0.047
money = 0
i = 0
while(i<10):
    money = (money + cap) * (1 + rate)
    i+=1
print '%.2f'%money