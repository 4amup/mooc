// 一个正整数的因子是所有可以整除它的正整数。而一个数如果恰好等于除它本身外的因子之和，这个数就称为完数(perfect number)。例如6=1＋2＋3(6的因子是1,2,3)。
// 现在，你要写一个程序，读入两个正整数n和m（1<=n<m<1000），输出[n,m]范围内所有的完数。
// 提示：可以写一个函数来判断某个数是否是完数。

// 输入格式:
// 两个正整数，以空格分隔。

// 输出格式：
// 其间所有的完数，以空格分隔，最后一个数字后面没有空格。如果没有，则输出一个空行。

// 输入样例：
// 1 10

// 输出样例：
// 6
#include <stdio.h>

int per_num(int x);

int main()
{
	int n = 2;
	int m = 1000;
	// scanf("%d %d", &n, &m);
	// printf("%d %d\n", n, m);
	int i = n;
	int count=0;
	do
	{
		if (per_num(i))
		{
			if(count>0)
			{
				printf(" ");
			}
			printf("%d", i);
			count+=1;
		}
		i++;
	}while (i<=m);
	// for (int i = n; i <= m; i++)
	// {
	// 	int count=0;
	// 	if(per_num(i))
	// 	{
	// 		printf("%d", i);
	// 		count+=1;
	// 		printf(" ");//没能做到最后一个数字无空格，待优化
	// 	}
	// }
	return 0;
}

int per_num(int x)
{
	int t=x;
	int sum = 0;
	for (int i = 1; i < x; i++)
	{
		if (x%i==0)
		{
			sum+=i;
			// printf("#%d#", i);
		}
	}
	// printf("*%d*", sum);
	// printf(">%d<", t);
	if (t==sum)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}