import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  getOrganizations(): Observable<string[]> {
    // Mock data - list of allowed organizations
    return of(['Amazon', 'Flipkart', 'meesho', 'Intuit', 'Google']);
  }
}
