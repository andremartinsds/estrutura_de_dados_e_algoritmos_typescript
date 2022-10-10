def binary_search(list, item):
    down = 0
    high = len(list) - 1
    while down <= high:
        middle = (down + high) // 2
        bet = list[middle]
        if bet == item:
            return item
        if bet > item:
            high = middle
        else:
            down = middle + 1
    return None


if __name__ == '__main__':
    list_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
                    'v', 'w', 'x', 'y', 'z']
    print(binary_search(list_letters, 'c'))
