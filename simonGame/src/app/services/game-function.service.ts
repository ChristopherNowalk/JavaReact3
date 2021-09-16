import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameFunctionService {

  simon: string[] = [];
  player: string[] = [];

  constructor() { }
}
