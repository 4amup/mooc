#include "stdio.h"

int max(int a, int b)
{
	int ret;
	if (a>b)
	{
		return a;
	}
	else
	{
		return b;
	}
}
int main(int argc, char const *argv[])
{
	int a, b, c;
	a = 5;
	b = 6;
	c = max(10, 12);
	c = max(a, b);
	c = max(c, 23);
	printf("%d\n", max(a,b));
	return 0;
}