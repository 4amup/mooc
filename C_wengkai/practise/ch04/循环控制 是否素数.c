#include "stdio.h"

int main(int argc, char const *argv[])
{
	int x;
	scanf("%d", &x);

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
		printf("������\n");
	}else{
		printf("��������\n");
	}
	return 0;
}
