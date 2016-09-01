#include "stdio.h"
//计算一个函数1+1/2+1/3+1/4+...+1/n
int main(int argc, char const *argv[])
{
	int n;
	int i;
	double sum = 0.0;
	double sign = 1.0;

	n = 100;
	//scanf("%d", &n);
	for (i = 1; i <= n; ++i)
	{
		sum += sign/i;
		sign = -sign;
	}

	printf("f(%d)=%f\n", n, sum);
	return 0;
}