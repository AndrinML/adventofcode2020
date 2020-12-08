def parse_input():
    passwords = []
    with open("day2.txt") as file:
        for line in file:
            inputs = line.split(" ")
            min_count, max_count = inputs[0].split("-")
            letter, _ = inputs[1].split(":")
            password = inputs[-1]
            passwords.append((int(min_count), int(max_count), letter, password))

    return passwords


def check_password_valid(min_count, max_count, letter, password):
    assert min_count <= max_count

    letter_count = 0
    for char in password:
        if char == letter:
            letter_count += 1

    return min_count <= letter_count <= max_count


def check_password_valid_new_policy(min_pos, max_pos, letter, password):
    return (password[min_pos - 1] == letter) != (password[max_pos - 1] == letter)


def day2(new_policy):
    passwords = parse_input()
    num_valid = 0
    for min_count, max_count, letter, password in passwords:
        if new_policy:
            if check_password_valid_new_policy(min_count, max_count, letter, password):
                num_valid += 1
        else:
            if check_password_valid(min_count, max_count, letter, password):
                num_valid += 1

    return num_valid


def main_day2():
    print(f"day 2a {day2(False)}")
    print(f"day 2b {day2(True)}")
