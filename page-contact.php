<?php
/*
Template Name: Page - Contact
*/
?>
<?php get_header() ?>
<div class="content">
    <div class="ibfix">
<?php the_post() ?>
        <div class="col col2 col-first ib">
<?php 
if( have_rows('images') ):
    while ( have_rows('images') ) : the_row();
        $attachment_id = get_sub_field('image');
        $size = "full"; // (thumbnail, medium, large, full or custom size)
        echo wp_get_attachment_image( $attachment_id, $size );
    endwhile;
endif;
?>
        </div>
        <div class="col col2 col-last ib">
<?php the_field('content'); ?>
            <ul class="social-media">
                <li><a href="http://instagram.com/wishbonewoodworking" target="_blank"><img src="<?php echo get_bloginfo('template_url'); ?>/images/instagram.png"></a>
                    <a href="http://instagram.com/wishbonewoodworking" target="_blank">Instagram</a>
                </li>
                <li><a href="https://www.facebook.com/wishbonewoodworking" target="_blank"><img src="<?php echo get_bloginfo('template_url'); ?>/images/facebook.png"></a>
                    <a href="https://www.facebook.com/wishbonewoodworking" target="_blank">Facebook</a>
                </li>
                <li><a href="https://twitter.com/WishboneWood" target="_blank"><img src="<?php echo get_bloginfo('template_url'); ?>/images/twitter.png"></a>
                    <a href="https://twitter.com/WishboneWood" target="_blank">Twitter</a>
                </li>
            </ul>
            <p>If you’d like our monthly updates, please sign up:</p>
            <input placeholder="Your email here"></input>
        </div>
    </div>
</div><!-- .content -->
<?php get_footer() ?>
</body>
</html>