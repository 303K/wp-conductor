## Wordpress-Conductor

Wordpress Conductor is a framwork for kickstarting Wordpress development. By combining composer, bower and grunt it is possible to control third party packages and versions.

### Deploy
* `mkdir my-project` and `cd my-project`
* `git clone https://github.com/Gizburdt/Wordpress-Conductor.git .`
* `php composer.phar update`
* `bower install`
* `npm install`
* `grunt install --force` and fill in your credentials. --force will skip failing tasks.
* Open `http://localhost/my-project/wordpress/wp-admin and be awesome!
