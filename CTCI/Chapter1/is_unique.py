def is_unique(s):
    dict = {}
    for char in s:
        if char in dict:
            return False
        dict[char] = 1
    return True

# try for optimal solution without making another data strucuture at some point. 

