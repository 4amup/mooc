# include <stdio.h>

int main()
{
	int type;
	
	scanf("%d", &type);
	
	switch (type)
	{
	case 1:
		printf("hello!");
		break;
	case 2:
		printf("good morning!");
		break;
	case 3:
		printf("good evening!");
		break;
	case 4:
		printf("goodbye!");
		break;
	default:
		printf("what do you said?");
	}
	return 0;
}
