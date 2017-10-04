n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]
arr = map(lambda a,b: a|b, arr1, arr2)

matrix = [[ ' ' for col in range(n)] for row in range(n)]

for i in range(n):
    for j in range(n):
        div = (arr[i] // (2 ** (n-j-1)))
        if div:
            matrix[i][j] = '#'
            arr[i] -= (2 ** (n-j-1))
    matrix[i] =  ''.join(matrix[i])
            
print(matrix)
