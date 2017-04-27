<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */
use Timber\Timber;

$context = Timber::get_context();
Timber::render(array('pages/404.twig'), $context);
