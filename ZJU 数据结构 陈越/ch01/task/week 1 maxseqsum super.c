// 不仅要返回最大子列和，还要求返回最大子列的前值和后值
#include "stdio.h"

int MaxSubseqSum(int seq[], int k);

int main()
{
	int k;
	scanf("%d", &k);
	int seq[k];
	for (int i = 0; i < k; ++i)
	{
		scanf("%d", &seq[i]);
	}
	for (int i = 0; i < 3; ++i)
	{
		printf("%d", MaxSubseqSum(seq, k));
	}
	return 0;
}

int MaxSubseqSum(int seq[], int k)
{
	int thissum, maxsum;
	thissum = maxsum = 0;
	int a, b;
	a = b = 0;
	int result[3];
	for (int i = 0; i < k; ++i)
	{
		thissum += seq[i];
		if (thissum > maxsum)
		{
			maxsum = thissum;
			b = i;
		}
		else if (thissum < 0)
		{
			thissum = 0;
			a = i+1;
		}
	}
	return result[3] = int{maxsum, a, b};
}