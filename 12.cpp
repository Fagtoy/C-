#include <stdio.h>

int main_214(){
    double eps = 1.0;

    do {
        eps = eps / 2;
    } while (eps + 1 != 1);

    printf("eps: %lf", eps);
}