var Toggl = new Object();

Toggl.init = function() {
  var token =  PropertiesService.getScriptProperties().getProperty('TOGGL_TOKEN');
  var url = "https://www.toggl.com/api/v8/workspaces";
  
  var headers = {
    "Content-Type": "application/json",
    "Authorization" : " Basic " + Utilities.base64Encode(token + ":" + "api_token")
  };
  
  var options = {
    "method" : "get",
    "headers" : headers
  };
  
  var res = UrlFetchApp.fetch(url, options);
  res = JSON.parse(res);
  
  var ID = res[0]["id"];  //デフォルトのプロジェクト
  
  this.token = token;
  this.ID = ID;
  this.headers = headers;
}

Toggl.todaytask = function() {
  var message = "";
  var url = "https://www.toggl.com/api/v8/time_entries";
  
  var date = new Date();
  var today = Date_hundle.format(date);
  var start_date = Date_hundle.format2(date);
  
  url = url + "?start_date=" + start_date;
  Logger.log(url);
  
  
  var params = {
    'user_agent' : PropertiesService.getScriptProperties().getProperty('MAIL'),
    'workspace_id' : this.ID
  }
  
  var options = {
    "method" : "get",
    "params" : params,
    "headers" : this.headers
  }
  
  var res = UrlFetchApp.fetch(url, options);
  res = JSON.parse(res);
  var len = res.length;
  
  var sum = 0.0;
  message += today + "の勉強時間は以下の通りです。\n";
  if (len >= 1) {
    for (var i = 0; i < len; i++ ) {
      var name = res[i]["description"];
      var dur = res[i]["duration"];
      sum += dur;
      var hms = Date_hundle.toHms(dur);
      message += name + ":" + hms + "\n";
    }
    hms = Date_hundle.toHms(sum);
    message += "==================\n";
    message += "延べ" + hms + "です。\n";
  } else {
    message += "本日は勉強していません。\n";
  }
  
  return message;
}

function test() {
  Toggl.init();
  Toggl.todaytask();
}
