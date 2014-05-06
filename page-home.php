<?php
/*
Template Name: Page - Home
*/
get_header(); ?>
    <div class="content"><?php the_post() ?>
        <div id="info-box" class="info-box draggable">
            <p><span class="date"><?php the_field('infobox_date'); ?></span></p>
            <?php the_field('infobox_text'); ?>
            <div class="email-form-container">
                <input id="email-form" type="email" value="" type="text" placeholder="Your email here">
                <p id="email-button" class="button1">Submit</p>
            </div>
        </div>
    </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>