import { analyzeAndValidateNgModules, NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public task: any;
  public id="";

  public newTask = {
    title:"",
    description:""
  }
  constructor(private taskService : TaskService ) { }

  ngOnInit(){
    this.getTask();
  }

  getTask(){
    this.taskService.getTask().subscribe(res=>{
      this.task = res;
    })
  }

  createTask(){
    this.taskService.createTask(this.newTask).subscribe(res=>{
      this.cleanValues();
      this.getTask();
    });
  }

  deleteTask(id:any){
    if(confirm("Does you want to delete?")){
    this.taskService.deleteTask(id).subscribe(res=>{
      this.getTask();
    })}
    else{

    }
  }

  setUpdate(t:any){
    this.id = t._id;
    this.newTask.title = t.title;
    this.newTask.description = t.description;
  }

  cleanValues(){
    this.id = "";
    this.newTask = {
      title:"",
      description:""
    }
  }

  updateTask(){
    this.taskService.updateTask(this.id,this.newTask).subscribe(res=>{
      this.cleanValues();
      this.getTask();
    })
  }

}
