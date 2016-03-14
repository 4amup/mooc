#include <stdio.h>

int main()
{	
	for (int x = 2; x < 100; ++x)
	{
		int i;
		int is_prime = 1;
		for (i = 2; i < x; i++)
		{
			if (x % i == 0)
			{
				is_prime = 0;
				break;
			}
		}
		if (is_prime == 1)
		{
			printf("%d ",x);
		}
	}
	printf("\n");
	return 0;
}