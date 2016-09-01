// 程序每次读入一个正三位数，然后输出逆序的数字。注意，当输入的数字含有结尾的0时，输出不应带有前导的0。比如输入700，输出应该是7。

// 输入格式:
// 每个测试是一个3位的正整数。

// 输出格式：
// 输出逆序的数。

// 输入样例：
// 123

// 输出样例：
// 321
#include "stdio.h"

int main(int argc, char const *argv[])
{
	int num;
	scanf("%d", num);
	int hundred = num/100;
	num%=100;

	int decade = num/10;
	
	int unit = num%10;

	int num_c = unit*100+decade*10+hundred;
	printf("%d", num_c);
	return 0;
}