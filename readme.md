## Wordpress-Conductor

Wordpress Conductor is a framwork for kickstarting Wordpress development. By combining composer, bower and grunt it is possible to control third party packages and versions.

**Version:** 0.1.9

### Deploy
* `mkdir my-project`, `cd my-project`
* `git clone https://github.com/Gizburdt/Wordpress-Conductor.git .`
* `npm install`
* `grunt deploy` (or `grunt re-deploy`) and fill in your credentials.
* Open `http://localhost/my-project/wordpress/wp-admin` and be awesome!

### Available tasks
Grunt is a taskrunner, so we need some tasks :) Ofcourse we need `npm install` first, to install the necessary node modules.

#### `grunt conduct`
This task will run:
* `php composer.phar self-update` will update composer.phar to its latest version
* `php composer.phar update` will update all composer packages
* `bower install` will install all bower packages
* `bower update` will check and update all bower packages

#### `grunt deploy`
This task will completely deploy your environment:
* Prompt for multiple credentials (for the next steps)
* Run bower, composer
* Download Wordpress
* Create a wp-config.php file with all necessary constants
* Install Wordpress
* Install selected plugins
* Setup your theme (based on scaffold-child)
* Set some settings

#### `grunt re-deploy`
This task is used when you already ran `grunt deploy` and you moved your environment with git/ftp:
* Run bower, composer
* Download Wordpress
* Create a wp-config.php
* Install plugins

#### `grunt scaffold`
This task copies scaffold-child to a new theme

#### `grunt wp-download`
Used to download Wordpress. It will move wordpress in the right folder (/wordpress).

#### `grunt wp-config`
Create a wp-config.php file.

#### `grunt wp-install`
Run Wordpress install process.

#### `grunt wp-plugins`
Download the selected Wordpress plugins

#### `grunt wp-settings`
Set the same settings as `grunt deploy` does

#### `grunt wp-update`
Runs a wordpress, db and plugin update

## Installing utilities
Because we use multiple utilities within Conductor. I will show you how to install them. Some installations will be harder than others, but believe me, this will make your life easier :)

#### Git
Git is used for version control. Installing it is not very hard and is weel explained on this page: [Installing Git](http://git-scm.com/book/en/Getting-Started-Installing-Git). Installing on your local machine is even easier with the [installers](http://git-scm.com/downloads).

#### PHP
It's not really about installing PHP, but setting some variables for utilities that use PHP, like WP-CLI. Just add this to your `~/.bash_profile` and it will save you some time:

```php
export WP_CLI_PHP="/Applications/MAMP/bin/php/{your-php-version}/bin/php"
export MAMP_PHP="/Applications/MAMP/bin/php/{your-php-version}/bin"
export PATH="$MAMP_PHP:$PATH"
export PATH="$PATH:/Applications/MAMP/Library/bin"
```

#### Composer
It is not necessary to install composer, because we included a composer.phar file. But if you want to execute `composer update` rather than `php composer.phar update`, have a look at [Composers' website](https://getcomposer.org/).

#### Node
Node isn't hard to install too. Just visit their [website](http://nodejs.org/) and click install.

#### Bower
When Node (and npm) are installed, it's easy to install Bower. Just run the command `npm install -g bower`.

#### Grunt
And last but not least, Grunt. Like bower it is installed with `npm`. It's all done with this command: `npm install -g grunt-cli`.

## Contributing
Do you have some extra information about installing utilities or do you see some code that can be improved, please Fork and Pull Request. 

Happy Coding!
