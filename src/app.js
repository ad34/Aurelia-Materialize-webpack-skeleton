export class App 
{
  configureRouter(config, router) 
  {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'homepage',      moduleId: './components/home/home',      nav: true, title: 'home' },
      { route: [ 'about'], name: 'about',      moduleId: './components/about/about',      nav: true, title: 'about' },
    ]);

    this.router = router;
  }

}
