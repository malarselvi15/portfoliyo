#include<stdio.h>
#include<stdlib.h>
int main(){
   int a,b;
   scanf("%d %d",&a,&b);
   
   a=abs(a+b);
   b=abs(a-b);
   a=abs(b-a);
   printf("Swapped numbers : %d %d",a,b);
   return 0;
}