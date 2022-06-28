def is_unique(s):
    dict = {}
    char_list = list(s)
    for char in char_list:
        if char in dict:
            return False
        dict[char] = 1
    return True

# try for optimal solution without making another data strucuture at some point. 