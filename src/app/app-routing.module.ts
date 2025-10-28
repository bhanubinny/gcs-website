import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentMarketingComponent } from './components/content-marketing/content-marketing.component';
import { EmailMarketingComponent } from './components/email-marketing/email-marketing.component';
import { InfluencerMarketingComponent } from './components/influencer-marketing/influencer-marketing.component';
import { PayPerClickAdvertisingComponent } from './components/pay-per-click-advertising/pay-per-click-advertising.component';
import { SearchEngineOptimizationComponent } from './components/search-engine-optimization/search-engine-optimization.component';
import { SocialMediaMarketingComponent } from './components/social-media-marketing/social-media-marketing.component';
import { WebsiteDesignComponent } from './components/website-design/website-design.component';

const routes: Routes = [
  { path: 'content-marketing', component: ContentMarketingComponent },
  { path: 'email-marketing', component: EmailMarketingComponent },
  { path: 'influencer-marketing', component: InfluencerMarketingComponent },
  { path: 'pay-per-click-advertising', component: PayPerClickAdvertisingComponent },
  { path: 'search-engine-optimization', component: SearchEngineOptimizationComponent },
  { path: 'social-media-marketing', component: SocialMediaMarketingComponent },
  { path: 'website-design', component: WebsiteDesignComponent },
  { path: '', redirectTo: '/content-marketing', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
