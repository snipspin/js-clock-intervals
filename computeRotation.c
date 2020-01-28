/*
precompute all rotation values once
and create a lookup-table

run in console:
    make computeRotation
    ./computeRotation > secondRotationArray.js
*/

#include <stdio.h>

float secondRotation(float second);

int main(void) {
    
    // js structure
    /*
    let rotation = [
        rotValue,
        rotValue,...
    }
    */
    printf("const rotation = [");
    for (int i = 0; i < 60; i++)
    {
        if (i % 10 == 0) 
        {
            printf("\n");
        }
        (i < 60 - 1)? printf("%.0f,", secondRotation((float)i)) : printf("%.0f", secondRotation((float)i));
    }
    printf("];\n");
    return 0;
}

float secondRotation(float second) 
{
    return (second / 60) * 360;
}