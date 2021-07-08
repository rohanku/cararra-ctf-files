#include <stdio.h>

#define FLAG_SIZE 64

char flag[FLAG_SIZE];

int main() {
   int overflow_me1 = 0;
   int overflow_me2 = 0;
   int overflow_me3 = 0;
   char buf[190];
   printf("Enter an epic string:\n");
   fflush(stdout);
   gets(buf);
   if (overflow_me1 == 0xDEADBEEF && overflow_me2 == 0xF00DD00D && overflow_me3 == 0xDECAFC0F) {
	   FILE *f = fopen("./r4/stack-attack-flag.txt", "r");
	   fgets(flag, FLAG_SIZE, f);
	   printf("%s", flag);
   }
   fflush(stdout);
   return 0;
}
