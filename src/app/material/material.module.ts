import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
	imports: [CommonModule],
	exports: [
		MatCheckboxModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
	],
})
export class MaterialModule {}
