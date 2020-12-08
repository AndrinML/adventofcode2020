def day3a():
    tree_encounters = 0
    current_position = 0
    with open("day3.txt") as file:
        for line in file:
            forest = line.split("\n")[0]
            current_position %= len(forest)

            if forest[current_position] == "#":
                tree_encounters += 1

            current_position += 3

    return tree_encounters


def day3b():
    from functools import reduce

    tree_encounters = [0] * 5
    current_position = [0] * 5
    row = 0
    with open("day3.txt") as file:
        for line in file:
            for i, step in enumerate([1, 3, 5, 7, 1]):
                forest = line.split("\n")[0]
                current_position[i] %= len(forest)

                if i < 4:
                    if forest[current_position[i]] == "#":
                        tree_encounters[i] += 1
                    current_position[i] += step

                if i == 4 and row % 2 == 0:
                    if forest[current_position[i]] == "#":
                        tree_encounters[i] += 1
                    current_position[i] += step

                row += 1

    return tree_encounters, reduce(lambda x, y: x * y, tree_encounters)


def main_day3():
    print(f"day 3a {day3a()}")
    print(f"day 3b {day3b()}")
