# include <stdio.h>

int main()
{
	int BJT,UTC;
	scanf("%d",&BJT);
	UTC=BJT-800;

	if(UTC<0){
		UTC=BJT+2400-800;
	}
	printf("%d\n",UTC);
	return 0;
}
// 刚开始的我想的太复杂了，惭愧，光从程序的健壮性考虑，导致实际功能有错误。