class Solution {
    public boolean isValid(String s) {
        if (s.length()%2 != 0) return false;
        
        HashMap<Character, Character> pairs = new HashMap<Character, Character>();
        pairs.put('(',')');
        pairs.put('{','}');
        pairs.put('[',']');
        
        Stack<Character> stack = new Stack<Character>();
        
        for (int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            if (pairs.containsKey(c)) {
                stack.push(pairs.get(c));
            } else {
                if (stack.size() > 0 && stack.pop() != c) {
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
        
    }
}