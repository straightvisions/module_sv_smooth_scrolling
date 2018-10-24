<?php
	namespace sv_100;
	
	/**
	 * @author			Matthias Reuter
	 * @package			sv_100
	 * @copyright		2017 Matthias Reuter
	 * @link			https://straightvisions.com
	 * @since			1.0
	 * @license			See license.txt or https://straightvisions.com
	 */
	class sv_smooth_scrolling extends init{
		static $scripts_loaded						= false;

		public function __construct($path,$url){
			$this->path								= $path;
			$this->url								= $url;
			$this->name								= get_class($this);
			
			$this->module_enqueue_scripts(false);
		}
	}
?>