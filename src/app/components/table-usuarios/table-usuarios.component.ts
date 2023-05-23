import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css'],
})
export class TableUsuariosComponent {
  constructor(private apiService: ApiService) {}

  users: Usuarios[] = [];

  ngOnInit() {
    this.apiService.getUsuarios().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }
}
