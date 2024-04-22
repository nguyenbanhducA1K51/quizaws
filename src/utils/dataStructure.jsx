export const createRangeArray = (start, end) => {
        // Calculate the length of the range
        const length = end - start;

        // Create an array from start to end-1 using Array.from
        return Array.from({ length }, (_, index) => start + index);
}