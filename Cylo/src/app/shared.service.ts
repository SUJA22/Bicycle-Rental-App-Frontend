import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}
  getUserData() {
    return this.http.get<User[]>(`${environment.baseUrl}UserDetails`);
  }
  postUserData(formData: any) {
    return this.http.post(`${environment.baseUrl}UserDetails`, formData);
  }
  updateUserData(data: any) {
    return this.http.put<void>(
      `${environment.baseUrl}UserDetails/${data.userId}`,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  getAdminData() {
    return this.http.get<User[]>(`${environment.baseUrl}AdminDetails`);
  }
  postAdminData(formData: any) {
    return this.http.post(`${environment.baseUrl}AdminDetails`, formData);
  }
  getProductData() {
    return this.http.get<User[]>(`${environment.baseUrl}ProductDetails`);
  }
  postProductData(data: any) {
    return this.http.post(`${environment.baseUrl}ProductDetails`, data);
  }
  updateProductData(data: any) {
    return this.http.put<void>(
      `${environment.baseUrl}ProductDetails/${data.id}`,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  deleteProductData(data: any) {
    return this.http.delete(`${environment.baseUrl}ProductDetails/${data}`);
  }
  getOrderData() {
    return this.http.get<User[]>(`${environment.baseUrl}OrderDetails`);
  }
  postOrderData(formData: any) {
    return this.http.post(`${environment.baseUrl}OrderDetails`, formData);
  }

  /*

  deleteUserData(data:any){
    this.http.delete(`${environment.baseUrl}UserDetails`,data);
  }
 updateAdminData(data:any){
    this.http.put(`${environment.baseUrl}AdminDetails`,data);
  }
  deleteAdminData(data:any){
    this.http.delete(`${environment.baseUrl}AdminDetails`,data);
  }
   updateOrderData(data:any){
    this.http.put(`${environment.baseUrl}OrderDetails`,data);
  }
  deleteOrderData(data:any){
    this.http.delete(`${environment.baseUrl}OrderDetails`,data);
  }
*/
}
