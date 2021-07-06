#include <stdio.h>

#define FLAG_SIZE 64

char flag[FLAG_SIZE];

int main() {
   int overflow_me = 0;
   char buf[150];
   printf("Enter an epic string:\n");
   gets(buf);
   printf("overflow_me value: %d\n", overflow_me);
   if (overflow_me != 0) {
	   FILE *f = fopen("overflow-flag.txt", "r");
	   fgets(flag, FLAG_SIZE, f);
	   printf("%s\n", flag);
   }
   return 0;
}
