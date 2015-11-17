<?php
	class systemPAGE {
		public function __construct() {
			global $systemHandler;
			$mTemplateHandler = $systemHandler->getHandler("tpl");
			
			// Page Styles
			$mPageStylesCollection = "<link rel=\"stylesheet\" href=\"easy.tpl/easy/page.profile/page.style.css\"  />";
			$mPageStylesCollection .= "<link rel=\"stylesheet\" href=\"easy.tpl/easy/page.dist/bootstrap.min.css\"  />";
			$mPageStylesCollection .= "<link rel=\"stylesheet\" href=\"easy.tpl/easy/page.index/page.style.css\"  />";
			$mTemplateHandler->setFilter("page:styles", $mPageStylesCollection);
			
			// Page Scripts
			$mPageScriptsCollection = "<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script>";
			$mPageScriptsCollection .= "<script type=\"text/javascript\" src=\"easy.tpl/easy/page.profile/page.script.js\"></script>";
			$mPageScriptsCollection .= "<script type=\"text/javascript\" src=\"https://code.jquery.com/ui/1.11.4/jquery-ui.min.js\"></script>";
			$mPageScriptsCollection .= "<script type=\"text/javascript\" src=\"easy.tpl/easy/page.dist/bootstrap.min.js\"></script>";
			$mPageScriptsCollection .= "<script type=\"text/javascript\" src=\"easy.tpl/easy/page.index/page.script.js\"></script>";
			$mTemplateHandler->setFilter("page:scripts", $mPageScriptsCollection);
		}
	}
?>