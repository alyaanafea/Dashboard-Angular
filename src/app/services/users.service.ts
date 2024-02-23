import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private myclient: HttpClient) {}
  private users_db = 'http://localhost:3000/users';
  getAllUsers() {
    return this.myclient.get(this.users_db);
  }
  getUserById(id: number) {
    return this.myclient.get(this.users_db + '/' + id);
  }

  updateUserRole(id: number, newRole: string) {
    return this.myclient.patch(this.users_db + '/' + id, { role: newRole });
  }
  updateUserDetails(id: number, newUserDetails: any) {
    return this.myclient.put(this.users_db + '/' + id, { ...newUserDetails });
  }
  DeleteUser(id: number) {
    return this.myclient.delete(this.users_db + '/' + id);
  }
}
