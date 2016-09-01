#include "stdio.h"

int search();
int main(void)
{
	int a[] = {2, 4, 6, 7, 1, 3, 5, 9, 11, 13, 23, 14, 35,};//数组集成初始化
	// {
	// 	int i;
	// 	for (int i = 0; i < sizeof(a)/sizeof(a[0]); ++i)//相当于length
	// 	{
	// 		printf("%d\t", a[i]);// 转义字符t是tab的意思
	// 	}
	// 	printf("\n");
	// }

	int x;
	int loc;
	printf("请输入一个数字：");
	scanf("%d", &x);
	loc=search(x, a, sizeof(a)/sizeof(a[0]));
	if (loc = -1)
	{
		printf("%d在第%d个位置上\n", x, loc);
	}
	else
	{
		printf("%d不存在\n", x);
	}
	return 0;
}
int search(int key, int a[], int length)
{
	int ret = -1;
	int i;
	for (int i = 0; i < length; ++i)
	{
		if (a[i] == key)
		{
			ret = i;
			break;
		}
	}
	return ret;
}