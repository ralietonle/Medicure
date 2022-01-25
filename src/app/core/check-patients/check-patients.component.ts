import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService} from '../../auth/services/auth.service';
@Component({
  selector: 'app-check-patients',
  templateUrl: './check-patients.component.html',
  styleUrls: ['./check-patients.component.scss']
})
export class CheckPatientsComponent implements OnInit {
  currentUser:string='';
  currentName:string='';
  patients:User[]=[]
  constructor(private authService:AuthService, private router:Router) { }

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
    this.authService.getAllPatient().then(
      (response:any) => {
        this.patients = response.map(
          (patient:any) => { return new User(patient.email,patient.username,patient.category,patient._id)}
        )
      }
    )
  }
  onViewPatient(id:string){
    this.router.navigate(['core', 'checkpatients',id]);
  }

}
