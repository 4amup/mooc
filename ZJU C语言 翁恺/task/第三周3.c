# include <stdio.h>

int main()
{
	int number;
	scanf("%d", &number);
	int temp = number;
	int n = 0;
	int x;
	int binary = 1;
	int reslut;
	int sum = 0;
	do{
		x = temp % 10;
		n++;
		temp /=10;
		
		if (x%2==0)
		{
			if (n%2==0)
			{
				reslut = 1;
			}else{
				reslut = 0;
			}
		}else{
			if (n%2!=0)
			{
				reslut = 1;
			}else{
				reslut = 0;
			}
		}
		sum = sum + reslut * binary;
		binary *=2;
	}while(temp != 0);
	printf("%d", sum);
	return 0;
}
