module.exports = function(grunt) {
    return {		
		install: {
		    options: {
		        url: '<%= conductor.project.url %>/wordpress/wp-admin/install.php?step=2',
		        method: 'POST',
		        form: {
		            weblog_title:       '<%= conductor.project.title %>', 
		            user_name:          '<%= conductor.admin.name %>',
		            admin_password:     '<%= conductor.admin.password %>',
		            admin_password2:    '<%= conductor.admin.password %>',
		            admin_email:        '<%= conductor.admin.email %>'
		        }
		    },
		},
		login: {
		    options: {
		        url: '<%= conductor.project.url %>/wordpress/wp-login.php',
		        jar: true,
		        ignoreErrors: true,
		        method: 'POST',
		        form: { 
		            log:                '<%= conductor.admin.name %>',
		            pwd:                '<%= conductor.admin.password %>',
		        }
		    },
		},
		create_user: {
		    options: {
		        url: '<%= conductor.project.url %>/wordpress/wp-admin/user-new.php',
		        jar: true,
		        method: 'POST',
		        form: {
		            user_login:         '<%= conductor.user.name %>',
		            email:              '<%= conductor.user.email %>',
		            pass:               '<%= conductor.user.password %>',
		            pass2:              '<%= conductor.user.password %>',
		            role:               '<%= conductor.user.role %>',
		            send_password:      '<%= conductor.user.password.send %>',
		            action:             'createuser',
		            createuser:         'Add New User'
		        }
		    },
		}
	}
}