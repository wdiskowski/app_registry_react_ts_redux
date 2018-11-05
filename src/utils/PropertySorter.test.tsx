import { sort } from "./PropertySorter"
import * as comparator from './PropertyComparator';

const PROPERTY_NAME = 'somePropertyName';
const SMALL_NUMBER_VALUE = 500;
const MIDDLE_NUMBER_VALUE = 700;
const BIG_NUMBER_VALUE = 1000;

jest.mock('./PropertyComparator', () => ({
    compareTo: jest.fn<number>((left, right) => left > right ? 1 : (right > left ? -1 : 0))
}))

describe('sort', () => {
    it('not empty array', () => {
        const result = sort([MIDDLE_NUMBER_VALUE, SMALL_NUMBER_VALUE, BIG_NUMBER_VALUE], PROPERTY_NAME);
        expect(comparator.compareTo).toBeCalledWith(MIDDLE_NUMBER_VALUE, SMALL_NUMBER_VALUE, PROPERTY_NAME);
        expect(result).toEqual([SMALL_NUMBER_VALUE, MIDDLE_NUMBER_VALUE, BIG_NUMBER_VALUE]);
    });

    it('empty array', () => {
        expect(sort([], PROPERTY_NAME)).toEqual([]);
    });


})