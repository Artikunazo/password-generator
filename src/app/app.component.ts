import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ConfigurationModule} from './configuration/configuration.module';
import {ConfigurationComponent} from './configuration/configuration.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ConfigurationModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	protected projectTitle = 'Password Generator';
}
