import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router:Router
    ){}

    canActivate(): boolean {
        if(!window.localStorage.getItem("auth_token")){
            this.router.navigate(['/signin'])
            return false;
        }
        return true;
     }
}