<?php

if(!function_exists('public_path')){
  /**
  * Return the path to public dir
  * @param null $path
  * @return string
  */
  function public_path($path = null) {
    return rtrim(app()->basePath('public/'.$path), '/');
  }
}


if(!function_exists('storage_path')){
  /**
  * Return the path to storage dir
  * @param null $path
  * @return string
  */
  function storage_path($path = null){
    return app()->storagePath($path);
  }
}

if ( ! function_exists('asset')){
  /**
   * Generate an asset path for the application.
   *
   * @param  string  $path
   * @param  bool    $secure
   * @return string
   */
  function asset($path, $secure = null) {
    return app('url')->asset($path, $secure);
  }
}

if ( ! function_exists('auth'))
{
	/**
	 * Get the available auth instance.
	 *
	 * @return \Illuminate\Contracts\Auth\Guard
	 */
	function auth() {
		return app('Illuminate\Contracts\Auth\Guard');
	}
}

if ( ! function_exists('bcrypt')) {
	/**
	 * Hash the given value.
	 *
	 * @param  string  $value
	 * @param  array   $options
	 * @return string
	 */
	function bcrypt($value, $options = array()) {
		return app('hash')->make($value, $options);
	}
}