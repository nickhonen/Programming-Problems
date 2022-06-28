def check_permutation(s1, s2):
    sorted_s1 = sorted(s1)
    sorted_s2 = sorted(s2)
    return sorted_s1 == sorted_s2
    # O(nlogn) solution Brute Force


# standard library solution
from collections import Counter

def check_permutation_stllib(s1, s2):
    return len(a) == len(b) and Counter(a) == Counter(b)