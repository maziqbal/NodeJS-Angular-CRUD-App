import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
declare var M: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.resetForm();
    this.fetchUsersList();
    this.userService.selectedUser = {
      _id: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      address: ""
    }
  }

  resetForm(userForm?: NgForm){
    if(userForm) {
      userForm.reset();
      this.userService.selectedUser = {
        _id: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
        address: ""
      }
    }
  }

  onSubmit(userForm: NgForm){
    if(userForm.value._id == "") {
      this.userService.postUser(userForm.value).subscribe((res) => {
        this.resetForm(userForm);
        this.fetchUsersList();
        M.toast({html: 'New user created successfully', classes: 'rounded'});
      });
    } else {
      this.userService.updateUser(userForm.value).subscribe((res) => {
        this.resetForm(userForm);
        this.fetchUsersList();
        M.toast({html: 'User data saved successfully', classes: 'rounded'});
      });
    }
  }

  fetchUsersList(){
    this.userService.getUsersList().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  onEdit(user: User) {
    this.userService.selectedUser = user;
  }

  onDelete(_id: string, userForm : NgForm) {
    if(confirm('This action will remove this user. Are you sure?')) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.fetchUsersList();
        this.resetForm(userForm);
        M.toast({html: 'User deleted successfully', classes: 'rounded'});
      })
    }
  }

}
