#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())

def es_par(n):
    if n%2 !=0 or n>6 and n<20:
        return False
    else:
            return True




if es_par(n):
    print("Not Weird")
else:
    print("Weird")
    