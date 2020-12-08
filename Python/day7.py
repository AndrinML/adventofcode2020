def parse_input():
    graph = dict()
    with open("day7.txt") as file:
        for line in file:
            source_node, target_nodes = line.split(" contain ")
            graph[source_node] = []
            if target_nodes == "no other bags.":
                continue
            target_nodes = target_nodes.split(",")
            for n in target_nodes:
                num_bags, bag_name = n[0], n[2:]
                pos = bag_name.find(".")
                if pos >= 0:
                    bag_name = bag_name[:pos]
                graph[source_node].append((bag_name, num_bags))

    return graph


def dfs(graph, visited, ):
    pass

def day7():
    graph = parse_input()
    i = 1


def main_day7():
    print(f"day 7 {day7()}")
