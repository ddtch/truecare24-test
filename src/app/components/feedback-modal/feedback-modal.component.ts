import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackModalComponent implements OnInit {
  // Of course for best practices we could do a global modal component
  // but in case of tie economy I decided to do certain component

  @Input()
  public providerId: number;
  public feedbackForm: FormGroup;
  public delivered: boolean;
  @Output()
  public closed: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  public onCloseClicked(event) {
    this.closed.emit(event);
  }

  public sendFeedback() {
    console.log('sent');
    this.delivered = true;
    this.feedbackForm.reset();
    // @TODO add api call
  }

  public setRating(rating: number) {
    this.feedbackForm.patchValue({rating});
  }

  private initForm() {
    this.feedbackForm = this.formBuilder.group({
      providerId: [this.providerId],
      rating: [''],
      comment: ['', Validators.required]
    });
  }

}
