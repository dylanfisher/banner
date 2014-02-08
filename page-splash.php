<?php
/*
Template Name: Page - Splash
*/
?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php wp_title( '-', true, 'right' ); echo esc_html( get_bloginfo('name'), 1 ) ?></title>
        <meta name="description" content="<?php echo get_bloginfo('description') ?>">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="icon" type="image/png" href="<?php echo get_bloginfo('template_url'); ?>/images/favicon.png">
        <link rel="stylesheet" type="text/css" href="<?php echo bloginfo('stylesheet_url'); ?>" />
        <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_url'); ?>/css/build/minified/application.css" />
        <script src="<?php echo get_bloginfo('template_url'); ?>/js/modernizr-2.6.2.min.js"></script>
<?php wp_head() // For plugins ?>
<?php // Select a random background image
$rows = get_field('background_image');
$row_count = count($rows);
$i = rand(0, $row_count - 1);
 ?>
    </head>
    <body class="<?php sandbox_body_class() ?>" style="background-image: url(<?php echo $rows[ $i ]['image']; ?>)">
        <!--[if lte IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        <header>
            <nav>
                <h1 id="site-title"><a href="<?php echo get_permalink(33) ?>" title="<?php echo esc_html( bloginfo('name'), 1 ) ?>" rel="home"><?php bloginfo('name') ?></a></h1>
            </nav>
        </header>
        <div id="wrapper" class="wrapper">
            <div class="content">
                <div id="info-box" class="info-box draggable">
<?php the_content() ?>
                    <input type="text" name="comment" placeholder="Your email here">
                </div>
            </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>