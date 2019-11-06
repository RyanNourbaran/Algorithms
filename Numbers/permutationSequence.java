class Solution {
    public String getPermutation(int n, int k) {
        StringBuilder sb = new StringBuilder();
        List<Integer> numbers = new ArrayList<Integer>();
        int[] factorials = new int[n+1];
        k--;
        factorials[0] = 1;
        for (int i=1; i<=n; i++) {
            factorials[i] = factorials[i-1] * i;
            numbers.add(i);
        }
        
        while (n > 0) {
            int index = k / factorials[n-1];
            sb.append(String.valueOf(numbers.get(index)));
            numbers.remove(index);
            
            k = k % factorials[n-1];
            n--;
        }
        
        return String.valueOf(sb);
    }
}