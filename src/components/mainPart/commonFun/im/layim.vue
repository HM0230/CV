<template>
    <div>
        <script id="histroyMesgTpl" type="text/html" v-pre>
            <h3>{{ d.title }}</h3>
            <ul style="padding:0 15px;" id="msgUl">
            {{#  layui.each(d.list, function(index, item){ }}
                <li>
                    <p style="color:green">{{ item.username }}&nbsp;:</p>
                    <p>{{ item.msg }}</p>
                </li>
            {{#  }); }}
            {{#  if(d.list.length === 0){ }}
                
            {{#  } }} 
            </ul>
        </script>
        <script id="newfriendTpl" type="text/html" v-pre>
            <ul style="padding:20px 15px 0 15px;" id="msgUl">
                <input id="userID" type="text" placeholder="请输入用户ID" size="10" style="width:77%;height:20px;"><span style="margin-left:10px;" id="searchFor">搜索</span>
                {{#  layui.each(d.list, function(index, item){ }}
                    <li style="display: flex;flex-direction:row ;justify-content: space-around;">
                        <div style="width:30px;height:30px">
                            <img style="width:100%;height:100%" src="{{item.headurl}}" alt="">
                        </div>
                        <div style="display: flex;flex-direction:column;margin-left:15px;justify-content: space-around;line-height: 15px;flex: 1;">
                            <p>{{ item.username }}</p>
                            <p>id</p>
                        </div>
                        <div>
                            <button style='background:green;height: 100%;width: 50px;border:none' id="addNewOne">添加</button>
                        </div>
                    </li>
                {{#  }); }}
                {{#  if(d.list.length === 0){ }}
                    <li id='searchResult' style="text-align: center;"></li>
                {{#  } }} 
            </ul>
        </script>
        <script id="groupInfoTpl" type="text/html" v-pre>
            <ul style="padding:20px 18px 0 18px;" id="msgUl">
                {{#  layui.each(d.list, function(index, item){ }}
                    <li style="display: flex;flex-direction:column;float:left;text-align: center;width:16%;height:16%;padding:6px">
                        <div style="width:100%;display: flex;flex-direction:row;justify-content: space-around;">
                            <img src="{{item.u_headPic}}" alt="" style="width:50px;height:50px;text-align: center;">
                        </div>
                        <p style="font-size:16px;">{{item.u_name}}</p>
                        <p style="font-size:12px;">ID:{{item.u_id}}</p>
                    </li>
                {{#  }); }}
                {{#  if(d.list.length === 0){ }}
                    
                {{#  } }} 
            </ul>
        </script>
        <script id="addMeTpl" type="text/html" v-pre>
            <ul style="padding:20px 18px 0 18px;" id="msgUl">
                {{#  layui.each(d.list, function(index, item){ }}
                    <li style="display: flex;flex-direction:row ;justify-content: space-around;margin-bottom:10px">
                        <div style="width:50px;height:50px">
                            <img style="width:100%;height:100%" src="{{item.u_headPic}}" alt="">
                        </div>
                        <div style="display: flex;flex-direction:column;margin-left:15px;justify-content: space-around;line-height: 15px;flex: 1;">
                            <p>{{ item.u_name }}</p>
                            <p>{{item.id}}</p>
                        </div>
                        <div>
                            <button style='background:green;height: 30px;width: 50px;border:none' id="addNewOne" >同意</button>
                        </div>
                    </li>
                {{#  }); }}
                {{#  if(d.list.length === 0){ }}
                    
                {{#  } }} 
            </ul>
        </script>
    </div>
</template>

<script>
   import layimuserinfo from '../../../../../static/mockData/layimUserInfo.js'
	export default{
       data(){
           return {
               alldata:null,
                histroyMesg:{ //数据
                    "title":"更多聊天记录",
                    "list":[{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"},{"username":"佳佳","msg":"哈哈哈哈"},{"username":"yiyi","msg":"呜啦啦啦"}]
                },
                newfriend:{ //数据
                    "title":"新的朋友",
                    "list":[]
                },
                groupMembers:{ //数据
                    "title":"群好友",
                    "list":[{"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100111"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100112"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100113"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100114"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100115"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100116"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100117"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100118"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100119"},
                    ]
                },
                addMe:{ //数据
                    "title":"好友请求",
                    "list":[{"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100111"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100112"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100113"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100114"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100115"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100116"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100117"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100118"},
                        {"u_name":"琪琪","u_headPic":"http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg","u_id":"100119"},
                    ]
                },
                allfriends:[]
           }
        },
		methods:{     
            myListener(){
                var _this=this;
                $("#layOut").on('click',function(){
                    _this.layer.closeAll();
                    _this.$router.push({name:"imNav"});
                })
            }
		},
		mounted(){
			var _this=this;
            //plus.key.addEventListener("backbutton",function(){
            //    _this.layer.closeAll();
            //    _this.$router.push({name:"imNav"});
            //});
			layui.use('mobile', function(){
                var mobile = layui.mobile,
                layim = mobile.layim,
                layer = mobile.layer;
                _this.layer=layer;
                var socket=new WebSocket('ws://192.168.2.46:2048/');
                //$.ajax({
					//type:"get",
					//url:localStorage.urls+"/appDevice/getDevice.action;jsessionid="+localStorage.jsessionid,
					//url:localStorage.urls+"/app/pxAppim/getUserInfo.action;jsessionid="+localStorage.jsessionid,
					//dataType:"jsonp",
					//jsonp:'callback',
					//success: function({data}) {
                //_this.$http.get('/static/data/layimUserInfo.json')
                //.then(({data:{data}})=>{
                //    console.log(data)
                //        _this.alldata=data
                //        console.log(_this.alldata);
                 //       layim.config({
                            //init: {
                            //    'mine':_this.alldata.mine,
                            //    'friend':_this.alldata.friend,
                            //    'group':_this.alldata.group,
                            //},
                            //上传图片接口
                            //uploadImage: {
                            //url: '/upload/image' ,//（返回的数据格式见下文）
                            //type: '' //默认post
                            //},
                            
                            //上传文件接口
                            //uploadFile: {
                            //url: '/upload/file', //（返回的数据格式见下文）
                            //type: '' //默认post
                            //},
                            //sendphonetics:{

                            //},
                            //brief: true,

                            //扩展聊天面板工具栏
                            // tool: [{
                            // alias: 'code',
                            // title: '代码',
                            // iconUnicode: '&#xe64e;',
                            // }],
                            
                            //扩展更多列表
                            //moreList: [{
                            //alias: 'find',
                            //title: '发现',
                            //iconUnicode: '&#xe628;', //图标字体的unicode，可不填
                            //iconClass: '', //图标字体的class类名
                            //},
                            /*{
                            alias: 'share',
                            title: '分享与邀请',
                            : '&#xe641;', //图标字体的unicode，可不填
                            iconClass: '', //图标字体的class类名
                            }*/
                            //],
                            
                            //,tabIndex: 1 //用户设定初始打开的Tab项下标
                            //,isNewFriend: false //是否开启“新的朋友”
                            //isgroup: true ,//是否开启“群聊”
                            //,chatTitleColor: '#c00' //顶部Bar颜色//onclick="console.log(1111);this.layer.closeAll()"
                            //title: '<span id="layOut" style="position:absolute;left:10px;top:0;padding-left:10px"><i class="layui-icon layim-chat-back" style="position:absolute;left:-10px;top:0;"></i>普信环保</span>' //应用名，默认：我的IM
                //        });
                //        _this.myListener();
                //}).then((err)=>{
                 //   console.log(err);
                //})
                
                var alldata=layimuserinfo.data;
                 _this.alldata=alldata
                console.log(_this.alldata);
                layim.config({
                    init: {
                        'mine':_this.alldata.mine,
                        'friend':_this.alldata.friend,
                        'group':_this.alldata.group,
                    },
                    //上传图片接口
                    uploadImage: {
                    url: '/upload/image' ,//（返回的数据格式见下文）
                    type: '' //默认post
                    },
                    
                    //上传文件接口
                    uploadFile: {
                    url: '/upload/file', //（返回的数据格式见下文）
                    type: '' //默认post
                    },
                    sendphonetics:{

                    },
                    //brief: true,

                    //扩展聊天面板工具栏
                    // tool: [{
                    // alias: 'code',
                    // title: '代码',
                    // iconUnicode: '&#xe64e;',
                    // }],
                    
                    //扩展更多列表
                    moreList: [{
                    alias: 'find',
                    title: '发现',
                    iconUnicode: '&#xe628;', //图标字体的unicode，可不填
                    iconClass: '', //图标字体的class类名
                    },
                    /*{
                    alias: 'share',
                    title: '分享与邀请',
                    : '&#xe641;', //图标字体的unicode，可不填
                    iconClass: '', //图标字体的class类名
                    }*/
                    ],
                    
                    //,tabIndex: 1 //用户设定初始打开的Tab项下标
                    //,isNewFriend: false //是否开启“新的朋友”
                    isgroup: true ,//是否开启“群聊”
                    //,chatTitleColor: '#c00' //顶部Bar颜色//onclick="console.log(1111);this.layer.closeAll()"
                    title: '<span id="layOut" style="position:absolute;left:10px;top:0;padding-left:10px"><i class="layui-icon layim-chat-back" style="position:absolute;left:-10px;top:0;"></i>普信环保</span>' //应用名，默认：我的IM
                });
                _this.myListener();
                
                //创建一个会话
                /*
                layim.chat({
                    id: 111111
                    ,name: '许闲心'
                    ,type: 'kefu' //friend、group等字符，如果是group，则创建的是群聊
                    ,avatar: 'http://tp1.sinaimg.cn/1571889140/180/40030060651/1'
                });
                */
                
                //监听点击“新的朋友”
                layim.on('newFriend', function(){
                    layim.panel({
                        title: '添加朋友', //标题
                        tpl:'<div id="view"></div>',
                        data: { //数据
                            // test: JSON.stringify(string),
                            // test:string
                        }
                    });
                    layui.use('laytpl', function loadSearch(){
                        var laytpl = layui.laytpl;
                        var getTpl = newfriendTpl.innerHTML
                        laytpl(getTpl).render(_this.newfriend, function(html){
                            $("#view").html(html);
                            //搜用户id接口
                            $('#searchFor').on('click',()=>{
                                var msg=$("#userID").val();
                                console.log(msg);
                                if((/^\d{4}$/.test(msg))){
                                    _this.newfriend.list=[{'username':"kkk",'headurl':'http://tva2.sinaimg.cn/crop.0.0.180.180.180/5db11ff4jw1e8qgp5bmzyj2050050aa8.jpg'}];
                                    loadSearch();
                                    $("#userID").css('display','none'); 
                                    $('#searchFor').css('display','none'); 
                                }else{
                                    $("#searchResult").html("无该用户信息"); 
                                }
                            });
                            //添加请求接口
                            $("#addNewOne").on('click',function(){
                                layer.msg('请求已发送');
                                $("#addNewOne").attr("disabled","disabled");
                            })
                        });
                    })
                    // location.href = '/src/views/im/newfriend.html'
                    // _this.$router.push({name:"newfriend"});
                    
                });
                //查看群聊记录
                layim.on('detail', function(data){
                    console.log(data); //获取当前会话对象
                    layim.panel({
                        title:'详细信息',//标题
                        tpl: '<div id="groupInfo"></div>', //模版
                        data: { //数据
                            test: '群聊',
                        }
                    });
                    layui.use('laytpl', function(){
                        var laytpl = layui.laytpl;
                        var getTpl = groupInfoTpl.innerHTML
                        laytpl(getTpl).render(_this.groupMembers, function(html){
                            $("#groupInfo").html(html);
                        });
                    })
                });
                
                //监听点击更多列表
                layim.on('moreList', function(obj){
                    switch(obj.alias){
                    case 'share':
                        layer.msg('自定义发现动作');
                        
                        //模拟标记“发现新动态”为已读
                        layim.showNew('More', false);
                        layim.showNew('find', false);
                    break;
                    case 'find':
                        layim.panel({
                            title: '好友请求' ,//标题
                            tpl: '<div id="SomeoneAddMe"></div>', //模版
                            data: { //数据
                                test: '更多列表'
                            }
                        });
                        layui.use('laytpl', function(){
                            var laytpl = layui.laytpl;
                            var getTpl = addMeTpl.innerHTML
                            laytpl(getTpl).render(_this.addMe, function(html){
                                $("#SomeoneAddMe").html(html);
                            /* console.log($('#histroyMesg').height());
                                $('#histroyMesg').scrollTop( $('#histroyMesg').height() );*/
                            });
                        })
                    break;
                    }
                });
                //监听返回
                layim.on('back', function(){
                    _this.newfriend.list=[];
                });
                //监听自定义工具栏点击，以添加代码为例
                layim.on('tool(code)', function(insert, send){
                    insert('[pre class=layui-code]123[/pre]'); //将内容插入到编辑器
                    send();
                });
                //监听发送消息
                layim.on('sendMessage', function(data){
                    var mine=data.mine;
                    var To = data.to;
                    console.log(mine);
                    console.log(To);
                    /*socket.onopen = function(){
                        //socket.send('XXX连接成功'); 
                        console.log('连接成功');
                    };
                    socket.send({
                        type:'chatMessage' //随便定义，用于在服务端区分消息类型
                        ,data:data
                    }); */
                    var sendMsg=function(msg,receiver,group){ 
                        var message = new proto.Model(); 
                        var content = new proto.MessageBody();
                        message.setMsgtype(4);
                        message.setCmd(5);
                        message.setGroupid(group);//系统用户组
                        message.setToken(currentsession);  
                        message.setSender(mine.id);
                        message.setReceiver(To.id);//好友ID
                        content.setContent(data);
                        content.setType(0)
                        message.setContent(content.serializeBinary())
                        socket.send(message.serializeBinary()); 
                    }
                    /*socket.send({
                        type:'chatMessage' //随便定义，用于在服务端区分消息类型
                        ,data: res
                    }); */
                    //console.log(data);
                    //演示自动回复
                    //    setTimeout(function(){
                    //      var obj = {};
                    //      if(To.type === 'group'){
                    //        obj = {
                    //          username: '模拟群员'+(Math.random()*100|0)
                    //          ,avatar: layui.cache.dir + 'images/face/'+ (Math.random()*72|0) + '.gif'
                    //          ,id: To.id
                    //          ,type: 'group'
                    //          ,content: autoReplay[Math.random()*9|0]
                    //        }
                    //      } else {
                    //        obj = {
                    //          username: To.name
                    //          ,avatar: To.avatar
                    //          ,id: To.id
                    //          ,type: To.type
                    //          ,content: autoReplay[Math.random()*9|0]
                    //        }
                    //      }
                    //      layim.getMessage(obj);
                    //    }, 3000);
                });
                //模拟收到一条好友消息
                // setTimeout(function(){
                //     layim.getMessage({
                //     username: "贤心",
                //     avatar: "http://tp1.sinaimg.cn/1571889140/180/40030060651/1",
                //     id: "100001",
                //     type: "friend",
                //     cid: Math.random()*100000|0 ,//模拟消息id，会赋值在li的data-cid上，以便完成一些消息的操作（如撤回），可不填
                //     content: "嗨，欢迎体验LayIM。演示标记："+ new Date().getTime(),
                //     });
                // }, 3000);
                //监听查看更多记录
                layim.on('chatlog', function(msg, ul){
                    console.log(msg);
                    console.log(ul);
                    layim.panel({
                        title: '与 '+ msg.name +' 的聊天记录', //标题
                        tpl: '<div id="histroyMesg"></div>' ,//模版
                        data: {
                            text:ul[0].outerHTML,
                        }
                    });
                    layui.use('laytpl', function(){
                        var laytpl = layui.laytpl;
                        var getTpl = histroyMesgTpl.innerHTML
                        laytpl(getTpl).render(_this.histroyMesg, function(html){
                            $("#histroyMesg").html(html);
                        /* console.log($('#histroyMesg').height());
                            $('#histroyMesg').scrollTop( $('#histroyMesg').height() );*/
                        });
                    })
                });
                layim.on('members', function(data){
                    console.log(data);
                });
                //模拟"更多"有新动态
                // layim.showNew('More', true);
                // layim.showNew('find', true);
            });
		}
	}
</script>
<style lang="less" scoped>
    
</style>
