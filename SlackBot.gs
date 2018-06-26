var SlackBot = new Object();

SlackBot.main = function() {
  var token = PropertiesService.getScriptProperties().getProperty("SLACK_ACCESS_TOKEN_SHIKOKU");
  
  var channel_id = "***";
  var bot_name = "***";
  var app = SlackApp.create(token);
  //var name = e.parameter.user_name;
  //var text = e.parameter.text;
  
  var message = "";
  
  //Togglから今日の勉強時間を取得
  Toggl.init();
  message += Toggl.todaytask();
  
  //投稿する
  return app.postMessage(channel_id, message, {
    username: bot_name
    });
}

