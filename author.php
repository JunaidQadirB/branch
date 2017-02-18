<?php
/**
 * The template for displaying Author Archive pages
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */
global $wp_query;
use Timber\Timber;
use Timber\User;

$data = Timber::get_context();
$data['posts'] = Timber::get_posts();
if (isset($wp_query->query_vars['author'])){
	$author = new User($wp_query->query_vars['author']);
	$data['author'] = $author;
	$data['title'] = 'Author Archives: ' . $author->name();
}
Timber::render(array('pages/author.twig', 'pages/archive.twig'), $data);
