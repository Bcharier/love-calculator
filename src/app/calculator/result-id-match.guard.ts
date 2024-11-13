import { CanMatchFn } from '@angular/router';

export const resultIdMatchGuard: CanMatchFn = (route, segments) => {

  const id = segments[0].path

  if(!id) return true;

  return /^\d+$/.test(id);
};
