import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DateService {
  public apiURL="http://localhost:8081";
constructor(private httpClient: HttpClient)
{}
create(add)
{
return this.httpClient.post(this.apiURL+`/postofdata/`,add)
}
view(id)
{
return this.httpClient.get(this.apiURL+`/student/`+id)
} 
list()
{
return this.httpClient.get(this.apiURL+`/studentslist/`)
}  
edit(id,add)
{
return this.httpClient.put(this.apiURL+`/updatedetails/`+id,add)
}  
delete(id)
{
return this.httpClient.delete(this.apiURL+`/deletestudent/`+id)
}     
}