<?php include T('super_admin','header');?>
<div class="am-cf admin-main">
	<?php include T('super_admin','left');?>
	<div class="admin-content">
		<div class="admin-content-body">
      <div class="am-cf am-padding am-padding-bottom-0">
        <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">商家保证金充值列表</strong> / <small>Bond Apply</small></div>
      </div>
      <hr>
      <div class="am-g">
        <div class="am-u-sm-12">
          <form class="am-form">
            <table class="am-table am-table-striped am-table-hover table-main">
              <thead>
              <tr>
                <th class="table-id">ID</th>
				<th class="table-title">商户</th>
				<th class="table-title">金额</th>
				<th class="table-date am-hide-sm-only">日期</th>
				<th class="table-date">状态</th>
              </tr>
              </thead>
              <tbody>
<?php $n=1;
foreach($list as $k=>$v) {
$sjname=$db->findOne('select username from `ucenter` where userid='.$v['userid']);
?>
              <tr>
                <td><?=$n?></td>
                <td><a href="#"><?=$sjname?></a></td>
				<td><?=$v['fee']?></td>
                <td class="am-hide-sm-only"><?=date('Y年m月d日 H:i:s',$v['addtime'])?></td>
				<td><a href="#"><?=$v['status']==2?'已支付':'未支付';?></a></td>
              </tr>
			 <?php $n++;}?>
            </tbody>
            </table>
            <div class="am-cf">
				<div class="am-fl">
					<?=$pagestr?>
				</div>
            </div>
            <hr>
            <p>注：.....</p>
          </form>
		</div>
	</div>
</div>
<script type="text/javascript">
function check(id){
	$.ajax({
		type:'post',
		url:'/?m=admin&a=notice&c=check',
		data:{'id':id},
		success:function(r){
			if(r=='ok'){
				alert('审核成功');
			}else{
				alert(r);
			}
			setTimeout(function(){window.location.reload(true);},1200);
		}
	});
}
function dele(id){
	if(confirm("确定要删除吗")){
		$.ajax({
			type:'post',
			url:'/?m=admin&a=notice&c=dele',
			data:{'id':id},
			success:function(r){
				if(r=='ok'){
					alert('删除成功');
				}else{
					alert(r);
				}
				setTimeout(function(){window.location.reload(true);},1200);
			}
		});
	}
}
</script>

<?php include T('super_admin','footer');?>