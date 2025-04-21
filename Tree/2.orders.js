/* 1. DFS Approach (Recursive) */

function numIslands(grid) {
    if (!grid || grid.length === 0) return 0

    let count = 0

    function dfs(grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
            return
        }

        grid[i][j] = '0' // Mark visited

        dfs(grid, i - 1, j) // Up
        dfs(grid, i + 1, j) // Down
        dfs(grid, i, j - 1) // Left
        dfs(grid, i, j + 1) // Right
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(grid, i, j)
            }
        }
    }

    return count
}


/* 2. BFS Approach (Using Queue) */
function numIslandsBFS(grid) {
    if (!grid || grid.length === 0) return 0

    let count = 0
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]] // Up, Down, Left, Right

    function bfs(grid, i, j) {
        let queue = [[i, j]]
        grid[i][j] = '0' // Mark visited

        while (queue.length) {
            // @ts-ignore
            let [x, y] = queue.shift()

            for (let [dx, dy] of directions) {
                let newX = x + dx, newY = y + dy

                if (newX >= 0 && newY >= 0 && newX < grid.length && newY < grid[0].length && grid[newX][newY] === '1') {
                    queue.push([newX, newY])
                    grid[newX][newY] = '0' // Mark visited
                }
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                bfs(grid, i, j)
            }
        }
    }

    return count
}

let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

// console.log(numIslands(grid))  // Output: 3
console.log(numIslandsBFS(grid))  // Output: 3