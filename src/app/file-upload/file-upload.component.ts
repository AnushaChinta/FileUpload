import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public selectedFile: any;
  constructor(private fileUploadService: FileUploadService) { }
  ngOnInit(): void {
    this.fileUploadService.getUploadedData().subscribe(res => {
      console.log(res)
      if (res) {
        this.fileUploadService.download(res, res.filename)
      }
    })
  }
  public onFileChange(ev: any) {
    this.selectedFile = ev.target.files[0] as File;
  }
  public triggerFileInput(ev: any) {
    document.getElementById('fileInput')?.click();
  }
  public onDragOver(ev: any) {
    ev.preventDefault();
  }
  public onFileDropped(ev: any) {
    ev.preventDefault();
    this.selectedFile = ev.dataTransfer?.files[0] as File;
  }
  public Save(): void {
    this.fileUploadService.upload(this.selectedFile)
  }


}
