#include "stdio.h"

void printN_CIR(int N)
{
	int i;
	for (i = 1; i <=N; ++i)
	{
		printf("%d,", i);
	}
	return;
}
void printN_CIR(int N);
int main()
{
	int N;
	scanf("%d", &N);
	printN_CIR(N);
	return 0;
}