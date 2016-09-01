#include "stdio.h"

int main(int argc, char const *argv[])
{
	// int a;
	// a = 6;
	// printf("sizeof(int)=%ld\n", sizeof(double));
	// printf("sizeof(a)=%ld\n", sizeof(a));

	// int i = 0;
	// int p;
	// p = (int)&i;
	// printf("0x%x\n", p);
	// printf("%p\n", &i);
	// printf("%lu\n", sizeof(&i));

	int a[10];
	printf("%p\n", &a);
	printf("%p\n", a);
	printf("%p\n", &a[0]);
	printf("%p\n", &a[1]);
	printf("%p\n", &a[2]);
	//数组的地址问题演示

	return 0;
}