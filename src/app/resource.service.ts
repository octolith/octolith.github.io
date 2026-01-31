import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private email = 'octolith@gmail.com';

  getEmail(): string {
    return this.email;
  }

  getEmailUrl(): string {
    return `mailto:${this.email}`;
  }

  getLinkedInUrl(): string {
    return 'https://www.linkedin.com/in/dipre-franco/';
  }

  getGithubUrl(): string {
    return 'https://github.com/octolith';
  }

  getStackoverflowUrl(): string {
    return 'https://stackoverflow.com/users/6809179';
  }
}
