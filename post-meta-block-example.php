<?php
/**
 * Plugin Name: Post Meta Block Example
 */


add_action(
	'init',
	function () {
		register_block_type_from_metadata( __DIR__ );

		register_post_meta(
			'',
			'my_post_meta',
			array(
				'show_in_rest' => true,
				'single' => true,
			)
		);
	}
);
