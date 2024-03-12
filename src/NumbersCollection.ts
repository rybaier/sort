import Sorter from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data: number[]) {
        super()
    }

    // get - keyword for calling the property of length rather than a method function like compare or swap
    // example: const collection = New NumbersCollection([1,2,3,4]) => collection.length
    get length(): number {
        return this.data.length
    }

    // example: const collection = New NumbersCollection([1,2,3,4]) => collection.compare(1,2)
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    // example: const collection = New NumbersCollection([1,2,3,4]) => collection.swap(1,2)
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = leftHand
    }
}