import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Profile } from '@Utils/types/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public profile: Profile;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.authService.getProfile().subscribe(
      (profile: Profile) => {
        this.profile = profile;
      });
  }
}
