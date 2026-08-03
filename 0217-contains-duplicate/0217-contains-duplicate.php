class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        $dupl =  [];
        foreach($nums as $num){
            if(isset($dupl[$num])){
                return true;
            }
            $dupl[$num] = true;
        }
        return false;
    }
}