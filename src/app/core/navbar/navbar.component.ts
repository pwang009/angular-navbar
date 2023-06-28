import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;
  constructor(private accountService: AccountService){ }

  ngOnInit(): void {
    this.isLoggedIn$ = this.accountService.isLoggedIn;
  }

  onLogout(){
    this.accountService.logout(); 
  }
}
