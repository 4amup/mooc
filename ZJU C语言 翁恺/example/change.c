#include <stdio.h>

int main()
{
	int amout = 100;
	int price = 0;
	
	printf("请输入金额：");
	scanf("%d", &price);
	
	printf("请输入票面：");
	scanf("%d", &amout);
	
	int change = 100 - price;
	
	printf("找您%d元\n", change) ;
	
	return 0;
}
