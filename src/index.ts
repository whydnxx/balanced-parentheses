export class Utility {
    static isBalanced(str: string): boolean {
        const stack: string[] = [];
            for (const char of str) {
                if (char === "(") {
                    stack.push(char);
                } else if (char === ")") {
                    if (stack.length === 0 || stack.pop() !== "(") {
                        return false;
                    }
                }
            }
        return stack.length === 0;
    }
}