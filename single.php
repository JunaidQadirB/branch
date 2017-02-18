<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */
use Timber\Timber;
use Timber\Helper;

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['wp_title'] .= ' - ' . $post->title();
$context['comment_form'] = Helper::get_comment_form();

if (post_password_required($post->ID)){
	Timber::render('pages/single-password.twig', $context);
} else {
	Timber::render(array('pages/single-' . $post->ID . '.twig', 'pages/single-' . $post->post_type . '.twig', 'pages/single.twig'), $context);
}


