<?php
/**
 * Plugin Name: Post Meta Block Example
 */


add_action(
	'init',
	function () {
		register_block_type_from_metadata(
			__DIR__,
			array(
				'render_callback' => function() {
					return sprintf(
						'<div %1$s>%2$s</div>',
						get_block_wrapper_attributes(),
						get_post_meta( get_the_ID(), 'my_post_meta', true )
					);
				},
			)
		);

		register_post_meta(
			'',
			'my_post_meta',
			array(
				'type'         => 'string',
				'show_in_rest' => true,
				'single'       => true,
			)
		);
	}
);
