<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>insert</title>
	<style>
		#my-txt {
			width: 600px;
			min-height: 400px;
			border: 1px solid #ccc;
			border-radius: 3px;
			margin-top: 10px;
		}
		.focus { font-family: bold; color: red; }
		.csv-file {
			border-top: 1px solid #000;
			margin-top: 20px;
		}
	</style>
</head>
<body >
	<div class="read-csv">
		<p>将文件转换成字符串: file => string</p>
		<ul>
			<li class="focus">使用FileReader读取文本内容</li>
		</ul>
		<input type="file" id="my-file" />
		<textarea id="my-txt"></textarea>
	</div>
	<div class="csv-file">
		<p>list string => 生成csv文件</p>
		<a id="J-csv" download="test.csv">下载csv文件</a>
	</div>
</body>
</html>
<script>
	function file2String(file, encode, callback) {
		const reader = new FileReader();
		reader.readAsText(file, encode);
		reader.onload = e => {
			callback(e.target.result);
		}
	}
	document.addEventListener('change', e => {
		const file = e.target.files[0];
		const containerEle = document.getElementById('my-txt');
		file2String(file, 'utf8', (result) => {
			document.getElementById('my-txt').value = result;
			console.log(result);
		});
	}, false);

	function string2File(data) {
		const blob = new Blob(data, {type : 'application/octet-binary'});
		const urlObj = URL.createObjectURL(blob);
		document.getElementById('J-csv').href = urlObj;
	}
	const data = [
		{ address: '北京', num: 1213232 },
		{ address: '上海', num: 12013232 },
		{ address: '深圳', num: 1213232 },
	];
	console.table(data)
	const dd = data.map(item => {
		return `${item.address}, ${item.num} \n`;
	});
	dd.unshift('城市, 数字 \n');
	string2File(dd);
</script>



