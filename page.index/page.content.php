<?php
	class systemPAGE {
		public function __construct() {
			global $systemHandler;
			$mTemplateHandler = $systemHandler->getHandler("tpl");
			
			// Page Styles
			$mPageStylesCollection = "<link rel=\"stylesheet\" href=\"easy.tpl/easy/page.index/page.style.css\"  />";
			$mPageStylesCollection .= "<link rel=\"stylesheet\" href=\"easy.tpl/easy/page.dist/bootstrap.min.css\"  />";
			$mTemplateHandler->setFilter("page:styles", $mPageStylesCollection);
			
			// Page Scripts
			$mPageScriptsCollection = "<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script>";
			$mPageScriptsCollection .= "<script type=\"text/javascript\" src=\"https://code.jquery.com/ui/1.11.4/jquery-ui.min.js\"></script>";
			$mPageScriptsCollection .= "<script type=\"text/javascript\" src=\"easy.tpl/easy/page.index/page.script.js\"></script>";
			$mPageScriptsCollection .= "<script type=\"text/javascript\" src=\"easy.tpl/easy/page.dist/bootstrap.min.js\"></script>";
			$mTemplateHandler->setFilter("page:scripts", $mPageScriptsCollection);
			
			$mTemplateHandler->setFilter("play.event.demo", htmlspecialchars('<a data-event="play-video-at" data-time="50" data-video="1" href="#">0:50</a>'));
		}
	}
?>