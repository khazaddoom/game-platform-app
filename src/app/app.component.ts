import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Games',
      url: 'home',
      icon: 'game-controller'
    },
    {
      title: 'Settings',
      url: '',
      icon: 'settings'
    },
    // {
    //   title: 'Favorites',
    //   url: '',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
