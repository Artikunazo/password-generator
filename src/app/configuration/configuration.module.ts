import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {ConfigurationComponent} from './configuration.component';
import {ConfigurationService} from '../api/configuration.service';

@NgModule({
	declarations: [ConfigurationComponent],
	imports: [CommonModule, MaterialModule],
	exports: [ConfigurationComponent],
	providers: [ConfigurationService],
})
export class ConfigurationModule {}
