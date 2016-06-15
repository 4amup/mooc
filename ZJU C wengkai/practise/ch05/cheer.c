#include "stdio.h"
void cheer(int i)
{
	printf("cheer %d\n", i);
}
int main()
{
	int f = 2;
	cheer(f);
	return 0;
}

//每个函数都有自己的变量空间，参数也位于这个独立的空间中，和其他函数没有关系
//过去，对于函数参数表中的参数，叫做“形式参数”，调用函数时给的值，叫做“实际参数”
//C语言只能传值进入函数，不能传变量进入函数