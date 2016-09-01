/*
正序分解整数
输入一个非负整数，正序输出它的每一位数字
输入：13425
输出：1 3 4 2 5
*/
#include "stdio.h"

int main(int argc, char const *argv[])
{
	int x;
	//scanf("%d", &x);
	x=15;

	int mask = 1;
	int t = x;
	while(t>9){
		t/=10;
		mask *= 10;
	}
	printf("x=%d, mask=%d\n", x, mask);
	do
	{
		int d = x/mask;
		printf("%d", d);
		if (mask>9)
		{
			printf(" ");
		}
		x %= mask;
		mask /= 10;
		// printf("x=%d,mask=%d,d=%d\n", x, mask, d);
	} while (mask>0);
	printf("\n");
	return 0;
}