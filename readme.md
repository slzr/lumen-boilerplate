# Lumen Boilerplate
----------
Proyecto base en lumen para landing pages y api's.

## Desarrollo
Desde consola, teniendo instalado `nodejs` con `npm`, `sass` y `composer` ejecutas:

- Dependencias Globales:
```sh
$ npm install -g bower gulp-cli
```

- Instalar dependencias del proyecto:
```sh
$ composer install
$ npm install
$ bower install
```

## Gulp tasks
```sh
> gulp           # LIST ALL GULP TASKS
> gulp serve:php # LIVERELOAD SERVER
```

## Artisan task
```sh
> php artisan list
> php artisan create:model <modelo> -m
> php artisan migrate:refresh --seed
> php artisan storage:link
> php artisan make:seeder UsersTableSeeder
> php artisan make:migration add_votes_to_users_table --table=users
> php artisan make:notification Notificacion
```

## Fixs
```sh
$ composer dump-autoload
php artisan cache:clear
php artisan config:clear
php artisan view:clear
```

##  Uses
- https://github.com/flipboxstudio/lumen-generator