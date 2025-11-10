import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'; 
import { SupabaseService } from './superbase';

export const authGuard: CanActivateFn = (route, state) => {
  const supa = inject(SupabaseService);
  

  return true;
};
