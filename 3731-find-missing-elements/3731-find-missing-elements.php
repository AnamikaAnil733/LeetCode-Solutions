class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findMissingElements($nums) {
     $full = range(min($nums), max($nums));
      return array_diff($full, $nums);
    }
}