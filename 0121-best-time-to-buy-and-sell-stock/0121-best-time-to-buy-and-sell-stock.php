class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        $min = $prices[0];
        $max = 0;
        for($i=1;$i<count($prices);$i++){
            if($min>$prices[$i]){
                $min = $prices[$i];
            }
            if($max < ($prices[$i]-$min)){
                $max = $prices[$i]-$min;
            }
        }
        return $max;
    }
}