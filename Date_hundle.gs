var Date_hundle = new Object();

Date_hundle.format = function(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var w = date.getDay();
  var wNames = ['日', '月', '火', '水', '木', '金', '土'];
    
  if (m < 10) {
    m = '0' + m;
  }
  if (d < 10) {
    d = '0' + d;
  }
  
  // フォーマット整形済みの文字列を戻り値にする
  return y + '/' + m + '/' + d;
}

Date_hundle.toHms = function(t) {
	var hms = "";
	var h = t / 3600 | 0;
	var m = t % 3600 / 60 | 0;
	var s = t % 60;

	if (h != 0) {
		hms = h + "時間" + padZero(m) + "分" + padZero(s) + "秒";
	} else if (m != 0) {
		hms = m + "分" + padZero(s) + "秒";
	} else {
		hms = s + "秒";
	}

	return hms;

	function padZero(v) {
		if (v < 10) {
			return "0" + v;
		} else {
			return v;
		}
	}
}
