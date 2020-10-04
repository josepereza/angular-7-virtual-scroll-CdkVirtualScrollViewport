import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild
} from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

/** @title Virtual scroll context variables */
@Component({
  selector: "cdk-virtual-scroll-context-example",
  styleUrls: ["cdk-virtual-scroll-context-example.css"],
  templateUrl: "cdk-virtual-scroll-context-example.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkVirtualScrollContextExample implements AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport, { static: true })
  viewPortScrolling: CdkVirtualScrollViewport;

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  ngAfterViewInit() {
    this.viewPortScrolling.elementScrolled().subscribe((data) => {
      console.log(data, "cdk scroll");
    });
  }

  onDivScroll() {
    console.log("div scroll");
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
