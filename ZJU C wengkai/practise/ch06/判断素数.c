#include "stdio.h"

int isPrime(int x, int knownPrimes[], int numberOfKnownPrimes);
int main()
{
	const int number = 10;
	int prime[number] = {2};
	int count = 1;
	int i = 3;
	while(count<number)
	{
		if (isPrime(i, prime, count))
		{
			prime[count++] = i;//小套路 用这个东西表达下一次将要写入的位置
		}
		{	//定义了一个内部空间，这是一段调试代码
			printf("i=%d \tcnt=%d\t", i, count);
			int i;
			for (int i = 0; i < number; ++i)
			{
				printf("%d\t", prime[i]);
			}
			printf("\n");
		}
		i++;
	}
	//构造前一百个的素数表
	for (i = 0; i < number; i++)
	{
		printf("%d", prime[i]);;
		if ((i+1)%5)
		{
			printf("\t");
		}
		else
		{
			printf("\n");
		}
	}
	return 0;
}

int isPrime(int x, int knownPrimes[], int numberOfKnownPrimes)
{
	int ret = 1;
	int i;
	for (int i = 0; i < numberOfKnownPrimes; ++i)
	{
		if (x % knownPrimes[i] == 0)
		{
			ret = 0;
			break;
		}
	}
	return ret;
}