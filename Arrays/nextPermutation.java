class Solution {
    // 685543
    public void nextPermutation(int[] nums) {
        if (nums.length <= 1) return;
        
        int prev = nums[nums.length-1];
        int pivot = nums.length-1;
        //find location where a number is less than the number to its right
        for (int i=nums.length-2; i>=0; i--) {
            if (nums[i]< prev) {
                pivot = i;
                break;
            } else {
                prev = nums[i];
            }
        }
        if (pivot == nums.length-1) {
            nums = reverseArray(nums, 0);
        }
        //search right of pivot for next biggest number
        int nextBiggestIndex = pivot;
        for (int i=pivot+1; i<nums.length; i++) {
            if (nums[i] > nums[pivot]) {
                nextBiggestIndex = i;               
            }
            //we can stop searching once a number <= has been found, since it's in decreasing order
            else {
                break;
            }
        }
        
        //swap pivot and next biggest number
        int temp = nums[pivot];
        nums[pivot] = nums[nextBiggestIndex];
        nums[nextBiggestIndex] = temp;
        
        //reverse everything to the right of pivot so that it's as small as possible
        nums = reverseArray(nums,pivot+1);
        
        return;
    }
    
    private int[] reverseArray(int[] nums, int startIndex) {
        int left = startIndex;
        int right = nums.length-1;
        
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
        return nums;
    }
}
