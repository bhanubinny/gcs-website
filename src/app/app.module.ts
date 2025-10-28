import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentMarketingComponent } from './components/content-marketing/content-marketing.component';
import { EmailMarketingComponent } from './components/email-marketing/email-marketing.component';
import { InfluencerMarketingComponent } from './components/influencer-marketing/influencer-marketing.component';
import { PayPerClickAdvertisingComponent } from './components/pay-per-click-advertising/pay-per-click-advertising.component';
import { SearchEngineOptimizationComponent } from './components/search-engine-optimization/search-engine-optimization.component';
import { SocialMediaMarketingComponent } from './components/social-media-marketing/social-media-marketing.component';
import { WebsiteDesignComponent } from './components/website-design/website-design.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentMarketingComponent,
    EmailMarketingComponent,
    InfluencerMarketingComponent,
    PayPerClickAdvertisingComponent,
    SearchEngineOptimizationComponent,
    SocialMediaMarketingComponent,
    WebsiteDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
