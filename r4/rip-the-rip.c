#include <stdio.h>

#define FLAG_SIZE 64

char flag[FLAG_SIZE];

void print_flag() {
   FILE *f = fopen("./r4/rip-the-rip-flag.txt", "r");
   fgets(flag, FLAG_SIZE, f);
   printf("%s", flag);
   fflush(stdout);
}

void vuln() {
   char buf[190];
   printf("Enter an epic string:\n");
   fflush(stdout);
   gets(buf);
   printf("Cool.\n");
   fflush(stdout);
}

int main() {
   vuln();
   return 0;
}
