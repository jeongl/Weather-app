import React from 'react';
import ReactDOM from 'react-dom';
import {addProperties, addIconLink} from '../../middleware/api';
import {api_response} from '../__mocks__/api-response';
let modifiedData;

beforeEach(() => modifiedData = addProperties(api_response).daily.data);

test('Add day function should add a formmated date, iconLink, & day.', () => {
	expect(modifiedData[0].day).toBeDefined();
	expect(modifiedData[0].dateFormat).toBeDefined();
	expect(modifiedData[0].iconLink).toBeDefined();
});

test('Each object in the array should have a day property', () => {
	let hasPropertyCount = modifiedData.filter(item => item.day);
	expect(modifiedData.length).toEqual(hasPropertyCount.length);
})

test('Each daily object from API response should contain a link to a weather icon', () => {
	let hasPropertyCount = modifiedData.filter(item  => item.hasOwnProperty('iconLink'));
	expect(modifiedData.length).toEqual(hasPropertyCount.length);
});

test('When the api response defines a condition of "Snow", the right icon should be linked', () => {
	expect(modifiedData[0].iconLink).toBe(`/climacons/Cloud-Snow.svg`);
});
