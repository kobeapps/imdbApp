import AsyncStorage from '@react-native-community/async-storage';
jest.mock('@react-native-community/async-storage');

import { storeData, getData } from '../src/utils/AsyncStorage';

const mockReturnValues = {
    mockObject: {
		numericValue: 543,
		objectInsideObject: {
			trueOrFalse: 'yeep',
		}
	},
	mockArray: JSON.stringify(['item1', 'item2', 'item3']),
	mockString: JSON.stringify('this is a mocked string')
};


describe('storeData with AsyncStorage', () => {

    it('should return a promise with no errors', () => {
        return storeData('objectOne', mockReturnValues.objectOne).then((error) => {
            expect(error).toBeFalsy();
            expect(AsyncStorage.setItem).toBeCalledWith('objectOne', mockReturnValues.objectOne);
        });
    });

});


describe('Get Data with AsyncStorage', () => {

    it('should return a promise with saved data', () => {
        return getData('objectOne').then((data, error) => {
            expect(error).toBeFalsy();
            expect(AsyncStorage.getItem).toBeCalledWith('objectOne');
        });
    });

});