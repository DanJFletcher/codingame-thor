import sys,math;a,b,c,e=[int(i)for i in raw_input().split()]
while 1:
    h='';i=''
    if(c>a):h='W';c+=1
    elif(c<a):h='E';c-=1
    if(e>b):i='N';e-=1
    elif(e<b):i='S';e+=1
    print i+h