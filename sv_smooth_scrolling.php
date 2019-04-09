<?php
namespace sv_100;

/**
 * @version         1.00
 * @author			straightvisions GmbH
 * @package			sv_100
 * @copyright		2017 straightvisions GmbH
 * @link			https://straightvisions.com
 * @since			1.0
 * @license			See license.txt or https://straightvisions.com
 */

class sv_smooth_scrolling extends init {
	public function __construct() {

	}

	public function init() {
		// Translates the module
		load_theme_textdomain( $this->get_module_name(), $this->get_path( 'languages' ) );

		// Module Info
		$this->set_module_title( 'SV Smooth Scrolling' );
		$this->set_module_desc( __( 'This module gives the ability to manage the scroll speed.', $this->get_module_name() ) );

		// Loads Scripts
		static::$scripts->create( $this )
			->set_ID('frontend')
			->set_path( 'lib/js/frontend.js' )
			->set_type( 'js' )
			->set_is_enqueued();
	}
}