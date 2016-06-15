#include "stdio.h"
#include "string.h"

int main(int argc, char const *argv[])
{
	// char line[] = "Hello";
	// printf("strlen=%lu\n", strlen(line));
	// printf("sizeof=%lu\n", sizeof(line));

	char s1[] = "abc";
	char s2[] = "Abc";
	printf("%d\n", strcmp(s1, s2));
	return 0;
}