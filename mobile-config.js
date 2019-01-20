// This section sets up some basic app metadata, the entire section is optional.
App.info({
    id: 'com.basic.url.shortener',
    name: 'URL Shortener',
    description: 'Shorten your urls.',
    author: 'Orji Chidi Matthew',
    email: 'orjichidi95@gmail.com',
    website: 'http://parousia.pythonanywhere.com',
    version: '2018.01.20',
  });

App.setPreference('KeepRunning', true);
App.setPreference('Orientation', 'default');

App.appendToConfig(`
    <preference name="StatusBarStyle" value="lightcontent" />
    <preference name="StatusBarBackgroundColor" value="#010C1F" />
`);

App.accessRule('http://*', {type: 'intent'});
App.accessRule('https://*', {type: 'intent'});
