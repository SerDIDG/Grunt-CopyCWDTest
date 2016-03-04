module.exports = function(grunt) {
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // Display how match time it took to build each task
    require('time-grunt')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean : {
            options: {
                force : true
            },
            test: [
                'Folder_C',
                'Folder_D'
            ]
        },

        copy: {
            test: {
                files: [{
                    expand: true,
                    cwd: 'Folder_A',
                    src: ['**/*.*'],
                    dest: 'Folder_C'
                },{
                    expand: true,
                    cwd: 'Folder_B',
                    src: ['**/*.*'],
                    dest: 'Folder_C'
                },{
                    expand: true,
                    cwd: 'Folder_C',
                    src: ['**/*.*'],
                    dest: 'Folder_D'
                }]
            }
        }
    });
    // Custom Tasks
    grunt.registerTask('default', ['clean', 'copy']);
};