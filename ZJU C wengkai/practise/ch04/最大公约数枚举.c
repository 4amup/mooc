#include "stdio.h"

int main(int argc, char const *argv[])
{
	int a = 12;
	int b = 15;
	int min;

	// scanf("%d %d", &a, &b);
	if (a<b)
	{
		min = a;
	}
	int ret = 0;
	int i;
	for (i = 1; i < min; ++i)
	{
		if (a%i == 0)
		{
			if (b%i == 0)
			{
				ret = i;
			}
		}
	}
	printf("%d和%d的最大公约数是%d.\n", a, b, ret);
	return 0;
}