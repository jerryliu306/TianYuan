<?php

$c=isset($_REQUEST['c'])?trim($_REQUEST['c']):'index';
$c_arr=array('index'=>1,'dele'=>1,'save'=>1);
if(!isset($c_arr[$c])){
	$c='index';
}

switch($c) {
	case 'index':
		$list=$db->getAll('select * from `web_links` where userid='.$_userid.' order by pos asc,addtime desc');
		include T('seller_admin','friend');
		break;
	case 'dele':
		$id=intval($_REQUEST['id']);
		$db->query('delete from `web_links` where id='.$id);
		exit('ok');
		break;
	case 'save':
		$id=$_REQUEST['id']?intval($_REQUEST['id']):0;
		$title=trim($_POST['title']);
		$linkurl=trim($_POST['linkurl']);
		$pos=intval($_POST['pos']);
		$visible=intval($_POST['visible']);
		$addtime=time();
		if($id>0){
			$db->query("update `web_links` set title='$title',linkurl='$linkurl',pos='$pos',visible='$visible' where id='$id'");
		}else{
			$db->query("insert into `web_links` (userid,title,linkurl,pos,visible,addtime) values ('$_userid','$title','$linkurl','$pos','$visible','$addtime')");
		}
		exit('ok');
		break;
}