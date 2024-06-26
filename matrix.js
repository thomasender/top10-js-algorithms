/**
 * @params levels of depth (n)
 * @returns a spiral matrix
 * F.e: 
 * 
 * n = 2
 * Output: 
 * [ 
 *   [1, 2],
 *   [4, 3]
 * ]
 * 
 * n = 3
 * Output:
 * [ 
 *   [1, 2, 3],
 *   [8, 9, 4],
 *   [7, 6, 5]
 * ]
 */
function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}

console.log(matrix(3))