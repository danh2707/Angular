import { Component, Input } from "@angular/core";
import { ISClassname } from "../interfaces/student.interface";
@Component({
  selector:"class-ls",
  templateUrl:"./class.html",
})
export class Status{
  @Input() data!:ISClassname;
}
