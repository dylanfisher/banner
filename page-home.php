<?php
/*
Template Name: Page - Home
*/
get_header(); ?>
    <div class="content"><?php the_post() ?>
        <div id="info-box" class="info-box draggable">
            <p><span class="date">Spring 2014</span></p>
            <p>Website coming soon!</p>
            <p>Visit us at ICFF Booth #2524 at New York's Javits Center, May 17-20, 2014 </p>
            <p>Sign up here to be the first to hear about the new collection:</p>
            <div class="email-form-container">
                <input id="email-form" type="email" value="" type="text" placeholder="Your email here">
                <p id="email-button" class="email-button">Submit</p>
            </div>
        </div>
    </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>