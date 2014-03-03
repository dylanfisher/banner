<?php
/*
Template Name: Page - Home
*/

get_header();

// Select a random background image
$rows = get_field('background_images');
$row_count = count($rows);
$i = rand(0, $row_count - 1);
?>
        <div class="content"><?php the_post() ?>
            <div id="info-box" class="info-box draggable">
                <p><span class="date">Spring 2014</span></p>
                <p>Hi! We will be participating in the ICFF in May 2014. El incius modi ipis culliquam, nim volluptat. Piciatur, cuptae pres aut rerum laborep editet alibusa nimaximus, officitate vel illiam fuga. Itaturit etureic iisque denihillore, aut ea dolorio omnim nonsed maiore magnis ped maximporera dipitatis dus, occum sam dentur?</p>
                <p>Sign up here to be the first to hear about the new collection:</p>
                <input type="text" name="comment" placeholder="Your email here">
            </div>
        </div><!-- .content -->
        <div class="home-background" style="background-image: url(<?php echo $rows[ $i ]['background_image']; ?>)"></div>
<?php get_footer() ?>
</body>
</html>