/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let minTime = tasks[0][0] + tasks[0][1]
    for (let i = 1; i < tasks.length; i++) {
        if ((tasks[i][0] + tasks[i][1]) < minTime) {
            minTime = tasks[i][0] + tasks[i][1]
        }
    }
    return minTime
};