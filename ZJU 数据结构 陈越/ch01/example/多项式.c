#include "stdio.h"
#include "time.h"
#include "math.h"

clock_t start, stop; //clock_t是clock()函数返回的变量类型
double duration;
#define maxn 10
#define maxk 1e7

double f(int n, double a[], double x)
{
	int i;
	double p = a[0];
	for (i=1;i<=n;i++)
		p += (a[i] * pow(x, i));
	return p;
}

double f_s(int n, double a[], double x)
{
	int i;
	double p = a[n];
	for (i=n;i>0;i--)
		p = a[i-1] + x*p;
	return p;
}
int main()
{
	int i;
	double a[maxn];
	for (int i = 0; i < maxn; ++i)
	{
		a[i] = (double)i;
	}

	start = clock();
	for (int i = 0; i < maxk; ++i)
	{
		f(maxn - 1, a, 1.1);
	}
	stop = clock();
	duration = ((double)(stop - start))/CLK_TCK/maxk;
	printf("tickz1=%f\n", double(stop - start));
	printf("duration1=%6.2e\n", duration);

	start = clock();
	for (int i = 0; i < maxk; ++i)
	{
		f_s(maxn - 1, a, 1.1);
	}
	stop = clock();
	duration = ((double)(stop - start))/CLK_TCK/maxk;
	printf("tickz2=%f\n", double(stop - start));
	printf("duration2=%6.2e\n", duration);
	return 0;
}