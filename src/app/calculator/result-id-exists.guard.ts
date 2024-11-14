import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoveService } from 'src/app/love.service';
import { catchError, map, of } from 'rxjs';

export const resultIdExistsGuard: CanActivateFn = (route, _) => {

  const {id}  = route.params;
  if(!id) return true;

  const service = inject(LoveService);
  const router = inject(Router);

  return service.get(id).pipe(
    map(() => true),
    catchError(() => of(router.createUrlTree(['/'])))
  )
};
