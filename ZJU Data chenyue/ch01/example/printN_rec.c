#include "stdio.h"

void printN_REC(int N)
{
	if (N)
	{
		printN_REC(N-1);
		printf("%d\n", N);
	}
	return;
}
void printN_REC(int N);
int main()
{
	int N;
	scanf("%d", &N);
	printN_REC(N);
	return 0;
}