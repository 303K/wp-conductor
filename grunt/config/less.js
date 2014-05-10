module.exports = {
	
    install: {
        files: {
            "wp-content/themes/<%= wp.theme.name.toLowerCase() %>/style.css": "wp-content/themes/<%= wp.theme.name.toLowerCase() %>/style.less"
        }
    }

}