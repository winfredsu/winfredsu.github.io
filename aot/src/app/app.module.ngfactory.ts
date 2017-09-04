/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.module';
import * as i2 from '../../../src/app/app.component';
import * as i3 from './home/home.component.ngfactory';
import * as i4 from './platform/platform.component.ngfactory';
import * as i5 from './simulator/simulator.component.ngfactory';
import * as i6 from './showcase/showcase.component.ngfactory';
import * as i7 from './showcase/breath-monitor/breath-monitor.component.ngfactory';
import * as i8 from './explore/explore.component.ngfactory';
import * as i9 from './explore/recommended-reading/recommended-reading.component.ngfactory';
import * as i10 from './about/about.component.ngfactory';
import * as i11 from './terms/terms.component.ngfactory';
import * as i12 from './app.component.ngfactory';
import * as i13 from '@angular/common';
import * as i14 from '@angular/platform-browser';
import * as i15 from '@angular/router';
import * as i16 from '@agm/core/utils/browser-globals';
import * as i17 from '@agm/core/services/maps-api-loader/maps-api-loader';
import * as i18 from '@agm/core/services/maps-api-loader/lazy-maps-api-loader';
import * as i19 from '../../../src/app/home/home.component';
import * as i20 from '../../../src/app/platform/platform.component';
import * as i21 from '../../../src/app/simulator/simulator.component';
import * as i22 from '../../../src/app/showcase/showcase.component';
import * as i23 from '../../../src/app/showcase/breath-monitor/breath-monitor.component';
import * as i24 from '../../../src/app/explore/explore.component';
import * as i25 from '../../../src/app/explore/recommended-reading/recommended-reading.component';
import * as i26 from '../../../src/app/about/about.component';
import * as i27 from '../../../src/app/terms/terms.component';
import * as i28 from '../../../src/app/app-routing.module';
import * as i29 from '@agm/core/core.module';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.HomeComponentNgFactory,i4.PlatformComponentNgFactory,i4.PlatformOverviewComponentNgFactory,
              i4.PlatformGettingStartedComponentNgFactory,i4.PlatformTechspecsComponentNgFactory,
              i4.PlatformDownloadsComponentNgFactory,i5.SimulatorComponentNgFactory,
              i5.SimulatorOverviewComponentNgFactory,i5.SimulatorGettingStartedComponentNgFactory,
              i5.SimulatorDocumentationComponentNgFactory,i5.SimulatorExamplesComponentNgFactory,
              i6.ShowcaseComponentNgFactory,i7.BreathMonitorComponentNgFactory,i8.ExploreComponentNgFactory,
              i9.RecommendedReadingComponentNgFactory,i10.AboutComponentNgFactory,
              i11.TermsComponentNgFactory,i12.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),
          i0.ɵmpd(4608,i13.NgLocalization,i13.NgLocaleLocalization,[i0.LOCALE_ID]),
          i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i14.DomSanitizer,i14.ɵe,[i13.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i14.DomSanitizer]),i0.ɵmpd(4608,i14.HAMMER_GESTURE_CONFIG,
              i14.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i14.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i14.ɵDomEventsPlugin(p0_0),new i14.ɵKeyEventsPlugin(p1_0),
                    new i14.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i13.DOCUMENT,i13.DOCUMENT,i13.DOCUMENT,i14.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i14.EventManager,i14.EventManager,[i14.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i14.ɵDomSharedStylesHost,i14.ɵDomSharedStylesHost,
              [i13.DOCUMENT]),i0.ɵmpd(4608,i14.ɵDomRendererFactory2,i14.ɵDomRendererFactory2,
              [i14.EventManager,i14.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,
              (null as any),[i14.ɵDomRendererFactory2]),i0.ɵmpd(6144,i14.ɵSharedStylesHost,
              (null as any),[i14.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,
              i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i14.Meta,i14.Meta,[i13.DOCUMENT]),
          i0.ɵmpd(4608,i14.Title,i14.Title,[i13.DOCUMENT]),i0.ɵmpd(5120,i15.ActivatedRoute,
              i15.ɵf,[i15.Router]),i0.ɵmpd(4608,i15.NoPreloading,i15.NoPreloading,
              ([] as any[])),i0.ɵmpd(6144,i15.PreloadingStrategy,(null as any),[i15.NoPreloading]),
          i0.ɵmpd(135680,i15.RouterPreloader,i15.RouterPreloader,[i15.Router,i0.NgModuleFactoryLoader,
              i0.Compiler,i0.Injector,i15.PreloadingStrategy]),i0.ɵmpd(4608,i15.PreloadAllModules,
              i15.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i15.ROUTER_INITIALIZER,
              i15.ɵi,[i15.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i15.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i16.WindowRef,i16.WindowRef,([] as any[])),
          i0.ɵmpd(4608,i16.DocumentRef,i16.DocumentRef,([] as any[])),i0.ɵmpd(4608,
              i17.MapsAPILoader,i18.LazyMapsAPILoader,[i18.LAZY_MAPS_API_CONFIG,i16.WindowRef,
                  i16.DocumentRef]),i0.ɵmpd(512,i13.CommonModule,i13.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i14.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.NgProbeToken,() => {
                return [i15.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i15.ɵg,i15.ɵg,[i0.Injector]),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any) => {
                return [i14.ɵc(p0_0,p0_1),i15.ɵh(p1_0)];
              },[[2,i14.NgProbeToken],[2,i0.NgProbeToken],i15.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i14.BrowserModule,i14.BrowserModule,[[3,i14.BrowserModule]]),
          i0.ɵmpd(1024,i15.ɵa,i15.ɵd,[[3,i15.Router]]),i0.ɵmpd(512,i15.UrlSerializer,
              i15.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,i15.ChildrenOutletContexts,
              i15.ChildrenOutletContexts,([] as any[])),i0.ɵmpd(256,i15.ROUTER_CONFIGURATION,
              {},([] as any[])),i0.ɵmpd(1024,i13.LocationStrategy,i15.ɵc,[i13.PlatformLocation,
              [2,i13.APP_BASE_HREF],i15.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i13.Location,
              i13.Location,[i13.LocationStrategy]),i0.ɵmpd(512,i0.Compiler,i0.Compiler,
              ([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,
              [i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i15.ROUTES,
              () => {
                return [[{path:'',redirectTo:'/home',pathMatch:'full'},{path:'home',
                    component:i19.HomeComponent},{path:'platform',component:i20.PlatformComponent,
                    children:[{path:'',redirectTo:'overview',pathMatch:'full'},{path:'overview',
                        component:i20.PlatformOverviewComponent},{path:'getting-started',
                        component:i20.PlatformGettingStartedComponent},{path:'techspecs',
                        component:i20.PlatformTechspecsComponent},{path:'downloads',
                        component:i20.PlatformDownloadsComponent}]},{path:'simulator',
                    component:i21.SimulatorComponent,children:[{path:'',redirectTo:'overview',
                        pathMatch:'full'},{path:'overview',component:i21.SimulatorOverviewComponent},
                        {path:'getting-started',component:i21.SimulatorGettingStartedComponent},
                        {path:'documentation',component:i21.SimulatorDocumentationComponent},
                        {path:'examples',component:i21.SimulatorExamplesComponent}]},
                    {path:'showcase',component:i22.ShowcaseComponent},{path:'showcase/breath-monitor',
                        component:i23.BreathMonitorComponent},{path:'explore',component:i24.ExploreComponent},
                    {path:'explore/recommended-reading',component:i25.RecommendedReadingComponent},
                    {path:'about',component:i26.AboutComponent},{path:'terms-and-conditions',
                        component:i27.TermsComponent}]];
              },([] as any[])),i0.ɵmpd(1024,i15.Router,i15.ɵe,[i0.ApplicationRef,i15.UrlSerializer,
              i15.ChildrenOutletContexts,i13.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i15.ROUTES,i15.ROUTER_CONFIGURATION,[2,i15.UrlHandlingStrategy],
              [2,i15.RouteReuseStrategy]]),i0.ɵmpd(512,i15.RouterModule,i15.RouterModule,
              [[2,i15.ɵa],[2,i15.Router]]),i0.ɵmpd(512,i28.AppRoutingModule,i28.AppRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i29.AgmCoreModule,i29.AgmCoreModule,([] as any[])),
          i0.ɵmpd(512,i1.AppModule,i1.AppModule,([] as any[])),i0.ɵmpd(256,i18.LAZY_MAPS_API_CONFIG,
              {apiKey:'AIzaSyDFquj9AnLZG3zPXBPdovChfCxujtu2V8E'},([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvc3VmYW5nL09uZURyaXZlL05WTGFicy9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvc3VmYW5nL09uZURyaXZlL05WTGFicy9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
