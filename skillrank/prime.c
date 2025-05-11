#include<stdio.h>
int main(){
int num,count=0;
scanf("%d",&num);
if(num<2){
    printf("Not prime");
}
else{
    for(int i=2;i*i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
}

if(count==0){
    printf("Prime");
}
else{
    printf("Not prime");
}
return 0;
}