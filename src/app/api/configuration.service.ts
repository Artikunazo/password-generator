import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ConfigurationService {
	params = [
		{
			name: 'Words in Uppercase',
			completed: false,
			color: 'primary',
			range: [
				{
					min: 65,
					max: 90,
				},
			],
		},
		{
			name: 'Words in Lowercase',
			completed: false,
			color: 'primary',
			range: [
				{
					min: 97,
					max: 122,
				},
			],
		},
		{
			name: 'Numbers',
			completed: false,
			color: 'primary',
			range: [
				{
					min: 48,
					max: 57,
				},
			],
		},
		{
			name: 'Symbols',
			completed: false,
			color: 'primary',
			range: [
				{
					min: 33,
					max: 47,
				},
				{
					min: 58,
					max: 64,
				},
				{
					min: 91,
					max: 96,
				},
				{
					min: 123,
					max: 126,
				},
			],
		},
	];

	constructor() {}

	generatePassword(options: {}): string {
		return '';
	}
}
