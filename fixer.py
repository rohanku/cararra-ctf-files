import sys

f = open("bellman-troubles-5.txt")

[n, m] = list(map(int, f.readline().strip().split()))
l = [0] + [int(f.readline().strip()) for i in range(n)]
adj = [[] for i in range(n+1)]
edges = []
for i in range(m):
    [a, b, h] = list(map(int, f.readline().strip().split()))
    if a == 0:
        a = 59
    if b == 0:
        b = 59
    edges.append((a, b, h))
print(n, m)
print("\n".join([str(i) for i in l[1:]]))
for (a, b, h) in edges:
    print(a, b, h)
