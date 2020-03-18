<?php
namespace sv100_companion;

/**
 * @version         1.00
 * @author			straightvisions GmbH
 * @package			sv_100
 * @copyright		2017 straightvisions GmbH
 * @link			https://straightvisions.com
 * @since			1.0
 * @license			See license.txt or https://straightvisions.com
 */

class sv_smooth_scrolling extends modules {
	public function init() {
		$this->load_settings()
			->register_scripts()
			->set_section_title( __( 'Smooth Scrolling', 'sv100_companion' ) )
			->set_section_desc( __( 'Slide to Anker', 'sv100_companion' ) )
			->set_section_type( 'settings' )
			->get_root()
			->add_section( $this );
	}
	public function register_scripts(){
		// Loads Scripts
		if($this->get_setting( 'activate' )->get_data()) {
			$this->get_script('frontend')
				->set_path('lib/js/frontend.js')
				->set_type('js')
				->set_is_enqueued();
		}

		return $this;
	}
	public function load_settings(){
		$this->get_setting( 'activate' )
			->set_title( __( 'Activate', 'sv100_companion' ) )
			->set_description( __( 'Activate Smooth Scrolling.', 'sv100_companion' ) )
			->load_type( 'checkbox' );

		return $this;
	}
}