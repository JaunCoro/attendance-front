import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from  "@angular/common/http";
import { HttpHeaders } from  "@angular/common/http";
import { codeInterface } from "./code";
import { cardInterface } from "./card";
import { validationInterface } from "./validation";
import { userInterface } from "./user"
import { groupsInterface } from './groups'
import { registryInterface } from './registry'
import { registriesInterface } from './registries'
import { Observable } from "rxjs";


@Injectable()

export class ConfigService {
  constructor(private http: HttpClient) { }

  public url: string = "https://7c1c21c3.ngrok.io/api/"

  getCode(): Observable<codeInterface[]>{
  	const  headers = new  HttpHeaders().set('Accept', 'application/json');

  	let url = this.url + "code";

  	return this.http.get<codeInterface[]>(url, {headers})
  }

  sendCode(data): Observable<validationInterface[]>{
  	const headers = new HttpHeaders().set('Accept', 'application/json');

  	let url = this.url + "code";

  	return this.http.post<validationInterface[]>(url, {studentCode : data}, { headers });
  }

  getCard(id): Observable<cardInterface[]>{
  	const headers = new HttpHeaders().set('Accept', 'application/json')

  	let url = this.url + "teacher_class/" + id

  	return this.http.get<cardInterface[]>(url, { headers })
  }

  sendUser(email, password): Observable<userInterface[]>{
  	const headers = new HttpHeaders().set('Accept', 'application/json');

  	let url = this.url + "login"

  	return this.http.post<userInterface[]>(url, {email : email, password: password}, { headers })
  }

  getStudentCards(email): Observable<cardInterface[]>{
  	const headers = new HttpHeaders().set('Accept', 'application/json');

  	let url = this.url + "student-classes"

  	return this.http.post<cardInterface[]>(url, {email: email}, { headers });
  }

  getGroup(id): Observable<groupsInterface[]>{
  	const headers = new HttpHeaders().set('Accept', 'application/json')

  	let url = this.url +"groups/" + id

  	return this.http.get<groupsInterface[]>(url, { headers });
  }

  createRegister(subject, group, teacher, day, start_time, end_time): Observable<registryInterface[]>{
  	const headers = new HttpHeaders().set('Accept', 'application/json')

  	let url = this.url +"create-registry"

		return this.http.post<registryInterface[]>(url, {
			subject: subject,
			group: group,
			teacher: teacher,
			day: day,
			start_time: start_time,
			end_time: end_time
		}, { headers })  	
  }

  getRegistries(sub):Observable<registriesInterface[]>{
  	const headers = new HttpHeaders().set('Accept', 'application/json')

  	let url = this.url + "get-registries"

  	return this.http.post<registriesInterface[]>(url, {name: sub}, { headers })
  }

  createDetail(json, id){
  	const headers = new HttpHeaders().set('Accept', 'application/json')

  	let url = this.url + "create-registry-detail"

  	return this.http.post(url, {students: json, id: id}, { headers })
  }
}