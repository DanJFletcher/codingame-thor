h=parseInt,a=readline().split(' '),b=h(a[0]),c=h(a[1]),d=h(a[2]),e=h(a[3]);for(;;){f='',g='';if(d>b){f='W';d--}if(d<b){f ='E';d++}if(e>c){g='N';e--}if(e<c){g='S';e++}print(g+f)}