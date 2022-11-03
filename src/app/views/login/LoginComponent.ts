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
    //console.log(this.userModel);

    const blackList = ["SELECT", "OR", ' ""="" ', "-- ", ";", "1 = 1", "1=1", "DROP", "\"\"=\"\"", "'='"];
    let ataque = 0;

    blackList.forEach( (palavra) => {
      if(this.userModel.email?.toUpperCase().includes(palavra)) {//encontrou sql injection
        ataque++;
      }
  } );

    if (this.userModel.email == "" || this.userModel.password == "" || ataque > 0) {//campos vazios ou está sob ataque
    this.mensagem = "Preencher os campos corretamente";
    } else {// pode se logar

    //disparando/send
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



    
  }

}
