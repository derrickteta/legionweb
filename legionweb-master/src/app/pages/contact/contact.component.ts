import { Component, OnInit,OnDestroy, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit(){
  }
  @ViewChild('f')
  courseForm!: NgForm;

  onSubmit() {   
  }

  onClear() {
	// Now that we have access to the form via the 'ViewChild', we can access the form and clear it.
	this.courseForm.reset();
  }

  onDelete() {
  }

  ngOnDestroy() {    
  }
}
