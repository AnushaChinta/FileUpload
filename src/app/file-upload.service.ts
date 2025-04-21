import { Injectable } from '@angular/core';
import * as saveAs from 'file-saver';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private fileData: BehaviorSubject<any> = new BehaviorSubject<any>({})
  constructor() { }

  public upload(data: FormData) {
    return this.fileData.next(data);
    // return this.http.post('url', data);// when we are sending it to api, we will send file data in the format of FormData
  }
  public getUploadedData() {
    return this.fileData.asObservable();
  }
  public download(blob: Blob, filename: string) {
    saveAs(blob, filename)
  }
}
