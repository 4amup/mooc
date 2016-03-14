// 逆序的三位数（5分）
// 题目内容：

// 程序每次读入一个正三位数，然后输出逆序的数字。注意，当输入的数字含有结尾
// 的0时，输出不应带有前导的0。比如输入700，输出应该是7。
// 输入格式:
// 每个测试是一个3位的正整数。

// 输出格式：
// 输出逆序的数。

// 输入样例：
// 123

// 输出样例：
// 321

#include <stdio.h>

int main()
{
	int num = 0;
	scanf("%d", &num);
	
	int ge = num % 10;
	num = num / 10;
	
	int shi = num % 10;
	num = num /10;
	
	int bai = num % 10;
	
	int mum_change = ge * 100 + shi *10 + bai;
	printf("%d", mum_change);
	return 0;
}
