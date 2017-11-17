
/**
 * REMOVE/CLEAN TASKS
 */
module.exports = function(gulp, $, conf) {
    'use strict';

    /**
     * Remove removable folders from public
     * @task {clean}
     * @group {Clean tasks}
     */
    gulp.task('clean', $.del.bind(null, [
        conf.folders.dest + '/css',
        conf.folders.dest + '/fonts',
        conf.folders.dest + '/img',
        conf.folders.dest + '/js',
    ]));

    /**
     * Remove bower '/components' folder
     * @task {clean:components}
     * @group {Clean tasks}
     */
    gulp.task('clean:components', $.del.bind(null, [conf.folders.components]));    
    
    /**
     * Remove npm '/node_modules' folder
     * @task {clean:modules}
     * @group {Clean tasks}
     */
    gulp.task('clean:modules', $.del.bind(null, [conf.folders.modules]));


    /**
     * Remove all removable folders
     * @task {clean:all}
     * @group {Clean tasks}
     */
    gulp.task('clean:all', ['clean', 'clean:components', 'clean:modules'], null);
};