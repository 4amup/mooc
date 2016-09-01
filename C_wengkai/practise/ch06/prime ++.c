#include "stdio.h"

int main()
{
	const int maxNumber = 25;
	int isPrime[maxNumber];
	int i;
	int x;
	for (int i = 0; i < maxNumber; ++i)
	{
		isPrime[i] = 1;
	}//初始化数组元素全部为1；

	for (int x = 2; x < maxNumber; ++x)
	{
		if (isPrime[x])
		{
			for (int i = 2; i*x < maxNumber; ++i)
			{
				isPrime[i*x] = 0;
			}
		}
	}
	
	for (int i = 2; i < maxNumber; ++i)
	{
		if (isPrime[i])
		{
			printf("%d\t", i);
		}
	}
	printf("\n");
	return 0;
}