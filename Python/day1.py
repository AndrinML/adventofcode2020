def day1a():
    goal = 2020
    nums_set = set()
    with open("day1.txt") as file:
        for line in file:
            number = int(line.strip())
            if (goal - number) in nums_set:
                return number * (goal - number)
            else:
                nums_set.add(number)


def day1b():
    goal = 2020
    nums = []
    with open("day1.txt") as file:
        for line in file:
            nums.append(int(line.strip()))

    for i in range(0, len(nums)):
        nums_set = set()
        new_goal = goal - nums[i]
        for j in range(0, len(nums)):
            if i == j:
                continue
            number = nums[j]
            if (new_goal - number) in nums_set:
                return number * (new_goal - number) * nums[i]
            else:
                nums_set.add(number)


def main_day1():
    print(f"day 1a {day1a()}")
    print(f"day 1b {day1b()}")
