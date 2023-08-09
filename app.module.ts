```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImageCollageComponent } from './image-collage/image-collage.component';
@NgModule({
 declarations: [
 AppComponent,
 ImageCollageComponent
 ],
 imports: [
 BrowserModule,
 HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
```