export function calculateTimeBasedOnStringArray(numbers: string[]): number {
    return numbers.reduce(
        (prevValue, curValue) => +curValue + +prevValue,
        0
    );
}
