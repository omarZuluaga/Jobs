import { Injectable } from '@angular/core';
import { Profile } from '../types/user.interface';

@Injectable({ providedIn: 'root' })
export class StoreAuthenticate {
    private readonly tk = 'TK';
    private readonly prf = 'PRF';

    public storeToken(token: string) {
        localStorage.setItem(this.tk, token);
    }

    public getStoredTokens(): string | undefined {
        const tkn = localStorage.getItem(this.tk);
        return tkn ?  tkn : undefined;
    }

    public storeProfile(profile: Profile) {
        localStorage.setItem(this.prf, JSON.stringify(profile));
    }

    public getProfile(): Profile {
        const prof = JSON.parse(localStorage.getItem(this.prf));
        return prof ?? undefined;
    }

    public logout() {
        localStorage.removeItem(this.tk);
    }
}