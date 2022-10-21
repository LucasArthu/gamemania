import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService: UsersService) { }

  ngOnInit(): void {
  }

  //nossas variaveis e metodos
  userModel = new User();
  mensagem = ""

  receberDados() {
    console.log(this.userModel);

    this.userService.LogarUsuario(this.userModel).subscribe({
      next: (response) => {

        console.log("deu certo");
        console.log(response);
        this.mensagem = "logado com sucesso"
      },
      error: (err) => {

        console.log("deu erro");
        console.log(err);
        this.mensagem = err.error;
      },
    })
  }


  carro = function name(params:string) {
    
  }

}
