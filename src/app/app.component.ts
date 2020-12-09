import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  myCustomPageTransition = ((baseEl: any, opts?: any) => {
    console.log("opts.enteringEl" + opts.enteringEl);
    console.log("opts.leavingEl" + opts.leavingEl);

    var anim1 = this.animationCtrl.create()
      .addElement(opts.leavingEl)
      .duration(1000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0')

    var anim2 = this.animationCtrl.create()
      .addElement(opts.enteringEl)
      .duration(2000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0.0', '1')

      var transition = this.animationCtrl.create()
      .addElement(opts.enteringEl)
      .duration(3000)
      .iterations(1)
      .addAnimation([anim1, anim2])

    return transition
  });
 
  // myCustomPageTransition = ((baseEl: any, opts?: any) => {
  //   console.log("opts.enteringEl" + opts.enteringEl);
  //   console.log("opts.leavingEl" + opts.leavingEl);
  //   var anim = this.animationCtrl.create()
  //     .addElement(opts.leavingEl)
  //     .duration(1000)
  //     .iterations(1)
  //     .easing('ease-out')
  //     .fromTo('opacity', '1', '0.0')
  //   return anim
  // });

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private animationCtrl: AnimationController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl('splash');
    });
  }
}
