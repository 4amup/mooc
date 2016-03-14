# include <stdio.h>

int main()
{
	int odd_count = 0;
	int even_count =0;
	int number;
	while (number != -1) {
		scanf ("%d", &number);
		if (number % 2 == 0) {
			++even_count;
		}
		else{
			++odd_count;
		}
		}
	printf("%d %d", odd_count-1, even_count) ;
	return 0;
}
