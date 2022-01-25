import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth/services/auth.service'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isPatient: boolean = true;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getOneUser(this.authService.userId).then(
      (response:any)=>{
        console.log( response)
        this.isPatient = response.category == 'patient' ? true : false;
        console.log(this.isPatient);
      },
      (error)=> {console.log(error)}
    )
   
  }
  onSignOut() {
    this.authService.signOut();
  }
}
