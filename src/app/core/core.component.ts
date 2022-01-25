import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private authService:AuthService) { }
  currentName: string ="";
  currentUser: string = "";
  ngOnInit(): void {
    this.authService.getOneUser(this.authService.userId).then(
      (response:any) => {
        this.currentUser = response.username;
        this.currentName = response.email; 
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
