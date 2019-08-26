<?php
namespace sv100;

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
	public function init() {
		$this->set_module_title( __( 'SV Smooth Scrolling', 'sv100' ) )
			->set_module_desc( __( 'This module gives the ability to manage the scroll speed.', 'sv100' ) )
			->load_settings()
			->register_scripts()
			->set_section_title( __( 'Smooth Scrolling', 'sv100' ) )
			->set_section_desc( __( 'Manage Scroll Speed', 'sv100' ) )
			->set_section_type( 'settings' )
			->get_root()
			->add_section( $this );
	}
	public function register_scripts(){
		// Loads Scripts
		if($this->get_setting( 'activate' )->run_type()->get_data()) {
			$this->get_script('frontend')
				->set_path('lib/js/frontend.js')
				->set_type('js')
				->set_is_enqueued();
		}

		return $this;
	}
	public function load_settings(){
		$this->get_setting( 'activate' )
			->set_title( __( 'Activate', 'sv100' ) )
			->set_description( __( 'Activate Smooth Scrolling.', 'sv100' ) )
			->load_type( 'checkbox' );

		return $this;
	}
}