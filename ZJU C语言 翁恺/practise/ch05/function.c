#include "stdio.h"

void swap(int a, int b);
int main()
{
	int a = 5;
	int b = 6;

	swap(a, b);
	{
		int i = 0;
		// int i = 10;
		printf("%d\n", i);//块内变量
	}
	printf("a=%d,b=%d\n", a, b);
	return 0;
}

void swap(int a, int b)
{
	int swap;
	int t = a;
	printf("in swap, a=%f\n", a, b);
	a = b;
	b = t;
}