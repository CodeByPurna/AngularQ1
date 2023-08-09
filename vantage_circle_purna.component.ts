```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
 selector: 'vantage_circle_purna',
 templateUrl: './vantage_circle_purna.component.html',
 styleUrls: ['./vantage_circle_purna.component.css']
})
export class VantageCirclePurnaComponent implements OnInit {
 images: any[] = [];
 page = 1;
 limit = 100;
 constructor(private http: HttpClient) { }
 ngOnInit(): void {
 this.loadImages();
 }
 loadImages(): void {
 const url = `https://picsum.photos/v2/list?page=${this.page}&limit=${this.limit}`;
 this.http.get<any[]>(url).subscribe((response) => {
 this.images = [...this.images, ...response];
 });
 }
 onScroll(): void {
 this.page++;
 this.loadImages();
 }
}
```