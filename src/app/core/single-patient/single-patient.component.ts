import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.scss']
})
export class SinglePatientComponent implements OnInit {
  id:string='';
  username:string="";
  name:string="";
  constructor(private route: ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authService.getOneUser(this.id).then(
      (response:any) => {
        this.username = response.username;
        this.name = response.email;
      },
      (error: any) => {

      }
    )
  }

}
