import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // Para trabajar con parametros en las rutas

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  public title: string = 'Frameworks';
  public name: string;
  public version: string | number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.name = params.name;
      //this.name = params['name']; Forma equivalente
      this.version  = params.version;
      console.log('Name is: ' + this.name + ' : ' + 'Version: ' + this.version);

      if (this.name == 'help' && this.version == 'help') {
        this._router.navigate(['/home']);
      }
    });
  }

  redirectMe() {
    this._router.navigate(['/programming-language']); // Redirecciona
  }
}
