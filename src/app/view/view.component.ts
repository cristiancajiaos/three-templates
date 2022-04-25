import { TemplateRef } from '@angular/core';
import { ContentChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ContentChild('foo') foo: TemplateRef<any>;
  @ContentChild('bar') bar: TemplateRef<any>;
  @ContentChild('baz') baz: TemplateRef<any>;

  mode = 'foo';

  constructor() { }

  ngOnInit(): void {
  }

  isMode(mode: string): boolean {
    return this.mode.indexOf(mode) != -1;
  }

  changeModeTo(mode: string): void {
    this.mode = mode
  }

}
