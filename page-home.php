<?php
/*
Template Name: Page - Home
*/
?>
<?php // Temporarily redirect everything to the splash page
// header('Location:' . get_permalink(33));
// exit(); 
?>
<?php get_header() ?>
<?php // Select a random background image
$rows = get_field('background_image');
$row_count = count($rows);
$i = rand(0, $row_count - 1);
?>
		<div class="content"><?php the_post() ?>
			<div id="info-box" class="info-box draggable">
				<a href="#">March 25, 2014</a>
				<p>Hi! We will be participating in the ICFF in May 2014. El incius modi ipis culliquam, nim volluptat. Piciatur, cuptae pres aut rerum laborep editet alibusa nimaximus, officitate vel illiam fuga. Itaturit etureic iisque denihillore, aut ea dolorio omnim nonsed maiore magnis ped maximporera dipitatis dus, occum sam dentur?</p>
				<p>Sign up for our email updates:</p>
				<p>(Your email here)</p>
			</div>
		</div><!-- .content -->
        <div class="background"></div>
<?php get_footer() ?>
</body>
</html>