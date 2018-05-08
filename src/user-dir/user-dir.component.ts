import { Component } from '@angular/core';
import { user_dirService } from './user-dir.service';
import { ModalService } from '../services/index';

@Component({
  selector: 'user-dir',
  templateUrl: './user-dir.component.html',
  styleUrls: ['./user-dir.component.css'],
  providers:[
      { provide: 'ModalService'},
      { provide: 'user_dirService'}]
})
export class user_dirComponent implements OnInit {

    users: User[];

  constructor(
      @Inject('ModalService') private modalService: ModalService,
      @Inject('user_dirService') private userService:user_dirService
  ) {}

    // add new user
  add_user(user_name:string){
    let user: any = { user_name: add_username, contact: add_contact, address: add_address, email: add_email};
    this.userService.addUser(user)
    .subscribe((user => {
        this.users.push(user);
    }));
  }

//get users list
  ngOnInit() {
      this.bodyText = 'This text can be updated in modal 1';
      this.userService.getUsers()
      .subscribe((users)=>{
          this.users = users;
      });
  }
  
//edit the user details
   edit_user(user: User){
    var user = {_id: user._id, user_name: edit_username, contact: edit_contact, address: edit_address, email: edit_email}
    this.userService.updateUser(user);
   }

   //delete the user details
   delete_user(id:string){
       var users =  this.users;
       this.userService.deleteUser(id)
       .subscribe((data)=>{
           if(data.n == 1){
               for(let i=1;i<users.length;i++){
                   if(users[i]._id == id){
                       users.splice(i,1)
                   }
               }
           }
       });
   }


  openModal(id: string){
      this.modalService.open(id);
  }

  closeModal(id: string){
      this.modalService.close(id);
  }

}
