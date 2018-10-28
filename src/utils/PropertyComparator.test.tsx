import { compareTo } from "./PropertyComparator"

const PROPERTY_NAME = 'somePropertyName';
const LEFT_OBJECT = new Object();
const RIGHT_OBJECT = new Object();
const SMALL_STRING_VALUE = 'a-String';
const BIG_STRING_VALUE = 'b-String';
const SMALL_NUMBER_VALUE = 500;
const BIG_NUMBER_VALUE = 1000;

describe('compareTo', () => {

    beforeEach(() => {
        LEFT_OBJECT[PROPERTY_NAME] = null;
        RIGHT_OBJECT[PROPERTY_NAME] = null;
      });
    
    it('left is null, right is null', () => {
        expect(compareTo(null, null, PROPERTY_NAME)).toEqual(0);
    });

    it('left is null, right is not null', () => {
        expect(compareTo(null, RIGHT_OBJECT, PROPERTY_NAME)).toBeLessThan(0);
    });

    it('left is not null, right is null', () => {
        expect(compareTo(LEFT_OBJECT, null, PROPERTY_NAME)).toBeGreaterThan(0);
    });

    it('left has not property, right has property ', () => {
        RIGHT_OBJECT[PROPERTY_NAME] = SMALL_STRING_VALUE;
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toBeLessThan(0);
    });

    it('left has property, right has not property ', () => {
        LEFT_OBJECT[PROPERTY_NAME] = SMALL_STRING_VALUE;
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toBeGreaterThan(0);
    });

    it('left greater than right. string value', () => {
        LEFT_OBJECT[PROPERTY_NAME] = BIG_STRING_VALUE;
        RIGHT_OBJECT[PROPERTY_NAME] = SMALL_STRING_VALUE;
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toBeGreaterThan(0);
    });

    it('left less than right. string value', () => {
        LEFT_OBJECT[PROPERTY_NAME] = SMALL_STRING_VALUE;
        RIGHT_OBJECT[PROPERTY_NAME] = BIG_STRING_VALUE;
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toBeLessThan(0);
    });

    it('left equals right. string value', () => {
        LEFT_OBJECT[PROPERTY_NAME] = SMALL_STRING_VALUE;
        RIGHT_OBJECT[PROPERTY_NAME] = SMALL_STRING_VALUE.toUpperCase();
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toEqual(0);
    });

    it('left greater than right. number value', () => {
        LEFT_OBJECT[PROPERTY_NAME] = BIG_NUMBER_VALUE;
        RIGHT_OBJECT[PROPERTY_NAME] = SMALL_NUMBER_VALUE;
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toBeGreaterThan(0);
    });

    it('left less than right. number value', () => {
        LEFT_OBJECT[PROPERTY_NAME] = SMALL_NUMBER_VALUE;
        RIGHT_OBJECT[PROPERTY_NAME] = BIG_NUMBER_VALUE;
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toBeLessThan(0);
    });

    it('left equals right. number value', () => {
        LEFT_OBJECT[PROPERTY_NAME] = SMALL_NUMBER_VALUE;
        RIGHT_OBJECT[PROPERTY_NAME] = SMALL_NUMBER_VALUE;
        expect(compareTo(LEFT_OBJECT, RIGHT_OBJECT, PROPERTY_NAME)).toEqual(0);
    });

})