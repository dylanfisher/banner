<!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php wp_title( '-', true, 'right' ); echo esc_html( get_bloginfo('name'), 1 ) ?></title>
    <meta name="keywords" content="banner furniture, greenpoint, brooklyn, new york, wood, metal, glass, contemporary, classic, quality">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/png" href="<?php echo get_bloginfo('template_url'); ?>/images/banner-favicon.png">
    <link rel="stylesheet" type="text/css" href="<?php echo bloginfo('stylesheet_url'); ?>" />
    <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_url'); ?>/css/build/minified/application.css" />
    <script src="<?php echo get_bloginfo('template_url'); ?>/js/modernizr-2.6.2.min.js"></script>
    <?php wp_head(); // For plugins ?>
</head>
<?php
// Select a random background image for home page
$rows = get_field('background_images');
$row_count = count($rows);
$i = rand(0, $row_count - 1);
?>
<body class="<?php sandbox_body_class() ?>">
<!--[if lte IE 8]><p class="chromeframe">*You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p><![endif]-->
<div class="page-wrap">
    <header>
        <h1 id="site-title" class="visuallyhidden"><span><a href="<?php bloginfo('url') ?>/" title="<?php echo esc_html( bloginfo('name'), 1 ) ?>" rel="home"><?php bloginfo('name') ?></a></span></h1>
        <a class="banner-logo mobile" href="<?php bloginfo('url') ?>/">Banner</a>
        <img id="mobile-menu" class="mobile-menu" src="<?php echo get_bloginfo('template_url'); ?>/images/retina/hamburger.png">
        <nav>
            <?php wp_nav_menu( array( 'sort_column' => 'menu_order', 'container_class' => 'menu-header' ) ); ?>
            <?php if (function_exists('sandbox_custom_breadcrumbs')) {sandbox_custom_breadcrumbs();} ?>
        </nav>
        <div class="mobile-breadcrumb mobile">
            <?php if (function_exists('sandbox_custom_breadcrumbs')) {sandbox_custom_breadcrumbs();} ?>
        </div>
    </header>
    <div id="wrapper" class="wrapper">
    <?php if($rows): ?>
        <div class="home-background" style="background-image: url(<?php echo $rows[ $i ]['background_image']; ?>)" data-bg="<?php echo $rows[ $i ]['background_image']; ?>"></div>
    <?php endif; ?>
