import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoveService } from 'src/app/love.service';

export const resultIdExistsGuard: CanActivateFn = (route, state) => {

  const {id}  = route.params;
  if(!id) return true;

  const service = inject(LoveService);

  const result = service.get(id);
  const router = inject(Router);

  if(!result) {
    return router.createUrlTree(['/']);
  }

  return true;
};
